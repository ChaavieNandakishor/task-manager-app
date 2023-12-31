import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen  name="home" options={{headerShown:false}}  />
        <Stack.Screen  name="register" options={{headerShown:false}}  />
        <Stack.Screen  name="signin" options={{headerShown:false}}  />
        <Stack.Screen  name="dashboard/dashboard" options={{headerShown:false}}  />

    </Stack>
  )
}

export default Layout

const styles = StyleSheet.create({})