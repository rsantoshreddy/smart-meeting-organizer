import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import Layout from './hocs/Layout';
import InfoPanel from './organisms/InfoPanel';
import AddMeetingForm from './organisms/AddMeetingForm';
import AddRoom from './organisms/AddRoom';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/add-room'>
              <AddRoom />
            </Route>
            <Route path='/add-meeting'>
              <AddMeetingForm />
            </Route>
            <Route path='/'>
              <InfoPanel />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
