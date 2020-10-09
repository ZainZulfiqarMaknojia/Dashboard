import React from 'react';
import FlipNumbers from 'react-flip-numbers';

export default function WidgetFlipNumbers() {

    return (
        <div className="graphWidget">
            <div className="widgetTitle">Days</div>
            <div className="widgetValue">
            <FlipNumbers height={50} width={12} color="red" background="black" play perspective={100} numbers="12" />;
            </div>
        </div>
    )
}
