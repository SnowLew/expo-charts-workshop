import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import featuredImage from '../../assets/images/bike.jpg';

import CustomYAxisChart from "../../components/CustomYAxisChart"

function ProductReport() {
  const [Dimensions, setDimensions] = useState({ width: 0, height: 0 })
  return (
    <View style={styles.container}>
      <View style={styles.featuredContainer}>
        <Image
          style={styles.featuredImage}
          source={featuredImage}
          resizeMode="cover"
        />
        <View style={styles.featuredProductContainer}>
          <Text style={styles.featuredProductName}>Tigaroda oye bike</Text>
          <View style={styles.featuredProductPublishContainer}>
            <AntDesign
              name="clockcircleo"
              style={styles.featuredProductPublishIcon}
            />
            <Text style={styles.featuredProductPublishText}>Publicado</Text>
            <Text style={styles.featuredProductPublishDate}>15 Nov 2020</Text>
          </View>
        </View>
        <View style={styles.indicator} />
      </View>
      <View style={styles.reportContainer}>
        <Text style={styles.reportTitle}>Relatório de Vendas</Text>
        <Text style={styles.reportDescription}>
          Esse é um sumário das vendas do seu produto em uma semana de acordo
          com a renda que você teve
        </Text>
        <View 
        onLayout={ 
          ({ nativeEvent: { layout: { height, width } }}) => setDimensions({ height, width })
          } 
           style={Dimensions.height != 0 ? styles.reportChartLoaded : styles.reportChart }
          >
          <CustomYAxisChart
            chartDimensions={Dimensions}
          />
        </View>
        <RectButton style={styles.reportButton}>
          <Text style={styles.reportButtonText}>Ver Relatório Completo</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default ProductReport;
