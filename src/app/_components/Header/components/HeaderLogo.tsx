import Link from "next/link";

function HeaderLogo() {
  return (
    <h1>
      <Link href="/" className="text-3xl font-bold">
        발랑
      </Link>
    </h1>
  );
}

export default HeaderLogo;
