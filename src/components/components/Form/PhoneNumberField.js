// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React, { useRef } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const PhoneNumberField = ({ required, onChange, name }) => {
    const ref = useRef(null);

    return (
        <IntlTelInput
            inputClassName="form-control"
            style={{ width: '100%' }}
            placeholder="(555) 555-1212"
            onPhoneNumberChange={(valid, phone, country) => {
                onChange(phone);
            }}
            onPhoneNumberBlur={() => {
                const input = ref.current;
                const formatted = input.formatFullNumber(input.tel.value);
                const newValue = formatted.split(' ').join('');
                input.updateValFromNumber(newValue);
                onChange(newValue);
            }}
            fieldName={name}
            telInputProps={{
                id: 'business-phone',
                required: required ? 'required' : null,
            }}
            ref={ref}
        />
    );
};

export default PhoneNumberField;
