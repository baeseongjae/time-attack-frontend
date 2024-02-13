import Link from "next/link";

function HeaderSign() {
  return (
    <div className="ml-auto flex ">
      <Link href="/" className="px-3 py-2">
        회원가입
      </Link>
      <Link href="/" className="px-3 py-2">
        로그인
      </Link>
    </div>
  );
}

export default HeaderSign;
