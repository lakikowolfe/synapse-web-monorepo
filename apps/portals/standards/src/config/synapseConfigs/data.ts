import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { dataSql } from '../resources'

const dataRgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'dataDescriptionLocation',
    isMarkdown: true,
  },
  {
    matchColumnName: 'dataAccessInstructions',
    isMarkdown: true,
  },
  {
    matchColumnName: 'study',
    isMarkdown: false,
    baseURL: 'Explore/Collections/DetailsPage',
    URLColumnName: 'study',
  },
]

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: dataRgbIndex,
  shouldDeepLink: true,
  hideDownload: true,
  sql: dataSql,
  name: 'Standards',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: dataColumnLinks,
  },
  facetsToPlot: [
    'Data_Topic',
    // 'Organizations',
  ],
  initialPlotType: 'BAR',
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex: dataRgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

export default dataQueryWrapperPlotNavProps
