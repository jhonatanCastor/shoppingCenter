import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../components/Shoes";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/tema.jpg')}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#cecece' }]}>-</Text>
                    <Text style={[styles.text, { color: '#cecece' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />

                    </TouchableOpacity>
                </View>

                <View style={styles.line} />

                <ScrollView>
                    <Text style={styles.text}>LANÇAMENTOS</Text>

                    <View style={{   elevation: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modN1.jpg')} cost='R$140,90' onClick={()=> navigation.navigate('Detail')}>
                            Nike Cano-Curto
                        </Shoes>

                        <Shoes img={require('../../assets/modNalto1.jpg')} cost='R$440,90' onClick={()=> navigation.navigate('Detail')}>
                            Nike Cano-Alto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto2.jpg')} cost='R$1440,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto 
                        </Shoes>

                        <Shoes img={require('../../assets/modN2.jpg')} cost='R$640,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modN3.jpg')} cost='R$250,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>

                        <Shoes img={require('../../assets/modNalto3.jpg')} cost='R$243,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto4.jpg')} cost='R$1400,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto 
                        </Shoes>

                        <Shoes img={require('../../assets/modN4.jpg')} cost='R$2400,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto5.jpg')} cost='R$840,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto 
                        </Shoes>

                        <Shoes img={require('../../assets/modN5.jpg')} cost='R$290,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto6.jpg')} cost='R$2340,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto  
                        </Shoes>

                        <Shoes img={require('../../assets/modN6.jpg')} cost='R$4640,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto7.jpg')} cost='R$1240,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto  
                        </Shoes>

                        <Shoes img={require('../../assets/modN7.jpg')} cost='R$220,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto8.jpg')} cost='R$770,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto  
                        </Shoes>

                        <Shoes img={require('../../assets/modN8.jpg')} cost='R$570,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto
                        </Shoes>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/modNalto9.jpg')} cost='R$340,90' onClick={() => alert('Entro')}>
                            Nike Cano-Alto  
                        </Shoes>

                        <Shoes img={require('../../assets/modN9.jpg')} cost='R$2540,90' onClick={() => alert('Entro')}>
                            Nike Cano-Curto 
                        </Shoes>
                    </View>
                    

                </ScrollView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: '20%',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        marginHorizontal: "1%"
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
        marginTop: '1%',
    }
});