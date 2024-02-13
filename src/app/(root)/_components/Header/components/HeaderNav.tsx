import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul>
        <li>
          <Link href="/">BRANDS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
