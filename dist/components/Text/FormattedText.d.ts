import React from 'react';
export interface FormattedTextValueProps {
    value: number;
    decimals?: number;
    prefix?: string;
}
declare const FormattedText: React.FC<FormattedTextValueProps>;
export default FormattedText;
