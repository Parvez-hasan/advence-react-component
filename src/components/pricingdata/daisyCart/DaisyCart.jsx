import React from 'react'

export const DaisyCart = ({ pricing }) => {
     const {title, price, popular, description, features} = pricing
    return (
        <div className="card w-96 bg-emerald-200 shadow-sm mt-3">
            <div className="card-body">
                {popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                }
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <span className="text-xl">{price}</span>  
                </div>
                <p className='text-xl md:text-2xl'>{description}</p>
                <ul className="mt-2 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature, index) => <li key={index} feature={feature}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                    </li>)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
