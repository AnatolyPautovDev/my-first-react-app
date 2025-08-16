import {UncontrolledOnOff} from './UncontrolledOnOff.tsx';

export default {
  component: UncontrolledOnOff
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff />
