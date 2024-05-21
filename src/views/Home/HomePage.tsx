import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import imgPhoneAndVaccine from "../../assets/images/phone and vaccie.png";
import InforSchema from "../../validator/inforValidation";
import { parseDate } from "../../utils";
import FormFields from "./formFields";

import styles from "./styles.module.css";

export type InforSchemaType = z.infer<typeof InforSchema>;

const HomePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<InforSchemaType>({ resolver: zodResolver(InforSchema) });
  const onSubmit: SubmitHandler<InforSchemaType> = (data) => {
    const parsedBirthday = parseDate(data.birthday.toString());
    const formData = {
      ...data,
      birthday: parsedBirthday,
    };
    console.log(formData);
  };

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.content__image}>
          <img src={imgPhoneAndVaccine} alt="image Phone and Vaccine" />
        </section>

        <section className={styles.content__form}>
          <h3>Tra cứu chứng nhận Vaccine</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormFields
              register={register}
              control={control}
              errors={errors}
              setValue={setValue}
            />
          </form>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
