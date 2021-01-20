import { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import client from '../utils/apolloClient';
import FormElements from '../molecules/FormElements';
import { addMeetingFormModel } from '../models/addMeetingFormModel';
import { getBuildings } from '../queries/queries';

const AddMeetingForm = () => {
  const [values, updateValues] = useState({});
  const [elements, updateElements] = useState(() =>
    _.cloneDeep(addMeetingFormModel)
  );

  useEffect(() => {
    client
      .query({
        query: getBuildings(),
      })
      .then(({ data }) => {
        const { Buildings } = data;
        const buildingElement = elements.find(
          (element) => element.id === 'building'
        );
        buildingElement.options = Buildings.map(({ id, name }) => ({
          id,
          label: name,
        }));
        updateElements(_.clone(elements));
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    values[name] = value;
    updateValues(_.cloneDeep(values));
  };

  return (
    <div className='mt-5'>
      <h4 className='text-center'>Add Meeting</h4>
      <FormElements elements={elements} onChange={onChange} />
      <div className='text-center'>
        <Link to='/' className='btn btn-outline-danger mr-2'>
          Back
        </Link>
        <Link
          to={{ pathname: '/add-room', state: { ...values } }}
          className='btn btn-outline-primary'
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default AddMeetingForm;
