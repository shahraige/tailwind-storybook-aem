import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input/input';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const InputField = (props) => {
    const { id, width, type, name, value, placeholder, datepicker, feedBack, requiredText, labelText, readonly = false, required= false, disabled=false, helperHTML, requireinfoText } = props;

    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = e => {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    let readOnlyProp = { readonly: readonly? 'true': false }
    let disabledInp = {disabled: disabled? 'true': false }

    return (
        <>
            {/* <HtmlComment text="Start InputField component markup, Copy from here" /> */}

            <div className={`form-group input-field ${type && type == 'password' ? 'password-field':''}`}>

                <input
                    id={id ? id : ''}
                    className={`${width ? width : ''} form-control ${datepicker ? datepicker : ''} ${inputValue && inputValue != '' ? 'has-value' : ''} ${requireinfoText ? 'has-ToolTip' : ''}`}
                    type={type || 'text'}
                    name={name ? name : ''}
                    value={inputValue || ''}
                    autoComplete="off"
                    placeholder={placeholder ? placeholder : ''}
                    required={required}
                    onChange={e => handleChange(e)}
                    readonly={readonly?'true':'false'}
                    {...readOnlyProp}
                    {...disabledInp}
                />

                <div className='left-info'>
                    <label htmlFor={id ? id : ''}>
                        <span>{labelText || ''}</span> {required ? <span className='text-danger'>*</span>:''}
                    </label>
                </div>

                <div className="right-text-action">
                    <div className="icons-wrap">
                        {type && type == 'password' ? (
                            <>
                                <span className="action-icon">
                                    <i className="privacy-icon eye-close"></i>
                                </span>
                            </>
                        ) : ''}

                        {datepicker ? (
                            <>
                                <span className="action-icon" id="date-action">
                                    <i className="calander"></i>
                                </span>
                            </>
                        ): ''}
                    </div>

                    {
                        requireinfoText ? (
                            <span className='tooltip-icon'
                                rel="tooltip"
                                data-toggle="tooltip"
                                data-html="true"
                                data-title={requireinfoText || ''}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" x="0" y="0" viewBox="0 0 490 490">
                                    <rect x="208.764" width="72.473" height="69.186" fill="#ffffff" data-original="#000000"/>
                                    <rect x="208.764" y="135.033" width="72.473" height="354.967" fill="#ffffff" data-original="#000000"/>
                                </svg>
                            </span>
                        ) : ''
                    }

                    {/* {requiredText ? <span className="required-txt">{requiredText}</span> : ''} */}
                </div>
                {/* END solution 2 */}


                <div className="d-flex justify-content-between">
                    <div className="invalid-feedback">
                        {feedBack || ''}
                    </div>

                    {helperHTML && helperHTML != '' ? (
                        <div className="helper-text ml-auto"
                            dangerouslySetInnerHTML={{ __html: helperHTML }}>
                        </div>
                    ) : ''}
                </div>
            </div>

            {/* <HtmlComment text="End InputField component markup," /> */}
        </>
    );
}

InputField.defaultProps = {
    inputType: 'text',
    requiredText: 'required'
}

InputField.propTypes = {
    /** input type */
    inputType: PropTypes.string.isRequired,
    /** input id  */
    id: PropTypes.string.isRequired,
    /** input width  */
    width: PropTypes.string.isRequired,
    /** input name  */
    name: PropTypes.string.isRequired,
    /** input value  */
    value: PropTypes.string,
    /** input placeholder  */
    placeholder: PropTypes.string,
    /** label text  */
    labelText: PropTypes.string.isRequired,
    /** label required text  */
    requiredText: PropTypes.string.isRequired
}

export default InputField;