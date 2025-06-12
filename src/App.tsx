import Accordion from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";


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
type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App