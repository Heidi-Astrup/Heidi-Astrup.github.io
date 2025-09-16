import facebook from "../images/SoMe/awsomeFacebook.svg";
import linkedin from "../images/SoMe/awsomeLinkedin.svg";
import github from "../images/SoMe/awsomeGithub.svg";
import phone from "../images/SoMe/phone3.svg";
import mail from "../images/SoMe/mail3.svg";
import ContactForm from "../components/ContactForm";
import emailjs from "emailjs-com";

export default function FooterContact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dci2fvu", // fra EmailJS
        "template_4ga0l3n", // fra EmailJS
        e.target,
        "wBX-lCj07-vq_uE38" // fra EmailJS
      )
      .then(
        (result) => {
          console.log("Email sendt!", result.text);
          alert("Tak! Din besked er sendt 🚀");
        },
        (error) => {
          console.log("Fejl:", error.text);
          alert("Ups, der skete en fejl 😢");
        }
      );

    e.target.reset(); // ryd formularen
  }

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
      <ContactForm />
    </div>
  );
}
