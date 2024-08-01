const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url(./src/assets/img/pizzeria-mamma-mia-header.jpg)",
        padding: "50px",
        color: "white",
      }}
    >
      <h1 className="tit_header">¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
