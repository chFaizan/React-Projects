import React from 'react'
import {useForm} from 'react-hook-form';
import { DevTool } from "@hookform/devtools";


let componetRerender = 0;
  
const UserInformation = () => {
    const form = useForm();
    const {register, control} = form;

    const formSubmit = (data) =>{
        console.log('form submit', data);

    }
    
    componetRerender++;

  return (
    <>
    <div className="userForm">
        <h1>Render {componetRerender} times</h1>
        <h2>User Info Detail</h2>
        <form action="#" onSubmit={handleSubmit(formSubmit)} className='userDetailForm'>
        <div className="formGroup">
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" {...register('name')}  placeholder='Enter Your Name' />
        </div>
        <div className="formGroup">
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" {...register('email')}  placeholder='Enter Your Email' />
        </div>
        <div className="formGroup">
            <label htmlFor='number'>Phone Number</label>
            <input id='number' type="number"  {...register('number')}  placeholder='Enter Your Number' />
        </div>
        <div className="formGroup">

            <input type="submit" value='Save' />
        </div>
      

        </form>
    <DevTool control={control}/>
    </div>

    </>
  )
}

export default UserInformation