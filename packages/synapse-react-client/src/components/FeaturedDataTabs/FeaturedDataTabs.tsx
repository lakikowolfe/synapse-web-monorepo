import React from 'react'
import { useState } from 'react'
import FeaturedDataPlots, { FeaturedDataPlotsProps } from './FeaturedDataPlots'
import { Icon } from '../row_renderers/utils'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'
import { Button } from '@mui/material'
import { Paper } from '@mui/material'

export type FeatureDataTabProps = {
  title: string // type of data being shown, used for the tab title and explore all button
  icon?: string
  exploreObjectType?: string
  explorePagePath?: string
  plotsConfig: FeaturedDataPlotsProps
}

export type FeaturedDataTabsProps = {
  configs: FeatureDataTabProps[]
  rgbIndex: number
  sql: string
}

const FeaturedDataTabs: React.FunctionComponent<
  FeaturedDataTabsProps
> = props => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const { configs, rgbIndex, sql } = props
  // explore all data button
  const selectedTabProps: FeatureDataTabProps = configs[selectedTabIndex]
  return (
    <div className="FeaturedDataTabs">
      {/* tabs */}
      <div className="FeaturedDataTabs__tabs">
        {configs.map((config, index) => {
          const isSelectedTabIndex: boolean = index === selectedTabIndex
          return (
            <div
              className={`FeaturedDataTabs__tabs__tab ${
                isSelectedTabIndex
                  ? 'FeaturedDataTabs__tabs__tab__selected'
                  : ''
              }`}
              key={config.title}
            >
              <button
                className="SRC-centerAndJustifyContent"
                onClick={() => setSelectedTabIndex(index)}
              >
                {config.icon && <Icon type={config.icon}></Icon>}
                <span>{config.title}</span>
              </button>
            </div>
          )
        })}
      </div>
      {/* tab content */}
      {selectedTabProps && (
        <>
          {selectedTabProps.plotsConfig.configs.length > 0 ? (
            <>
              <FeaturedDataPlots
                key={`${sql}-${selectedTabIndex}`}
                {...selectedTabProps.plotsConfig}
                rgbIndex={rgbIndex}
                sql={sql}
                explorePagePath={selectedTabProps.explorePagePath}
              />
              {selectedTabProps.explorePagePath && (
                <div className="FeaturedDataTabs__explore-all">
                  <Button
                    variant="contained"
                    href={selectedTabProps.explorePagePath}
                  >
                    View All {selectedTabProps.exploreObjectType}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <Paper sx={{ p: 2 }}>
              <NoContentAvailable />
            </Paper>
          )}
        </>
      )}
    </div>
  )
}

export default FeaturedDataTabs
