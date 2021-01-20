import { Link } from 'react-router-dom';
import WithQuery from '../hocs/WithQuery';
import InfoCard from '../molecules/InfoCard';
import { getInfoQuery } from '../queries/queries';
import { infoPageModels } from '../models/infoPageModels';

const InfoPanel = () => {
  return (
    <div>
      {infoPageModels.map(({ id, title }) => (
        <WithQuery
          query={getInfoQuery(id)}
          key={id}
          id={id}
          title={title}
          Component={InfoCard}
        />
      ))}

      <div className='text-center'>
        <Link to='/add-meeting' className='btn btn-outline-primary'>
          Add a Meeting
        </Link>
      </div>
    </div>
  );
};
export default InfoPanel;
