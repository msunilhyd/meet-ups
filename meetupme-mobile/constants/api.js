export const fetchMeetups = () => 
  fetch('http://192.168.1.106:3000/api/meetups')
  .then(res => res.json());