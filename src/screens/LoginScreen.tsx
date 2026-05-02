import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { colors, typography, spacing, borderRadius, shadows } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  const [role, setRole] = useState<'self' | 'family' | null>(null);

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        <View style={styles.header}>
          <Ionicons name="medical" size={48} color={colors.primary} />
          <Text style={styles.title}>Welcome to Swasthi</Text>
          <Text style={styles.subtitle}>Your Family Health Operating System</Text>
        </View>

        <View style={styles.roleSelectionContainer}>
          <Text style={styles.sectionLabel}>How will you use Swasthi?</Text>
          <View style={styles.roleButtons}>
            <TouchableOpacity 
              style={[styles.roleCard, role === 'self' && styles.roleCardActive]}
              onPress={() => setRole('self')}
            >
              <Ionicons name="person" size={24} color={role === 'self' ? colors.primary : colors.textMuted} />
              <Text style={[styles.roleText, role === 'self' && styles.roleTextActive]}>I manage myself</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.roleCard, role === 'family' && styles.roleCardActive]}
              onPress={() => setRole('family')}
            >
              <Ionicons name="people" size={24} color={role === 'family' ? colors.primary : colors.textMuted} />
              <Text style={[styles.roleText, role === 'family' && styles.roleTextActive]}>I care for family</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={colors.textMuted}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Continue with Email</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
            <Ionicons name="logo-google" size={20} color={colors.text} style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h2,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
  roleSelectionContainer: {
    marginBottom: spacing.xl,
  },
  sectionLabel: {
    ...typography.label,
    marginBottom: spacing.md,
  },
  roleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  roleCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    ...shadows.sm,
  },
  roleCardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary + '20', // slight mint tint
  },
  roleText: {
    ...typography.bodySmall,
    marginTop: spacing.sm,
    fontWeight: '600',
    color: colors.textMuted,
  },
  roleTextActive: {
    color: colors.primary,
  },
  formContainer: {
    gap: spacing.md,
  },
  input: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    ...typography.body,
    borderWidth: 1,
    borderColor: colors.border,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  primaryButtonText: {
    ...typography.label,
    color: colors.surface,
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginHorizontal: spacing.md,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  googleIcon: {
    marginRight: spacing.sm,
  },
  googleButtonText: {
    ...typography.label,
    fontSize: 16,
  },
});
