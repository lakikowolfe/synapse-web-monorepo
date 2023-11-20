import { Meta, StoryObj } from '@storybook/react'
import TableColumnSchemaEditor from './TableColumnSchemaEditor'
import {
  getAnnotationColumnHandlers,
  getDefaultColumnHandlers,
} from '../../mocks/msw/handlers/tableQueryHandlers'
import { mockQueryResultBundle } from '../../mocks/mockFileViewQuery'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { ColumnTypeEnum, TableBundle } from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import { ENTITY_BUNDLE_V2 } from '../../utils/APIConstants'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'

const meta = {
  title: 'Synapse/Table Column Schema Editor',
  component: TableColumnSchemaEditor,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const mockTableBundle: TableBundle = {
  columnModels: mockQueryResultBundle.columnModels!,
  maxRowsPerPage: 25,
}

export const Demo: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getDefaultColumnHandlers(MOCK_REPO_ORIGIN),
        ...getAnnotationColumnHandlers(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ViewColumnModelResponse',
            results: [
              {
                id: '1235325',
                columnType: ColumnTypeEnum.STRING,
                name: 'columnFromAnnotations',
                maximumSize: 10,
              },
            ],
          },
          MOCK_REPO_ORIGIN,
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ENTITY_BUNDLE_V2(':entityId')}`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockTableEntityData.bundle,
                tableBundle: mockTableBundle,
              }),
            )
          },
        ),
      ],
    },
  },
  args: {
    entityId: mockTableEntityData.id,
  },
}
