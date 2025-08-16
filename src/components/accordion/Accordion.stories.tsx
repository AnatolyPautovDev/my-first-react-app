
import Accordion from './Accordion.tsx';
import {useState} from "react";
import {action} from "storybook/actions";

export default {
  component: Accordion
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
  return <Accordion titleValue={'Collapsed Accordion'}
                    collapsed={true}
                    setCollapsed={onChangeHandler}
  />
}

export const OpenedAccordion = () => {
  return <Accordion titleValue={'Opened Accordion'}
                    collapsed={false}
                    setCollapsed={onChangeHandler}
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion titleValue={'Opened Accordion'}
                    collapsed={collapsed}
                    setCollapsed={() => {setCollapsed(!collapsed)}}
  />
}