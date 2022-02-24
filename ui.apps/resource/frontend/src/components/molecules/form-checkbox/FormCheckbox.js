import React from 'react';
import Checkbox from '../../atoms/checkbox/checkbox';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const FormCheckbox = props => {
    const {
        checked,
        name,
        id,
        ariaLabelText,
        checkboxText,
        children,
        disabled,
        checkMedium,
        checkLarge,
        required
    } = props;


    return (
        <div className="form-checkbox section">

            <HtmlComment text="* START form-checkbox component" />
            <div className="form-check d-flex">
                <Checkbox
                    name={name ? name : ''}
                    id={id || ''}
                    disabled={disabled || false}
                    ariaLabelText={ariaLabelText || ''}
                    checkboxText={checkboxText || ''}
                    checked={checked ? true : false}
                    disabled={disabled ? true : false}
                    checkMedium={checkMedium}
                    checkLarge={checkLarge}
                    required={required}
                >
                    {children}
                </Checkbox>
            </div>
            <HtmlComment text="# END form-checkbox component" />
            
        </div>
    );
}

export default FormCheckbox;
