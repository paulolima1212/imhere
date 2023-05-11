import { Alert } from 'react-native'
import { ParticipantProps } from '../contexts/app-context/app-context'

export function existsParticipant(
  participant: ParticipantProps,
  participants: ParticipantProps[]
) {
  const existsParticipant = participants.find(
    (item) => item.name === participant.name
  )

  if (existsParticipant) {
    Alert.alert(
      'Participant already exists.',
      'This participant already exists on the list, please insert another one.'
    )
    return true
  }

  return false
}
