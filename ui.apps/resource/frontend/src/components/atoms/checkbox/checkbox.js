import React, { Children } from 'react';
import PropTypes, { bool } from 'prop-types';

const Checkbox = props => {
    const {
        checked,
        disabled,
        required,
        name,
        id,
        ariaLabelText,
        checkboxText,
        children,
        checkMedium,
        checkLarge
    } = props;

    return (
        <>
            <input
                type="checkbox"
                name={name ? name : ''}
                id={id ? id : ''}
                disabled={disabled ? true : false}
                required={required}
                className={`input-checkbox  ${checkMedium ? 'check--medium' : ''} ${checkLarge ? 'check--large' : ''} `}
            />

            <label
                htmlFor={id ? id : ''}
                aria-label={ariaLabelText}
                className="form-check-label">

                <span className="checkbox">
                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Clinical-Trials---Results-" transform="translate(-416.000000, -820.000000)" fill="#09958B" stroke="#F3F5F8" stroke-width="2">
                                <g id="Filters_left-side" transform="translate(376.000000, 740.000000)">
                                    <g id="tick-box/filter/static" transform="translate(40.000000, 77.000000)">
                                        <g id="tick-box" transform="translate(0.000000, 3.000000)">
                                            <rect id="Rectangle-Copy-29" x="1" y="1" width="16" height="16" rx="2"></rect>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span>
                
                <div class="consent-checkbox section">
                    <div class="cmp-text">
                        {checkboxText} {children}
                    </div>
                </div>
            </label>
        </>
    );
}

export default Checkbox;

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    ariaLabelText: PropTypes.string,
    checkboxText: PropTypes.string,
    id: PropTypes.number,
}