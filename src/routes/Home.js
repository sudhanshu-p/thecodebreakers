// import logo from './logo.jpg';
import './Home.css';
import Contact from '../components/Contact';

export default function homepage() {
  return (
    <div className="home">
      {/* <div className="logo">
        <img src={logo} alt = "The CodeBreakers" />
      </div> */}
      <section>
        <div className="desc">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus neque repellat tempore cum exercitationem porro beatae esse mollitia odit, doloremque eum unde a tenetur fugit dicta. Fugit, fugiat modi?
          </h3>
        </div>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
