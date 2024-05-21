import React, { useEffect, useState } from "react";
import {
  Controller,
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import { InforSchemaType } from "./HomePage";
import addressApi from "../../api/addressApi";

interface InforFormFieldsProps {
  register: UseFormRegister<InforSchemaType>;
  control: Control<InforSchemaType>;
  errors: FieldErrors<InforSchemaType>;
  setValue: UseFormSetValue<InforSchemaType>;
}

interface Province {
  province_id: string;
  province_name: string;
}

interface District {
  district_id: string;
  district_name: string;
  province_id: string;
}

const FormFields: React.FC<InforFormFieldsProps> = ({
  register,
  control,
  errors,
  setValue,
}) => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await addressApi.getProvinces();
        if (data && data.length > 0) {
          setProvinces(data);
          setValue("province", data[0].province_name);
          fetchDistricts(data[0].province_id);
        }
      } catch (error) {
        console.error("Error fetching provinces", error);
      }
    };

    fetchProvinces();
  }, [setValue]);

  const fetchDistricts = async (provinceId: string) => {
    try {
      const data = await addressApi.getDistricts(provinceId);
      if (data && data.length > 0) {
        setDistricts(data);
        setValue("district", data[0].district_name);
      }
    } catch (error) {
      console.error("Error fetching districts", error);
    }
  };

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProvince = event.target.value;
    setValue("province", selectedProvince);
    const selectedProvinceId = provinces.find(
      (province) => province.province_name === selectedProvince
    )?.province_id;
    if (selectedProvinceId) {
      fetchDistricts(selectedProvinceId);
    }
  };

  return (
    <>
      <p>
        Vui lòng điền đầy đủ các thông tin để tiến hành tìm kiếm thông tin chứng
        nhận vắc xin của bạn.
      </p>
      <input
        type="text"
        className="input"
        placeholder="Họ và tên"
        {...register("name")}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        type="text"
        className="input"
        placeholder="Số điện thoại"
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}

      <input
        type="date"
        className="input"
        placeholder="birthday"
        {...register("birthday")}
      />
      {errors.birthday && <span>{errors.birthday.message}</span>}

      <input
        type="text"
        className="input"
        placeholder="Căn Cước Công Dân"
        {...register("identifyId")}
      />
      {errors.identifyId && <span>{errors.identifyId.message}</span>}

      <Controller
        control={control}
        name="province"
        render={({ field: { value, onChange } }) => (
          <select
            id="province"
            value={value}
            onChange={(e) => {
              onChange(e);
              handleProvinceChange(e);
            }}
            style={{
              padding: "0.8rem 1rem",
              borderRadius: "0.6rem",
              border: "none",
            }}
          >
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_name}>
                {province.province_name}
              </option>
            ))}
          </select>
        )}
      />
      {errors.province && <span>{errors.province.message}</span>}

      <Controller
        control={control}
        name="district"
        render={({ field: { value, onChange } }) => (
          <select
            id="district"
            value={value}
            onChange={onChange}
            style={{
              padding: "0.8rem 1rem",
              borderRadius: "0.6rem",
              border: "none",
            }}
          >
            {districts.map((district) => (
              <option key={district.district_id} value={district.district_name}>
                {district.district_name}
              </option>
            ))}
          </select>
        )}
      />
      {errors.district && <span>{errors.district.message}</span>}

      <button type="submit">Tìm kiếm</button>
    </>
  );
};

export default FormFields;
