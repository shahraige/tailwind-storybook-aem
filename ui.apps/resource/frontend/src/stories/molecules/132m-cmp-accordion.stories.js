import React from 'react'
import { storiesOf } from '@storybook/react'
import CmpAccordion from '../../components/molecules/accordion/cmp-accordion'

storiesOf("Molecules | Accordion", module)

.add("Accordion", ()=>{
    return (
        <CmpAccordion />
    )
})
