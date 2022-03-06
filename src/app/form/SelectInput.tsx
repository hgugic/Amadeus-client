import {useField} from 'formik'
import React, { useState, useEffect } from "react";
import DatePicker, {ReactDatePickerProps} from "react-datepicker";
import { observer } from 'mobx-react-lite';
import { Form, Label, Select } from "semantic-ui-react";
import FlightStore from '../stores/flightStore';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
    onSearchChange? : any;
}


export default function SelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Form.Field error ={meta.touched && !!meta.error}>
            <Select 
                search
                onSearchChange={props.onSearchChange}
                selection
                options={props.options}
                value={field.value || null}
                onChange={(e,d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field> 
    )
}