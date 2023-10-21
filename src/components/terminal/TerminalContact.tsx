import { useQuery } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

const TerminalContact = (): JSX.Element => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['link'],
    queryFn: async () => {
      const res: Response = await fetch('/api/link')

      if (!res.ok) throw new Error('Network response was not ok')

      const { data }: Link = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  const contacts = [
    {
      name: 'GitHub',
      link: data.attributes.gitHub
    },
    {
      name: 'Twitter',
      link: data.attributes.twitter
    },
    {
      name: 'Instagram',
      link: data.attributes.instagram
    },
    {
      name: 'LinkedIn',
      link: data.attributes.linkedIn
    },
    {
      name: 'Email',
      link: `mailto:${data.attributes.email}`
    }
  ]

  return (
    <ol>
      {contacts.map((contact) => (
        <li key={uuidv4()}>
          <a
            href={contact.link}
            target="_blank"
            className="hover:text-accent-1"
          >
            {contact.name} 
          </a>
        </li>
      ))}
    </ol>
  )
}
export default TerminalContact
