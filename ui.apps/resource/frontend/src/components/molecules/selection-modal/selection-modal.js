import React from 'react'
import SearchSelect from '../search-select/search-select'
import HtmlComment from '../../particles/html-comment/HtmlComment';
import ButtonLink from '../button-link/ButtonLink';
const SelectionModal = props => {
    return (
        <div className="selection-modal section">
            <div className="modal fade show pl-0" id="selectionModal">
                <div class="modal-dialog modal-dialog-centered ml-auto mr-auto">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-header-title">Crohn's disease</h4>
                            <button type="button" class="modal-header-close" data-dismiss="modal">
                                <img className="d-none d-lg-block" src="images/icons/icon_close_large.png" alt="close large" />
                                <img className="d-block d-lg-none" src="images/icons/close-icon-small.png" alt="close small" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="modal-body-content">
                                <p>Crohn’s disease is a medical condition that affects the bowel and causes inflammation to occur in the digestive tract. It results in a wide range of symptoms including diarrhea, stomach pain, blood in stools, and weight loss. Symptoms can come and go over time, which can have a significant impact on day-to-day life and make it difficult to manage. While the exact cause is unknown and there is currently no cure, symptoms can be reduced or effectively controlled through a range of treatments.</p>
                                <p>Along with support from your doctor, specific patient association websites can help you understand more about your condition and ideas on how to manage it, and provide you with access to a network of others who have the same condition.</p>
                                <p>Galapagos is committed to developing treatments for medical conditions with an unmet need, such as Crohn’s disease. To find out if there is a clinical trial relevant to you, speak to your doctor. You can also search for relevant Galapagos clinical trials below.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 class="modal-footer-title">Find a clinical trial</h3>
                                    </div>
                                    <div className="col-md-8">
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
                                    <div className="col-md-4">
                                        <div className="select-modal__search-btn">
                                            <ButtonLink 
                                                button_styles='primary' 
                                                btn_text='Search' 
                                                button_textColor='white'
                                                buttonlink_href=''
                                                buttonlink_target=''
                                                buttonlink_title='Search' 
                                                button_type='' 
                                                button_width='w-100'
                                            /> 
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionModal
