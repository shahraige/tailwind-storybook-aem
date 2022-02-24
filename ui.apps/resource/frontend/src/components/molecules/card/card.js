import React from 'react'
import PropTypes from 'prop-types'
import HeadlineText from '../headline-text/HeadlineText'

const Card = (props) =>(
    <div className="card section">
        <div className="card__inner">
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                        <div className="card__inner__item">
                            <div className="icon"><img src="storybook-images/GLPG-icon-1.svg" alt="transparency-icon" /></div>
                            <div className="title">{props.card_title}</div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#">
                        <div className="card__inner__item">
                            <div className="icon"><img src="storybook-images/transparency-icon-2.png" alt="transparency-icon" /></div>
                            <div className="title">{props.card_title}</div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#">
                        <div className="card__inner__item">
                            <div className="icon"><img src="storybook-images/transparency-icon-2.png" alt="transparency-icon" /></div>
                            <div className="title">{props.card_title}</div>
                        </div>
                    </a>
                </div>
            </div>           
        </div>
    </div>
)


// this html for card  tow column
export const CardTwoColumn = (props) =>{

    return(
    <div className="card section">
        <div className="card__inner">
            <div className="row">
                <div className="col-md-6">
                    <a href="#">
                        <div className="card__inner__item">
                            <div className="icon"><img src="storybook-images/GLPG-icon-1.svg" alt="transparency-icon" /></div>
                            <div className="title">{props.card_title}</div>
                        </div>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href="#">
                        <div className="card__inner__item">
                            <div className="icon"><img src="storybook-images/transparency-icon-2.png" alt="transparency-icon" /></div>
                            <div className="title">{props.card_title}</div>
                        </div>
                    </a>
                </div>
            </div>           
        </div>
    </div>
    )
}


// this html for card  horizontal

export const CardHorinzontal = (props) =>(
    <div className="card section">
            <a href="#">
                <div className={`card__inner__item--inline`}>
                    <div className='icon-text-wrap'>
                        <div className="icon"><img src={props.iconUrl||"storybook-images/GLPG-icon-1.svg"} alt="transparency-icon" /></div>
                        <div className="title">{props.card_title}</div>
                    </div>

                    {props.footerText ? (
                        <div className='card__inner--footer'>
                            {props.footerText||'Male and female '}
                        </div>
                    ):''}

                </div>
            </a>  
    </div>
)

export const CardHorinzontalRow = (props) =>{

    return(
    <div className="card section">
            <div>
                <div className={`card__inner__item--inline card__inner__item--row`}>
                    <div className='icon-text-wrap'>
                        <div className="icon"><img src={props.iconUrl||"storybook-images/GLPG-icon-1.svg"} alt="icon" /></div>
                        <div className="title">{props.card_title}</div>
                    </div>

                    {props.footerText ? (
                        <div className='card__inner--footer' dangerouslySetInnerHTML={{__html: props.footerText||'Male and female '}}></div>
                    ):''}

                </div>
            </div>  
    </div>
    )
}


export const CardFeature = (props) =>{

    return(
        <div className="card section">
            <div className="card__inner card__inner--feature">
                <div className="row">
                    <div className="col-lg-6">
                        <div class="card__inner__feature-item">
                            <div className="card__inner__feature-item__top">
                                <div className="icon"><img src="images/icons/GLPG-value-1.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Putting patients at the center of everything we do</h3>
                                </div>
                            </div>
                            <div className="card__inner__feature-item__details">
                                <HeadlineText>
                                    <p>Our priority is to bring innovative treatments to people with the greatest unmet need and to do this with both purpose and speed</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div class="card__inner__feature-item">
                            <div className="card__inner__feature-item__top">
                                <div className="icon"><img src="images/icons/GLPG-value-2.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Experts in discovery</h3>
                                </div>
                            </div>
                            <div className="card__inner__feature-item__details">
                                <HeadlineText>
                                    <p>Medical breakthroughs are discovered by those willing to look for them. We charter through unknown territory to develop treatments that have the potential to change lives</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div class="card__inner__feature-item">
                            <div className="card__inner__feature-item__top">
                                <div className="icon"><img src="images/icons/GLPG-value-3.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Pushing boundaries </h3>
                                </div>
                            </div>
                            <div className="card__inner__feature-item__details">
                                <HeadlineText>
                                    <p>We are not constrained by the status quo. Our in-depth expertise means we can adapt and meet every challenge as a unique opportunity</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div class="card__inner__feature-item">
                            <div className="card__inner__feature-item__top">
                                <div className="icon"><img src="images/icons/GLPG-value-4.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Meeting the highest standards and ethics</h3>
                                </div>
                            </div>
                            <div className="card__inner__feature-item__details">
                                <HeadlineText>
                                    <p>We follow rigorous procedures and guidelines to ensure Galapagos is able to deliver to the highest standards and ethics for volunteers and patients</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>
                    
                </div>           
            </div>
        </div>
    )
}


export const CardStep = (props) =>{

    return(
        <div className="card section">
            <div className="card__inner card__inner--step">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card__inner__step-item">
                            <div className="card__inner__step-item__top">
                                <div className="icon"><img src="images/icons/icon_discover-1.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Discover</h3>
                                </div>
                            </div>
                            <div className="card__inner__step-item__details">
                                <HeadlineText>
                                    <p>Using human primary cells and patient cells, we discover which proteins (‘targets’) play a key role in causing diseases such as rheumatoid arthritis, inflammatory bowel disease and fibrosis</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card__inner__step-item">
                            <div className="card__inner__step-item__top">
                                <div className="icon"><img src="images/icons/icon_develop-2.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Develop</h3>
                                </div>
                            </div>
                            <div className="card__inner__step-item__details">
                                <HeadlineText>
                                    <p>We then develop small molecules that inhibit these targets, restore the balance and thereby positively influence the course of a disease</p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card__inner__step-item">
                            <div className="card__inner__step-item__top">
                                <div className="icon"><img src="images/icons/icon_deliver-3.png" alt="transparency-icon" /></div>
                                <div className="title">
                                    <h3>Deliver </h3>
                                </div>
                            </div>
                            <div className="card__inner__step-item__details">
                                <HeadlineText>
                                    <p>To deliver revolutionary treatments that can transform the disease landscape and change people’s lives  </p>
                                </HeadlineText>
                            </div>
                        </div>
                    </div>

                </div>           
            </div>
        </div>
    )
}



Card.defaultProps = {
    //card_title: 'Data Transparency',
    card_title: 'Who are Galapagos?'
}


Card.PropTypes = {
    card_title: PropTypes.string.isRequired
}


export default Card;