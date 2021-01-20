import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import WithQuery from '../hocs/WithQuery';
import InfoCard from '../molecules/InfoCard';
import { getInfoQuery } from '../queries/queries';

const AddRoom = (props) => {
  let location = useLocation();

  return (
    <div>
      {/* <WithQuery
        query={getInfoQuery(id)}
        key={id}
        id={id}
        title={title}
        Component={InfoCard}
      /> */}
      {JSON.stringify(location)}

      <div className='text-center'>
        <Button color='primary' outline>
          Save Meeting
        </Button>
      </div>
    </div>
  );
};

export default AddRoom;
