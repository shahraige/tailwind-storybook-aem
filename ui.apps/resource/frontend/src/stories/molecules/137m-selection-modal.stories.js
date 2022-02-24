import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectionModal from '../../components/molecules/selection-modal/selection-modal'

storiesOf("Molecules | Selection Modal", module)

.add("Modal", () =>{
    return (
        <>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#selectionModal">
                Open modal
            </button>
            <SelectionModal/>
        </>
    )
})