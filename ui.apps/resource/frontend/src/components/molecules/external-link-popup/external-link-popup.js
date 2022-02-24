import React from 'react'
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ButtonLink from '../button-link/ButtonLink';
import HeadlineText from '../headline-text/HeadlineText';

const ExternalLinkPopup = props => {
    return (
        <div className="external-link-popup section">
            <div className="modal fade show pl-0" id="ExternalLinkPopup">
                <div class="modal-dialog modal-dialog-centered ml-auto mr-auto">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="modal-header-close" data-dismiss="modal">
                                <img className="d-none d-lg-block" src="images/icons/icon_close_large.png" alt="close large" />
                                <img className="d-block d-lg-none" src="images/icons/close-icon-small.png" alt="close small" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="modal-body-content">
                                <HeadlineText>
                                    <h5><b>Please note you are now leaving the Galapagos Clinical Trials Portal.</b></h5>
                                </HeadlineText>
                                <HeadlineText>
                                    <h5>This link is being provided strictly for you to access the Contact information for Galapagos on the corporate website.</h5>
                                </HeadlineText>
                                
                                <ButtonLink 
                                    button_styles='primary' 
                                    btn_text='Visit Galapagos corporate website' 
                                    button_textColor='white'
                                    buttonlink_href=''
                                    buttonlink_target=''
                                    buttonlink_title='Visit Galapagos corporate website' 
                                    button_type='' 
                                    button_width=''
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExternalLinkPopup
