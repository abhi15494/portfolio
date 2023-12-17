"use client"
import React, { useEffect, useState }  from 'react'

export const UICounter = (props) => {
    const {
        limiter = 0,
        title,
        subtitle
    } = props;
        
    const [count, setcount] = useState(0);
    const timer = 50;
    
    useEffect(() => {
        const syncGap = Math.ceil(3 *  limiter / (timer));

        let innerCount = 0;
        const interval = setInterval(() => {
        
        setcount(p => p += syncGap);
        innerCount += syncGap;

        if(innerCount >= limiter) {
            setcount(limiter);
            clearInterval(interval);
        }
        }, timer);
        
        return () => {
        clearInterval(interval);
        };

    }, [limiter]);
    

    return (
        <div className='p-counter-wrapper animate'>
            <div className='p-counter-box'>
                <div className="p-counter-left">
                    <h3 className="p-counter-title">{title}</h3>
                    <h4 className="p-counter-subtitle">{subtitle}</h4>
                </div>
                <div className="p-counter-right">
                    <h3 className='p-counter-count'>{count}</h3>
                </div>
            </div>
        </div>
    )
}
