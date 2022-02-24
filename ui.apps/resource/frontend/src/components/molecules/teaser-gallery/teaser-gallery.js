import React from 'react'
import ButtonLink from '../button-link/ButtonLink'

const TeaserGallery = (props) =>(
    <div className="teaser-gellary section">
        <div className="teaser-gellary__inner">
            <div className="row">
                <div className="col-md-6">
                    <div className="gellary-item">
                        <div className="gellary-item__img">
                            <img src="storybook-images/patients.png" alt="" />
                        </div>
                        <div className="gellary-item__overlay">                            
                            <ButtonLink button_styles='info' btn_text='Startseite' />                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TeaserGallery