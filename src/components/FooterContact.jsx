import facebook from "/public/images/SoMe/awsomeFacebook.svg";
import linkedin from "/public/images/SoMe/awsomeLinkedin.svg";
import github from "/public/images/SoMe/awsomeGithub.svg";
import phone from "/public/images/SoMe/phone3.svg";
import mail from "/public/images/SoMe/mail3.svg";
import ContactForm from "../components/ContactForm";

export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div className="kontaktDel">
        <h2>KONTAKT</h2>
        <a href="mailto:Heidi@kabelmail.dk" className="mail-tel-container">
          <img src={mail} alt="Telefon ikon" />
          Heidi@kabelmail.dk
        </a>
        <a href="tel:+4522367207" className="mail-tel-container">
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
      <ContactForm />
    </div>
  );
}
