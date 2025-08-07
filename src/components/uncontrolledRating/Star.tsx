type StarPropsType = {
    selected: boolean
    onClick: () => void
}

export const Star = (props: StarPropsType) => {
    const spanStyle = {
        cursor: 'pointer',
    }

    return <span onClick={props.onClick} style={spanStyle}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}