import React, { FC } from "react";
import Select from 'react-select';

type TypeOptions = { value: string, label: string }

type SelectProps = {
    options: TypeOptions[]
    onChange?: () => {}
}

const InputSelect: FC<SelectProps> = ({ options, onChange }) => {

    return (
        <Select options={options} onChange={onChange} />
    )
}

export default InputSelect;