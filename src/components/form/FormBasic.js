import { useForm } from "react-hook-form";

export default function FormBasic() {
  const defaultValues = {
    name: "John",
    email: "example@email.com",
    gender: "male",
    memo: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} onValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Name is required.",
            maxLength: { value: 20, message: "Name is too long." },
          })}
        />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">Gender: </label>
        <br />
        <label>
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: "Gender is required.",
            })}
          />
          Male
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: "Gender is required.",
            })}
          />
          Female
          <input
            type="radio"
            value="male"
            {...register("gender", {
              required: "Gender is required.",
            })}
          />
          Other
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required.",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." },
          })}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">Memo:</label>
        <br />
        <textarea
          id="memo"
          {...register("memo", {
            required: "Memo is required.",
            maxLength: { value: 100, message: "Memo is too long." },
          })}
        />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
