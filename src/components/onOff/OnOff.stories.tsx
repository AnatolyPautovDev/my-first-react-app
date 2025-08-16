
import {OnOff} from './OnOff.tsx';
import {useState} from "react";
import {action} from "storybook/actions";

export default {
  component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const OnOffDemo = () => {
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  return <OnOff on={switchOn} setOn={setSwitchOn}/>
}