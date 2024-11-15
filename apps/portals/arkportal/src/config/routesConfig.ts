import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import routeControlWrapperProps from './routeControlWrapperProps'
import { projectDetailPage } from './synapseConfigs/projects'
import { programDetailPage } from './synapseConfigs/programs'
import { datasetsDetailsPage } from './synapseConfigs/datasets'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'ARKWelcomePage',
        props: undefined,
        isOutsideContainer: true,
      },
      {
        name: 'Goals',
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn38103451',
        },
      },
      {
        name: 'JsonLdScript',
        props: {
          thing: {
            '@context': 'https://schema.org',
            '@type': 'DataCatalog',
            '@id': 'https://arkportal.synapse.org/',
            // "http://purl.org/dc/terms/conformsTo": {
            //     "@type": "CreativeWork",
            //     "@id": "https://bioschemas.org/profiles/DataCatalog/0.3-RELEASE-2019_07_01/"
            // },
            keywords: [
              'arthritis',
              'lupus',
              'systemic lupus erythematosus',
              'rheumatoid arthritis',
              'accelerating medicines partnership',
              'National Institute of Arthritis and Musculoskeletal and Skin Diseases',
              'NIAMS',
              'Foundation for the National Institutes of Health',
              'FNIH',
              'National Institute of Allergy and Infectious Diseases',
              'NIAID',
              'Human Data',
              'Life Science',
            ],
            description:
              'The ARK Portal is a public data repository that stores and shares data and research knowledge generated by a network of research teams focused on arthritis and autoimmune and related diseases.',
            name: 'Arthritis and Autoimmune and Related Diseases Knowledge Portal',
            provider: {
              '@type': 'Organization',
              name: 'Sage Bionetworks',
              url: 'https://www.synapse.org/',
            },
            alternateName: 'ARK Portal',
          },
        },
      },
    ],
  },
  {
    path: 'About',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        className: 'AboutPage',
        props: {
          ownerId: 'syn26710600',
          wikiId: '619467',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
  {
    path: 'Data Access',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Data Access',
        className: 'DataAccessPage',
        props: {
          ownerId: 'syn26710600',
          wikiId: '619468',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
  {
    path: 'Explore',
    routes: [
      {
        path: ':slug/',
        hideRouteFromNavbar: true,
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: routeControlWrapperProps,
          },
        ],
      },
      {
        path: 'Programs',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: programDetailPage,
          },
        ],
      },
      {
        path: 'Projects',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: projectDetailPage,
          },
        ],
      },
      {
        path: 'Collections',
        exact: true,
        hideRouteFromNavbar: false,
      },
      {
        path: 'Datasets',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: true,
            synapseConfigArray: datasetsDetailsPage,
          },
        ],
      },
      {
        path: 'All Data',
        exact: true,
        hideRouteFromNavbar: false,
      },
    ],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.arkportal.org',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.arkportal.org/help/',
  },
]

export default routes
