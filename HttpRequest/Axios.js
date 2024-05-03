import axios from 'axios';

const BASE_URL = 'http://esptiles.imperoserver.in/api/API/Product';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (categoryId, pageIndex) => {
  try {
    const response = await api.post('/DashBoard', {
      params: {CategoryId: categoryId, PageIndex: pageIndex},
    });
    return response.data.Result.Category;
  } catch (error) {
    console.error('Error fetching products:', error.response);
    throw error;
  }
};

export const getSubCategory = async PageIndex => {
  try {
    const response = await api.post('/DashBoard', {
      CategoryId: 0,
      DeviceManufacturer: 'Google',
      DeviceModel: 'Android SDK built for x86',
      DeviceToken: '',
      PageIndex: PageIndex,
    });
    return response.data.Result.Category;
  } catch (error) {
    console.error('Error fetching getCategory:', error.response);
    throw error;
  }
};

export default api;
