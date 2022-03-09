import React from 'react'
import { storiesOf } from '@storybook/react'
import FluidCarousel from '../../components/molecules/fluid-carousel/fluid-carousel'

storiesOf("Molecules | Fluid Carousel", module)

.add("Fluid Carousel", () =>{
    return (
        <>
            <FluidCarousel/>
        </>
    )
})