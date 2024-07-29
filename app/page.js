import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 id="header">Emerson (Memeco) Marques Pedro</h1>
      <p>Este é um exemplo de página em Next.js.</p>

      <Link href="/sobre">Sobre mim</Link>
    </div>
  );
}
