import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const ProductCrudScreen = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE,
          password TEXT,
          email TEXT,
        );`
      );
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const createProduct = () => {
    SQLite.openDatabase(
      { name: 'products.db', location: 'default' },
      db => {
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO products (title, price) VALUES (?, ?)',
            [title, price],
            () => {
              console.log('Product created successfully.');
              fetchProducts(); // Refresh the product list
            },
            error => {
              console.error('Failed to create product:', error);
            }
          );
        });
      },
      error => {
        console.error('Failed to open database:', error);
      }
    );
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text>Price:</Text>
      <TextInput
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <Button
        title="Create Product"
        onPress={createProduct}
      />
      <View>
        {products.map(product => (
          <Text key={product.id}>{product.title}, {product.price}</Text>
        ))}
      </View>
    </View>
  );
};

export default ProductCrudScreen;
