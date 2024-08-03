// Dropdown.js
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {hp, wp} from '../Utlis/Responsive';

const Button = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {label: 'Lab Diamond Engagement Rings', value: '1'},
    {label: 'Gemstone Engagement Rings', value: '2'},
    {label: 'Diamond Engagement Rings', value: '3'},
  ];

  // Render text alongside the arrow icon
  const renderLeftIcon = () => (
    <View style={styles.leftIconContainer}>
      <Text style={styles.leftIconText}>Show Engagement Rings</Text>
    </View>
  );

  // Render each item in the dropdown list
  const renderItem = item => (
    <View style={styles.dropdownItem}>
      <Text style={styles.dropdownItemText}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.foreverSection}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        multiSelect
        value={selectedItems}
        onChange={items => setSelectedItems(items)}
        placeholder="Select options"
        renderLeftIcon={renderLeftIcon}
        renderItem={renderItem} // Apply custom rendering for dropdown items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foreverSection: {
    borderRadius: 10,
    borderColor: '#ddd',

    alignItems: 'center',
    height: '20%',
  },
  dropdown: {
    width: '90%', // Adjust width as needed
    height: '30%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  leftIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  leftIconText: {
    fontSize: 16, // Adjust font size if needed
    color: 'black',
    marginLeft: wp(5),
    fontWeight: 'bold',
  },
  dropdownItem: {
    paddingVertical: 8, // Reduced padding for a tighter fit
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 14, // Adjust font size if needed
    color: 'black', // Set the text color to black
  },
});

export default Button;
