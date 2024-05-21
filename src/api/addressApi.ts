import axiosInstance from "./axiosConfig";

interface Province {
  province_id: string;
  province_name: string;
  province_type: String;
}

interface District {
  district_id: string;
  district_name: string;
  province_id: string;
}

export const getProvinces = async (): Promise<Province[]> => {
  try {
    const response = await axiosInstance.get("api/province/");
    return response.data.results;
  } catch (error) {
    console.log("Erro", error);
    throw error;
  }
};

export const getDistricts = async (
  province_id: string
): Promise<District[]> => {
  try {
    const response = await axiosInstance.get(
      `api/province/district/${province_id}`
    );
    return response.data.results;
  } catch (error) {
    console.log("Erro", error);
    throw error;
  }
};

const addressApi = {
  getProvinces,
  getDistricts,
};

export default addressApi;
