import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">
        Emerson (Memeco) Marques Pedro
      </h1>

      <header className="bg-black">
        <nav>
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-white hover:bg-white hover:text-black"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/redes-sociais"
                className="text-white hover:bg-white hover:text-black"
              >
                Redes Sociais
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 text-black">
        <p>
          Olá, eu não sou o{" "}
          <Link
            href="https://pt.wikipedia.org/wiki/Memeco"
            className="text-blue-500 hover:text-gray-600"
          >
            Memeco
          </Link>
          , jogador de vôlei carioca falecido.
        </p>
      </main>
    </div>
  );
}
