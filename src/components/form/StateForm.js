import { useState } from "react";

export default function StateForm() {
  const [form, setForm] = useState({
    name: "John",
    age: 18,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`Hi, ${form.name} (${form.age})`);
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
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          Send
        </button>
      </div>
      <p>
        Hello {form.name} ({form.age})
      </p>
    </form>
  );
}
