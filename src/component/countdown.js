import Image from "next/image";

const Countdown = () => {
  return (
    <div>
      <section className="section2" id="countdown">
        <div className="countdown">
          <h1 className="section2-h1">Countdown to Audition</h1>
          <div className="time-container">
            <div className="time-box">
              <span className="number" id="days">
                29
              </span>
              <hr style={{ width: 27 }} />
              <p className="label">Days</p>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span className="number" id="hours">
                02
              </span>
              <hr style={{ width: 27 }} />
              <p className="label">Hours</p>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span className="number" id="minutes">
                08
              </span>
              <hr style={{ width: 27 }} />
              <p className="label">Minutes</p>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span className="number" id="seconds">
                06
              </span>
              <hr style={{ width: 27 }} />
              <p className="label">Seconds</p>
            </div>
          </div>
        </div>
        <Image
          id="topGrey"
          src="/shape-top-grey-80.png"
          className="img3"
          alt="wave"
          width={1000}
          height={50}
        />
      </section>
    </div>
  );
};

export default Countdown;
