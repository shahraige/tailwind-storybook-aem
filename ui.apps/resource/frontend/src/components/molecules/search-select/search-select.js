import React from 'react'
import HtmlComment from '../../particles/html-comment/HtmlComment';
const SearchSelect = props => {
    return (
        <div className="control-group form-group form-group--select input-field position-relative">

            <select id="condition" name="condition" class="select_search form-control search_selector">
                <option value="value1" selected>value1</option>
                <option value="value2">value2</option>
                <option value="value3">value3</option>
                <option value="value4">value4</option>
                <option value="value5">value5</option>
                <option value="value5">value5</option>
                <option value="value6">value6</option>
                <option value="value7">value7</option>
                <option value="value8">value8</option>
                <option value="value9">value9</option>
            </select>

            {/* <input id="selected" list="browsers" name="browser" placeholder="Start typing..."></input> */}
            {/* <input id={props.id} list={props.DatalistId} name={props.name} placeholder={props.placeHolder} className='select_search form-control flexdatalist'></input>
            
            <datalist id={props.DatalistId}>
                {
                    (props.options && props.options).map(ops => {
                        return (
                            <option data-value={ops.value} value={ops.displayValue}></option>
                        )
                    })
                }
            </datalist> */}
            
            {/* <select class="form-control" name={props.name} id={props.id} multiple={(props.multiselect && (props.multiselect == 'true' || props.multiselect == true)) ? true : false} required={props.requiredText || false} {...disabledInp}>
                {
                    (props.options && props.options).map(ops => {
                        return (
                            <option value={ops.value} selected={ops.selected}>{ops.displayValue}</option>
                        )
                    })
                }
            </select> */}

            {/* <label htmlFor={props.id||''}>
                <span class="required-txt">{props.requiredText || ''}</span>
            </label> */}

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
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="#1A1F2F" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
            <HtmlComment text="#End angel down custom arrow for select" />
        </div>
    )
}

export default SearchSelect
