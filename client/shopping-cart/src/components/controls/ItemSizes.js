import React from 'react';
import ItemSelectorTitle from "./ItemSelectorTitle";

const ItemSizes = () => {
    const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];

    return(
        <>
        <ItemSelectorTitle  selector="Size" title={"EU Men"} />
        <div className={"item-sizes-container"}>
            {
                sizes &&
                sizes.map(t => {
                    return(
                        <button>
                            {t}
                        </button>
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemSizes;