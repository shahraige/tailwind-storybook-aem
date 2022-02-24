import React from 'react'
import { storiesOf } from '@storybook/react'
import TeaserGallery from '../../components/molecules/teaser-gallery/teaser-gallery'

storiesOf('Molecules | Teaser Gellary', module)

.add("Teaser Gellary", () =>{
    
    return <TeaserGallery />
});