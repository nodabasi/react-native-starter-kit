import axios from "axios";
import { Alert } from "react-native";

const API_URL = "https://dummyjson.com/users";

export const get = async (method: string) => {
    console.log('GET METHOD => ', method);
    try {
        const data = await axios({
          method: 'get',
          url: API_URL + method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
          },
        });
        return data.data;
    } catch (error) {
      console.log(error);
      const er = error.response?.data;
      console.log('GET ERROR: => ', method, er);
  
      Alert.alert(
        'Something went wrong',
        er?.error?.message ? er?.error?.message : '',
      );
      if (er?.message?.error) {
        return String(er?.message?.error);
      }
    }
  };