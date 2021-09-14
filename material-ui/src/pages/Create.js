import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, ButtonGroup, Container, FormControlLabel, makeStyles,Radio, RadioGroup } from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { TextField } from '@material-ui/core';
import { FormLabel ,FormControl} from '@material-ui/core';
const useStyles=makeStyles({
  btn:{
    fontSize:20,
    backgroundColor:'violet',
    '&:hover':{
      backgroundColor:'blue'
    }

  },
  title:{
    textDecoration:'underline',
    marginBottom:20

  }

})


export default function Create() {

  const classes=useStyles();
  const [category,setCategory]=useState('todos');
  return (
    <Container>
     
      <Typography 
      className={classes.title}
      variant="h6"
        component="h2"
        gutterBottom
        color="secondary"
      > 
        create a new note
      </Typography>
      <br/>
      <Button type="submit" color="error" 

      onClick={()=>{console.log("clef")}}
      >
         submit
      </Button>

     
     
      <br/>  <br/>
     <ButtonGroup color="primary" variant="contained">
     <Button>One</Button>
     <Button>Two</Button>
     <Button>Three</Button>
     </ButtonGroup>

   {/* icons */}
   
  <br/>
  <AcUnitOutlinedIcon/>
  <AcUnitOutlinedIcon color="primary"/>
  <AcUnitOutlinedIcon color="primary" fontSize="large"/>
  <AcUnitOutlinedIcon color="action" />
  <AcUnitOutlinedIcon color="disabled" />
  

  <form noValidate  autoComplete="off">
    <TextField 
     fullWidth required
    label="enter name" variant="outlined" color="secondary"
    ></TextField>
      <br/>
    <TextField 
     fullWidth required multiline rows={4}
    label="details" variant="outlined" color="secondary"
    ></TextField>
   <FormControl className={classes}>
   <FormLabel >Note a category</FormLabel>
  <RadioGroup value={category} onChange={e=>setCategory(e.target.value)}>
    <FormControlLabel control={<Radio/>} label="money" value="money"/>
    <FormControlLabel control={<Radio/>} label="property" value="property"/>
    <FormControlLabel control={<Radio/>} label="todos" value="todos"/>
    <FormControlLabel control={<Radio/>} label="fourth" value="fourth"/>
    {/* <Radio  value="hello" />
    <Radio  value="byebye"/> */}
</RadioGroup>



    <Button 
      className={classes.btn}
      type="submit" color="secondary" variant="outlined"
      startIcon={<SendOutlinedIcon/>}
      endIcon={<KeyboardArrowRightIcon/>}

      >
         submit
      </Button>
      </FormControl>
    </form>




    </Container>




  )

  



}
