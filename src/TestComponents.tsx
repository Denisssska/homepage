import React, { useState} from 'react';
import SuperSelect from "./superComponents/SuperSelect";
import SuperCheckbox from "./superComponents/SuperCheckBox";
import SuperInput from "./superComponents/SuperInput";
import SuperRadio from "./superComponents/SuperRadio";
import SuperButton from "./superComponents/SuperButton";

export const TestComponents = () => {
    const options = ['A', 'B', 'C', 'D']
    const [state, setState] = useState('hi')
    const [check, setCheck] = useState(false)
    console.log(check)
    const clickHandler = () => {
        setState("hi i'm button")
        setCheck(!check)
    }

    const changeHandler = (value: string) => {
        setState(value)
        setCheck(!check)
    }
    const checkedHandler = (value: boolean) => {
setCheck(value)
    }
    return (
        <div>
            This is TestSuperComponents page
            <div>{state}</div>
            <SuperSelect value={state} options={options} onChangeOption={changeHandler}/>
            <SuperCheckbox onChangeChecked={(value)=>checkedHandler(value)}/>
            <SuperInput onChangeText={changeHandler}/>
            <SuperRadio value={state} options={options} onChangeOption={(value) => changeHandler(value)}/>
            <div><SuperButton name='click' onClick={clickHandler}/></div>
        </div>
    );
};

