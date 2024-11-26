import Image from "next/image";


const Important = () => {
  return (
    <section className="section3">
      <div className="important-things" id="note">
        <h1 style={{ fontSize: 42 }}>
          Important things <br /> to note...
        </h1>
      </div>
      <div className="Pricing">
        <i
          className="fa-solid fa-money-bill-wave fa-2xl"
          style={{ color: "#8B0000" }}
        />
        <h3 style={{ fontSize: 25 }}>Pricing</h3>
        <p className="pricing-p" style={{ opacity: "0.5" }}>
          Audition forms are available for <br />
          ₦1,000 for single contestants,
          <br /> and ₦1,500 for a group of five.
        </p>
      </div>
      <div className="prizes">
        <i className="fa-solid fa-trophy fa-2xl" style={{ color: "#8B0000" }} />
        <h3 style={{ fontSize: 25 }}>Prizes</h3>
        <p className="p-content" style={{ opacity: "0.5" }}>
          <strong>1st Prize:</strong> ₦2,000,000
        </p>
        <p className="p-content" style={{ opacity: "0.5" }}>
          <strong>2nd Prize:</strong> ₦1,000,000
        </p>
        <p className="p-content" style={{ opacity: "0.5" }}>
          <strong>3rd Prize:</strong> ₦500,000
        </p>
      </div>
    </section>
  );
};

export default Important;
