export default function Jokes(props) {
    console.log(props);
    return (
        <div>
            <h3>{props.setup}</h3>
            <h5>{props.punchline}</h5>
        </div>
    )
}