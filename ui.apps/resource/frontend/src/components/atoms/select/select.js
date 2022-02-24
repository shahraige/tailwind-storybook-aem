import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

const Select = props => {

    let disabledInp = {disabled : props.disabled ? 'true' : false };

    return (

        <div className="form-group form-group--select input-field position-relative">
        
            <select class="form-control" name={props.name} id={props.id} multiple={(props.multiselect && (props.multiselect == 'true' || props.multiselect == true)) ? true : false} required={props.requiredText || false} {...disabledInp}>
                {
                    (props.options && props.options).map(ops => {
                        return (
                            <option value={ops.value} selected={ops.selected}>{ops.displayValue}</option>
                        )
                    })
                }
            </select>

            <label htmlFor={props.id||''}>
                <span class="required-txt">{props.requiredText || ''}</span>
            </label>

            <div className='left-info'>
                <span>{props.labelText || ''}</span>
            </div>

            <div className="d-flex justify-content-between">
                <div className="invalid-feedback">
                    {props.feedBack || ''}
                </div>

                {props.helperHTML && props.helperHTML != '' ? (
                    <div className="helper-text ml-auto"
                        dangerouslySetInnerHTML={{ __html: props.helperHTML }}>
                    </div>
                ) : ''}
            </div>

            <HtmlComment text="*start angel down custom arrow for select" />
            <span className="angle-down">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
            <HtmlComment text="#End angel down custom arrow for select" />
        </div>
    );
}

export default Select;
