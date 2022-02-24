import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchFilterOverlay from '../../components/molecules/search-filter-overlay/search-filter-overlay'
import Header from '../../components/molecules/header/header';
storiesOf("Molecules | Search Filter Overlay", module)

.add("Search Filter Overlay", () =>{
    return (
        <>
            <Header />

            <SearchFilterOverlay/>
        </>
    )
})