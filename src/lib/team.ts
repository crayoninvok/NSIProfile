import { ITeam } from '@/types/team';
import resolveResponse from 'contentful-resolve-response';

const base_url = process.env.CONTENTFUL_BASE_URL as string;
const spaceId = process.env.CONTENTFUL_SPACE_ID as string;
const token = process.env.CONTENTFUL_TOKEN as string;

export const getTeamMembers = async (): Promise<ITeam[]> => {
  const url = `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=teamMember`;
  console.log("Fetching URL:", url); 

  const res = await fetch(url, { next: { revalidate: 3 } });

  if (!res.ok) {
    console.error('Failed to fetch data:', res.status, res.statusText); 
    throw new Error('Failed to fetch data from Contentful');
  }

  const data = await res.json();
  const result = resolveResponse(data) as ITeam[];

  return result;
};
