export const setBaseURL = () => {
  localStorage.setItem('BASE_URL', process.env.NEXT_PUBLIC_SERVER_URL);
};

export const getBaseURL = () => localStorage.getItem('BASE_URL') || '';
