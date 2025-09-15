import facebook from "../images/SoMe/awsomeFacebook.svg";
import linkedin from "../images/SoMe/awsomeLinkedin.svg";
import github from "../images/SoMe/awsomeGithub.svg";
import phone from "../images/SoMe/phone3.svg";
import mail from "../images/SoMe/mail3.svg";

export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div className="kontaktDel">
        <h2>KONTAKT</h2>

        <a href="mailto:Heidi@kabelmail.dk" className="contai">
          <img src={mail} alt="Telefon ikon" />
          Heidi@kabelmail.dk
        </a>

        <a href="tel:+4522367207" className="contai">
          <img src={phone} alt="Telefon ikon" />
          22 36 72 07
        </a>

        <h3>SOCIALS</h3>
        <a href="https://www.linkedin.com/in/heidi-astrup-b2661a325/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/Heidi-Astrup">
          <img src={github} alt="" />
        </a>
        <a href="https://www.facebook.com/heidi.astrup.900">
          <img src={facebook} alt="" />
        </a>
      </div>
      <form
        action="mailto:Heidi@kabelmail.dk"
        method="POST"
        className="kontaktForm"
      >
        <label htmlFor="name">Navn</label>
        <input id="name" type="text" placeholder="Navn" />
        <label htmlFor="mail">Mail</label>
        <input id="mail" type="email" placeholder="Email" />
        <label htmlFor="emne">Emne</label>
        <input id="emne" type="text" placeholder="Emne" />
        <label htmlFor="besked">Skriv en besked</label>
        <textarea
          className="besked"
          name=""
          id="besked"
          cols="30"
          rows="3"
          placeholder="Besked"
        ></textarea>
        <button type="submit">Send og få verdens bedste praktikant</button>
      </form>
    </div>
  );
}
