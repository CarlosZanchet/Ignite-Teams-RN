import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigate = useNavigation()
  const [group, setGroup] = useState('')

  async function handleNew() {
    try {

      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', "Informe o nome da turma.")
      }
      
      await groupCreate(group)
      navigate.navigate('players', { group })
    
    } catch (err) {
      if(err instanceof AppError) {
        Alert.alert('Novo Grupo', err.message)
      } else {
        Alert.alert('Novo Grupo', "Não foi possível criar um novo grupo.")
      }
      console.log(err)
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma" 
          subtitle="crie a turma para adicionar as pessoas" 
        />

        <Input 
          placeholder="Nome da Turma" 
          onChangeText={setGroup}
        />

        <Button 
          title="Criar" 
          style={{ marginTop: 20 }}
          onPress={handleNew}
          disabled={group.trim().length === 0}
        />
      </Content>
    </Container>
  )
}