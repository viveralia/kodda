import LottieView from "lottie-react-native";
import { type FC, useRef } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Text, TextInput } from "~components";

import { useLogInMutation } from "../hooks/useLogInMutation";
import { type LogInSchema, resolver } from "../schemas/logInSchema";

const defaultValues: LogInSchema = {
  email: "",
  password: "",
};

export const LogInScreen: FC = () => {
  const logIn = useLogInMutation();
  const animation = useRef(null);
  const { control, handleSubmit } = useForm({ defaultValues, resolver });

  const onSubmit: SubmitHandler<LogInSchema> = (data) => {
    logIn.mutate(data);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-70}
    >
      <ScrollView style={styles.containerInner}>
        <SafeAreaView edges={["top"]}>
          <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.animation}
              source={require("../../../assets/running-on-treadmill.json")}
            />
          </View>
          <Text color="emphasis" size="extraLarge" weight="bold" style={styles.title}>
            Lorem ipsum dolor sit amet elit.
          </Text>
        </SafeAreaView>
        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              {error && <Text size="small">{error.message}</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="send"
                onSubmitEditing={handleSubmit(onSubmit)}
                secureTextEntry
              />
              {error && <Text size="small">{error.message}</Text>}
            </View>
          )}
        />
      </ScrollView>
      <SafeAreaView edges={["bottom"]} style={styles.actionsContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          isLoading={logIn.isLoading}
          loadingText="Logging in..."
        >
          Log in
        </Button>
        <Text align="center" size="small" style={styles.signUp}>
          Don&apos;t have an account? <Text color="primary">Sign up</Text>
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  animation: {
    height: Dimensions.get("window").width * 0.5,
    marginBottom: 40,
    width: Dimensions.get("window").width * 0.5,
  },
  animationContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  formControl: {
    marginBottom: 18,
  },
  input: {
    marginBottom: 8,
  },
  signUp: {
    marginTop: 12,
  },
  title: {
    marginBottom: 32,
  },
});
