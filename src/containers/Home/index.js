import React, { useState, useRef, } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import axios from "axios"

import LoginLogo from "../../assets/login-logo.svg"
import Arrow from "../../assets/arrow.svg"

// JSX - Mistura de JavaScript com HTML/CSS (CSS só com o Styled Components)
import  H1 from "../../components/Title"
import  ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Buttons"
import {
  Container, Image, 
  InputLabel, Input,
} from './styles'

const App = () => {
  //const users = [];

  //REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = async () => {

     const { data: newUser } = await axios.post('http://localhost:3001/users', {
       name: inputName.current.value,
       age: inputAge.current.value,
     });
 
     setUsers([...users, newUser]); 

     history.push('/usuarios')

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

      </ContainerItens>

    </Container>




  );


}

export default App