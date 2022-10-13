export default function Card({ data }) {
  // console.log(data.title);
  return (
    <li className="card">
      <div className="title">{data.title}</div>
      <p className="desc">{data.description}</p>
    </li>
  );
}
