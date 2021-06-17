import React, { FC } from "react";
import Select, { Props as SelectProps } from 'react-select';

export type Option = { value: string, label: string };

type Props = SelectProps & { 
    onChange: (option: Option)  => void;
};

const InputSelect: FC<Props> = ({ options, onChange, ...props }) => {

    const enhancedOnChange = (ev: Option | null) => {
        ev && onChange(ev);
    };

    return (
        <Select options={options} onChange={enhancedOnChange} {...props} />
    )
};

export default InputSelect;