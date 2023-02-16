import Contacts from './Contacts'

const Sidebar = (): JSX.Element => {
  return (
    <aside
      data-testid="sidebar"
      className="fixed bottom-0 right-8 hidden flex-col items-center gap-4 sm:flex"
    >
      <Contacts iconSize={20} className="flex flex-col gap-4" animate />
      <div data-testid="line" className="h-24 w-[1px] rounded-full bg-white" />
    </aside>
  )
}
export default Sidebar
