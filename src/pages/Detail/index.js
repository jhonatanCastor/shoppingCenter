import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";


import Doot from "../../components/Shoes/Doot";
import SizeButton from "../../components/SizeButton";
import Button from "../../components/Button";
import Futter from "../../components/Futter";

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Cano-Curto'
    })

    return (
        <View style={styles.container}>
                <Image
                    source={require('../../assets/modN1.jpg')}
                    style={styles.image}
                    resizeMode='cover'
                />
            <ScrollView >
                <View>
                    <View>
                        <Text style={[styles.title, {fontSize: 24}]}>R$140,00</Text>
                    </View>
                    <View opacity={0.4}>
                        <Text style={[styles.title, {fontSize: 30}]}>Nike Cano-Curto</Text>
                    </View>

                    <View style={styles.docontainer}>
                        <Doot color='#2379f4'/>
                        <Doot color='#fb6e53'/>
                        <Doot color='#ddd'/>
                        <Doot color='#000'/>
                    </View>

                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <SizeButton bgColor='#17181a' color='#FFF'>40</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>39</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>38</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>37</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>35</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>33</SizeButton>
                            <SizeButton bgColor='#17181a' color='#FFF'>30</SizeButton>
                        </ScrollView>
                    </View>

                    <View style={styles.textContent}>
                        <Text style={styles.textTitle}>
                            NIKE CANO_CURTO
                        </Text>
                        <Text style={styles.textContent}>
                        A linha Pegasus da Nike tem como fonte oferecer o máximo de amortecimento e performance para suas corridas. Sendo o tênis preferido de vários corredores brasileiros, graças a seu amortecimento exemplar, leveza, durabilidade e respirabilidade.
                        </Text>
                        <Text style={styles.textList}>
                            - Categoria: Amortecimento
                        </Text>
                        <Text style={styles.textList}>
                            - Categoria: Material
                        </Text>
                    </View>

                    <Button/>

                    <View style={styles.line}/>

                    <Futter/>

                </View>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%',
        height: '40%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'   
    },
    docontainer:{
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%',
    }, 
    textList:{
        fontSize: 16,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    },
  
});