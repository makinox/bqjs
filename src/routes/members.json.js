import axios from 'axios';
const method = 'https';
const host = 'api.meetup.com';
const sig = process.env.SIG;
const sigId = process.env.SIG_ID;
const requestMethod = 'BarranquillaJS/members';
const params = {
  'photo-host': 'secure',
  sig,
  sig_id: sigId,
};

export function get(req, res, next) {
  axios.get(`${method}://${host}/${requestMethod}`, {
    params
  }).then(response => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  }).catch(err=> {
    console.warn(err);
  });
}
