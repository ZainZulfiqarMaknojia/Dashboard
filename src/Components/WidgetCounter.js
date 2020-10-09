import Counter from 'react-number-counter';
import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import WidgetLoader from './WidgetLoader';
export default function WidgetCounter(props) {
    if(props.value)
    {
        const value = props.value ;

        return (
        <div className="graphWidget">
            <div className="widgetTitle">{props.title}</div>
            <div className="widgetValue">
                <Counter start={0} end={value} delay={-100} />
            </div>
        </div>
        );
    }
    else
        return(
            <div>
                <WidgetLoader />
            </div>
        )
   

}
