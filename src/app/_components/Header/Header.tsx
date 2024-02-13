import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-8 h-16">
      <h1>
        <Link href="/" className="text-3xl font-bold">
          발랑
        </Link>
      </h1>
      <nav className="ml-20">
        <ul>
          <li>
            <Link href="/">BRANDS</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex ">
        <Link href="/" className="px-3 py-2">
          회원가입
        </Link>
        <Link href="/" className="px-3 py-2">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
