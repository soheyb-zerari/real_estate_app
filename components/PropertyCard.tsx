import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  imageUrl: string;
  isFavorite?: boolean;
  onPress: (id: string) => void;
  onFavoritePress?: () => void;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  size,
  imageUrl,
  isFavorite = false,
  onPress,
  onFavoritePress,
}: PropertyCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "#ff4444" : "#ffffff"} 
          />
        </TouchableOpacity>
        <View style={styles.priceTag}>
          <ThemedText style={styles.price}>{price}</ThemedText>
        </View>
      </View>
      <View style={styles.details}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color="#666" />
          <ThemedText style={styles.location}>{location}</ThemedText>
        </View>
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={20} color="#666" />
            <ThemedText style={styles.feature}>{bedrooms}</ThemedText>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="water-outline" size={20} color="#666" />
            <ThemedText style={styles.feature}>{bathrooms}</ThemedText>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="square-outline" size={20} color="#666" />
            <ThemedText style={styles.feature}>{size}</ThemedText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  priceTag: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 8,
    borderRadius: 8,
  },
  details: {
    padding: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
}); 