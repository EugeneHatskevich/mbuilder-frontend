import React from 'react';

interface FormButtonProps {
    buttonName: string;
    clickHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const FormButton: React.FunctionComponent<FormButtonProps> = ({clickHandler, buttonName}) => {
    return (
        <div>
            <button onClick={(event) => clickHandler(event)}>{buttonName}</button>
        </div>
    );
};

export default FormButton;