import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderSignWrapper() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    logOut();
    alert("로그아웃 처리 되었습니다.");
  };

  return (
    <div className="ml-auto flex ">
      {isLoggedIn ? (
        <div>
          <Link href="/cart" className="px-3 py-2">
            장바구니
          </Link>
          <button onClick={handleClickLogOut} className="px-3 py-2">
            로그아웃
          </button>
        </div>
      ) : (
        <>
          <Link href="/sign-up" className="px-3 py-2">
            회원가입
          </Link>
          <button onClick={handleClickLogIn} className="px-3 py-2">
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderSignWrapper;
