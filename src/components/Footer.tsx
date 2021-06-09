import { tw } from 'twind'

export const Footer = () => (
  <footer
    className={tw`h-16 w-full border(t-4 white) flex flex-row items-center justify-center tablet:(text-lg)`}
  >
    <p className={tw`text-blue.light`}>Built and designed by</p>
    <a
      href="https://github.com/tigerabrodi"
      target="_blank"
      rel="noreferrer"
      className={tw`text-white underline pl-1`}
    >
      Tiger Abrodi
    </a>
  </footer>
)
