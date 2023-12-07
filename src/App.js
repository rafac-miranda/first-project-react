import React, { useState, useRef } from "react"
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
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = () => {
    (
      setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])

      //[{ id: Math.random(), name: "Rafael", age: 26 }]
    )
  }


  return (

    <Container>

      <Image alt="login-logo" src={LoginLogo} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

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