import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WithQuery from '../hocs/WithQuery';
import InfoCard from '../molecules/InfoCard';
import { getInfoQuery, getBuildings } from '../queries/queries';
import { infoPageModels } from '../models/infoPageModels';
import client from '../utils/apolloClient';

const InfoPanel = () => {
  const [selectedBuilding, updateSelectedBuilding] = useState('1');
  const [buildings, updateBuildings] = useState([]);
  const onChange = (e) => {
    const { value } = e.target;
    updateSelectedBuilding(value);
  };

  useEffect(() => {
    client
      .query({
        query: getBuildings(),
      })
      .then(({ data }) => {
        const { Buildings } = data;
        updateBuildings(Buildings);
      });
  }, []);

  return (
    <div>
      <select onChange={onChange}>
        {buildings.map((building) => (
          <option value={building.id}>{building.name}</option>
        ))}
      </select>
      {infoPageModels.map(({ id, title }) => (
        <WithQuery
          query={getInfoQuery(id)}
          selectedBuilding={selectedBuilding}
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
