import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

export interface IShippingField {
    email: string
    password: string
    captcha: boolean
    rememberMe: boolean
}

const TestUseForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful,isValid}} = useForm<IShippingField>({
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<IShippingField> = (data) => {
       alert(data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...(register('password', {
                required: 'Enter password please',
                minLength: {
                    value: 8,
                    message: '5 symbols minimal'
                }
            }))} placeholder='password'/>
            {errors.password && <div style={{color: "red"}}>{errors?.password.message || 'Error!'}</div>}
            <input {...(register('captcha', {required: 'Enter captcha please'}))} placeholder='captcha'/>
            {errors.captcha && <div style={{color: "red"}}>{errors.captcha.message}</div>}
            <input {...(register('email', {
                validate: undefined,
                required: 'Enter email please'
            }))} placeholder="email"/>
            {errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}
            <input type="checkbox"{...register("rememberMe", {required: 'checked me please'})}/>
            {errors.rememberMe && <div style={{color: "red"}}>{errors.rememberMe.message}</div>}
            {isSubmitSuccessful && <div style={{color: "yellowgreen"}}>successfully</div>}
            {/*<button >Send</button>*/}
            <input type="submit" disabled={!isValid}/>
        </form>

    );
};

export default TestUseForm;