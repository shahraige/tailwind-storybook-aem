import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const Input = (props) => {
    const { width, id, type, name, value, placeholder, datepicker, feedBack, helperHTML, required } = props;
    return (

        <div className="form-group input-field">

            <input
                id={id ? id : ''}
                className={`${width ? width : ''} form-control ${datepicker ? datepicker : ''} ${value && value != '' ? 'has-value' : ''}`}
                width={width ? width : ''}
                type={type}
                name={name ? name : ''}
                value={value ? value : ''}
                placeholder={placeholder ? placeholder : ''}
                required={required}
            />
            {type && type == 'password' ? <i class="privacy-icon eye-close"></i> : ''}

            <div className="d-flex justify-content-between">
                <div className="invalid-feedback">
                    {feedBack ? feedBack : ''}
                </div>

                {helperHTML && helperHTML != '' ? (
                    <div className="helper-text ml-auto" dangerouslySetInnerHTML={{ __html: helperHTML }}></div>
                ) : ''}
            </div>

        </div>

    );
}

Input.defaultProps = {
    inputType: 'text'
}

Input.propTypes = {
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
}

export default Input;