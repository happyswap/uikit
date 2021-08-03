import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'


export interface FormattedTextValueProps {
  value: number
  decimals?: number,
  prefix?: string
}

const FormattedText: React.FC<FormattedTextValueProps> = ({
                                               value,
                                               decimals,
                                               prefix = ''

                                             }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
    // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <span >
      {prefix}
      {countUp}
    </span>
  )
}

export default FormattedText;
