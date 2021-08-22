import config from "../lib/config"

export default function Navigation() {
  const links = config.navigation_links

  return (
    <nav className="w-100 p-3 mb-4 space-x-2">
      {links.map(link => (
        <a href={link.url}>
        <span className="m-0 hover:bg-gray-100 p-2 text-md text-black rounded inline-block">
          {link.name}
        </span>
      </a>
      ))}
    </nav>
  )
}

export async function getStaticProps() {
  console.log(links)
  return {
    props: {
      links,
    },
  }
}