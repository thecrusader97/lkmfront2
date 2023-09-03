import { decode as atob } from 'base-64';

export const decodeJwtToken = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken;
  } catch (error) {
    console.error('JWT Token Decoding Error:', error);
    return null;
  }
};
