import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Shoes from "../Shoes";

export default function Futter() {
    return (
        <View style={styles}>
            <Text style={styles.title}>VOCE TAMBEM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN2.jpg')} cost='R$740,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN3.jpg')} cost='R$1450,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN4.jpg')} cost='R$340,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN5.jpg')} cost='R$840,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN6.jpg')} cost='R$940,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN7.jpg')} cost='R$1150,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN8.jpg')} cost='R$2240,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/modN9.jpg')} cost='R$740,90'>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
});