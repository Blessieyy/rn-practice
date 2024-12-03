import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function BirthdayCardScreen() {
  const [cardText, setCardText] = useState('Happy Birthday!');
  const [imageUri, setImageUri] = useState(null);

  // Function to pick an image (using a hypothetical image picker or placeholder)
  const pickImage = () => {
    // Use an image picker library here or set a static image for demo
    setImageUri('https://example.com/some-image.jpg');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Card Background Image */}
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.cardImage} />
      ) : (
        <View style={styles.cardImagePlaceholder}>
          <Text style={styles.placeholderText}>No Image Selected</Text>
        </View>
      )}

      {/* Text Input to edit card message */}
      <TextInput
        style={styles.cardTextInput}
        value={cardText}
        onChangeText={setCardText}
        multiline
        placeholder="Write a message..."
      />

      {/* Buttons to pick an image or reset card */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <ThemedText type="defaultSemiBold">Pick an Image</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCardText('')} style={styles.button}>
          <ThemedText type="defaultSemiBold">Clear Text</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Display the card preview */}
      <ThemedView style={styles.previewContainer}>
        <ThemedText type="subtitle">Card Preview</ThemedText>
        <View style={styles.preview}>
          <Text style={styles.previewText}>{cardText}</Text>
        </View>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  placeholderText: {
    color: '#aaa',
  },
  cardTextInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A1CEDC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  previewContainer: {
    marginTop: 20,
  },
  preview: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  previewText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
