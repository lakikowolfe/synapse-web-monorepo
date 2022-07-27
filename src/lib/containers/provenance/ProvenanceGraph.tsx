/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactFlow, {
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  getConnectedEdges,
} from 'react-flow-renderer'
import {
  getLayoutedElements,
  getNodeId,
  getProvenanceEdge,
  getProvenanceNode,
  NodeType,
  ProvenanceNodeData,
  ProvenanceNodeProps,
} from './ProvenanceUtils'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  Activity,
  Used,
  UsedEntity,
  UsedURL,
  USED_ENTITY_CONCRETE_TYPE_VALUE,
} from '../../utils/synapseTypes/Provenance/Provenance'
import { Reference } from '../../utils/synapseTypes'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseClient } from '../../utils'
import { ExpandGraphNodeLabelProps } from './ExpandGraphNodeLabel'

export type ProvenanceProps = {
  /** The entity (and version) whose provenance should be shown */
  entityId: string
  versionNumber: number
  containerHeight: string
}

/**
 * Renders a Provenance Graph for a given entity.
 */
export const ProvenanceGraph = (props: ProvenanceProps) => {
  const { entityId, versionNumber, containerHeight = '200px' } = props
  const { accessToken } = useSynapseContext()
  const rootNodeEntityRef = useMemo(
    () => ({ targetId: entityId, targetVersionNumber: versionNumber }),
    [entityId, versionNumber],
  )
  const [tempNodes, setTempNodes] = React.useState<Node[]>([])
  const [tempEdges, setTempEdges] = React.useState<Edge[]>([])
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [clickedNode, setClickedNode] = useState<Node>()

  const onClickNode = useCallback((_event: React.MouseEvent, node: Node) => {
    setClickedNode(node)
  }, [])

  /**
   * Given the node properties, will return true if this node is already in the nodesCopy array.
   */
  const isNodeNotFound = (
    nodeProps: ProvenanceNodeProps,
    nodesCopy: Node[],
  ) => {
    const foundNode = nodesCopy.find(node => {
      return node.id === getNodeId(nodeProps)
    })
    return foundNode === undefined
  }
  /**
   * Given the node properties, will return true if this edge is already in the edgesCopy array.
   */
  const isEdgeNotFound = (
    nodeProps1: ProvenanceNodeProps,
    nodeProps2: ProvenanceNodeProps,
    edgesCopy: Edge[],
  ) => {
    const foundEdge = edgesCopy.find(edge => {
      return (
        edge.source === getNodeId(nodeProps1) &&
        edge.target === getNodeId(nodeProps2)
      )
    })
    return foundEdge === undefined
  }

  const addNodeAndEdge = useCallback(
    (params: {
      newNodeProps: ProvenanceNodeProps
      existingNodeProps: ProvenanceNodeProps
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { newNodeProps, existingNodeProps, nodesCopy, edgesCopy } = params
      if (isNodeNotFound(newNodeProps, nodesCopy)) {
        nodesCopy.push(getProvenanceNode(newNodeProps))
      }
      if (isEdgeNotFound(newNodeProps, existingNodeProps, edgesCopy)) {
        edgesCopy.push(getProvenanceEdge(newNodeProps, existingNodeProps))
      }
    },
    [],
  )

  const addActivityNode = useCallback(
    (params: {
      activity: Activity
      entityRef: Reference
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { activity, entityRef, nodesCopy, edgesCopy } = params
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
      }
      addNodeAndEdge({
        newNodeProps: activityNodeProps,
        existingNodeProps: entityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addExpandNode = useCallback(
    (params: {
      entityRef: Reference
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityRef, nodesCopy, edgesCopy } = params
      const expandNodeProps = {
        type: NodeType.EXPAND,
        data: {
          entityReference: entityRef,
        },
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
      }
      addNodeAndEdge({
        newNodeProps: expandNodeProps,
        existingNodeProps: entityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addExternalNode = useCallback(
    (params: {
      usedURL: UsedURL
      activity: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { usedURL, activity, nodesCopy, edgesCopy } = params
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const externalNodeProps = {
        type: NodeType.EXTERNAL,
        data: usedURL,
      }
      addNodeAndEdge({
        newNodeProps: externalNodeProps,
        existingNodeProps: activityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addEntityNode = useCallback(
    (params: {
      entityRef: Reference
      activity: Activity | undefined
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityRef, activity, nodesCopy, edgesCopy } = params
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
      }
      if (isNodeNotFound(entityNodeProps, nodesCopy)) {
        // add the new entity node
        nodesCopy.push(getProvenanceNode(entityNodeProps))
        if (activity) {
          const activityNodeProps = {
            type: NodeType.ACTIVITY,
            data: activity,
          }
          edgesCopy.push(getProvenanceEdge(entityNodeProps, activityNodeProps))
        }
      }
    },
    [],
  )

  /**
   * Called when we have a new entity to add to the graph.  This will result in adding
   * a new Entity Node to the nodesCopy, a link from the usedInActivity to the new Entity Node,
   * AND it will look for an Activity associated with the new entity.  If an Activity is found,
   * it will add an Expand Node for the user to click (to expand to see this Activity!).
   * If this is the root node (starting entity node), then we automatically add the Activity Node
   * and process it.
   */
  const addEntity = useCallback(
    async (params: {
      entityRef: Reference
      usedInActivity?: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityRef, nodesCopy, edgesCopy, usedInActivity } = params
      addEntityNode({
        entityRef,
        activity: usedInActivity,
        nodesCopy,
        edgesCopy,
      })
      //look for Activity
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityRef.targetId,
          entityRef.targetVersionNumber!,
          accessToken,
        )
        // if this is the root node, then add the activity immediately.
        // otherwise, add an expand node and we'll add this later
        if (entityRef == rootNodeEntityRef) {
          addActivityNode({ activity, entityRef, nodesCopy, edgesCopy })
        } else {
          addExpandNode({ entityRef, nodesCopy, edgesCopy })
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      }
    },
    [
      accessToken,
      addActivityNode,
      addEntityNode,
      addExpandNode,
      rootNodeEntityRef,
    ],
  )

  /**
   * This is called when the user clicks on an Expand Node.  It will add the associated Activity
   * and all "used" items (entities and urls) to the graph by adding items to the nodesCopy and edgesCopy arrays.
   */
  const onExpandEntity = useCallback(
    async (params: {
      entityRef: Reference
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityRef, nodesCopy, edgesCopy } = params
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityRef.targetId,
          entityRef.targetVersionNumber!,
          accessToken,
        )
        addActivityNode({ activity, entityRef, nodesCopy, edgesCopy })

        // go through Activity.used array to add these nodes/edges
        const addEntityPromises: Promise<void>[] = []
        if (activity.used) {
          activity.used.forEach((usedItem: Used) => {
            if (usedItem.concreteType == USED_ENTITY_CONCRETE_TYPE_VALUE) {
              const usedEntityItem = usedItem as UsedEntity
              addEntityPromises.push(
                addEntity({
                  entityRef: usedEntityItem.reference,
                  nodesCopy,
                  edgesCopy,
                  usedInActivity: activity,
                }),
              )
            } else {
              // UsedURL
              const usedURL = usedItem as UsedURL
              addExternalNode({ usedURL, activity, nodesCopy, edgesCopy })
            }
          })
          await Promise.all(addEntityPromises)
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      }
    },
    [accessToken, addActivityNode, addEntity, addExternalNode],
  )

  /**
   * This effect code executes when no nodes have been added.
   * It will add the root node, and attempt to expand the root node, when this component is mounted.
   */
  useEffect(() => {
    if (tempNodes.length == 0) {
      const nodesCopy = [...tempNodes]
      const edgesCopy = [...tempEdges]
      const addAndExpandPromises: Promise<void>[] = []
      const addEntityPromise = addEntity({
        entityRef: rootNodeEntityRef,
        nodesCopy,
        edgesCopy,
      })
      const expandEntityPromise = onExpandEntity({
        entityRef: rootNodeEntityRef,
        nodesCopy,
        edgesCopy,
      })

      addAndExpandPromises.push(addEntityPromise)
      addAndExpandPromises.push(expandEntityPromise)
      Promise.all(addAndExpandPromises).then(() => {
        setTempNodes(nodesCopy)
        setTempEdges(edgesCopy)
      })
    }
  }, [addEntity, onExpandEntity, rootNodeEntityRef, tempEdges, tempNodes])

  /**
   * This effect code executes when a node is clicked.
   * We check to see if it is an expand node.  If it is, then we remove the expand node (and associated edge)
   * and ask for the Activity and associated "used" nodes (entities and URLs)
   */
  useEffect(() => {
    const nodeData: ProvenanceNodeData = clickedNode?.data as ProvenanceNodeData
    if (clickedNode && nodeData?.type == NodeType.EXPAND) {
      const expandNodeProps = nodeData.props as ExpandGraphNodeLabelProps
      // remove clicked node
      const nodesWithoutExpandNode = tempNodes.filter(
        node => node.id != clickedNode.id,
      )
      const edgeToRemove = getConnectedEdges([clickedNode], tempEdges)[0]
      const edgesWithoutExpandEdge = tempEdges.filter(
        edge => edge != edgeToRemove,
      )
      onExpandEntity({
        entityRef: expandNodeProps.entityReference,
        nodesCopy: nodesWithoutExpandNode,
        edgesCopy: edgesWithoutExpandEdge,
      }).then(() => {
        setTempNodes(nodesWithoutExpandNode)
        setTempEdges(edgesWithoutExpandEdge)
      })
      setClickedNode(undefined)
    }
  }, [clickedNode, tempNodes, tempEdges, onExpandEntity])

  /**
   * This effect code is run when the graph nodes or edges change.
   * It feeds the nodes and edges into our layout library to figure out where they should be positioned.
   * The result is saved in the state variable "nodes" and "edges".
   */
  useDeepCompareEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      tempNodes,
      tempEdges,
      'TB',
    )
    setNodes(layoutedNodes)
    setEdges(layoutedEdges)
  }, [tempNodes, tempEdges])

  return (
    <div
      className="bootstrap-4-backport ProvenanceWidget"
      style={{ width: '100%', height: containerHeight }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onClickNode}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        attributionPosition="bottom-right"
        onConnect={undefined}
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}
