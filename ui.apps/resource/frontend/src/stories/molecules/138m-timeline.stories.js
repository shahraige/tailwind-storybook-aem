import React from 'react'
import { storiesOf } from '@storybook/react'
import Timeline from '../../components/molecules/timeline/timeline'

storiesOf("Molecules | Timeline", module)

.add("Timeline", () =>{
    return (
        <>
            <Timeline />
        </>
    )
})