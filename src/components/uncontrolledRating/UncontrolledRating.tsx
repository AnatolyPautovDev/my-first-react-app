import {Star} from "./Star.tsx";
import {useState} from "react";
import type {RatingValueType} from "../rating/Rating.tsx";

type Props = {
  defaultValue?: RatingValueType
}

export const UncontrolledRating =({defaultValue}:Props) => {

    const [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} onClick={() => {setValue(1)}}/>
            <Star selected={value > 1} onClick={() => {setValue(2)}}/>
            <Star selected={value > 2} onClick={() => {setValue(3)}}/>
            <Star selected={value > 3} onClick={() => {setValue(4)}}/>
            <Star selected={value > 4} onClick={() => {setValue(5)}}/>
        </div>
    )
}