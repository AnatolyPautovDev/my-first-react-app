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
      <input ref={inputRef} />
      <button type="button"
              onClick={() => {
                if (inputRef.current) {
                  setValue(inputRef.current.value)
                  inputRef.current.value = ''
                }
              }}
      >
        save
      </button>
      - actual value: {value}
    </>
  )
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  return (
    <input value={parentValue}
           onChange={(e) => {
             setParentValue(e.currentTarget.value)
           }}
    />
  )

}
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  return (
    <input type='checkbox'
           checked={parentValue}
           onChange={(e) => {
             setParentValue(e.currentTarget.checked)
           }}
    />
  )
}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  return (
    <>
      <select value={parentValue}
              onChange={(e) => {
                setParentValue(e.currentTarget.value)
              }}
      >
        <option selected
                disabled
        >none
        </option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
      </select>
    </>

  )
}

export const ControlledInputWithFixedValue = () =>
  <input value={'it-incubator'} />

