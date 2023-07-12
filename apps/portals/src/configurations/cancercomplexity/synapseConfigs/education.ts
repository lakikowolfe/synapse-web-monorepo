import {
  CardConfiguration,
  GenericCardSchema,
  SynapseConstants,
} from 'synapse-react-client'
import { educationSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

const rgbIndex = 8

export const educationSchema: GenericCardSchema = {
  type: 'Educational Resource',
  title: 'title',
  subTitle: 'topic',
  description: 'description',
  secondaryLabels: [
    'link',
    'activityType',
    'primaryFormat',
    'educationalLevel',
    'originInstitution',
    'language',
  ],
}

export const educationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  genericCardSchema: educationSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'title',
    matchColumnName: 'title',
    baseURL: 'Explore/Education/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'link',
    },
  ],
}

export const education: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: educationSql,
    cardConfiguration: educationCardConfiguration,
    shouldDeepLink: true,
    name: 'Educational Resources',
    facetsToPlot: ['topic', 'activityType'],
    searchConfiguration: {
      searchable: ['title', 'description'],
    },
  },
}

/**
 *  Request to show different labels on Details Page vs Explore page.
 */
export const educationDetailsSchema: GenericCardSchema = {
  type: 'Educational Resource',
  title: 'title',
  subTitle: 'topic',
  description: 'description',
  secondaryLabels: [
    'link',
    'activityType',
    'primaryFormat',
    'intendedUse',
    'primaryAudience',
    'educationalLevel',
    'originInstitution',
    'language',
    'contributors',
    'license',
    'useRequirements',
    'mediaAccessibility',
    'accessHazard',
    'datasetLink',
    'toolLink',
  ],
}

export const educationDetailsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  genericCardSchema: educationDetailsSchema,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'link',
    },
    {
      isMarkdown: true,
      matchColumnName: 'datasetLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'toolLink',
    },
  ],
}
