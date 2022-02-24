import React from 'react'
import { storiesOf } from '@storybook/react'
import ExternalLinkPopup from '../../components/molecules/external-link-popup/external-link-popup'

storiesOf("Molecules | External Link popup", module)

.add("External Link popup", () =>{
    return (
        <>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ExternalLinkPopup">
                Open External Link popup
            </button>
            <ExternalLinkPopup/>
        </>
    )
})