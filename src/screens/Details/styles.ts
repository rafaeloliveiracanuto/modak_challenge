import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 2, height: 8 },
    shadowRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: '100%',
    height: height * 0.35,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 5,
    textAlign: 'center',
  },
  category: {
    fontSize: 14,
    fontWeight: '500',
    color: '#777',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  brand: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
    lineHeight: 22,
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFA500',
    marginLeft: 10,
  },
  stock: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginVertical: 8,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default styles;
