import React, { useState } from 'react'
import { Form ,Link} from 'react-router-dom'
import { FormInput,SubmitBtn } from '../components'

const Register = () => {

  
  return (
    <section className=' h-screen w-screen grid place-content-center mt-5 mb-5'>
    <Form method='POST' className='card  grid  w-60 p-8 md:w-96   grid-cols-1 gap-y-4 bg-gray-100 shadow-xl '>
    <h4 className='text-center text-3xl font-bold'>Register</h4>

    <FormInput 
    type='text' 
    label='username'
    name='username'
    
     />
    

    <FormInput
    type='email'
    label='email'
    name='email'
    
    defaultValue='test@test.com'
    
    />
     <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />


<div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>


       
<p className='text-center'>
Already a member?
<Link
  to='/login'
  className='ml-2 link link-hover link-primary capitalize'
>
  login
</Link>
</p>
    </Form>


    </section>
  )
}

export default Register