import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import FormCheckbox from '../form-checkbox/FormCheckbox'
import HeadlineText from '../headline-text/HeadlineText'
import InputField from '../input-field/InputField';
import SearchSelect from '../search-select/search-select';
import CountrySelect from '../country-select/country-select';
import Pagination from '../pagination/pagination';
import Tooltip from '../tooltip/tooltip';

const SearchResultDesktop = props => {
    const { requireinfoText } = props;
    return (
        <div className='search-result-desktop'>
            <div className='search-result-desktop__banner'>
                <HeadlineText>
                    <h1>
                        <span class="verveine-text underline-text">
                            Search results for
                        </span>
                    </h1>
                    <h2>[Idiopathic Pulmonary Fibrosis]</h2>
                </HeadlineText>
            </div>

            <div className="search-result-desktop__wrapper">
                <div className="search-result-desktop__details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-result-desktop__filter">
                                    <div className="row">
                                        {/* <div className="col-md-5">
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
                                            />
                                        </div> */}
                                        <div className="col-md-4">
                                            <SearchSelect
                                                labelText='Search by medical condition'
                                            />
                                            {/* <SearchSelect
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
                                            />  */}
                                        </div>

                                        <div className="col-md-4">
                                            <CountrySelect
                                                labelText='Country'
                                                requireinfoText='<b>Search by medical</br> condition, trial ID, etc. </b>'
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
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
                                                requireinfoText='<b>Please insert text</b>'                                     
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <SearchSelect
                                                id="Distance1"
                                                DatalistId="Distance"
                                                labelText='Distance from postcode/zip code'
                                                name='Distance'
                                                disabled= 'false'
                                                options={[
                                                    {
                                                        displayValue: '50 km',
                                                        id: 1,
                                                        selected: false,
                                                        value: '50_km'
                                                    },
                                                    {
                                                        displayValue: '100 km',
                                                        id: 2,
                                                        selected: false,
                                                        value: '100_km'
                                                    },
                                                    {
                                                        displayValue: '150 km',
                                                        id: 3,
                                                        selected: false,
                                                        value: '150_km'
                                                    },
                                                ]}
                                                requiredText=""
                                            /> 
                                        </div>

                                        <div className="col-md-4">
                                            <ButtonLink
                                                button_styles="outline-primary"
                                                button_width="w-100"
                                                btn_text="update SEARCH"
                                            />
                                        </div>
                                    </div>

                                    <p><b>We have found 15 results. Use the filter to narrow your search. </b></p>
                                </div>

                                <div className="search-result-desktop__container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="search-result-desktop__container-filter">
                                                <div className="form-group mb-5">
                                                    <p className="text-uppercase">
                                                        <span><b>Trial status</b></span>
                                                        <Tooltip 
                                                            requireinfoText = "<p><b>Recruiting:</b> This trial is currently open and looking for people to enter the trial </p>
                                                            <p><b>Not yet recruiting:</b> This trial has not started recruiting people</p>
                                                            <p><b>Enrolling by invitation:</b> The trial is selecting its people from a population, or group of people, decided on by the researchers in advance. These trials are not open to everyone who meets the eligibility criteria but only to people in that particular population, who are specifically invited to participate</p>
                                                            <p><b>Active, not recruiting:</b> This trial is currently open but not currently looking for people to enter </p>
                                                            <p><b>Suspended:</b> This trial has stopped early but may start again. It is therefore not looking for people to enter the trial</p>
                                                            <p><b>Terminated:</b> This trial was stopped early, will not start again and is therefore not looking for people to enter the trial</p>
                                                            <p><b>Completed:</b> This trial has finished and is therefore not looking for people to enter the trial</p>
                                                            <p><b>Withdrawn:</b> This trial has stopped and is therefore not looking for people to enter the trial</p>"
                                                        />
                                                    </p>
                                                    <FormCheckbox 
                                                        name="All_our_trials"
                                                        id="All_our_trials"
                                                        ariaLabelText=""
                                                    >
                                                        <p>All our trials</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Recruiting"
                                                        id="Recruiting"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Recruiting</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Not_recruiting"
                                                        id="Not_recruiting"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Not recruiting yet</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Enrolling"
                                                        id="Enrolling"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Enrolling by invitation</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Active"
                                                        id="Active"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Active, not recruiting</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Suspended"
                                                        id="Suspended"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Suspended</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Terminated"
                                                        id="Terminated"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Terminated</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Completed"
                                                        id="Completed"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Completed</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Withdrawn"
                                                        id="Withdrawn"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Withdrawn</p>
                                                    </FormCheckbox>
                                                </div>

                                                <div className="form-group mb-5">
                                                    <p className="text-uppercase">
                                                        <span></span><b>PHASE</b>
                                                        <Tooltip 
                                                            requireinfoText = "<p>This site website provides information on all Galapagos Phase 2 to 4 clinical trials being investigated. For phase 1 trials, please search clinicaltrials.gov</p></br>
                                                            <p><b>Phase 2:</b> Phase 2 trials are tested in a larger group of people (often 100 to 300) and include those who have the medical condition the treatment is looking to treat. During these studies, it is possible to begin to get an idea as to whether the drug is likely to work, and researchers will look to see what dose may work best.</p>
                                                            <p><b>Phase 3:</b> If the results from the studies in Phase 1 and 2 are positive (they have passed safety checks and have shown evidence the treatment may work), then Phase 3 studies will take place. Here, the treatment is assessed in a much larger group of people (often 1000 to 3000) who have the medical condition, and the treatment is compared with an existing treatment or placebo to see how well it works.</p>
                                                            <p><b>Phase 4:</b> These trials occur after the treatment has been shown to be effective and is available to patients. During these studies, the long-term safety of the treatment will be reviewed. How well the treatment continues to work in patients will also be monitored.</p>"
                                                        />
                                                    </p>
                                                    <FormCheckbox 
                                                        name="Phase_2"
                                                        id="Phase_2"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Phase 2</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Phase_3"
                                                        id="Phase_3"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Phase 3</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="Phase_4"
                                                        id="Phase_4"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Phase 4</p>
                                                    </FormCheckbox>
                                                    
                                                </div>


                                                <div className="form-group mb-5">
                                                    <p className="text-uppercase"><b>Age Range</b></p>
                                                    <FormCheckbox 
                                                        name="age_17"
                                                        id="age_17"
                                                        ariaLabelText=""
                                                    >
                                                        <p>0-17 years</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="age_65"
                                                        id="age_65"
                                                        ariaLabelText=""
                                                    >
                                                        <p>18-65 years</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="age_66"
                                                        id="age_66"
                                                        ariaLabelText=""
                                                    >
                                                        <p>66+ years</p>
                                                    </FormCheckbox>
                                                    
                                                </div>

                                                <div className="form-group">
                                                    <p className="text-uppercase"><b>Gender</b></p>
                                                    <FormCheckbox 
                                                        name="all"
                                                        id="all"
                                                        ariaLabelText=""
                                                    >
                                                        <p>All</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="female"
                                                        id="female"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Female</p>
                                                    </FormCheckbox>

                                                    <FormCheckbox 
                                                        name="male"
                                                        id="male"
                                                        ariaLabelText=""
                                                    >
                                                        <p>Male</p>
                                                    </FormCheckbox>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="result-header">
                                                <div className="result-header__inner">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-4 header_item">Medical condition</div>
                                                            <div className="col-lg-3 header_item">Trial Status</div>
                                                            <div className="col-lg-3 header_item">Requirements</div>
                                                            <div className="col-lg-2 header_item">Distance</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="result-content">
                                                <div className="result-item" data-result-type="recruite">
                                                    <div className="result-item__inner">                            
                                                        <div className="result-content-title">
                                                            <div className="container">
                                                                <div className="row d-none d-lg-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile<br></br> 40 years and older</div>
                                                                    <div className="col-lg-2 header_item">
                                                                        15km
                                                                        <button type="button" className="place-tooltip" data-toggle="tooltip" data-placement="bottom" title="(Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu)">
                                                                        (Tawmatawyaasjhdadwbciqwwecadnasdnb)
                                                                        </button>
                                                                    </div>
                                                                </div>      

                                                                {/* start div for mobile version */}
                                                                <div className="row d-lg-none d-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item"> 15km
                                                                    </div>
                                                                </div>  
                                                                {/* end div for mobile version */}

                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="result-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                                                                        <ButtonLink 
                                                                            button_styles='primary' 
                                                                            btn_text='Learn more' 
                                                                            button_textColor='white'
                                                                            buttonlink_href=''
                                                                            buttonlink_target=''
                                                                            buttonlink_title='Learn more' 
                                                                            button_type='' 
                                                                        />       
                                                                        {/* <button type="button" class="btn btn-info float-right">Learn more</button> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                        
                                                </div>

                                                <div className="result-item"  data-result-type="enroll">
                                                    <div className="result-item__inner">                            
                                                        <div className="result-content-title">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Enrolling by invitation</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km
                                                                    <button type="button" className="place-tooltip" data-toggle="tooltip" data-placement="bottom" title="(Hardtner)">
                                                                        (Hardtner)
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                {/* start div for mobile version */}
                                                                <div className="row d-lg-none d-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>  
                                                                {/* end div for mobile version */}                                                
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="result-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                                                                        <ButtonLink 
                                                                            button_styles='primary' 
                                                                            btn_text='Learn more' 
                                                                            button_textColor='white'
                                                                            buttonlink_href=''
                                                                            buttonlink_target=''
                                                                            buttonlink_title='Learn more' 
                                                                            button_type='' 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                        
                                                </div>

                                                <div className="result-item"  data-result-type="not-recruite">
                                                    <div className="result-item__inner">                            
                                                        <div className="result-content-title">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Not yet recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>
                                                                {/* start div for mobile version */}
                                                                <div className="row d-lg-none d-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>  
                                                                {/* end div for mobile version */}                                                
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="result-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                                                                        <ButtonLink 
                                                                            button_styles='primary' 
                                                                            btn_text='Learn more' 
                                                                            button_textColor='white'
                                                                            buttonlink_href=''
                                                                            buttonlink_target=''
                                                                            buttonlink_title='Learn more' 
                                                                            button_type='' 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                        
                                                </div>

                                                <div className="result-item"  data-result-type="active-not-recruite">
                                                    <div className="result-item__inner">                            
                                                        <div className="result-content-title">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Not yet recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>
                                                                {/* start div for mobile version */}
                                                                <div className="row d-lg-none d-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">
                                                                        </span><span>Active, not recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>  
                                                                {/* end div for mobile version */}                                                
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="result-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                                                                        <ButtonLink 
                                                                            button_styles='primary' 
                                                                            btn_text='Learn more' 
                                                                            button_textColor='white'
                                                                            buttonlink_href=''
                                                                            buttonlink_target=''
                                                                            buttonlink_title='Learn more' 
                                                                            button_type='' 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                        
                                                </div>

                                                <div className="result-item"  data-result-type="withdraw">
                                                    <div className="result-item__inner">                            
                                                        <div className="result-content-title">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Not yet recruiting</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>
                                                                {/* start div for mobile version */}
                                                                <div className="row d-lg-none d-flex">
                                                                    <div className="col-lg-4 header_item">Idiopathic pulmonari fibrosis</div>
                                                                    <div className="col-lg-3 header_item">
                                                                        <span className="result-icon">Withdraw</span>
                                                                    </div>
                                                                    <div className="col-lg-3 header_item">Male and femaile <br></br>40 years and older</div>
                                                                    <div className="col-lg-2 header_item">15km</div>
                                                                </div>  
                                                                {/* end div for mobile version */}                                                
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="result-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                                                                        <ButtonLink 
                                                                            button_styles='primary' 
                                                                            btn_text='Learn more' 
                                                                            button_textColor='white'
                                                                            buttonlink_href=''
                                                                            buttonlink_target=''
                                                                            buttonlink_title='Learn more' 
                                                                            button_type='' 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                        
                                                </div>
                                            </div>
                                        
                                            <div className="my-5">
                                                <Pagination/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultDesktop