import React from 'react'

export const UITimeline = (props) => {
    const {
        content
    } = props;

    return (
        <div className='p-timeline-wrapper'>
            <div className='p-timeline-box'>
                <div className="p-timeline-list">
                    {
                        content.map((item, index) => (
                            <div className="p-timeline-item animate" key={'TIMELINE_CONTENT_' + index}>
                                <div className="p-timeline-itemcontent">
                                    <h3 className="p-timeline-title">{item.title}</h3>
                                    <h4 className="p-timeline-subtitle">{item.subtitle}</h4>
                                    <p className="p-timeline-content">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
