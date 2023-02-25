import img1 from './Images/screenshot.png';
import img2 from './Images/rehack.png';
import img3 from './Images/placeholder.jpg';
import img4 from './Images/placeholder2.jpg';
import img5 from './Images/placeholder3.jpg';

function Project() {

  return (
    <>

      <section className="WorkSection " id="portfolio">
        <h2>Portfolio</h2>
        <p>
          {" "}
          I enjoy front-end web development, over the past few weeks I have been a
          part of edx front end-web development bootcamp. I have compeleted a number
          of projects. Feel free to explore my portfolio.
        </p>
        <div className="row">
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://o1ujok3.github.io/Recipedia/">
                <img
                  className="card-img-top" src={img1}
                  alt="Recipedia"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Recipedia</h5>
                <p className="card-text">
                  Recipedia is a recipe search application which allows users to input
                  an ingredient or dish name to return results. The results return
                  recipe cards which include links to the full recipe. Users are also
                  given the option of finding a local restaurant by clicking on the
                  'find a restaurant'.{" "}
                </p>
                <a href="https://github.com/o1ujok3/Recipedia" className="GitHub">
                  Read More
                </a>


              </div>
            </div>
          </div>
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://startling-zuccutto-a47cd8.netlify.app/">
                <img
                  className="card-img-top"
                  src={img2}
                  alt="RehackHome"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Rehack Recruitment</h5>
                <p className="card-text">
                  This project is a web application for a job recruitment agency which dedicated to helping individuals find their desired job based on their unique criteria. Individuals will have to highlight their job title, the location in which the job is situated and their desired salary.
                </p>
                <a href="https://github.com/o1ujok3/ReHACK" className="GitHub">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://o1ujok3.github.io/Recipedia/">
                <img
                  className="card-img-top"
                  src={img3}
                  alt="Portfolio1"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  gravida mollis placerat. Nulla vitae posuere mi, nec suscipit
                  tortor. Fusce quam nunc, tempus id ligula quis, consectetur ornare
                  nunc. Vestibulum vestibulum viverra auctor.
                </p>
                <a href="https://github.com/o1ujok3/Recipedia" className="GitHub">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://o1ujok3.github.io/Recipedia/">
                <img
                  className="card-img-top"
                  src={img3}
                  alt="Portfolio2"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  gravida mollis placerat. Nulla vitae posuere mi, nec suscipit
                  tortor. Fusce quam nunc, tempus id ligula quis, consectetur ornare
                  nunc. Vestibulum vestibulum viverra auctor.
                </p>
                <a href="https://github.com/o1ujok3/Recipedia" className="GitHub">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://o1ujok3.github.io/Recipedia/">
                <img
                  className="card-img-top"
                  src={img4}
                  alt="Portfolio1"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Project 5</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  gravida mollis placerat. Nulla vitae posuere mi, nec suscipit
                  tortor. Fusce quam nunc, tempus id ligula quis, consectetur ornare
                  nunc. Vestibulum vestibulum viverra auctor.
                </p>
                <a href="https://github.com/o1ujok3/Recipedia" className="GitHub">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="g-col-6 g-col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <a href="https://o1ujok3.github.io/Recipedia/">
                <img
                  className="card-img-top"
                  src={img5}
                  alt="Portfolio1"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Project 6</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  gravida mollis placerat. Nulla vitae posuere mi, nec suscipit
                  tortor. Fusce quam nunc, tempus id ligula quis, consectetur ornare
                  nunc. Vestibulum vestibulum viverra auctor.
                </p>
                <a href="https://github.com/o1ujok3/Recipedia" className="GitHub">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Project;