export default function Header() {
  return (
    <div className="header">
      <img
        className="header_image"
        src={require('../images/profile.png')}
        alt=""
        srcset=""
      />
      <h2 className="header_name">HM Jawad</h2>
      <h4 className="header_title">Frontend Developer</h4>

      <a
        className="header_website"
        href="https://linktr.ee/hmjawad"
        target="_blank"
      >
        My Portfolio!
      </a>

      <div className="header_buttons">
        <a href="mailto: thisishmjawad@gmail.com">
          <button className="header_email_button">
            <i class="fa-solid fa-envelope"></i> Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/hm-jawad-163125199/">
          <button className="header_linkedin_button">
            <i class="devicon-linkedin-plain"></i> Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}
