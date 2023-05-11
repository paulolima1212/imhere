import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar'
import { Participant } from '../../components/participant'
import { useState } from 'react'
import { existsParticipant } from '../../middlewares/exists-participant'
import { ParticipantProps } from '../../contexts/app-context/app-context'

export function Home() {
  const [participants, setParticipants] = useState<ParticipantProps[]>([])
  const [participant, setParticipant] = useState('')

  function handleCreateParticipant() {
    const newParticipant = {
      id: participants.length + 1,
      name: participant,
    }

    if (existsParticipant(newParticipant, participants)) {
      return
    }

    setParticipants((prev) => [...prev, newParticipant])
    setParticipant('')
  }

  function handleDeleteParticipant(id: number) {
    const participantOnDelete = participants.findIndex((item) => item.id === id)

    Alert.alert(
      'Do you want to delete?',
      `You will delete ${participants[participantOnDelete].name} on the list, are you sure?`,
      [
        {
          text: 'Yes',
          onPress: () =>
            setParticipants((prev) => prev.filter((item) => item.id !== id)),
        },
        {
          text: 'Cancel',
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>
      <Text style={styles.text}>Thursday, 09 february 2023</Text>
      <View style={styles.form}>
        <TextInput
          placeholder='Participant name'
          placeholderTextColor={'#A0A0A0'}
          style={styles.baseInput}
          onChangeText={(text) => setParticipant(text)}
          value={participant}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleCreateParticipant}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        ListEmptyComponent={
          <Text style={styles.empty}>There are no participants yet</Text>
        }
        renderItem={({ item }) => (
          <Participant
            participant={item}
            onRemove={() => handleDeleteParticipant(item.id)}
            key={item.id}
          />
        )}
      />
      <StatusBar style='inverted' />
    </View>
  )
}
