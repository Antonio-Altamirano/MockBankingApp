import {TextInput, StyleSheet, View} from "react-native";
import {Colors} from "@/constants/Colors";
import {useState} from "react";


export default function ({ ...props }, placeholder?:string, style?:any){
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}   // Pass placeholder down
                style={[
                    styles.input,
                    style,
                    { borderBottomColor: isFocused ? Colors.highlights : Colors.light3 },
                ]} // Merge styles
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                underlineColorAndroid="transparent"
                {...props}                   // Pass any extra props down
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        borderBottomWidth: 1,
        paddingVertical: 8,
        // fontSize: 16,
    },
});