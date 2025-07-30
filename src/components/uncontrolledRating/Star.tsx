type StarPropsType = {
    selected: boolean
    onClick: () => void
}

export const Star = (props: StarPropsType) => {
    const spanStyle = {
        cursor: 'pointer',
    }

    return props.selected ?
        <span onClick={props.onClick} style={spanStyle}><b>star </b></span>
        :
        <span onClick={props.onClick} style={spanStyle}>star </span>
}