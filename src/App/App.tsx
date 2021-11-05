import { Stack, IconButton, Container, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
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

  
  const updateData = async (name:string, action:string)=>{
    const res = await fetch('http://localhost:3333/api/namescounter',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,
        type: action
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

  const handlePlus = (name:string) =>{

    updateData(name,'plus')
  }

  const handleMinus = (name:string) =>{

    updateData(name,'minus')
  }

  const handleDelete = (name:string)=>{
    updateData(name,'delete')
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

                        <IconButton     
                          onClick={()=>{
                            handlePlus(lista[0])
                          }} 
                          aria-label="plus"  
                          size="small">
                          <AddIcon fontSize="small"/>
                        </IconButton>

                        <IconButton 
                          onClick={ ()=>{
                            handleMinus(lista[0])
                          }}
                          aria-label="minus" 
                          size="small">
                          <RemoveIcon fontSize="small"/>
                        </IconButton>

                        <IconButton 
                          onClick = { ()=>{
                            handleDelete(lista[0])
                          }}
                          aria-label="minus"  
                          size="small">
                            <DeleteIcon fontSize="small" sx={{color:'#525252'}}/>
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


