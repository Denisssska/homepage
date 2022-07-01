import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e)
        }
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        // onChange, onChangeOption
    }
    const mappedOptions:JSX.Element[] = options? options.map((item, index)=>
        <option value={item} key={index}>{item}</option>
    ):[];

    return (
        <select onChange={onChangeCallback} {...restProps}>
            <>{mappedOptions}</>
        </select>
    )
}

export default SuperSelect
