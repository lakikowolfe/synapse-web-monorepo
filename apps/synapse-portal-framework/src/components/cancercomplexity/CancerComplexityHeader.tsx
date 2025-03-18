import { Box, Typography } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'

const CancerComplexityHeader = () => {
  const searchPlaceholder = 'Search for cancer related data and resources'
  const searchExampleTerms = [
    'Justo Turpis',
    'Nostra',
    'Fames',
    'Rhoncus',
    'Pharetra enim',
    'Aliquet',
    'Ridiculus',
    'Penatibus',
    'Accumsan quisque',
    'Patient Advocacy',
  ]
  const isFeatureEnabled = useGetFeatureFlag(
    FeatureFlagEnum.PORTAL_SEARCH_HEADER,
  )
  const roles = [
    { value: 'researcher', label: 'Researcher' },
    { value: 'principalInvestigator', label: 'Principal Investigator' },
    { value: 'funder', label: 'Funder' },
    { value: 'student', label: 'Student' },
    { value: 'patientAdvocate', label: 'Patient Advocate' },
  ]
  const content = (
    <>
      <Box
        sx={{
          margin: 0,
          color: '#FFFF',
        }}
      >
        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '42px', md: '48px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            lineHeight: '54px',
          }}
        >
          Welcome to the Cancer Complexity Knowledge Portal
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          The NCI Division of Cancer Biology supports multiple research programs
          composed of interdisciplinary communities of scientists who aim to
          integrate approaches, data, and tools to address important questions
          in basic and translational cancer research. Discover and download
          datasets, publications, and other resources generated by these
          programs.
        </Typography>
      </Box>
    </>
  )
  return (
    <>
      {isFeatureEnabled ? (
        <header id="header">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px 0',
            }}
          >
            <Box
              sx={{
                margin: 0,
                flex: 1,
                padding: { xs: '40px', lg: '40px 80px' },
              }}
            >
              {content}
            </Box>
            <HeaderSearchBox
              searchExampleTerms={searchExampleTerms}
              searchPlaceholder={searchPlaceholder}
              path="/Search"
              roles={roles}
              sx={{
                flex: 1,
                '& > :first-child': {
                  background: 'rgba(184, 204, 226, 0.60)',
                },
              }}
            />
          </Box>
        </header>
      ) : (
        <Header />
      )}
    </>
  )
}

export default CancerComplexityHeader
