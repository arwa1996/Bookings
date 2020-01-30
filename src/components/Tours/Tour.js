import React from 'react';
import { Icon } from 'antd';

const Tour = (props) => {
    return (
        <div >
            <h5><Icon type="environment" /> {props.name} Tour </h5>
            <h5> <Icon type="team" /> Number of adults is {props.adults}</h5>
            <h5> <Icon type="smile" /> Number of children is {props.children}</h5>
            <h5> <Icon type="calendar" /> The date is {props.date}</h5>
            <h5><Icon type="number" /> The infant number is {props.infantNumber}</h5>
            <h5> <Icon type="wallet" /> The fees amount is {props.amount}</h5>
        </div>
    )
}

export default Tour;