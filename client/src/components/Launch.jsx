import React, { useEffect, useState } from "react";
import { fetchLaunches } from "../service/isroApi";

const Launch = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLaunches()
          .then(data => setData(data))
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
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
                <h2 className="text-lg font-semibold text-black">Launches</h2>
                <p className="mt-1 text-sm text-gray-700">
                    Here is the list for all launches data...
                </p>
            </div>
        </div>
        <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Name</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Serial Number</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Launch Date</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Launch Type</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Payload</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Link</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                    >
                                        <span>Mission status</span>
                                    </th>

                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 bg-white">
                            {data.map(launch => (
                                <React.Fragment key={launch.UUID}>
                                    <tr className="border-t border-gray-200">
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
                                </React.Fragment>
                                
        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Launch