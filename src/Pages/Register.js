import { FormControl, FormLabel, HStack, Box, Text, Input, Button, Link, Image, Checkbox, useToast, Toast } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const collectDataUser = collection(db, 'users')

    const createDataRegister = async() => {
        const docSnap = await addDoc(collectDataUser, {firstName: firstName, lastName: lastName, email: email, phone: phone, pass: password})
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(`Account Created with id ${docSnap.id}`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Register Not Success');
        });
    }
        
  return (
    <Box>

    <Box display='flex' justifyContent='center' gap='20'>
        <Box p='10'>
            <Box w='15em' pb='10'>
                <Image src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-15.png' />
            </Box>
            
            <Box>
            <Box py='4' fontSize='30'>
                Daftarkan Akunmu Sekarang
            </Box>
            <Box>
                <FormControl>
                    <HStack gap='5'>
                        <Box>
                            <FormLabel fontSize='12'>Nama Depan</FormLabel>
                            <Input onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='Nama Depanmu'></Input>
                        </Box>
                        <Box>
                            <FormLabel fontSize='12'>Nama Belakang</FormLabel>
                            <Input onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Nama Belakangmu'></Input>
                        </Box>
                    </HStack>
                    <FormLabel fontSize='12' pt='5'>Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Emailmu' />
                    <FormLabel fontSize='12' pt='5'>No. Handphone</FormLabel>
                    <Input onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Nomor Handphone' />
                    <FormLabel fontSize='12' pt='5'>Kata Sandi</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Kata Sandi' />
                    <FormLabel fontSize='12' pt='5'>Konfirmasi Kata Sandi</FormLabel>
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} type='password' placeholder='Konfirmasi Kata Sandi' />
                    <Box py='3'>
                        <Checkbox>
                            <Text as='span' fontSize='13'>I agree with the</Text>
                            <Text as='span' fontSize='13' color={'blue'}>terms and conditions</Text>
                        </Checkbox>
                    </Box>
                </FormControl>
            </Box>
            <Box align='center'>
                <Button onClick={() => createDataRegister()} colorScheme={'blue'} w='15em'>Daftar</Button>
            </Box>
            </Box>
        </Box>
        <Box>
            <Box w='40em' h='125vh' bgColor='blackAlpha.300' align='center' fontWeight='bold'>
                <Image w='40em' src='https://images.unsplash.com/photo-1672807808702-0d59963bba90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
            </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default Register

