import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import CustomBarChart from '../../components/CustomBarChart';
import { goalsData, yourBusinessData, yourBusinessDataSecond } from "../../helpers/chartData"
import CustomCircleChart from '../../components/CustomCircleChart';

const initialStateDimensions = { height: 0, width: 0}
function Home() {
  const navigation = useNavigation();

  const [yourBusinessDimensions, setYourBusinessDimensions] = useState(initialStateDimensions)
  const [yourCompetitorDimensions, setYourCompetitorDimensions] = useState(initialStateDimensions)
  const [goalsDimensions, setGoalsDimensions] = useState(initialStateDimensions)

  function handleGoalsPerformancePress() {
    navigation.navigate('goals-performance');
  }

  function handleProductReportPress() {
    navigation.navigate('product-report');
  } 

  return (
    <View style={styles.container}>
      <View style={styles.comparisonContainer}>
        <View style={styles.comparisonTitleContainer}>
          <Text style={styles.comparisonTitle}>Comparação</Text>
          <AntDesign name="swap" style={styles.comparisonIcon} />
        </View>
        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Negócio</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 8.200,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValuePositiveVariation,
                ]}
              >
                +24%
              </Text>
            </View>
          </View>

          <View onLayout={ 
            ({ nativeEvent: { layout: { height, width } }}) => setYourBusinessDimensions({ height, width })
          } 
          style={
            [styles.businessAnalyticsChart,
              yourBusinessDimensions.height != 0
              ? styles.businessAnalyticsChartWithData
              : styles.businessAnalyticsChartWithoutData
            ]
          }
          >
            <CustomBarChart 
              chartData={yourBusinessData}
              chartDimensions={yourBusinessDimensions}
            />
          </View>
          
        </View>

        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Negócio</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 7.600,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValueNegativeVariation,
                ]}
              >
                -16%
              </Text>
            </View>
          </View>
          <View style={styles.businessAnalyticsChart}>
            <View onLayout={ 
              ({ nativeEvent: { layout: { height, width } }}) => setYourCompetitorDimensions({ height, width })
            } 
            style={
              [styles.businessAnalyticsChart,
                yourCompetitorDimensions.height != 0
                ? styles.businessAnalyticsChartWithData
                : styles.businessAnalyticsChartWithoutData
              ]
            }
            >
              <CustomBarChart 
                chartData={yourBusinessDataSecond}
                chartDimensions={yourCompetitorDimensions}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleProductReportPress}
          style={styles.comparisonButtonContainer}
          activeOpacity={0.75}
        >
          <Text style={styles.comparisonButtonText}>Ver mais detalhes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goalsContainer}>
      
        <Text style={styles.goalsTitle}>Desempenho de Metas</Text>
        <BorderlessButton
          onPress={handleGoalsPerformancePress}
          style={styles.goalsAnalyticsContainer}
        >
          <View style={styles.weekBalance}>

            <View 
             onLayout={ 
              ({ nativeEvent: { layout: { height, width } }}) => setGoalsDimensions({ height, width })
              } 
              style={[styles.weekBalanceChart, goalsDimensions.width != 0 ? styles.weekBalanceChartActivate : styles.weekBalanceChartOffline ]}
            >
              <CustomCircleChart
                circleDimensions={goalsDimensions}
                circleData={goalsData}
                scalarMode
              />
            </View>

            <View style={styles.weekBalanceData}>
              <View style={styles.weekBalanceDataDayContainer}>
                <Text style={styles.weekBalanceDataDayTitle}>Quarta-feira</Text>
                <Text
                  style={[
                    styles.weekBalanceDataDayTitle,
                    styles.weekBalanceDataDayTitleValue,
                  ]}
                >
                  +8.2%
                </Text>
              </View>
              <View style={styles.weekBalanceDataProductContainer}>
                <Text style={styles.weekBalanceDataProductTitle}>
                  Tigaroda Bike
                </Text>
                <Text style={styles.weekBalanceDataProductTitle}>
                  R$ 4.200,00
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.lastMonthBalance}>
            <Text style={styles.lastMonthBalanceText}>Último mês</Text>
            <Text
              style={[
                styles.lastMonthBalanceText,
                styles.lastMonthBalanceValue,
              ]}
            >
              R$ 4.008,00
            </Text>
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
}

export default Home;
