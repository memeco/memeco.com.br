import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">
        Emerson (Memeco) Marques Pedro
      </h1>

      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/redes-sociais">Redes Sociais</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <p>Este é um exemplo de página em Next.js.</p>
      </main>
    </div>
  );
}
