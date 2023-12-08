import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import axios from "axios"

import SignupLogo from "../../assets/signup-logo.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

// JSX - Mistura de JavaScript com HTML/CSS (CSS só com o Styled Components)
import  H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Buttons"
import {
  Container, Image,
  User,
} from './styles'

const Users = () => {
  //const users = [];

  //REACT HOOKS => FERRAMENTAS AUXILIARES
  const [users, setUsers] = useState([]);
  const history = useHistory()
  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get('http://localhost:3001/users');

      setUsers(newUsers);
    }

    fetchUsers()

  }, [])

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);
  }

  const goBackPage = () => {
    history.push('/')
  }


  return (

    <Container>

      <Image alt="login-logo" src={SignupLogo} />

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt="trash" src={Trash} /></button>
            </User>

          ))}
        </ul>

        <Button isTransparent={true} onClick={goBackPage}>
        <img alt="arrow" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>

    </Container>




  );


}

export default Users