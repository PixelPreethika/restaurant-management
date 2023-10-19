import axios from "axios";

export interface FoodData {
  ID: string;
  name: string;
  price: number;
  food_id: string;
  menu_id: string;
  menu_name: string;
  food_image: string;
  created_at: string;
  quantity: number;
}
interface IFoodByMenu {
  id: string;
}

export const getAllFood = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/food`);

    // console.log("Response:", response.data);

    // Check the response status to ensure it's successful (status code 200)
    if (response.status === 200) {
      const data = response.data;

      // Ensure the response data is an array
      if (Array.isArray(data)) {
        return data;
      } else {
        console.error("Request failed with status:", response.status);
        return [];
      }
    }
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching food data:", error);
    return []; // Return an empty array or handle the error as needed
  }
};

export const getFoodById = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
    );
    const data = response.data;

    return data;
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching food data:", error);
    return []; // Return an empty array or handle the error as needed
  }
};

export const getFoodByMenu = async ({
  id,
}: IFoodByMenu): Promise<FoodData[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/food/menu/${id}`
    );
    const data = response.data;

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Response data is not an array:", data);
      return [];
    }
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching food data:", error);
    return []; // Return an empty array or handle the error as needed
  }
};
