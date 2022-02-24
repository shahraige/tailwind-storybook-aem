import React from 'react'
import { storiesOf } from '@storybook/react'
import ItemGallery from '../../components/molecules/item-gallery/item-gallery';
import { select, text, boolean } from '@storybook/addon-knobs';

// Gallery Type
const gallery_type_lbl = 'Button Width';
const gallery_type_options = {
    "Card": 'Card',
    "Teaser": 'Teaser',
};
const gallery_type_defaultValue = 'Card';

storiesOf('Molecules | Item Gellary', module)
.add("Item Gellary", () =>{

    const gallery_type = select(gallery_type_lbl, gallery_type_options, gallery_type_defaultValue);
    
    return (
        <div className="container">
            <div className="col-md-12">
                <ItemGallery 
                    gallery_type={gallery_type}
                />
            </div>
        </div>
    )
});