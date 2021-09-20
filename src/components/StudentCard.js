function StudentCard (props) {
    return (
        <div className="StudentCard">
            <p>
                <b>Name: </b>{props.name}
            </p>
            <p>
                <b>Cohort: </b>{props.info.city} - {props.info.course}
            </p>
            <p>
                <b>Current Week: </b>{props.week}
            </p>                        
        </div>
    )
}

export default StudentCard;