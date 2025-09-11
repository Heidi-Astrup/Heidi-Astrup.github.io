import { useState } from "react";

export default function FooterContact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d01cdf63-a3a7-4443-be63-bae40d7be2a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    alert({ result });
  };

  return (
    <div className="FooterContact">
      <div className="kontaktDel">
        <h2>KONTAKT</h2>
        <p>E-mail: Heidi@kabelmail.dk</p>
        <p>Tlf: 22 36 72 07</p>
        <h3>SOCIALS</h3>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>FaceBook</p>
      </div>
      <form onSubmit={handleSubmit} className="kontaktForm">
        <label HTMLfor="name">Navn</label>
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
          rows="10"
          placeholder="Besked"
        ></textarea>
        <input
          type="hidden"
          name="access_key"
          value="d01cdf63-a3a7-4443-be63-bae40d7be2a5"
        />

        <button type="submit">Send og få verdens bedste praktikant</button>
      </form>
    </div>
  );
}
