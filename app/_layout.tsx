import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack> 
    <Stack.Screen name= {"Index"} options={{title:"Home Page"}}></Stack.Screen>
    <Stack.Screen name= {"notification"} options= {{title: "Notifications"}}></Stack.Screen>

  </Stack>;
}
