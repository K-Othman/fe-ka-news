import "./Error.scss";

export function Error404({ msg = "404 Page not found" }) {
  return (
    <section>
      <h2 className="error"> {msg} </h2>
    </section>
  );
}
