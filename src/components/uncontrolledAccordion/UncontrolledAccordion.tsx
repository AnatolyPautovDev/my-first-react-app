import {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string,
    //collapsed: boolean,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}} />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    onClick?: () => void,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>---{props.title}---</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
