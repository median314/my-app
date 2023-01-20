import { FormControl, FormLabel, HStack, Box, Text, Input, Button, Link, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar2 from '../Components/Navbar2'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

const Register = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert('Berhasil login')
        // ...
        })
        .catch((error) => {
            setError(true)
            alert('email belum terdaftar')
        });
    }

  return (
    <Box>

    <Box display={'flex'} justifyContent='space-around' gap='20'>
        <Box w='30em'>
        <Box w='15em' pt='10'>
            <Image src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-15.png' />
        </Box>
        
        <Box p='10' my='5'>
            <Box mt='7' fontSize={'30'}>
                Hai, Selamat Datang
            </Box>
            <Box mb='4'>
                <FormControl>
                    <FormLabel fontSize='12' pt='5'>Email</FormLabel>
                    <Input type='email' placeholder='Emailmu' onChange={(e) => setEmail(e.target.value)}/>
                    <FormLabel fontSize='12' pt='5'>Kata Sandi</FormLabel>
                    <Input type='password' placeholder='Kata Sandi' onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
            </Box>
            
            <Box align='center' borderRadius='5'>
                <Button colorScheme={'blue'} w='15em' onClick={handleLogin}>Login</Button>
            </Box>
            { error && <Box color='red' align='center' fontSize={'14'} mt='3'>
                Email atau Password salah.
            </Box>}
            <Box py='3' fontSize={'15'}>
                <Text as='span'>Belum punya akun? </Text>
                <Text as='span' color='blue.500'><a href='/register'>Daftar sekarang!</a></Text>
            </Box>
        </Box>

        </Box>
        <Box>
            <Image w='26em' src='https://images.unsplash.com/photo-1672841828482-13d466cc8d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        </Box>
    </Box>
    </Box>
  )
}

export default Register