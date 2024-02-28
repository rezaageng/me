'use client'

import Lottie from 'lottie-react'
import potion from '@/lottie/potion.json'
import { v4 as uuidv4 } from 'uuid'
import { PiArrowUpRightBold } from 'react-icons/pi'

interface Song {
  artist: string
  link: string
}

interface Props {
  link: Link['data']
}

const songs: Song[] = [
  {
    artist: 'JKT48',
    link: 'https://open.spotify.com/artist/2l8I5pWUnfF7bMK1z6EJRk?si=TDxolkxITtS1WpFrd6WIGA'
  },
  {
    artist: 'Eve',
    link: 'https://open.spotify.com/artist/58oPVy7oihAEXE0Ott6JOf?si=B4VpKksiRAGeS6ZirPNxbA'
  },
  {
    artist: 'Kyanai',
    link: 'https://open.spotify.com/artist/42ogLtXLVjZryRz9j1zvOm?si=Oso7djFeSt2PEjmz1bAgrQ'
  },
  {
    artist: 'JVKE',
    link: 'https://open.spotify.com/artist/164Uj4eKjl6zTBKfJLFKKK?si=GtrOApDFT3mUA-UBfxf7wQ'
  },
  {
    artist: 'YOASOBI',
    link: 'https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj?si=e41tEgvhS8qutLBa0mBfcQ'
  },
  {
    artist: 'AKB48',
    link: 'https://open.spotify.com/artist/01wau5CL3Z1vfJJWkzBkqg?si=X56M8cvFQyer18cMo02npg'
  },
  {
    artist: 'NDX A.K.A',
    link: 'https://open.spotify.com/artist/1IDBhlpDyKr53UKKxXRHXD?si=ABmKzbLQTaOeYwoXvna5Pg'
  },
  {
    artist: 'Fuji Kaze',
    link: 'https://open.spotify.com/artist/6bDWAcdtVR3WHz2xtiIPUi?si=mT8l9HrXTOGEuRIKw2Tf6A'
  },
  {
    artist: 'もさを。',
    link: 'https://open.spotify.com/artist/71KI7v1YqVU8cIFzBl47dh?si=JjMivR_PSLul13ze4h4E-A'
  },
  {
    artist: 'YoRI',
    link: 'https://open.spotify.com/artist/7KWwccszhCF3f6pYeVWMTD?si=XF9rnQaZStCCi04zo6_qQw'
  },
  {
    artist: 'YOAKE',
    link: 'https://open.spotify.com/artist/0psEe4IooMjolOPMrz9A5M?si=EZbbKrPLSW6iWBpduyCA2Q'
  }
]

const HomeThanks = ({ link }: Props): JSX.Element => {
  const contact = [
    {
      name: 'GitHub',
      link: link.attributes.gitHub
    },
    {
      name: 'X (Twitter)',
      link: link.attributes.twitter
    },
    {
      name: 'Instagram',
      link: link.attributes.instagram
    },
    {
      name: 'LinkedIn',
      link: link.attributes.linkedIn
    },
    {
      name: 'E-mail',
      link: `mailto:${link.attributes.email}`
    }
  ]

  return (
    <section className="flex min-h-svh w-full flex-col justify-center p-6 text-accent-1">
      <div className="">
        <Lottie animationData={potion} loop className="w-16" />
        <h2 className="mb-6 mt-2 font-mono text-gray-500">{'// built with'}</h2>
        <div className="grid grid-cols-auto gap-4">
          <div>
            <h3 className="mb-4 font-mono">{'{...}'}</h3>
            <ul className="leading-loose">
              <li data-testid="tech-list">TypeScript</li>
              <li data-testid="tech-list">Next.js</li>
              <li data-testid="tech-list">Tailwind CSS</li>
              <li data-testid="tech-list">Framer Motion</li>
              <li data-testid="tech-list">Lenis</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono">~</h3>
            <ul className="leading-loose">
              <li data-testid="dish-list">Countless cups of coffee</li>
              <li data-testid="dish-list">Fresh milk</li>
              <li data-testid="dish-list">Pocky</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono"></h3>
            <ul className="leading-loose">
              {songs.map(({ artist, link }) => (
                <li data-testid="song-list" key={uuidv4()}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {artist}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-mono">&&</h3>
            <ul className="leading-loose">
              {contact.map(({ name, link }) => (
                <li
                  data-testid="contact-list"
                  key={uuidv4()}
                  className="flex items-center gap-1 hover:animate-pulse"
                >
                  <a href={link} target="_blank">
                    {name}
                  </a>
                  <PiArrowUpRightBold />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeThanks
