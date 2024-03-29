import Download from "./Download";

export default function ForItem({ books }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${books.isbn}/${books.isbn}.jpg`}>
          {books.title} ({books.price} yen)
        </a>
      </dt>
      <dd>
        {books.summary}
        {books.download ? <Download isbn={books.isbn} /> : null}
      </dd>
    </>
  );
}
