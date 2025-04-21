import React from "react";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { SHADOWS } from "@/constants/shadows";

type Props = {
  message: string;
  isVisible: boolean;
  onConfirm: (confirmed: boolean) => void;
};

export function DeleteModal({ message, isVisible, onConfirm }: Props) {
  const colors = COLORS;

  const onClose = () => {
    onConfirm(false); // Émettre false si on ferme le modal
  };

  const handleConfirm = () => {
    onConfirm(true); // Émettre true si l'utilisateur confirme
  };

  return (
    <Modal animationType="fade" transparent visible={isVisible} onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.popup}>
        <Text style={[styles.title, { color: colors.grayDark }]}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.cancelButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Annuler</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.confirmButton]} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirmer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  popup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -70 }], // Centrer le modal
    width: 300,
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.grayBackground,
    //    ...SHADOWS.shadow1,
  },
  title: {
    paddingBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    width: '48%', // Chaque bouton occupe presque la moitié de l'espace
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});