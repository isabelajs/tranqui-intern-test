import { Stack, IconButton, Container, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import React , {useEffect, useCallback, useState, useRef} from 'react';
import '../styles/app.scss'

interface nameCounter{
  [key:string]: number
}


function App() {
  const[state, setState] = useState({
    data:{} as nameCounter,
    loading:true,
    error:false,
  })
  

  const fetchData = useCallback( async ()=>{
    const res = await fetch('http://localhost:3333/api/randomnames')
    const data = await res.json()
    setState({
      data: data.names,
      error:false,
      loading:false
    })
  },[])


  const handlePlus = (name:string) =>{
    
    //this fetch return this response
    // {
    //   message
    //   error
    //   data : this is the new number to the counter, nothing more
    // }

    //the body of fetch needs the user name and the type of the change (plus, minus, delete)

    const updateData = async ()=>{
      const res = await fetch('http://localhost:3333/api/namescounter',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name,
          type: 'plus'
        })
      })

      const response = await res.json()

      // if not have a error set change the new value to the counter name (only the name that change)
      if(!response.error){
        setState({
          ...state,
          data: {
            ...state.data,
            [name]: response.data
          }
        })
      }
    }

    updateData()
  }

  useEffect(()=>{
    fetchData()
  },[])


  //TODO: put a loader when the data is loading
  return (
  <>
    <Container className='container' maxWidth="md">
      <h1 className='container__title'>Prueba para practicante de desarrollo web</h1>
      
      <TableContainer  component={Paper} sx={{margin:0}}>
        <Table sx={{ minWidth: 400 }} size="small"  aria-label="simple table">

          <TableHead>
              <TableRow >
                <TableCell className='titleRow' align="center">Nombre</TableCell>
                <TableCell className='titleRow' align="center">Contador</TableCell>
                <TableCell className='titleRow' align="center">Acción</TableCell>
              </TableRow>
          </TableHead>

          <TableBody>
            {
              Object.entries(state.data).map((lista,index)=> (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                >
                  <TableCell component="th" scope="row">
                    {lista[0]}
                  </TableCell>

                  <TableCell align="center">{lista[1]}</TableCell>

                  <TableCell align='center'> 
                      
                      <Stack direction='row' spacing={1} justifyContent="center">

                        <IconButton onClick={()=>{
                          handlePlus(lista[0])
                        }} aria-label="plus">
                          <AddIcon/>

                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon/>
                        </IconButton>
                      </Stack>

                  </TableCell>

                </TableRow>
              ))
            }
          </TableBody>

        </Table>
      </TableContainer>
    </Container>
  </>
  );
}

export default App;


