import wrapPromise from "./wrapPromise";

const info = getInfo();
export default function ThroworResult() {
  const result = info.get();
  return <div>{result}</div>;
}

function getInfo() {
  return wrapPromise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data Fetched!");
        } else {
          reject("Network Error!");
        }
      }, 2000);
    })
  );
}
