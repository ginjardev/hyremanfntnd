import React from 'react';
import { InlineWidget } from "react-calendly";

const CalendarEvent = () => {
    return (
        <div>
            <InlineWidget url='https://calendly.com/ask-hyreman/interview-schedule'/>
        </div>
    );
};

export default CalendarEvent;