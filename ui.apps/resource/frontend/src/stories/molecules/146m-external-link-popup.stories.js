import React from 'react'
import { storiesOf } from '@storybook/react'
import ExternalLinkPopup from '../../components/molecules/external-link-popup/external-link-popup'

storiesOf("Molecules | External Link popup", module)

.add("External Link popup", () =>{
    return (
        <>
            <ExternalLinkPopup/>
        </>
    )
})