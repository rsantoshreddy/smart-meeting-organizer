import moment from 'moment';

const overlapFilter = (meeting) => {
  const now = moment();
  const { date, startTime, endTime } = meeting;
  return now.isBetween(
    moment(`${date} ${startTime}`, 'DD/MM/YYYY HH:mm'),
    moment(`${date} ${endTime}`, 'DD/MM/YYYY HH:mm')
  );
};

const useFilter = ({ id, data, selectedBuilding }) => {
  switch (id) {
    case 'Buildings':
      const buildings = data.filter((d) => d.id === +selectedBuilding);
      return { total: buildings.length };
    case 'MeetingRooms':
      let freeRooms = 0;
      const rooms = data.filter((d) => d.building.id === +selectedBuilding);
      const { length } = rooms;
      rooms.forEach((room) => {
        const { meetings } = room;
        const overlap = meetings.filter(overlapFilter);
        if (!overlap.length) {
          freeRooms++;
        }
      });
      return { total: length, freeRooms };
    case 'Meetings':
      const meetings = data.filter(
        (d) =>
          d.meetingRoom.building &&
          d.meetingRoom.building.id === +selectedBuilding
      );
      const activeMeetings = meetings.filter(overlapFilter);
      return { total: meetings.length, activeMeetings };
  }
};

export default useFilter;
