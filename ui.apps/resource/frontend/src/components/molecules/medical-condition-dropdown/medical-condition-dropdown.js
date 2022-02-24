import React from 'react'

const MedicalConditionDropdown = () =>(
    <div className="medical-condition-dropdown section">
        <div className="medical-condition-dropdown__inner">
            <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SELECST A MEDICAL CONDITION TO FIND A RELATED TRIAL
                </button>
                <div className="dropdown-menu">
                    <div className="item_wrapper">
                        <a className="dropdown-item" target="_blank" href="http://www.google.com" data-toggle="modal" data-target="#selectionModal">Psoriatic arthritis</a>
                        <a className="dropdown-item" target="_blank" href="http://www.google.com">Scleroderma/systemic sclerosis</a>
                        <a className="dropdown-item" href="#">Ulcerative colitis</a>
                        <a className="dropdown-item" href="#">Uveitis</a>
                        <a className="dropdown-item" href="#">I can't see the condition listed</a>
                        <a className="dropdown-item" href="#">Psoriatic arthritis</a>
                        <a className="dropdown-item" href="#">Scleroderma/systemic sclerosis</a>
                        <a className="dropdown-item" href="#">Ulcerative colitis</a>
                        <a className="dropdown-item" href="#">Uveitis</a>
                        <a className="dropdown-item" href="#">I can't see the condition listed</a>
                        <a className="dropdown-item" href="#">Psoriatic arthritis</a>
                        <a className="dropdown-item" href="#">Scleroderma/systemic sclerosis</a>
                        <a className="dropdown-item" href="#">Ulcerative colitis</a>
                        <a className="dropdown-item" href="#">Uveitis</a>
                        <a className="dropdown-item" href="#">I can't see the condition listed</a>
                        <a className="dropdown-item" href="#">Psoriatic arthritis</a>
                        <a className="dropdown-item" href="#">Scleroderma/systemic sclerosis</a>
                        <a className="dropdown-item" href="#">Ulcerative colitis</a>
                        <a className="dropdown-item" href="#">Uveitis</a>
                        <a className="dropdown-item" href="#">I can't see the condition listed</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default MedicalConditionDropdown