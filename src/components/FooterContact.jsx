export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div className="kontaktDel">
        <h2>KONTAKT</h2>
        <p>
          E-mail: <a href="mailto:Heidi@kabelmail.dk">Heidi@kabelmail.dk</a>
        </p>
        <p>
          Tlf: <a href="tel:+4522367207">22 36 72 07</a>
        </p>
        <h3>SOCIALS</h3>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>FaceBook</p>
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
