import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import { standards } from './synapseConfigs'

const routeControlWrapperProps: RouteControlWrapperProps = {
  customRoutes: [{ path: 'Standards', synapseConfigArray: [standards] }],
}
export default routeControlWrapperProps
