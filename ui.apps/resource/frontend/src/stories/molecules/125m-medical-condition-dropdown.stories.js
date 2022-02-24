import React from 'react'
import { storiesOf } from '@storybook/react'
import MedicalConditionDropdown from '../../components/molecules/medical-condition-dropdown/medical-condition-dropdown'
import SelectionModal from '../../components/molecules/selection-modal/selection-modal'

storiesOf("Molecules | Medical Condition Dropdown", module)

.add("Medical Condition Dropdown", () =>{
    return (
        <>
            <MedicalConditionDropdown />
            <SelectionModal/>
        </>
    )
})