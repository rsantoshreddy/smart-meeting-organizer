import moment from 'moment';

const overlapFilter = (meeting) => {
  const now = moment();
  const { date, startTime, endTime } = meeting;
  return now.isBetween(
    moment(`${date} ${startTime}`, 'DD/MM/YYYY HH:mm'),
    moment(`${date} ${endTime}`, 'DD/MM/YYYY HH:mm')
  );
};

const useFilter = ({ id, data }) => {
  const { length } = data;

  switch (id) {
    case 'Buildings':
      return { total: length };
    case 'MeetingRooms':
      let freeRooms = 0;
      data.forEach((room) => {
        const { meetings } = room;
        const overlap = meetings.filter(overlapFilter);
        if (!overlap.length) {
          freeRooms++;
        }
      });
      return { total: length, freeRooms };
    case 'Meetings':
      const activeMeetings = data.filter(overlapFilter);
      return { total: length, activeMeetings };
  }
};

export default useFilter;
