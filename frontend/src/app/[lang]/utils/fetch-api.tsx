import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,   // ✅ ADD TOKEN HERE
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error("❌ fetchAPI error:", response.status, response.statusText);
      throw new Error(`Fetch API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("❌ fetchAPI fatal error:", error);
    throw new Error(
      `Please check if your Strapi server is running and tokens are correct.`
    );
  }
}

