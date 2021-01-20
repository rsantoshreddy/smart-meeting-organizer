import { Container } from 'reactstrap';

const Layout = ({ children }) => {
  return (
    <Container className='app'>
      <header>
        <h2>Welcome to Meeting Scheduler!</h2>
      </header>
      {children}
      <footer className='text-center fixed-bottom'>
        &#169; rsantoshreddy09@gmail.com
      </footer>
    </Container>
  );
};

export default Layout;
