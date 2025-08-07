import {Star} from "./Star.tsx";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType;
    setRatingValue: (value: RatingValueType) => void;
}

export const Rating =({value, setRatingValue}: RatingPropsType) => {

    return (
        <div>
            <Star selected={value > 0} onClick={()=> {setRatingValue(1)}}/>
            <Star selected={value > 1} onClick={()=> {setRatingValue(2)}}/>
            <Star selected={value > 2} onClick={()=> {setRatingValue(3)}}/>
            <Star selected={value > 3} onClick={()=> {setRatingValue(4)}}/>
            <Star selected={value > 4} onClick={()=> {setRatingValue(5)}}/>
        </div>
    )
}