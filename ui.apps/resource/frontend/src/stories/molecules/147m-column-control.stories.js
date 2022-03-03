import React from 'react'
import { storiesOf } from '@storybook/react'
import ColumnControl from '../../components/molecules/column-control/column-control'

storiesOf("Molecules | Column Control", module)

.add("Column Control", () =>{
    return (
        <>
            <ColumnControl
            // cols="2"
            lg={true}
            // md={true}
            lg_cols="3"
            md_cols="2"
            gap="1"/>
        </>
    )
})