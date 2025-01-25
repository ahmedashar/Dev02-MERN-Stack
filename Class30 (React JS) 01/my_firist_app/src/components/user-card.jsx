export default function UserCard(props) {
    let { name, age, eligible } = props;

    return <div>
        <h1>Name: {name}</h1>
        <h1>age: {age}</h1>
        <h1>Eligible: {eligible ? "Yes" : "NO"}</h1>
    </div>
}