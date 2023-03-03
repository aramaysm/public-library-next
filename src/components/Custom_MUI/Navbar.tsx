import NextLink from 'next/link';

import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar >
        <Toolbar >
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h5'>Biblioteca pública</Typography>                    
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/books/list' passHref>
                    <Link>
                        <Button>Libros</Button>
                    </Link>
                </NextLink>
                <NextLink href='/authors/list' passHref>
                    <Link>
                        <Button>Autores</Button>
                    </Link>
                </NextLink>
                
            </Box>


            <Box flex={ 1 } />


        </Toolbar>
    </AppBar>
  )
}