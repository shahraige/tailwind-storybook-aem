import React from 'react'
import Card from '../card/card'
import TeaserGallery from '../teaser-gallery/teaser-gallery'

const ItemGallery = props =>{
    const { gallery_type } = props;

    return(
        <div className="item-gellary section">
            <div className="item-gellary__inner">
                {
                    gallery_type && gallery_type === 'Card'? <Card /> : <TeaserGallery/>
                }
            </div>
        </div>
    )
}

export default ItemGallery