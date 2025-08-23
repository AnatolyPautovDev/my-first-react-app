// import Accordion from './Accordion.tsx';
// import {action} from "storybook/actions";

import {type ChangeEvent, useRef, useState} from "react";

export default {
  title: 'input'
  // component: Accordion
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input value={value}
             onChange={(e: ChangeEvent<HTMLInputElement>) => {
               setValue(e.currentTarget.value)
             }}
      />
      - {value}
    </>
  )
}
export const GetValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <input ref={inputRef}/>
      <button type="button" onClick={()=>{
        if (inputRef.current) {
          setValue(inputRef.current.value)
          inputRef.current.value = ''
        }
      }}>
        save
      </button>
      - actual value: {value}
    </>
  )
}


export const ControlledInputWithFixedValue = () =>
  <input value={'it-incubator'} />

