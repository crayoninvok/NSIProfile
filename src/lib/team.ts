import { ITeam } from '@/types/team';
import resolveResponse from 'contentful-resolve-response';


const baseUrl = process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL as string;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

export const getTeamMembers = async (): Promise<ITeam[]> => {
  const url = `${baseUrl}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=teamMember`;

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
