import {
  PortalSearchTabConfig,
  PortalSearchTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { PortalFullTextSearchField } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalFullTextSearchField'
import { SearchParamAwareStandaloneQueryWrapper } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/SearchParamAwareStandaloneQueryWrapper'
import { Box } from '@mui/material'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { Outlet, RouteObject } from 'react-router'
import cckpConfigs from 'src/config/synapseConfigs'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { useCallback, useState } from 'react'
export const searchPageTabs: PortalSearchTabConfig[] = [
  {
    title: 'Grants',
    path: 'Grants',
  },
  {
    title: 'People',
    path: 'People',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'Educational Resources',
    path: 'EducationalResources',
  },
]

export const searchPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={searchPageTabs[0].path} />,
  },
  {
    path: searchPageTabs[0].path,
    element: <CCKPSearchPage selectedTabIndex={0} />,
  },
  {
    path: searchPageTabs[1].path,
    element: <CCKPSearchPage selectedTabIndex={1} />,
  },
  {
    path: searchPageTabs[2].path,
    element: <CCKPSearchPage selectedTabIndex={2} />,
  },
  {
    path: searchPageTabs[3].path,
    element: <CCKPSearchPage selectedTabIndex={3} />,
  },
  {
    path: searchPageTabs[4].path,
    element: <CCKPSearchPage selectedTabIndex={4} />,
  },
  {
    path: searchPageTabs[5].path,
    element: <CCKPSearchPage selectedTabIndex={5} />,
  },
]

export type CCKPSearchPageProps = {
  selectedTabIndex: number
}

function getQueryCount(queryResultBundleJSON: string) {
  const queryResultBundle = JSON.parse(
    queryResultBundleJSON,
  ) as QueryResultBundle
  const { queryCount } = queryResultBundle
  return queryCount
}

export function CCKPSearchPage(props: CCKPSearchPageProps) {
  const { selectedTabIndex } = props
  const { datasets, education, grants, people, publications, tools } =
    cckpConfigs
  const [searchPageTabsState, setSearchPageTabsState] =
    useState<PortalSearchTabConfig[]>(searchPageTabs)

  const onQueryResultBundleChange = useCallback(
    (tabIndex: number, newQueryResultBundleJSON: string) => {
      const newCount = getQueryCount(newQueryResultBundleJSON)
      if (searchPageTabsState[tabIndex].count !== newCount) {
        searchPageTabs[tabIndex].count = newCount
        setSearchPageTabsState([...searchPageTabs])
      }
    },
    [searchPageTabsState],
  )
  // on search field value update, update the special search parameter FTS_SEARCH_TERM, which the QueryWrapperPlotNav will load as the search term
  return (
    <Box sx={{ p: { xs: '10px', lg: '50px' } }}>
      <PortalFullTextSearchField />
      <PortalSearchTabs tabConfig={searchPageTabsState} />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 0}
        standaloneQueryWrapperProps={{
          ...grants,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(0, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 1}
        standaloneQueryWrapperProps={{
          ...people,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(1, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 2}
        standaloneQueryWrapperProps={{
          ...publications,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(2, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 3}
        standaloneQueryWrapperProps={{
          ...datasets,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(3, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 4}
        standaloneQueryWrapperProps={{
          ...tools,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(4, newQueryResultBundleJSON)
          },
        }}
      />
      <SearchParamAwareStandaloneQueryWrapper
        isVisible={selectedTabIndex == 5}
        standaloneQueryWrapperProps={{
          ...education,
          onQueryResultBundleChange: newQueryResultBundleJSON => {
            onQueryResultBundleChange(5, newQueryResultBundleJSON)
          },
        }}
      />
      <Outlet />
    </Box>
  )
}
