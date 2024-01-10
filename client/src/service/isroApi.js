export const fetchLaunches = async () => {
    try {
      const response = await fetch('https://services.isrostats.in/api/launches'); // Assuming your backend route
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch launches');
    }
  };
  