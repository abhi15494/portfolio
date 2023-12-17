import React from 'react'

export const UITitle = (props) => {
    const {
        content
    } = props;
    return (
        <div className='p-title-wrapper'>
            <div className="p-title-box">
                <h2 className="p-title-ele">
                    {content}
                </h2>
            </div>
        </div>
    )
}
