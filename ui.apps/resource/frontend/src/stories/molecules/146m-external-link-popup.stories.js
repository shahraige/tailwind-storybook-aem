import React from 'react'
import { storiesOf } from '@storybook/react'
import ExternalLinkPopup from '../../components/molecules/external-link-popup/external-link-popup'

storiesOf("Molecules | External Link popup", module)

.add("External Link popup", () =>{
    return (
        <>
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                Toggle modal
            </button>
            <ExternalLinkPopup/>
        </>
    )
})