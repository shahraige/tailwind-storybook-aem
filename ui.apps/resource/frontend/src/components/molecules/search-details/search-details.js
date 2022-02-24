import React, { useEffect } from 'react'
import ButtonLink from '../button-link/ButtonLink'
import FormCheckbox from '../form-checkbox/FormCheckbox'
import { text, boolean, select } from '@storybook/addon-knobs';
import HeadlineText from '../headline-text/HeadlineText';
import Separator from '../separator/separator';
import Box from '../box/box';
import ImageExtensio from '../image-extension/ImageExtension';
import InputField from '../input-field/InputField';
import SearchSelect from '../search-select/search-select';
import CountrySelect from '../country-select/country-select';
import Pagination from '../pagination/pagination';
import { CardHorinzontal } from '../card/card';
import CmpAccordion from '../accordion/cmp-accordion';
import CmpTable from '../cmp-table/cmp-table';
import TextImage from '../text-image/text-image';
import ImageExtension from '../image-extension/ImageExtension';
import IconNumber from '../icon-number/icon-number';
import Tooltip from '../tooltip/tooltip';

const SearchDetails = props => {
    return (
        <div className='search-details section'>
            <div className='search-details__'>
                <div className='search-details__banner'>

                    <div className='search-details__banner__inner'>
                        <HeadlineText>
                            <h1>
                                <span className="verveine-text underline-text">
                                    Trial result page for
                                </span>
                            </h1>
                        </HeadlineText>



                        <div className="headline-text cmp">
                            <div>
                                <div className="cmp-text">
                                    <h2>[Idiopathic Pulmonary Fibrosis (IPF)]</h2>
                                </div>
                            </div>
                        </div>

                        <Separator
                            borderColor="border-transparent"
                            size="size-1"
                        />

                        <div className="headline-text cmp">
                            <div>
                                <div className="cmp-text">
                                    <h5 className="short-descripiton">A clinical study to test how effective and safe GLPG1690 is for subjects with Idiopathic Pulmonary Fibrosis (IPF) when used together with standard of care (ISABELA1)</h5>
                                </div>
                            </div>
                        </div>

                        {/* <Separator
                            borderColor="border-transparent"
                            marginY="marginY-2"
                            size="size-1"
                        /> */}

                        <div className="row m-0">
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>

                                <div class="button-link section">
                                    <a data-result-type="recruite" class="btn btn-light w-100" data-type="" href="#" target="_self" title="button title" role="button">
                                        <span className="icon-text">Recruiting</span>
                                    </a>
                                </div>

                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>

                    <div className="search-details--footer">

                        <div className='left-section'>
                            <div class="button-link section">
                                <a class="btn btn-link text-dark" data-type="" href="#" target="_self" title="button title" role="button">
                                    <img className='button-icon' src="images/icons/icon-arrow-left-dark.svg" />
                                    Back to search results
                                </a>
                            </div>
                        </div>

                        <div className='right-section'>
                            <div class="button-link section">
                                <a class="btn btn-link text-dark" data-type="" href="#" target="_blank" title="button title" role="button">
                                    Download this page
                                    <img className="button-icon" src='images/icons/icon-download-dark.svg' />
                                </a>
                            </div>
                            <div class="button-link section">
                                <a class="btn btn-link text-dark btn-email" data-type="" href="#" target="_self" title="button title" role="button">
                                    Email this page
                                    <img className="button-icon" src="images/icons/icon-email-dark.svg" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="search-details__wrapper">
                    <div className="search-details__details">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className='box section'>
                                        <div className='box__inner box-100 m-0' style={{ backgroundColor: '#F3F5F8' }}>
                                            <div class="text-image section">
                                                <section class="text-image__wrapper m-0">
                                                    <div class="text-image__image align-self-center">
                                                        <ImageExtension
                                                            bottom_gap="no-bgap"
                                                            image_position="justify-content-start"
                                                            image_size="w-100"
                                                            image_src="data:image/png;base64,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"
                                                        />
                                                    </div>

                                                    <div class="text-image__body align-self-center">
                                                        <div class="headline-text cmp">
                                                            <div class="mb-0">
                                                                <div class=" cmp-text">
                                                                    <p className="note-text">
                                                                        In this trial, doctors hope to find out how the study drug works together with your current standard treatment in terms of its effects on your lung function and IPF in general. People with IPF have increased levels of something called autotaxin, which is thought to have a role in the progression of IPF. The trial is investigating whether decreasing the activity of autotaxin can have a positive effect. It will also look at how well the study drug is tolerated.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />


                                    <HeadlineText>
                                        <h3 className="trial-purpose">Trial purpose</h3>
                                    </HeadlineText>

                                    {/* <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-2"
                                        size="size-1"
                                    /> */}

                                    <HeadlineText>
                                        <p className="trial-purpose-text" dangerouslySetInnerHTML={{ __html: 'This study is comparing <different doses of> {GLPGXXX} <with a> <placebo> <comparator (an already approved drug)> to see whether {GLPGXXX} helps to treat {enter disease indication} and is safe to use. About {xx} participants will take part. About 750 participants will take part.' }}></p>
                                    </HeadlineText>

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />

                                    <div className='row'>
                                        <div className="col-md-6 col-lg-3">
                                            <CardHorinzontal
                                                cardType="inline"
                                                iconUrl="images/icons/icon-gender.svg"
                                                card_title="Gender"
                                                footerText="Male and female"
                                            />
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <CardHorinzontal
                                                cardType="inline"
                                                iconUrl="images/icons/icon-age.svg"
                                                card_title="Age range"
                                                footerText="40 years and older "
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <CardHorinzontal
                                                cardType="inline"
                                                iconUrl="images/icons/icon-phase.svg"
                                                card_title="Phase "
                                                footerText="Phase 3"
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <CardHorinzontal
                                                cardType="inline"
                                                iconUrl="images/icons/icon-study-dates.svg"
                                                card_title="Study dates"
                                                footerText="Nov 2018 - Dec 2020"
                                            />
                                        </div>
                                    </div>


                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="mt-3 mb-2"
                                        size="size-1"
                                    />

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="mt-0 mb-1"
                                        size="size-1"
                                    />

                                    <HeadlineText>
                                        <h3 className="eligibility-criteria">
                                            Eligibility criteria
                                            <span>
                                                <Tooltip requireinfoText="This is tooltip text" />
                                            </span>
                                        </h3>
                                    </HeadlineText>

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-3"
                                        size="size-1"
                                    />

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-1"
                                        size="size-1"
                                    />

                                    <CmpAccordion />

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />
                                    <div className="d-none d-lg-block">
                                        <Separator
                                            borderColor="border-transparent"
                                            marginY="marginY-4"
                                            size="size-1"
                                        />
                                    </div>
                                    <div className="d-lg-none">
                                        <Separator
                                            borderColor="border-transparent"
                                            marginY="marginY-2"
                                            size="size-1"
                                        />
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-2'></div>
                                        <div className='col-lg-8'>
                                            <ButtonLink
                                                btn_text="What to do next if you're interested in this trial"
                                                button_styles="primary"
                                                button_textColor="text-white"
                                                button_type=""
                                                button_width="w-100"
                                                buttonlink_href="#"
                                                buttonlink_target="_self"
                                                buttonlink_title="button title"
                                                modalTarget="exampleModalId-1"
                                            />
                                        </div>
                                        <div className='col-lg-2'></div>
                                    </div>
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-4"
                                        size="size-1"
                                    />
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-2"
                                        size="size-5"
                                    />
                                    <HeadlineText>
                                        <h3 className="map-title">Where to participate</h3>
                                    </HeadlineText>
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-3"
                                        size="size-1"
                                    />
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="mt-1 mb-2"
                                        size="size-1"
                                    />
                                    <div className="search-result-desktop__wrapper">
                                        <div className="search-result-desktop__details participate__details">
                                        <div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="search-result-desktop__filter">
                                                        <div className="row">
                                                            <div className="col-md-6 col-lg-4">
                                                                <CountrySelect
                                                                    labelText='Country'
                                                                    requireinfoText='<b>Search by medical</br> condition, trial ID, etc. </b>'
                                                                />
                                                            </div>
                                                            <div className="d-none d-lg-block col-lg-8">
                                                            </div>
                                                            <div className="col-md-6 col-lg-4">
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

                                                            <div className="col-md-6 col-lg-4">
                                                                <SearchSelect
                                                                    id="Distance1"
                                                                    DatalistId="Distance"
                                                                    labelText='Distance from postcode/zip code'
                                                                    name='Distance'
                                                                    disabled='false'
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

                                                            <div className="col-md-6 col-lg-4">
                                                                <ButtonLink
                                                                    button_styles="outline-primary"
                                                                    button_width="w-100"
                                                                    btn_text="SHOW MAP"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>




                                    <div className="search-details-map" style={{ background: '#eee' }} />
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="mt-1 mb-3"
                                        size="size-1"
                                    />
                                    <div className="search-details--footer justify-content-end">
                                        <div className='right-section'>
                                            <div class="button-link section">
                                                <a class="btn btn-link text-dark" data-type="" href="#" target="_blank" title="button title" role="button">
                                                    Download this page
                                                    <img className="button-icon" src='images/icons/icon-download-dark.svg' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="mt-1 mb-3"
                                        size="size-1"
                                    />

                                    <CmpTable />

                                    <div className="box section">
                                        <div className="box__inner box-100 p-2 m-0" style={{ backgroundColor: '#F3F5F8' }}>
                                            <div className="contact-block">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-3">
                                                        <IconNumber
                                                            icontext=""
                                                            textNumber=""
                                                            tooltipText=""
                                                            isLink
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-lg-3">
                                                        <IconNumber
                                                            icontext="Clinicaltrials.gov identifier:"
                                                            textNumber="NCT03711162"
                                                            tooltipText="The unique code given by <br /> Clinicaltrials.gov when <br />  the trial was registered "
                                                            isLink
                                                        />
                                                    </div>
                                                    <div className="col-md-6 col-lg-3">
                                                        <IconNumber />
                                                    </div>
                                                    <div className="col-md-6 col-lg-3">
                                                        <IconNumber />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-2"
                                        size="size-1"
                                    />

                                    <HeadlineText>
                                        <p><span className="official-title">Official title:</span> A Phase 3, Randomized, Double-blind, Parallel-group, Placebo-controlled Multicenter Study to Evaluate the Efficacy and Safety of Two Doses of GLPG1690 in Addition to Local Standard of Care for Minimum 52 Weeks in Subjects With Idiopathic Pulmonary Fibrosis</p>
                                    </HeadlineText>

                                    <Separator
                                        borderColor="border-transparent"
                                        marginY="marginY-2"
                                        size="size-1"
                                    />

                                    <div className="d-none d-lg-block">
                                        <Separator
                                            borderColor="border-transparent"
                                            marginY="marginY-4"
                                            size="size-1"
                                        />
                                    </div>

                                    <div className="search-details--footer">

                                        <div className='left-section'>
                                            <div class="button-link section">
                                                <a class="btn btn-link text-dark" data-type="" href="#" target="_self" title="button title" role="button">
                                                    <img className='button-icon' src="images/icons/icon-arrow-left-dark.svg" />
                                                    Back to search results
                                                </a>
                                            </div>
                                        </div>

                                        <div className='right-section'>
                                            <div class="button-link section">
                                                <a class="btn btn-link text-dark" data-type="" href="#" target="_blank" title="button title" role="button">
                                                    Download trial summary page
                                                    <img className="button-icon" src='images/icons/icon-download-dark.svg' />
                                                </a>
                                            </div>
                                            <div class="button-link section">
                                                <a class="btn btn-link text-dark" data-type="" href="#" target="_self" title="button title" role="button">
                                                    Email this page
                                                    <img className="button-icon" src="images/icons/icon-email-dark.svg" />
                                                </a>
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

export default SearchDetails