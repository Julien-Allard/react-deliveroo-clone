import "./maintop.css";

const MainTop = (props) => {
  const data = props.data;

  return (
    <header>
      <div className="container main-top">
        <div className="main-top-text">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="main-top-picture">
          <img src={data.restaurant.picture} alt="" />
        </div>
      </div>
    </header>
  );
};

export default MainTop;
