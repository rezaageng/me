import { type Social, type ContactsProps } from '@/@types'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter
} from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'
import ContactItem from './ContactItem'

const Contacts = ({
  className,
  iconSize = 16,
  animate = false,
  link
}: ContactsProps): JSX.Element => {
  const socials: Social[] = [
    {
      icon: <FiGithub data-testid="contact-icon" size={iconSize} />,
      link: link.gitHub
    },
    {
      icon: <FiTwitter data-testid="contact-icon" size={iconSize} />,
      link: link.twitter
    },
    {
      icon: <FiInstagram data-testid="contact-icon" size={iconSize} />,
      link: link.instagram
    },
    {
      icon: <FiLinkedin data-testid="contact-icon" size={iconSize} />,
      link: link.linkedIn
    },
    {
      icon: <FiMail data-testid="contact-icon" size={iconSize} />,
      link: `mailto:${link.email}`
    }
  ]

  return (
    <ul className={className}>
      {socials.map(({ icon, link }, index) => (
        <ContactItem social={{ icon, link }} key={uuidv4()} animate={animate} />
      ))}
    </ul>
  )
}

export default Contacts
