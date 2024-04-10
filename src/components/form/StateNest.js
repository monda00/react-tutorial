import { useState } from "react";

export default function StateNest() {
  const [form, setForm] = useState({
    name: "taro",
    address: {
      prefecture: "Tokyo",
      city: "Shibuya",
    },
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormNest = (e) => {
    setForm({
      ...form,
      address: {
        ...form.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const show = () => {
    console.log(
      `${form.name} (${form.address.prefecture} ${form.address.city})`
    );
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="prefecture">Prefecture:</label>
        <input
          id="prefecture"
          name="prefecture"
          type="text"
          onChange={handleFormNest}
          value={form.address.prefecture}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={handleFormNest}
          value={form.address.city}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          Show
        </button>
      </div>
    </form>
  );
}
