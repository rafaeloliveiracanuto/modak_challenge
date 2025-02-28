import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: 300,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: '#E3F2FD',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  productImage: {
    height: 150,
    width: 150,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  ratingContainer: {
    height: 10,
    marginBottom: '12%',
  },
  price: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default styles;
