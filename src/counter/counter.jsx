import { useState } from 'react';
import './counter.css';

export const Counter = (props) => {
    const increase = () => {
        // const newCount = props.count+1;
        // props.onCount(newCount)
        switch(props.countType) {
            case 'inc': {
                props.onCount(props.count+1)
                return;
            }
            case 'dec': {
                props.onCount(props.count-1)
                return;
            }
        }
    }
    return <button className={`btn ${props.className}`} onClick={increase}>{props.children}</button>
}