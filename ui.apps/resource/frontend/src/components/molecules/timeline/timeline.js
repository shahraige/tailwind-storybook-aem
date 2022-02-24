import React from 'react'
import PropTypes from 'prop-types'
import CmpAccordion from '../accordion/cmp-accordion'
import ImageExtension from '../image-extension/ImageExtension'

const Timeline = (props) =>(
    <div className="timeline section">
        <div className="timeline__wrapper">
            <div className="timeline__item first-child">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="timeline__item__img">
                                <img className="img-fluid" src="images/timeline/HCPs-1.png" />
                            </div>

                            <div className="d-block d-md-none">
                                <div className="cmp-accordion section">
                                    <div className="cmp-accordion__inner section">            
                                        <div id="accordion">
                                            <div className="cmp-accordion--item">

                                                <div className="cmp-accordion-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    
                                                    <h5 className="cmp-accordion-header--title">Explaining why a clinical trial may be an option </h5>

                                                    <div className="cmp-accordion-collapse-icon"><span></span></div>
                                                </div>

                                                <div id="collapseOne" className="cmp-accordion-content collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="cmp-accordion-content__inner">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="timeline__item__details">
                                <h3>Explaining why a clinical trial may be an option </h3>
                                <p>While some patients actively look for suitable clinical trials, many are not aware that it could be an option for them or are unsure of what they are. Through providing an overview of clinical trials, including the strict ethical and procedural guidelines, you can help to ensure they receive all the information they need to make an informed decision about their treatment and potential clinical trial participation.</p>
                                <a href="#">See clinical trial overview for patients and caregivers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline__item second-child">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-md-2 order-lg-1">
                            <div className="timeline__item__details">
                                <h3>Helping find a clinical trial </h3>
                                <p>In circumstances in which you think a clinical trial could be the best option for a patient, or a patient has expressed interest in enrolling onto a clinical trial, the following steps can be followed:</p>
                                <p> Search for a relevant clinical trial. You can search on this website to quickly find out if Galapagos is currently running Phase 2 to 4 trials that might be of interest to you. Identify whether a patient is eligible for the clinical trial by carefully reviewing the eligibility criteria. Discuss the clinical trial with the patient and provide an overview of the next steps.</p>
                                <a href="#">Find a clinical trial</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-md-1 order-lg-2">
                            <div className="timeline__item__img">
                                <img className="img-fluid" src="images/timeline/HCPs-2.png" />
                            </div>

                            <div className="d-block d-md-none">
                                <div className="cmp-accordion section">
                                    <div className="cmp-accordion__inner section">            
                                        <div id="accordion">
                                            <div className="cmp-accordion--item">

                                                <div className="cmp-accordion-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    
                                                    <h5 className="cmp-accordion-header--title">Helping find a clinical trial </h5>

                                                    <div className="cmp-accordion-collapse-icon"><span></span></div>
                                                </div>

                                                <div id="collapseTwo" className="cmp-accordion-content collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="cmp-accordion-content__inner">
                                                        In circumstances in which you think a clinical trial could be the best option for a patient, or a patient has expressed interest in enrolling onto a clinical trial, the following steps can be followed:<br></br><br></br>Search for a relevant clinical trial. You can search on this website to quickly find out if Galapagos is currently running Phase 2 to 4 trials that might be of interest to you. Identify whether a patient is eligible for the clinical trial by carefully reviewing the eligibility criteria. Discuss the clinical trial with the patient and provide an overview of the next steps.
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
            </div>

            <div className="timeline__item third-child">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="timeline__item__img">
                                <img className="img-fluid" src="images/timeline/HCPs-3.png" />
                            </div>

                            <div className="d-block d-md-none">
                                <div className="cmp-accordion section">
                                    <div className="cmp-accordion__inner section">            
                                        <div id="accordion">
                                            <div className="cmp-accordion--item">

                                                <div className="cmp-accordion-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    
                                                    <h5 className="cmp-accordion-header--title">Helping a patient enroll </h5>

                                                    <div className="cmp-accordion-collapse-icon"><span></span></div>
                                                </div>

                                                <div id="collapseThree" className="cmp-accordion-content collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="cmp-accordion-content__inner">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="timeline__item__details">
                                <h3>Helping a patient enroll</h3>
                                <p>If a suitable clinical trial is found and the patient is interested in enrolling, the next stage would be to contact the trial site. The trial coordinator can answer any questions you may have. If it is deemed suitable to progress to the next stage, the patient will meet with the trial coordinator. Then, after a number of tests have taken place, the decision will be made as to whether the patient can enter the trial.</p>
                                <p>During the process, it is important to reassure patients that you will still play an active role in their care and are likely to have more consultations while they are taking part in a trial.</p>
                                <a href="#">Read frequently asked questions by patients and caregivers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Timeline.defaultProps = {

}

Timeline.PropTypes = {

}

export default Timeline;