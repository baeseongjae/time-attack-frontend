import LogInModal from "@/components/LogInModal";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderSign() {
  const dispatch = useAppDispatch();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  return (
    <div className="ml-auto flex ">
      <Link href="/" className="px-3 py-2">
        회원가입
      </Link>
      <button onClick={handleClickLogIn} className="px-3 py-2">
        로그인
      </button>
    </div>
  );
}

export default HeaderSign;
