import {
  AppBar,
  Box,
  Button,
  Grid,
  Input,
  Table,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from "@mui/icons-material";
import  "./style.css";
import { Container } from "@mui/system";
const bookobject = {
  bookName: "",
  authorName: "",
  description: "",
};
const Bookstock = () => {
  const [object, setobject] = useState(bookobject);
  const [booklist, setbooklist] = useState([]);
  const [edit, setedit] = useState(false);
  const changeHandler=(e)=>{
    const value= e.target.value
    setobject(object=>({
        ...object,
        [e.target.name]: value
    }))
  }
  const AddBook=()=>{
    if(edit){
  const editbook=booklist.map((row)=> row.id===object.id ? object:row)
        setbooklist(editbook)
        setedit(false)
        setobject(bookobject)
    } 
    else{
    let listItems=booklist;
    const item={
        id:booklist.length,
        ...object
    }
    listItems=[...booklist,item]
    setbooklist(listItems)
    console.log(listItems)
    ClearData()
    }}
  const ClearData=()=>{
    setobject(bookobject)
  }
  const DeleteRow=(id)=>{
    const deleterow=booklist.filter(item=>item.id!=id)
    setbooklist(deleterow)
  }
  const Edit=(data)=>{
   setobject(data)
   setedit(true) 
  }
  return (
    <React.Fragment>
      <AppBar sx={{background:'blue', alignItems:'center'}}>
        <Toolbar> 
        <Typography>Library Management System</Typography>
        </Toolbar>
    </AppBar>
        {/* <Container> */}
      <Grid container marginTop={10}>
        <Grid item xs={10} sm={6} md={6} lg={4} margin='auto'>
        <Box
        fullWidth
          display={"flex"}
          flexDirection={"column"}
          padding={5}      
          sx={{ border: "1px solid grey" }}
        >
          <TextField
          onChange={changeHandler}
          fullWidth
            label="BookName"
            name="bookName"
            sx={{ mr: 2, mb: 2 }}
            value={object.bookName}
          />
          <TextField
          onChange={changeHandler}
          fullWidth
          sx={{ mr: 2, mb: 2 }}
            label="AuthorName"
            name="authorName"
            value={object.authorName}
          />
          <TextField
          onChange={changeHandler}
          fullWidth
          sx={{ mr: 2, mb: 2 }}
            label="Description"
            variant="outlined"
            name="description"
            value={object.description}
          />
          <Button variant="contained" sx={{mb:2}} onClick={AddBook}>{edit ? 'EditBook':'AddBook'}</Button>
          <Button variant="contained" sx={{mb:2}} onClick={ClearData}>Clear</Button>
        </Box>
        </Grid>
        <Grid item xs={'auto'}  sm={12} md={12} lg={12}>
        <Box
        fullWidth
        display={"flex"}
        flexDirection={"column"}

          padding={5}
        sx={{p:2,m:2,border:'1px solid grey'
      }} >
          <Grid item xs={6} sm={12} md={12} lg={12}>
    <table width={'100%'}>
        <tr>
            <th>BookId</th>
            <th>BookName</th>
            <th>AuthorName</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
        {booklist && booklist.map((row,index)=>
            <tr>
                <td>{row.id}</td>
                <td>{row.bookName}</td>
                <td>{row.authorName}</td>
                <td>{row.description}</td>
                <td><EditIcon color="success" onClick={()=>Edit(row)}/><DeleteIcon color='error' onClick={()=>DeleteRow(row.id)}/></td>

            </tr>
        
         
        )}
    </table>
    </Grid>
    </Box>
    </Grid>
    </Grid>
    {/* <Container> */}
    </React.Fragment>
  );
};

export default Bookstock;
