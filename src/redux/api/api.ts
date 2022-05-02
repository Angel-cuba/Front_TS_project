export const allCountries = () => fetch('https://restcountries.com/v3.1/all');
export const countryById = (id: string) => fetch(`https://restcountries.com/v3.1/alpha/${id}`);
