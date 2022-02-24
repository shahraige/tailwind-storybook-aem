import React from 'react'
import { storiesOf } from '@storybook/react'
import IconNumber from '../../components/molecules/icon-number/icon-number'

storiesOf("Molecules | Icon Number", module)

.add("Icon Number", () =>{
    return (
        <IconNumber/>
    )
})