// import works as importing a specific function/command so we can use 


import { Text, TouchableOpacity, View, Image, StyleSheet} from "react-native";

// import styles configuration from styles folder 
import {styles} from "../../styles/index_style"; 
import { Link } from "expo-router";

// the main function that renders the page 
export default function Index() 
{
  return (
    <View style={styles.container}>

      <Text style= {styles.title}>Hello there</Text>

      <TouchableOpacity>
          <Link href="/notifcation">Visit the Notification Screen</Link> 
      </TouchableOpacity>



    </View>
  );
} 

