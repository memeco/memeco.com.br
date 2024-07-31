import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">
        Emerson (Memeco) Marques Pedro
      </h1>

      <div className="flex justify-center mb-4">
        <Image
          src="https://avatars.githubusercontent.com/u/3230685?v=4"
          alt="Emerson (Memeco) Marques Pedro"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>

      {/* Adicione o link de tradução aqui */}
      <div className="text-center mb-4">
        <Link
          href="https://translate.google.com/translate?hl=pt-BR&sl=pt&tl=en&u=http://memeco.com.br"
          className="text-blue-500 hover:text-gray-600"
        >
          🇬🇧&nbsp;Switch to English
        </Link>
      </div>

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
          Este site não é sobre&nbsp;
          <Link
            href="https://pt.wikipedia.org/wiki/Memeco"
            className="text-blue-500 hover:text-gray-600"
          >
            Memeco
          </Link>
          , jogador de vôlei carioca falecido. Aqui está a explicação do meu
          apelido Memeco:
        </p>
        <br></br>
        <h1 className="text-2xl font-bold">Origem de Memeco</h1>
        <br></br>
        <p>
          Quando usava mIRC há muito tempo atrás, meu apelido era Meme, de E
          <strong>me</strong>rson. Daí fui fazendo amigos lá e tinha um amigo
          com apelido Leleco (Leandro).
        </p>
        <br></br>
        <p>Como o Leleco era amigo do Meme, naturalmente virei Memeco.</p>
      </main>
    </div>
  );
}
