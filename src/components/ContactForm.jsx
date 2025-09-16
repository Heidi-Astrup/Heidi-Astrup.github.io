import emailjs from "emailjs-com";

export default function ContactForm() {
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
    <form onSubmit={sendEmail}>
      <label htmlFor="name">Navn</label>
      <input id="name" type="text" placeholder="Navn" name="navn" />
      <label htmlFor="emne">Emne</label>
      <input id="emne" type="text" placeholder="Emne" name="emne" />
      <label htmlFor="mail">Mail</label>
      <input id="mail" type="email" placeholder="Email" name="email" />
      <label htmlFor="besked">Skriv en besked</label>
      <textarea
        className="besked"
        id="besked"
        cols="30"
        rows="3"
        placeholder="Besked"
        name="besked"
      ></textarea>
      <button type="submit">Send og få verdens bedste praktikant</button>
    </form>
  );
}
