import Accordion from "./components/accordion/Accordion.tsx";
import {Rating, type RatingValueType} from "./components/rating/Rating.tsx";
import {PageTitle} from "./components/pageTitle/PageTitle.tsx";
// import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff.tsx";
import {useState} from "react";
import {OnOff} from "./components/onOff/OnOff.tsx";
/*import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating.tsx";*/


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div>
            <PageTitle title={'This is App Title'}/>
            <Accordion titleValue={'Users'}
                       collapsed={accordionCollapsed}
                       setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
            />
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <OnOff on={switchOn} setOn={setSwitchOn}/>

            {/*<UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>*/}
        </div>
    )
}

export default App