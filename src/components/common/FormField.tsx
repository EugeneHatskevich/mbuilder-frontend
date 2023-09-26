import React, {useState} from 'react';
import {InputTypeConstants} from "../types/constants/input-type.constants";

interface FormFieldProps {
    fieldName: string;
    type: InputTypeConstants;
    defaultValue: string | number;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({fieldName, type, defaultValue}) => {
    const [value, setValue] = useState(defaultValue)

    return (
        <div>
            <label>{fieldName}</label>
            <input name={fieldName.toLowerCase()} type={InputTypeConstants[type]} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default FormField;