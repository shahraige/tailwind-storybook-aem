import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import FormCheckbox from '../form-checkbox/FormCheckbox'
import InputField from '../input-field/InputField'
import SearchSelect from '../search-select/search-select'
import CountrySelect from '../country-select/country-select'

const SearchFilterOverlay = props => {
    useEffect(() => {
        if (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0)
            || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
            || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
        ) {
            var options = {
                delay: { "show": 500, "hide": 0 },
                container: 'body', 
            }
            $('[rel="tooltip"]').tooltip(options);
        } else {
            var options = {
                delay: 180,
                container: 'body',
            }
            $('[rel="tooltip"]').tooltip(options);
        }
    }, []);
    return (
        <div className='search-filter-overlay'>
            <div className='search-filter-overlay__wrapper'>
                <div className='search-filter-overlay__container'>
                    <form>
                    <div className='row'>
                        {/* <div className='col-md-6'>
                            <InputField
                                id='Keyword'
                                type='text'
                                name='Keyword'
                                width=''
                                placeholder=''
                                value=''
                                feedBack='Please insert text'
                                labelText='Keyword search'
                                feildId='Keyword'
                                requiredText=''
                                requireinfoText='<b>Search by medical</br> condition, trial ID, etc. </b>'
                            />
                        </div>     */}
                        <div className='col-md-12'>
                            <SearchSelect
                                id="select21"
                                DatalistId="search"
                                labelText='Search by medical condition'
                                name='select'
                                disabled= 'false'
                                options={[
                                    {
                                        displayValue: 'Apple',
                                        id: 1,
                                        selected: false,
                                        value: 'apple'
                                    },
                                    {
                                        displayValue: 'Black Berry',
                                        id: 2,
                                        selected: false,
                                        value: 'berry'
                                    },
                                    {
                                        displayValue: 'Coconut',
                                        id: 3,
                                        selected: false,
                                        value: 'coconut'
                                    },
                                    {
                                        displayValue: 'Dragon Fruit',
                                        id: 4,
                                        selected: false,
                                        value: 'dragon'
                                    },
                                    {
                                        displayValue: 'Elderberries',
                                        id: 5,
                                        selected: false,
                                        value: 'elderberries'
                                    },
                                    {
                                        displayValue: 'Figs',
                                        id: 6,
                                        selected: false,
                                        value: 'figs'
                                    },
                                    {
                                        displayValue: 'Grapefruit',
                                        id: 6,
                                        selected: false,
                                        value: 'grape'
                                    }
                                ]}
                                requiredText=""
                            /> 
                        </div>      
                        <div className='col-md-6'>
                            <div className="form-group">
                                <CountrySelect
                                    labelText='Country'
                                    requireinfoText='<b>Search by medical</br> condition, trial ID, etc. </b>'
                                />
                            </div>
                        </div>  
                          
                        <div className='col-md-6'>
                            <InputField
                                id='Postcode'
                                type='text'
                                name='Postcode'
                                width=''
                                placeholder=''
                                value=''
                                feedBack='Please insert text'
                                labelText='Postcode/zip code'
                                feildId='Postcode'
                                requireinfoText='<b>Please insert Postcode</b>'    
                                disabled                                    
                            />
                        </div> 

                        <div className='col-md-6'>
                            <FormCheckbox
                                id="recruite"
                                name="recruite"
                                checkboxText=""
                                ariaLabelText={"Aria help text for screen reader"}
                                checked={false}
                                disabled={false}
                            >
                            <p>Only show me trials recruiting now or recruiting soon</p>
                            </FormCheckbox>
                        </div> 

                        <div className='col-md-12'>
                            {/* <ButtonLink
                                btn_text='SEARCH'
                                button_width='w-100'
                                button_styles='outline-primary'
                                button_textColor='white'
                            /> */}
                            <input
                                class="btn btn-outline-primary white  w-100"
                                data-type=""
                                type="submit"
                                target="_blank"
                                title=""
                                value="SEARCH"
                                />
                        </div>
                    </div>    
                    </form>
                </div>

                <div className='search-filter-overlay__close'></div> 
            </div>
        </div>
    )
}

export default SearchFilterOverlay
