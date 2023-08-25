export const setBaseURL = () => {
  let host = process.env.NEXT_PUBLIC_SERVER_URL;
  
  if (!host.startsWith('http://')) {
    host = `http://${host}`;
  }
  
  if (host[host.length - 1] !== '/') {
    host += '/';
  }

  localStorage.setItem('BASE_URL', host);
};

export const getBaseURL = () => localStorage.getItem('BASE_URL') || '';
