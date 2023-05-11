import { ReactNode, createContext, useState } from 'react'
import { Alert } from 'react-native'

export interface ParticipantProps {
  id: number
  name: string
}

interface AppContextProps {
  handleAddParticipant: (participant: ParticipantProps) => void
  handleDeleteParticipant: (participant: ParticipantProps) => void
  participants: ParticipantProps[]
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [participants, setParticipants] = useState<ParticipantProps[]>([])

  function handleAddParticipant(participant: ParticipantProps) {
    setParticipants((prev) => [...prev, participant])
  }

  function handleDeleteParticipant(participant: ParticipantProps) {
    const newListParticipants = participants

    const participantOnDelete = newListParticipants.findIndex(
      (item) => item.id === participant.id
    )

    newListParticipants.splice(participantOnDelete, 1)

    Alert.alert(
      'Do you want to delete?',
      `You will delete ${participant.name} on the list, are you sure?`,
      [
        {
          text: 'Yes',
          onPress: () => setParticipants(newListParticipants),
        },
        {
          text: 'Cancel',
          onPress: () => setParticipants(participants),
        },
      ]
    )
  }

  return (
    <AppContext.Provider
      value={{ handleAddParticipant, handleDeleteParticipant, participants }}
    >
      {children}
    </AppContext.Provider>
  )
}
