import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../components/ThemedText';

const { width } = Dimensions.get('window');

export default function ApartmentDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Mock data - In a real app, fetch this based on the ID
  const property = {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: '$450,000',
    location: 'Downtown, New York',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,200 sq ft',
    description: 'Luxurious and modern apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and spectacular city views. Includes a gourmet kitchen, hardwood floors throughout, and a private balcony.',
    features: ['Air Conditioning', 'Parking', 'Swimming Pool', 'Garden', 'Security', 'Gym'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
    ],
    agent: {
      name: 'Michael Chen',
      phone: '+1 234 567 890',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500',
    }
  };

  return (
    <>
      
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container} edges={['top']}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Image Gallery */}
          <ScrollView 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}
            style={styles.gallery}
          >
            {property.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.galleryImage}
              />
            ))}
          </ScrollView>

          {/* Property Details */}
          <View style={styles.detailsContainer}>
            <ThemedText style={styles.price}>{property.price}</ThemedText>
            <ThemedText style={styles.title}>{property.title}</ThemedText>
            
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={16} color="#666" />
              <ThemedText style={styles.location}>{property.location}</ThemedText>
            </View>

            {/* Features */}
            <View style={styles.featuresRow}>
              <View style={styles.featureItem}>
                <Ionicons name="bed-outline" size={24} color="#666" />
                <ThemedText style={styles.featureText}>{property.bedrooms} Beds</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <Ionicons name="water-outline" size={24} color="#666" />
                <ThemedText style={styles.featureText}>{property.bathrooms} Baths</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <Ionicons name="square-outline" size={24} color="#666" />
                <ThemedText style={styles.featureText}>{property.size}</ThemedText>
              </View>
            </View>

            {/* Description */}
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Description</ThemedText>
              <ThemedText style={styles.description}>{property.description}</ThemedText>
            </View>

            {/* Amenities */}
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Features & Amenities</ThemedText>
              <View style={styles.amenitiesGrid}>
                {property.features.map((feature, index) => (
                  <View key={index} style={styles.amenityItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                    <ThemedText style={styles.amenityText}>{feature}</ThemedText>
                  </View>
                ))}
              </View>
            </View>

            {/* Agent Info */}
            <View style={styles.agentSection}>
              <Image source={{ uri: property.agent.image }} style={styles.agentImage} />
              <View style={styles.agentInfo}>
                <ThemedText style={styles.agentName}>{property.agent.name}</ThemedText>
                <ThemedText style={styles.agentTitle}>Real Estate Agent</ThemedText>
              </View>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="call" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Bottom CTA */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.scheduleButton}>
            <ThemedText style={styles.buttonText}>Schedule a Tour</ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
  },
  iosHeader: {
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  gallery: {
    height: 300,
  },
  galleryImage: {
    width: width,
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    lineHeight: 28,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginLeft: 4,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 12,
  },
  amenityText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  agentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  agentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  agentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  agentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  agentTitle: {
    fontSize: 14,
    color: '#666',
  },
  contactButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  scheduleButton: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 