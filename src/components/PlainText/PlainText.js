import React from 'react'
import { TextField } from '@material-ui/core'

export const PlainText = ({ onChange, value, shift }) => {
    const changeValue = e => {
        const value = e.target.value
        onChange(value)
    }

    return <TextField value={value} onChange={changeValue} placeholder={'Enter plain text'} />
}
