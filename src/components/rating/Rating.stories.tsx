
import {Rating, type RatingValueType} from './Rating.tsx';
import {useState} from "react";
// import {action} from "storybook/actions";

export default {
  component: Rating
}

// const onChangeHandler = action('onChange')

export const EmptyStars = () =>  <Rating value={0} setRatingValue={()=>{}}/>
export const Rating1 = () =>  <Rating value={1} setRatingValue={()=>{}}/>
export const Rating2 = () =>  <Rating value={2} setRatingValue={()=>{}}/>
export const Rating3 = () =>  <Rating value={3} setRatingValue={()=>{}}/>
export const Rating4 = () =>  <Rating value={4} setRatingValue={()=>{}}/>
export const Rating5 = () =>  <Rating value={5} setRatingValue={()=>{}}/>
export const RatingDemo = () => {
  const [rating, setRating] = useState<RatingValueType>(0)
  return <Rating value={rating} setRatingValue={setRating}/>
}