import React from 'react'

const DeliveryFoodCategory = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow mb-4">
                <div className='w-24 h-24'>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPI2BUdQRWgFFtmKM8FTKV-b3q7WsRT7WpA&usqp=CAU"
                    alt="Pizza"
                    className="w-full h-full rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="my-1 text-sm text-center font-light mx-4">Ice Cream</h3>
                </div>
             </div>
        </>
    )
}

export default DeliveryFoodCategory
