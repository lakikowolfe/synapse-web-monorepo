import { Box, Link, Button, Typography } from '@mui/material'
import backgroundSpotsLeft from './assets/dot_blob_top_left.png'
import backgroundSpotsRight from './assets/dot_blob_bottom_right.png'

function ELContributeYourData() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr', md: '33% 33% 33%' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '0 0 auto',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundSpotsLeft})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          backgroundSize: '100%',
          zIndex: 0,
          overflow: 'clip',
        }}
      />
      <Box
        sx={{
          flex: '1 1 auto',
          zIndex: 1,
          textAlign: 'center',
          padding: { xs: '100px 40px', md: '100px 0' },
        }}
      >
        <Typography
          variant="headline1"
          style={{ color: 'white' }}
          sx={{
            pt: 4,
            mb: 2,
            mx: 'auto',
            width: 'max-content',
            borderTop: '6px solid #ffffff88',
          }}
        >
          Contribute Your Data
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'white', fontStyle: 'italic', mb: 3 }}
        >
          If you are a funded portal contributor and ready to upload data to the
          ELITE Portal, you can begin the data submission process by contacting
          our data curation team through our service desk.
        </Typography>
        <Link
          href="https://sagebionetworks.jira.com/servicedesk/customer/portal/12"
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="Lato"
          fontSize="18"
          fontStyle="semi-bold"
        >
          <Button
            variant="contained"
            sx={theme => ({
              border: '1px solid white',
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            })}
          >
            Start Contributing
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          flex: '0 0 auto',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundSpotsRight})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '100%',
          zIndex: 0,
          overflow: 'clip',
        }}
      />
    </Box>
  )
}

export default ELContributeYourData
