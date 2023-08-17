import { fetchDataToken } from '../../apis/outpostapi';
import { setMapData } from '../slice/mapDataSlice';

export const fetchMapData = () => async (dispatch) => {
  try {
    const { latitudes, longitudes, locations } = await fetchDataToken();
    dispatch(setMapData({ latitudes, longitudes, locations }));
  } catch (error) {
    console.error('Error fetching location data:', error);
  }
};

export const refreshMapData = () => (dispatch) => {
  dispatch(fetchMapData());
  setTimeout(() => {
    dispatch(refreshMapData());
  }, 30000); // Refresh every 30 seconds
};
