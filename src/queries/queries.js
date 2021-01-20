import gql from 'graphql-tag';

export const getInfoQuery = (field) => {
  switch (field) {
    case 'Buildings':
      return getBuildings();
    case 'MeetingRooms':
      return getMeetingRooms();
    case 'Meetings':
      return getMeetings();
  }
};

export const getMeetings = () => {
  return gql`
    {
      Meetings {
        title
        date
        startTime
        endTime
      }
    }
  `;
};

export const getMeetingRooms = () => {
  return gql`
    {
      MeetingRooms {
        name
        floor
        building {
          name
        }
        meetings {
          title
          date
          startTime
          endTime
        }
      }
    }
  `;
};

export const getBuildings = () => {
  return gql`
    {
      Buildings {
        id
        name
        meetingRooms {
          name
          floor
          meetings {
            title
            date
            startTime
            endTime
          }
        }
      }
    }
  `;
};
