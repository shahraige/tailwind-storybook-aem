import React from 'react'
import { storiesOf } from '@storybook/react'
import Card, { CardFeature, CardHorinzontal, CardHorinzontalRow, CardTwoColumn, CardStep } from '../../components/molecules/card/card'
import { text } from '@storybook/addon-knobs'

storiesOf('Molecules | Card', module)

.add("Card", () =>{
    const card_title = text('Card Title', 'Data Transparency')
    return(
        <Card card_title = {card_title} />
    )
})

.add("Card two column", () =>{
    const card_title = text('Card Title', 'Data Transparency')
    return(
        <CardTwoColumn card_title = {card_title} />
    )
})

.add("Card inline", () =>{
    const card_title = text('Card Title', 'Data Transparency')
    return(
        <CardHorinzontal
            cardType="inline"
            iconUrl="images/icons/icon-gender.svg"
            card_title="Gender"
            footerText="Male and female"
        />
    )
})

.add("Card inline-row", () =>{
    const card_title = text('Card Title', 'Data Transparency')
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <CardHorinzontalRow
                        cardType="inline"
                        iconUrl="images/icons/icon-step-1.png"
                        card_title="Step-1"
                        footerText="Take a careful look through the inclusion and exclusion criteria to double-check the requirements "
                    />
                </div>
            </div>
        </div>
    )
})

.add("Card Feature", () =>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <CardFeature/>
                </div>
            </div>
        </div>
    )
})

.add("Card Step", () =>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <CardStep/>
                </div>
            </div>
        </div>
    )
})

