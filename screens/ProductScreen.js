import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {getSubCategory} from '../HttpRequest/Axios';

const ProductScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after delay
    }, 2000);
    tabData();
  }, []);

  const tabData = async pageIndex => {
    try {
      const categoryData = await getSubCategory(pageIndex);
      const tabRoutes = categoryData.map(category => ({
        key: category.Name,
        title: category.Name,
      }));
      setLoading(false);
      setRoutes(tabRoutes);
      setCategories(categoryData);
      setSubCategoriesData(prevCategories => [
        ...prevCategories,
        ...categoryData,
      ]);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const renderScene = ({route}) => {
    const filteredData = categories.find(
      category => category.Name === route.key,
    );
    const subCategories = filteredData?.SubCategories || [];

    if (subCategories.length === 0) {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.nodataTextStyle}>No data found</Text>
        </View>
      );
    }

    // Render your subcategory data here
    return (
      <FlatList
        data={subCategoriesData}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        onEndReached={() => incrementPageIndex()}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => {
          return (
            <View>
              {item.SubCategories &&
                item.SubCategories.map((subItem, index) => (
                  <View style={{margin: 15}} key={index}>
                    <Text style={styles.textStyle}>{subItem.Name}</Text>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      <View style={{flexDirection: 'row', marginTop: 8}}>
                        {subItem.Product &&
                          subItem.Product.map((productItem, productIndex) => (
                            <View
                              style={{
                                marginRight: 10,
                                justifyContent: 'center',
                              }}
                              key={productIndex}>
                              <ImageBackground
                                style={styles.productImage}
                                source={{uri: productItem.ImageName}}>
                                <Text style={styles.productPrice}>
                                  {productItem.PriceCode}
                                </Text>
                              </ImageBackground>
                              <Text style={styles.productName}>
                                {productItem.Name}
                              </Text>
                            </View>
                          ))}
                      </View>
                    </ScrollView>
                  </View>
                ))}
            </View>
          );
        }}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.renderFooter}>
        {loading ? (
          <ActivityIndicator size="large" color="#DC143C" />
        ) : (
          <ActivityIndicator size="large" color="#DC143C" />
        )}
      </View>
    );
  };

  //Pagination Added
  const incrementPageIndex = async () => {
    if (!loading) {
      const newPageIndex = pageIndex + 1;
      setPageIndex(newPageIndex);
      tabData(newPageIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.textStyle}>ProductScreen</Text>
          <AntDesign
            style={styles.filterImage}
            name="filter"
            size={30}
            color="#FFFFFF"
          />
          <Feather
            style={styles.searchImage}
            name="search"
            size={30}
            color="#FFFFFF"
          />
        </View>
        {routes.length > 0 && (
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: 300}}
            renderTabBar={props => (
              <TabBar
                {...props}
                scrollEnabled
                tabStyle={{
                  width: 'auto',
                  backgroundColor: 'black',
                }}
                indicatorStyle={{backgroundColor: 'white'}}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: 'black',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    marginRight: '22%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  productName: {fontSize: 10, marginTop: 5, alignSelf: 'center', color: '#FFF'},
  productPrice: {
    fontSize: 20,
    margin: 5,
    color: '#FFF',
    width: '30%',
    backgroundColor: 'blue',
  },
  productImage: {
    height: 150,
    width: 150,
    borderRadius: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  filterImage: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  searchImage: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginRight: 15,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodataTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#FFF',
  },
  renderFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
