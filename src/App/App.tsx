import { Stack, IconButton, Container, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import '../styles/app.scss'

function App() {

  
  
  let data = {"Ceil Langstaff":1,"Bobette Artharg":13,"Polly Rushman":0,"Doralin Marjanovic":0,"Elianora Stannett":0,"Saunders Gaine":0}

  let info = Object.entries(data)
  
  console.log(info)

  return (
  <>
    <Container className='container' maxWidth="md">
      <h1 className='container__title'>Prueba para practicante de desarrollo web</h1>
      <TableContainer component={Paper} sx={{margin:3}}>
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
              info.map(element=> (
                <TableRow
                  key={element[0]}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                >
                  <TableCell component="th" scope="row">
                    {element[0]}
                  </TableCell>

                  <TableCell align="center">{element[1]}</TableCell>

                  <TableCell align='center'> 
                      
                      <Stack direction='row' spacing={1} justifyContent="center">
                        <IconButton aria-label="delete">
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
