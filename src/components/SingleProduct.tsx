import { Button, Card, CardActions, CardContent, Collapse, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ThemeOptions } from '../@types/pallette'

const SingleProduct = () => {

    const theme = useTheme() as ThemeOptions;
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
    sx={{
      backgroundImage: "none",
      backgroundColor: theme.palette.background.alt,
      borderRadius: "0.55rem",
    }}
  >
    <CardContent>
      <Typography
        sx={{ fontSize: 14 }}
        color={theme.palette.secondary[700]}
        gutterBottom
      >
Complaint
      </Typography>
      <Typography variant="h5" component="div">
      KBZ 544E
      </Typography>
      <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
  ON: 25/12/2023
      </Typography>
      

      <Typography variant="body2">description:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, quis?</Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        size="small"
        onClick={() => setIsExpanded(!isExpanded)}
      >
       {isExpanded?"Close": "See More"}
      </Button>
    </CardActions>
    <Collapse
      in={isExpanded}
      timeout="auto"
      unmountOnExit
      sx={{
        color: theme.palette.neutral[300],
      }}
    >
      <CardContent>
        <Typography>Complainant name:blah blah</Typography>
        <Typography>Complainant email:blah@email.com</Typography>
        <Typography>
          Vehicle Shortcode: IN87878 
        </Typography>
        <Typography>
         Vehicle Reg No: KBZ 757A
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default SingleProduct