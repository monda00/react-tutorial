export default function EventBasic({ type }) {
  const current = () => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleTimeString());
        break;
    }
  };

  return (
    <div>
      <button onClick={current}>Get time</button>
    </div>
  );
}
