import { z } from "zod";

const InforSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ và tên").max(60, "Tên quá dài"),
  phoneNumber: z
    .string()
    .regex(/^\d{10,11}$/, { message: "Số điện thoại không hợp lệ" })
    .nonempty({ message: "Số điện thoại bắt buộc nhập" }),
  birthday: z.coerce.date().refine(
    (data) => {
      return data < new Date();
    },
    { message: "Không hợp lệ" }
  ),
  identifyId: z
    .string()
    .min(1, "Vui lòng nhập CCCD")
    .regex(/^\d{12}$/, "Số CCCD không hợp lệ")
    .nonempty({ message: "CCCD bắt buộc nhập" }),
  province: z.string(),
  district: z.string(),
});

export default InforSchema;
