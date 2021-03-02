const FormRow = ({title,value}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: 250}}>{title}</div>
            <div style={{width: 250}}>{value}</div>
        </div>
    )
}

export default FormRow