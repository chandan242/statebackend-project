import { useState } from 'react';
import { PincodeFetchURL } from './baseURL';

const usePincodeFetch = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [pincodeLoading, setPincodeLoading] = useState(false);
  const [pincodeError, setPincodeError] = useState(null);

  const fetchPincodeData = async (pincode) => {
    if (pincode.length === 6) {
      setPincodeLoading(true);
      setPincodeError(null);
      try {
        const response = await fetch(`${PincodeFetchURL}${pincode}`);
        const data = await response.json();
        if (data[0]?.Status === 'Success') {
          const district = data[0].PostOffice[0].District;
          const state = data[0].PostOffice[0].State;

          return { district, state };
        } else {
          setPincodeError('Invalid pin code');
        }
      } catch (error) {
        console.error('Error fetching pincode data:', error);
        setPincodeError('Error fetching pin code data');
      } finally {
        setPincodeLoading(false);
      }
    }
    return { district: '', state: '' };
  };

  return {
    districtOptions,
    stateOptions,
    pincodeLoading,
    pincodeError,
    fetchPincodeData,
  };
};

export default usePincodeFetch;
