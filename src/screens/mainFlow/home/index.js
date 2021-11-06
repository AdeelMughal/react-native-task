import React, {Fragment, useState, useEffect, Component} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../services/utilities/colors/index';
import {width, height, totalSize} from 'react-native-dimension';
import {
  SearchBarHome,
  Spacer,
  ImageHomeCategoriesText,
  LogoMain,
  ButtonPrescription,
  ImageHomeBanner,
  SmallTitle,
  TinyTitle,
  SmallText,
  RegularText,
  CustomIcon,
  HomeItemCard,
  LargeText,
} from '../../../components';
import {appImages, routes, sizes} from '../../../services';

export default function Home({navigation, route}) {
  let listViewRef;

  const [page, setPage] = useState(1);
  const [pageOther, setPageOther] = useState(2);
  const [
    onEndReachedCalledDuringMomentum,
    setonEndReachedCalledDuringMomentum,
  ] = useState(false);
  const [
    onEndReachedCalledDuringMomentum1,
    setonEndReachedCalledDuringMomentum1,
  ] = useState(false);
  const [moreProductsLoading, setMoreProductsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([
    {img: appImages.item1, name: 'item name 1'},
    {img: appImages.item2, name: 'item name 2'},
    {img: appImages.item3, name: 'item name 3'},
    {img: appImages.item1, name: 'item name 4'},
    {img: appImages.item2, name: 'item name 5'},
    {img: appImages.item3, name: 'item name 6'},
    {img: appImages.item1, name: 'item name 7'},
    {img: appImages.item2, name: 'item name 8'},
    {img: appImages.item3, name: 'item name 9'},
  ]);
  const [productData, setProductData] = useState([]);
  const [productData1, setProductData1] = useState([]);
  const [textData, setTextData] = useState([
    {title: 'Text1'},
    {title: 'Text2'},
    {title: 'Text3'},
    {title: 'Text4'},
    {title: 'Text5'},
    {title: 'Text6'},
    {title: 'Text7'},
    {title: 'Text8'},
    {title: 'Text9'},
    {title: 'Text10'},
  ]);

  useEffect(async () => {
    // alert  ('fine');
    // LoadRandomData();
    await fetch(`https://randomuser.me/api/?results=10&page=${page}`)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setProductData(responseJson.results);
        // setProductData1(responseJson.results);
      })
      .catch(error => {
        console.log('Error selecting random data: ' + error);
      });
  }, []);

  const LoadRandomData = async () => {
    if (onEndReachedCalledDuringMomentum) {
      let pageNumber = page + 1;
      setPage(pageNumber);
      console.log('Fetch More called with page number ', page);
      setMoreProductsLoading(true);
      await fetch(`https://randomuser.me/api/?results=10&page=${page}`)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          responseJson.results.forEach(element => {
            setProductData(prev => [...prev, element]);
          });
          setMoreProductsLoading(false);
        })
        .catch(error => {
          console.log('Error selecting random data: ' + error);
          setMoreProductsLoading(false);
        });
      setonEndReachedCalledDuringMomentum(false);
    }
  };
  const LoadRandomData1 = async () => {
    if (onEndReachedCalledDuringMomentum1) {
      let pageNumber = pageOther + 1;
      setPageOther(pageNumber);
      setMoreProductsLoading(true);
      await fetch(`https://randomuser.me/api/?results=10&page=${pageNumber}`)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          responseJson.results.forEach(element => {
            setProductData1(prev => [...prev, element]);
          });
          setMoreProductsLoading(false);
        })
        .catch(error => {
          console.log('Error selecting random data: ' + error);
          setMoreProductsLoading(false);
        });
      setonEndReachedCalledDuringMomentum1(false);
    }
  };

  const HeadingContainer = props => {
    return (
      <View style={styles.titleRowContainer}>
        {Platform.OS == 'ios' ? (
          <TinyTitle style={props.style}>{props.title}</TinyTitle>
        ) : (
          <SmallTitle style={[props.style, {fontWeight: 'bold'}]}>
            Categories
          </SmallTitle>
        )}

        <TouchableOpacity style={styles.viewAllButton}>
          {Platform.OS == 'ios' ? (
            <SmallText>See More</SmallText>
          ) : (
            <RegularText>See More</RegularText>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.statusBarColor}
      />
      <SafeAreaView style={styles.container}>
        {/* <KeyboardAwareScrollView> */}
        <Spacer height={sizes.baseMargin} />

        <FlatList
          data={textData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(contact, index) => String(index)}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                paddingVertical: height(0.5),
                paddingHorizontal: width(3),
                borderWidth: 1,
                borderRadius: totalSize(1),
                marginLeft: width(5),
              }}>
              <LargeText>{item.title}</LargeText>
            </TouchableOpacity>
          )}
        />

        {/* <Spacer height={sizes.baseMargin} /> */}
        <FlatList
          data={productData}
          extraData={productData}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onEndReached={LoadRandomData}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => {
            setonEndReachedCalledDuringMomentum(true);
          }}
          keyExtractor={(contact, index) => String(index)}
          renderItem={({item}) => (
            <View
              style={[
                styles.categoryMainContainer,
                {marginTop: sizes.baseMargin},
              ]}>
              <Spacer height={sizes.baseMargin} />
              <HeadingContainer
                // title="Title"
                title={item.cell}
                viewAll
                route={routes.categories}
              />
              <Spacer height={sizes.smallMargin} />
              <FlatList
                data={categoryData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(contact, index) => String(index)}
                renderItem={({item}) => <HomeItemCard item={item} />}
              />
            </View>
          )}
        />

        <Spacer
          height={
            Platform.OS == 'ios' ? sizes.baseMargin : sizes.doubleBaseMargin
          }
        />

        {/* <View style={styles.categoryMainContainer}>
            <Spacer height={sizes.baseMargin} />
            <HeadingContainer
              title="Popular"
              viewAll
              route={routes.categories}
            />
            <Spacer height={sizes.smallMargin} />
            <FlatList
              data={productData}
              extraData={productData}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReached={LoadRandomData}
              onEndReachedThreshold={0.5}
              onMomentumScrollBegin={() => {
                setonEndReachedCalledDuringMomentum(true);
              }}
              keyExtractor={(contact, index) => String(index)}
              renderItem={({item}) => <HomeItemCard item={item} />}
            />
            <Spacer height={sizes.baseMargin} />
          </View>
          <Spacer
            height={Platform.OS == 'ios' ? sizes.TinyMargin : sizes.baseMargin}
          />
          <View
            style={[
              styles.parentColorContainer,
              {
                backgroundColor: colors.yellowLighter,
                borderWidth: 0,
              },
            ]}>
            <View style={[styles.categoryMainContainer]}>
              <Spacer height={sizes.baseMargin} />
              <HeadingContainer
                title="New People"
                viewAll
                route={routes.categories}
              />
              <Spacer height={sizes.smallMargin} />
              <FlatList
                data={productData1}
                extraData={productData1}
                horizontal
                showsHorizontalScrollIndicator={false}
                onEndReached={LoadRandomData1}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin={() => {
                  setonEndReachedCalledDuringMomentum1(true);
                }}
                keyExtractor={(contact, index) => String(index)}
                renderItem={({item}) => <HomeItemCard item={item} />}
              />
              <Spacer height={sizes.doubleBaseMargin} />
            </View>
          </View> */}
        {/* </KeyboardAwareScrollView> */}
        {moreProductsLoading ? (
          <View style={styles.loaderBg}>
            <ActivityIndicator size={'large'} color={colors.activeBottomIcon} />
          </View>
        ) : null}
      </SafeAreaView>
    </Fragment>
  );
}
