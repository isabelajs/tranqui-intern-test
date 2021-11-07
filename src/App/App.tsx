import {
  Stack,
  IconButton,
  Container,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useCallback, useState } from "react";

interface nameCounter {
  [key: string]: number;
}

const useStyles = makeStyles({
  root: {},
  container__title: {
    textAlign: "center",
    marginBottom: 40,
  },
  titleRow: {
    backgroundColor: "#2196f3",
  },
  loading: {
    width: 80,
    height: 80,
    margin: "0 auto",
    "&:after": {
      content: '""',
      display: "block",
      width: 64,
      height: 64,
      margin: 8,
      borderRadius: "50%",
      border: "6px solid #2196f3",
      borderColor: "#2196f3 transparent",
      animation: "lds-dual-ring 1.2s linear infinite",
    },
  },
  "@keyframes loading": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export default function App() {
  const [state, setState] = useState({
    data: {} as nameCounter,
    loading: true,
    error: false,
  });

  const classes = useStyles();

  const fetchData = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/api/randomnames`);
    const data = await res.json();
    setState({
      data: data.names,
      error: false,
      loading: false,
    });
  }, []);

  const updateData = async (name: string, action: string) => {
    const res = await fetch(`http://localhost:5000/api/namescounter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        type: action,
      }),
    });

    const response = await res.json();

    // if not have a error set change the new value to the counter name (only the name that change)
    if (!response.error) {
      setState({
        ...state,
        data: {
          ...state.data,
          [name]: response.data,
        },
      });
    }
  };

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <h1 className={classes.container__title}>
          Prueba para practicante de desarrollo web
        </h1>

        {state.loading ? (
          <div className={classes.loading}></div>
        ) : (
          <TableContainer component={Paper} sx={{ margin: 0 }}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    className={classes.titleRow}
                    sx={{ color: "white" }}
                    align="center"
                  >
                    Nombre
                  </TableCell>
                  <TableCell
                    className={classes.titleRow}
                    sx={{ color: "white" }}
                    align="center"
                  >
                    Contador
                  </TableCell>
                  <TableCell
                    className={classes.titleRow}
                    sx={{ color: "white" }}
                    align="center"
                  >
                    Acción
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Object.entries(state.data).map((lista, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {lista[0]}
                    </TableCell>

                    <TableCell align="center">{lista[1]}</TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <IconButton
                          onClick={() => {
                            updateData(lista[0], "plus");
                          }}
                          aria-label="plus"
                          size="small"
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            updateData(lista[0], "minus");
                          }}
                          aria-label="minus"
                          size="small"
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            updateData(lista[0], "delete");
                          }}
                          aria-label="delete"
                          size="small"
                        >
                          <DeleteIcon
                            fontSize="small"
                            sx={{ color: "#525252" }}
                          />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}
