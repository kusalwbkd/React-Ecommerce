import React from 'react'
import { Form ,Link} from 'react-router-dom'
import { FormInput,SubmitBtn } from '../components'

const Login = () => {
  return (
    <section className=' h-screen w-screen grid place-content-center mt-5 mb-5'>
    <Form method='POST' className='card  grid  w-60 p-8 md:w-96   grid-cols-1 gap-y-4 bg-gray-100 shadow-xl '>
    <h4 className='text-center text-3xl font-bold'>Login</h4>
    <FormInput
    type='email'
    label='email'
    name='identifier'
    defaultValue='test@test.com'
    
    />
     <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />


<div className='mt-4'>
          <SubmitBtn text='Login' />
        </div>


        <button type='button' className=' btn btn-outline btn-info btn-block capitalize' >
guest user
</button>
<p className='text-center'>
Not a member yet?
<Link
  to='/register'
  className='ml-2 link link-hover link-primary capitalize'
>
  register
</Link>
</p>
    </Form>


    </section>
  )
}

export default Login