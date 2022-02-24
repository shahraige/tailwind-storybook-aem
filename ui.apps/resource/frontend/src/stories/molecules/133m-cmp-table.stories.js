import React from 'react'
import { storiesOf } from '@storybook/react'
import CmpAccordion from '../../components/molecules/accordion/cmp-accordion'
import CmpTable from '../../components/molecules/cmp-table/cmp-table'

storiesOf("Molecules | cmp table", module)

.add("Cmp table", ()=>{
    return (
        <CmpTable />
    )
})
