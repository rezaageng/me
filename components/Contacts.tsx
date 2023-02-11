import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter
} from 'react-icons/fi'

const Contacts = ({ className, iconSize }: ContactsProps): JSX.Element => {
  return (
    <ul className={className}>
      <li>
        <a href="https://github.com/rezaageng" target="_blank" rel="noreferrer">
          <FiGithub data-testid="contact-icon" size={iconSize} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/rezaageng_"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter data-testid="contact-icon" size={iconSize} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/rezaageng_/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram data-testid="contact-icon" size={iconSize} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rezaageng/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin data-testid="contact-icon" size={iconSize} />
        </a>
      </li>
      <li>
        <a href="mailto:waiting@gmail.com" target="_blank" rel="noreferrer">
          <FiMail data-testid="contact-icon" size={iconSize} />
        </a>
      </li>
    </ul>
  )
}
export default Contacts
