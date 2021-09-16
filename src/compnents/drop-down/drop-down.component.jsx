import React, {useState} from 'react'
import { Select } from './drop-down.styles';

const DropDown = ({children, ...otherProps}) => {

    return (
        <Select onChange={otherProps.onChange} name={otherProps.name} disabled={children ? false : true}>
            <option value="">Choose an option</option>
            {children}
        </Select>
    )
}

export default DropDown;
