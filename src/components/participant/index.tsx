import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface ParticipantOnDeleteProps {
  participant: {
    id: number
    name: string
  }
  onRemove: (id: number) => void
}

export function Participant({
  participant,
  onRemove,
}: ParticipantOnDeleteProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{participant.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove(participant.id)}
      >
        <Text style={styles.textButton}> - </Text>
      </TouchableOpacity>
    </View>
  )
}
