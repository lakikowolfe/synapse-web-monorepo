import { render, screen } from '@testing-library/react'
import React from 'react'
import FavoritesPage from '../../src/components/favorites/FavoritesPage'
import { createWrapper } from '../../src/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../src/utils/context/SynapseContext'
import { mockFolderEntityHeader } from '../../src/mocks/entity/mockEntity'
import mockFileEntityData from '../../src/mocks/entity/mockFileEntity'
import { server } from '../../src/mocks/msw/server'

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<FavoritesPage />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('FavoritesPage tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the table of favorites', async () => {
    // mock successful response set up in handlers.ts
    renderComponent()

    await screen.findByText(mockFolderEntityHeader.name)
    await screen.findByText(mockFileEntityData.name)
  })
})
