import React, { FC } from "react";
import Select, { Props } from 'react-select';

const InputSelect: FC<Props> = ({ options, onChange, ...props }) => {
    return (
        <Select options={options} onChange={onChange} {...props} />
    )
}

export default InputSelect;