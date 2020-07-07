export default function NewCard(props){
    return (
        <div>
            <h3>Insert your card number:</h3>
            <input type="text" onChange={props.onChange} />
        </div>
    )
}