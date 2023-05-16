const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35142474-9ab0342e5503fc668189498b3';

const fetchImages = async (value, page) => {
  const data = await fetch(
    `${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await data.json();
};

export default fetchImages;

// 1 метод без async

// const fetchImages = (value, page) => {
//   return fetch(
//     `${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => res.json());
// };

// async function fetchImages(value, page) {
//   return await fetch(
//     `${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (!response.ok) {
//       return Promise.reject(
//         new Error('Oops...something going wrong. Try again later.')
//       );
//     }
//     return response.json();
//   });
// }
