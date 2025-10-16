import axios from 'axios';

type User = {
  id: number;
  name: string;
  email: string;
};

export async function getUser(id: number): Promise<User | null> {
  try {
    const { data } = await axios.get<User>(`https://api.example.com/users/${id}`);
    console.log(`Fetched user: ${data.name}`);
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}
