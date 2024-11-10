import { IProNav } from "@/types/productn";
import resolveResponse from "contentful-resolve-response";

const baseUrl = process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL as string;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

export const getProductNav = async (): Promise<IProNav[]> => {
  try {
    const res = await fetch(
      `${baseUrl}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=navigationProduct`,
      { next: { revalidate: 3 } }
    );

    if (!res.ok) {
      console.error("Failed to fetch data:", res.status, res.statusText);
      throw new Error("Failed to fetch data from Contentful");
    }

    const data = await res.json();
    const result = resolveResponse(data) as IProNav[];

    return result;
  } catch (error) {
    console.error("Error fetching navigation products:", error);
    throw error;
  }
};
