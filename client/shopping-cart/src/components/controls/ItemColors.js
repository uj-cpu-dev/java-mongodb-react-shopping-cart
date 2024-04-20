import React from 'react';
import ItemSelectorTitle from "./ItemSelectorTitle";

const ItemColors = () => {
    return(
        <div className={'item-colors-container'}>
           <ItemSelectorTitle  selector="Color" title={"White"} />
            <figure className={'item-colors-images'}>
                <img src={''} alt={'first-img'}/>
                <img src={''} alt={'second-img'}/>
                <img src={''} alt={'third-img'}/>
            </figure>

        </div>
    )
}

export default ItemColors;