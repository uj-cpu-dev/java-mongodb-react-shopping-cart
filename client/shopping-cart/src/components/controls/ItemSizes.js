import React from 'react';
import ItemSelectorTitle from "./ItemSelectorTitle";

const ItemSizes = ( { size, updateItemSize }) => {
    const sizes = ["40", "41", "42", "43", "43.5", "44", "44.5", "45", "46"].map(t => parseFloat(t));

    return(
        <>
        <ItemSelectorTitle  selector="Size" title={"EU Men"} />
        <div className={"item-sizes-container"}>
            {
                sizes &&
                sizes.map((t,i) => {
                    return(
                        <button
                            onClick={() => updateItemSize(t)}
                            className={`items-size-btn ${t === size ? 'btn-active' : ''}`}
                            key={i}
                        >
                            {t}
                        </button>)
                })
            }
        </div>
        </>
    )
}

export default ItemSizes;