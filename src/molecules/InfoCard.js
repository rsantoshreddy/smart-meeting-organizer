import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import useFilter from '../hooks/useFilter';

const InfoCard = ({ id, title, data, selectedBuilding }) => {
  const { total, freeRooms, activeMeetings } = useFilter({
    id,
    data,
    selectedBuilding,
  });
  return (
    <Card className='mb-3'>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardText>Total: {total}</CardText>
        {freeRooms && <CardText>Free now: {freeRooms}</CardText>}
        {activeMeetings && (
          <CardText>Total {activeMeetings.length} going on now</CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default InfoCard;
