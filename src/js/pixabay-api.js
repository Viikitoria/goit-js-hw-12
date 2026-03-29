import axios from 'axios';

const API_KEY = '55034469-fe8c7c81350cc4405e2a2064a';
export const ITEMS_PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: ITEMS_PER_PAGE,
  };

  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data;
}