import Accordion from "./components/accordion/Accordion.tsx";
import {Rating} from "./components/rating/Rating.tsx";
import {PageTitle} from "./components/pageTitle/PageTitle.tsx";


function App() {
    return (
        <div>
            <PageTitle title={'This is App Title'}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Rating value={3}/>
        </div>
    )
}

export default App