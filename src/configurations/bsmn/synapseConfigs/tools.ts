import { HomeExploreConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { toolsSql } from '../resources'

const unitDescription = 'Tools'
const rgbIndex = 8
const facet = 'Project'

export const toolCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.COMPUTATIONAL,
    title: 'title',
    description: 'toolDescription',
    secondaryLabels: ['toolLink', 'contributor', 'institutions', 'project'],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'toolLink',
    },
  ],
}

const tools: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      unitDescription,
      rgbIndex,
      facet,
      link: 'Explore/Tools',
      linkText: 'Explore Tools',
      sql: toolsSql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      sql: toolsSql,
      shouldDeepLink: true,
      hideDownload: true,
      facetsToPlot: ['contributor', 'institutions'],
      name: 'Tools',
      cardConfiguration: toolCardConfiguration,
      searchConfiguration: {
        searchable: [
          'title',
          'toolDescription',
           'contributor',
          'institutions',
        ],
      },
    },
  },
}

export default tools
