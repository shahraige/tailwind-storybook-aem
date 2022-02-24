import React from 'react'
import { storiesOf } from '@storybook/react'
import CarouselHcp from '../../components/molecules/carousel-hcp/carousel-hcp'

storiesOf("Molecules | carousel hcp", module)

.add("default", ()=>{
    return (
        <CarouselHcp /> 
    )
})