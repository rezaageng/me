import { type ContactsResponse } from '@/@types/contacts'
import { useQuery } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

const TerminalContact = (): JSX.Element => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      const res: Response = await fetch('/api/contacts')

      if (!res.ok) throw new Error('Network response was not ok')

      const { data }: ContactsResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  return (
    <ol>
      {data.map((contact) => (
        <li key={uuidv4()}>
          <a
            href={contact.attributes.link}
            target="_blank"
            className="hover:text-accent-1"
          >
            {contact.attributes.name} 
          </a>
        </li>
      ))}
    </ol>
  )
}
export default TerminalContact
