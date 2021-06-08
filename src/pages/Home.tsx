import { tw } from 'twind'
import { css } from 'twind/css'
import { useHistory } from 'react-router'
import { ReactComponent as KunaiSVG } from 'assets/kunais.svg'

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
}

interface CharacterFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const containerStyles = css`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Home = () => {
  const history = useHistory()
  const handleSubmit = (event: React.SyntheticEvent<CharacterFormElement>) => {
    event.preventDefault()

    const { name } = event.currentTarget.elements

    history.push(`/character?name=${name.value}`)
  }

  return (
    <main className={tw(containerStyles)}>
      <h1 className={tw`text-white text-4xl`}>Konoha</h1>
      <p className={tw`text-blue.light text-2xl text-center`}>
        Search for an Anime or a Manga character.
      </p>
      <form
        onSubmit={handleSubmit}
        className={tw`flex flex-col items-center justify-evenly h-40`}
      >
        <label htmlFor="search" className={tw`sr-only`}>
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Naruto Uzumaki"
          className={tw`w-64 h-10 placeholder-blue.dark-400 pl-2 focus:outline-none focus:shadow-md bg-white font-bold`}
          required
        />
        <button
          type="submit"
          className={tw`w-24 h-10 focus:outline-none bg-white text-blue.dark font-bold`}
        >
          Search
        </button>
      </form>
      <KunaiSVG aria-hidden="true" className={tw`h-24 w-24`} />
    </main>
  )
}
