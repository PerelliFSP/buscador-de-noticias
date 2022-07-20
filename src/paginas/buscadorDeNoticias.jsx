import { React, useState } from 'react';
import Buscador from '../componentes/buscador';
import ListaDeNoticias from '../componentes/listaDeNoticias';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const BuscadorDeNoticias = () =>{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (

        <Container>
            <Box>
                <Stack direction="column">
                    <Item><Buscador /></Item>
                </Stack>
                <Stack direction="column">
                    <Item><ListaDeNoticias /></Item>
                </Stack>
            </Box>
        </Container>
    );
}

export default BuscadorDeNoticias;