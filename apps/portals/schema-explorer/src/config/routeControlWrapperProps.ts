import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import { files } from './synapseConfigs'

const routeControlWrapperProps: RouteControlWrapperProps = {
  customRoutes: [{ path: 'Files', synapseConfigArray: [files] }],
}
export default routeControlWrapperProps
