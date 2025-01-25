import './App.css';
import UserCard from './components/user-card';
export default function App() {

  let data = {
    name: "Owais",
    age: 22
  }

  return <div>
    <h1 className='heading'>My First React App</h1>

    <UserCard name="Ashar" age={22} eligible></UserCard>
    <UserCard name="Jahangir" age={24} eligible></UserCard>
    <UserCard {...data} eligible={false}></UserCard>

  </div>
}