import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://smart-meeting.herokuapp.com',
});

export default client;
