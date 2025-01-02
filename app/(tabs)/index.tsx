import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PropertyCard from '../../components/PropertyCard';
import { ThemedText } from '../../components/ThemedText';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'House', 'Apartment', 'Villa', 'Office'];
  
  // Add more realistic properties
  const properties = [
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
    },
    {
      id: '2',
      title: 'Luxury Beach House',
      price: '$1,250,000',
      location: 'Miami Beach, FL',
      bedrooms: 4,
      bathrooms: 3,
      size: '2,800 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
      type: 'House',
    },
    {
      id: '3',
      title: 'Modern Villa with Pool',
      price: '$2,500,000',
      location: 'Beverly Hills, CA',
      bedrooms: 5,
      bathrooms: 4,
      size: '4,500 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500',
      type: 'Villa',
    },
    {
      id: '4',
      title: 'Downtown Office Space',
      price: '$750,000',
      location: 'Financial District, NYC',
      bedrooms: 0,
      bathrooms: 2,
      size: '2,000 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500',
      type: 'Office',
    },
    {
      id: '5',
      title: 'Cozy Studio Apartment',
      price: '$280,000',
      location: 'Brooklyn, NY',
      bedrooms: 1,
      bathrooms: 1,
      size: '600 sq ft',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500',
      type: 'Apartment',
    }
  ];

  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeTextContainer}>
            <ThemedText style={styles.welcomeText}>Find Your</ThemedText>
            <ThemedText style={styles.welcomeBold}>Perfect Home</ThemedText>
          </View>
          <View style={styles.welcomeIconContainer}>
            <Ionicons name="home" size={32} color="#333" />
          </View>
        </View>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search address, city, location..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.filterButtonActive,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <ThemedText
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
            onPress={(id) => {
              router.push(`/${id}`);
            }}
            onFavoritePress={() => {
              console.log('Favorite pressed:', property.id);
            }}
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
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  welcomeSection: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeIconContainer: {
    padding: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#666',
    lineHeight: 28,
  },
  welcomeBold: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 36,
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
  },
  filterButtonActive: {
    backgroundColor: '#333',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  filterTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
}); 