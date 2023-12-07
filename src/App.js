import React, {useState} from "react"
import LoginLogo from "./assets/login-logo.svg"
//import SignupBg from "./assets/signup-bg.svg"
//import SignupLogo from "./assets/signup-logo.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"

// JSX - Mistura de JavaScript com HTML/CSS (CSS só com o Styled Components)
import {
  Container, H1, Image, ContainerItens,
  InputLabel, Input, Button, User,
} from './styles'

const App = () => {
  //const users = [];

  //REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const addNewUser = () => {(
    setUsers([ ... users,{ id: Math.random(), name, age}])

    //[{ id: Math.random(), name: "Rafael", age: 26 }]
  )}

  const changeInputName = (event) => {(
    setName(event.target.value)
  )}

  const changeInputAge = (event) => {(
    setAge(event.target.value)
  )}

  return (

    <Container>

      <Image alt="login-logo" src={LoginLogo} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img alt="trash" src={Trash} /></button>
            </User>

          ))}
        </ul>

      </ContainerItens>

    </Container>




  );


}

export default App