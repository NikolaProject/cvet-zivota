import React from 'react'

const Item = ({ itemData }) => {
    if (itemData.hidden) return null;

    return (
        <div className='p-5'>
            <h1 className='font-velikaslova text-3xl  md:text-4xl mt-5'>{itemData.title}</h1>
            <h2 className='font-velikaslova text-3xl mt-5 text-zelena'>{itemData.subtitle}</h2>
            <p className='font-opensans pb-10'>{itemData.brackets}</p>
            <div className="grid">
                <p className='mr-0 lg:mr-20 md:h-[450px]'>
                    {
                        itemData.content.map((content) => (<span>{content}<br/></span>))
                    }
                </p>
            </div>
            
        </div>
    );
}

export default Item
