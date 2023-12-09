import React from "react";
import Download from "./Download";

export default function ForList({ src }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price})
            </a>
          </dt>
          <dd>{elem.summary}</dd>
          <Download src={elem.isbn} />
        </React.Fragment>
      ))}
    </dl>
  );
}
