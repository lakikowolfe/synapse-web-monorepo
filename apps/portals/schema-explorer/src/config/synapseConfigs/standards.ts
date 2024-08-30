import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { columnAliases } from './commonProps'
import { filesSql } from '../resources'
import { QueryWrapperPlotNavProps } from 'synapse-react-client'

const rgbIndex = 1
export const visibleColumnCount = 7
export const standardsPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Standards',
  sql: filesSql,
  visibleColumnCount,
  showExportToCavatica: true,
  isRowSelectionVisible: true,
  rowSelectionPrimaryKey: ['id'],
  fileIdColumnName: 'id',
  fileNameColumnName: 'name',
  fileVersionColumnName: 'currentVersion',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  shouldDeepLink: true,
  columnAliases,
}
const standards: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: standardsPlotNavProps,
}

export default standards
