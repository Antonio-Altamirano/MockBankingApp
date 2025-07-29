import {Container} from "postcss";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {blue, red} from "react-native-reanimated/lib/typescript/Colors";
import TextField from "@/components/TextField";
import {Colors} from "@/constants/Colors";


export default function App(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
    //     communicate credentials to api
    }
    function handleSignUp(){
        //     communicate credentials to api
    }

    return(
        <View style={styles.page}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={{ color: Colors.highlights }}>Welcome</ThemedText>
            </ThemedView>

            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <View>
                        <ThemedText type={'subtitle'}>Username</ThemedText>
                        {/*<TextInput placeholder="..." onChangeText={setUsername} />*/}
                        <TextField placeholder="" onChangeText={setUsername}></TextField>
                    </View>
                    <View>
                        <ThemedText type={'subtitle'}>Password</ThemedText>
                        {/*<TextInput placeholder="..." secureTextEntry onChangeText={setPassword} />*/}
                        <TextField placeholder="" secureTextEntry onChangeText={setPassword}></TextField>
                    </View>
                    <View style={styles.loginFormButtons}>
                        <Button title="Login" onPress={handleLogin}/>
                        <Button title="SignUp" onPress={handleSignUp}/>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        justifyContent:"center",
        alignItems:'center',
        flex: 2,
        backgroundColor: Colors.primary,
        color: Colors.highlights,
    },
    loginContainer:{
        flexDirection: "column",
        justifyContent: 'space-around',
        backgroundColor: Colors.light1,
        flex: 7
    },
    loginForm:{
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "space-between",
        marginHorizontal:'35%',
        backgroundColor: Colors.light2,
        borderRadius:15,
        padding:50
    },
    loginFormButtonsContainer:{

    },
    loginFormButtons:{
        flexDirection:"row",
        justifyContent: "space-around",
    },
    page: {
        flex:1,
        flexDirection: "column",
        backgroundColor: Colors.primary
    },
    footer:{
        flex: 1,
        backgroundColor: Colors.secundary
    }
});