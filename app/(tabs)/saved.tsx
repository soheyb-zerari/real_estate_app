import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../components/ThemedText';
import PropertyCard from '../../components/PropertyCard';
import { useRouter } from 'expo-router';

// Add the property type interface
interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  imageUrl: string;
  type: string;
}

export default function SavedProperties() {
  const router = useRouter();

  // Add type to savedProperties
  const savedProperties: Property[] = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      price: '$450,000',
      location: 'Downtown, New York',
      bedrooms: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
      type: 'Apartment',
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Saved Properties</ThemedText>
      </View>
      <ScrollView style={styles.content}>
        {savedProperties.map((property) => (
          <PropertyCard 
            key={property.id} 
            {...property}
            onPress={(id) => router.push(`/${id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
}); 