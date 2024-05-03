import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const colorData = [
  {color: 'red', number: '0', name: 'Total Hardness (ppm)'},
  {color: 'yellow', number: '10'},
  {color: 'cyan', number: '30'},
  {color: 'blue', number: '40'},
  {color: 'green', number: '50'},
];



export default function ColorDesignScreen() {
  const [selectedColor1, setSelectedColor1] = useState(null);
  const [selectedNumber1, setSelectedNumber1] = useState('0');

  const [selectedColor2, setSelectedColor2] = useState(null);
  const [selectedNumber2, setSelectedNumber2] = useState('0');

  const [selectedColor3, setSelectedColor3] = useState(null);
  const [selectedNumber3, setSelectedNumber3] = useState('0');

  const [selectedColor4, setSelectedColor4] = useState(null);
  const [selectedNumber4, setSelectedNumber4] = useState('0');

  const [selectedColor5, setSelectedColor5] = useState(null);
  const [selectedNumber5, setSelectedNumber5] = useState('0');

  const [selectedColor6, setSelectedColor6] = useState(null);
  const [selectedNumber6, setSelectedNumber6] = useState('0');

  const handleColorSelect = (color, number, viewIndex) => {
    switch (viewIndex) {
      case 1:
        setSelectedColor1(color);
        setSelectedNumber1(number);
        break;
      case 2:
        setSelectedColor2(color);
        setSelectedNumber2(number);
        break;
      case 3:
        setSelectedColor3(color);
        setSelectedNumber3(number);
        break;
      case 4:
        setSelectedColor4(color);
        setSelectedNumber4(number);
        break;
      case 5:
        setSelectedColor5(color);
        setSelectedNumber5(number);
        break;
      case 6:
        setSelectedColor6(color);
        setSelectedNumber6(number);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Test Stripe</Text>
      <View style={styles.titleStyle}>
        <Text style={styles.mainTitleStyle}>Total Hardness (ppm)</Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 1)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber1}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor1 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 1)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Second row */}
      <View style={styles.titleStyle}>
        <Text style={{width: 'auto', marginLeft: 35}}>Total Chlorin (ppm)</Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 2)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber2}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor2 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 2)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Third row */}
      <View style={styles.titleStyle}>
        <Text style={{width: 'auto', marginLeft: 35}}>Free Chlorin (ppm)</Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 2)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber3}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor3 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 3)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Four row */}
      <View style={styles.titleStyle}>
        <Text style={{width: 'auto', marginLeft: 35}}>pH (ppm)</Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 2)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber4}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor4 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 4)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Five row */}
      <View style={styles.titleStyle}>
        <Text style={{width: 'auto', marginLeft: 35}}>
          Total Alkalinity (ppm)
        </Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 2)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber5}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor5 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 5)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Six row */}
      <View style={styles.titleStyle}>
        <Text style={{width: 'auto', marginLeft: 35}}>Cyanuric Acid (ppm)</Text>
        <TouchableOpacity
          onPress={() => handleColorSelect('green', '50', 2)}
          style={styles.selectedBoxStyle}>
          <Text style={styles.selectedNumberStyle}>{selectedNumber6}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selectedColor6 || 'black',
            margin: 5,
          }}
        />
        {colorData.map(item => (
          <TouchableOpacity
            style={{marginLeft: 10}}
            key={item.color}
            onPress={() => handleColorSelect(item.color, item.number, 6)}>
            <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 18,
                backgroundColor: item.color,
                margin: 5,
              }}
            />
            <Text style={{margin: 5, marginLeft: 10}}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 40,
    marginBottom: 20,
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  selectedBoxStyle: {
    width: 70,
    height: 25,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  selectedNumberStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  mainTitleStyle: {
    width: '50%',
    marginLeft: 35,
  },
});
