// * global
type ClassName = string | undefined

// * navbar
interface NavbarListData {
  name: string
  route: string
}

interface NavbarListProps extends NavbarListData {
  pathName: string | null
  onClick: () => void
}

interface ContactsProps {
  className: ClassName
  iconSize: number
}
