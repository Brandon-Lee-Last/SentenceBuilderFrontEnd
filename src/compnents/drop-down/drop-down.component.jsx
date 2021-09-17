import React from 'react'
import { Select } from './drop-down.styles';

const DropDown = ({children, ...otherProps}) => {

    return (
        <Select value={otherProps.value} onChange={otherProps.onChange} name={otherProps.name} disabled={children ? false : true}>
            {children}
        </Select>
    )
}

export default DropDown;
