import React from 'react'
import PropTypes from 'prop-types'
import ImageExtension from '../image-extension/ImageExtension'
import HeadlineText from '../headline-text/HeadlineText'

const CmpAccordion = (props) =>{
    return (
        <div className="cmp-accordion section">
            <div className="cmp-accordion__inner section">            
                <div id="accordion">
                    <div className="cmp-accordion--item">

                        <div className="cmp-accordion-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="cmp-accordion-header--img"> 
                                <img src="images/icon_inclusion.svg" alt="icon" />                                                     
                            </div>
                            
                            <h5 className="cmp-accordion-header--title">Lorem Ipsum is simply dummy text of the printing and typesetting</h5>

                            <div className="cmp-accordion-collapse-icon"><span></span></div>
                        </div>

                        <div id="collapseOne" className="cmp-accordion-content collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="cmp-accordion-content__inner">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                <HeadlineText>
                                    <ul>
                                        <li>Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</li>
                                        <li>Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</li>
                                        <li>Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</li>
                                        <li>Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</li>
                                    </ul>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="cmp-accordion--item">
                        <div className="cmp-accordion-header" id="heading2" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                            <div className="cmp-accordion-header--img"> 
                                <img src="images/icon_exclusion1.svg" alt="icon" />                                                     
                            </div>

                            <h5 className="cmp-accordion-header--title">Inclusion criteria 1</h5>

                            <div className="cmp-accordion-collapse-icon"><span></span></div>
                        </div>

                        <div id="collapse2" className="cmp-accordion-content collapse show" aria-labelledby="heading2" data-parent="#accordion">
                            <div className="cmp-accordion-content__inner">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

CmpAccordion.defaultProps = {

}

CmpAccordion.PropTypes = {

}

export default CmpAccordion;