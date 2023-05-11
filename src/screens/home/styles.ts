import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 15,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    marginTop: 45,
  },
  text: {
    color: '#6b6b6b',
    fontSize: 16,
    marginTop: 15,
  },
  baseInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#353535',
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
    color: '#fff',
    padding: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    width: 50,
    backgroundColor: '#2EF30E',
    marginTop: 8,
  },

  textItem: {
    marginTop: 10,
    color: '#fff',
    padding: 10,
  },

  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    marginBottom: 25,
    display: 'flex',
    alignItems: 'center',
  },

  empty: {
    color: '#fff',
    textAlign: 'center',
  },
})
