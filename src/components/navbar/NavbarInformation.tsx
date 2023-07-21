import Contacts from './Contacts'

const NavbarInformation = (): JSX.Element => {
  return (
    <div
      data-testid="navbar-information"
      className="flex w-full flex-col items-center gap-4"
    >
      <Contacts className="flex gap-4" iconSize={20} />
      <span data-testid="navbar-art" className="text-accent-1">
        art by:&nbsp;
        <a
          data-testid="navbar-art-link"
          href="#"
          className="hover:text-accent-3 hover:underline"
        >
          xe
        </a>
      </span>
    </div>
  )
}
export default NavbarInformation
