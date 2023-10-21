const Footer = (): JSX.Element => {
  return (
    <footer
      data-testid="footer"
      className="flex flex-col items-center justify-center p-6"
    >
      <p data-testid="footer-test-1" className="font-mono text-white/75">
        Built with 󰣐 in 2023
      </p>
      <p className=" text-white/75">
        Part of&nbsp;
        <a
          href="https://github.com/aftrschool"
          target="_blank"
          className="font-semibold transition duration-200 hover:animate-pulse hover:text-accent-1"
        >
          @aftrschool
        </a>
      </p>
    </footer>
  )
}
export default Footer
