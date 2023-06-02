import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState('')
  const [players, setPlayes] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}

        />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList 
          data={['time a', 'time b']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item} 
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}