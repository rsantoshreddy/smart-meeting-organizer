import { useQuery } from '@apollo/react-hooks';
import { Progress, Alert } from 'reactstrap';

const WithQuery = ({ query, Component, id, title, ...restProps }) => {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return (
      <Progress bar animated color='success' value='100' className='mb-3'>
        Loading {title}...
      </Progress>
    );
  }

  if (error) {
    return (
      <Alert color='danger'>Something went wrong! Please try again.</Alert>
    );
  }

  return <Component data={data[id]} title={title} id={id} {...restProps} />;
};

export default WithQuery;
