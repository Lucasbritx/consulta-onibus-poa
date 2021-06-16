import React, { FC } from "react";
import Select, { Props } from 'react-select';

// type TypeOptions = { value: string, label: string }

// type SelectProps = {
//     options: TypeOptions[],
//     onChange?: () => {},
//     getOptionLabel: () => {},
//     getOptionValue: () => {}
// }

const InputSelect: FC<Props> = ({ options, onChange, ...props }) => {

    return (
        <Select options={options} onChange={onChange} {...props} />
    )
}

export default InputSelect;