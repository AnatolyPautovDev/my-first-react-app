type Props = {
    work: boolean
}

export const OnOff = (props: Props) => {
    return (
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            {props.work ? <div style={{backgroundColor: 'green'}}>On</div> : <div>On</div>}
            {!props.work ? <div style={{backgroundColor: 'red'}}>Off</div> : <div>Off</div>}
            {props.work ?
                <div style={{borderRadius: '100%', width: "20px", height: '20px', backgroundColor: 'green' }}></div> :
                <div style={{borderRadius: '100%', width: "20px", height: '20px', backgroundColor: 'red' }}></div>
            }
        </div>
    );
};