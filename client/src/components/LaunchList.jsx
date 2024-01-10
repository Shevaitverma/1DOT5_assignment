import { useState, useEffect } from 'react';
import { fetchLaunches } from '../service/isroApi';

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLaunches()
      .then(data => setLaunches(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading launches...</p>;
  }

  if (error) {
    return <p>Error fetching launches: {error.message}</p>;
  }

  
  return (
    <>
      <div>Irso LaunchList</div>
      <table>
      <thead>
        <tr>
          {/* <th>UUID</th> */}
          <th>Name</th>
          <th>Serial Number</th>
          <th>Launch Date</th>
          <th>Launch Type</th>
          <th>Payload</th>
          <th>Link</th>
          <th>Miission status</th>
        </tr>
      </thead>
      <tbody>
        {launches.map(launch => (
          <tr key={launch.UUID}>
            {/* <td>{launch.UUID}</td> */}
            <td>{launch.Name}</td>
            <td>{launch.SerialNumber}</td>
            <td>{launch.LaunchDate}</td>
            <td>{launch.LaunchType}</td>
            <td>{launch.Payload}</td>
            <td>{launch.Link}</td>
            <td>{launch.MissionStatus}</td>
            <td>
              {/* <button onClick={() => handleDetails(launch)}>Details</button> */}
              {/* Add button for favorite actions */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>    
  )
}

export default LaunchList