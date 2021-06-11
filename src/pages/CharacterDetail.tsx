import { gql } from '@urql/core'
import { useLocation } from 'react-router'
import { tw } from 'twind'
import { css } from 'twind/css'
import { useQuery } from 'urql'
import { ReactComponent as KunaiSVG } from 'assets/kunais.svg'
import { ReactComponent as SpinnerSVG } from 'assets/spinner.svg'

type CharacterResult = {
  Character: {
    name: {
      full: string
    }
    image: {
      large: string
    }
    dateOfBirth: {
      month: number
      day: number
    }
    favourites: number
  }
}

const CharacterQuery = gql`
  query SingleCharacter($name: String!) {
    Character(search: $name) {
      name {
        full
      }
      image {
        large
      }
      dateOfBirth {
        month
        day
      }
      favourites
    }
  }
`

const containerStyles = css`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const CharacterDetail = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const characterName = searchParams.get('name')

  const [{ data, fetching: isLoading, error }] = useQuery<CharacterResult>({
    query: CharacterQuery,
    variables: { name: characterName },
  })

  if (isLoading) {
    return (
      <main className={tw(containerStyles)}>
        <SpinnerSVG
          className={tw`absolute animate-spin h-1/4 fill-current text-white`}
          aria-label="loading"
        />
      </main>
    )
  }

  if (error) {
    return (
      <main className={tw(containerStyles)}>
        <h1>Error occurred: {error.message}</h1>
      </main>
    )
  }

  return (
    <main className={tw(containerStyles)}>
      <div
        className={tw`flex flex-col items-center justify-evenly h-2/3 w-full`}
      >
        <img
          src={data?.Character.image.large}
          alt={data?.Character.name.full}
          className={tw`h-2/3`}
        />
        <h1 className={tw`text-white`}>{data?.Character.name.full}</h1>
        <p className={tw`text-white`}>
          Birth: {data?.Character.dateOfBirth.day}/
          {data?.Character.dateOfBirth.month}
        </p>
      </div>

      <p className={tw`text-white`}>
        {data?.Character.favourites} people loving {data?.Character.name.full}{' '}
        on AniList
      </p>

      <KunaiSVG
        aria-hidden="true"
        className={tw`h-24 w-24 tablet:(w-48 h-48)`}
      />
    </main>
  )
}
