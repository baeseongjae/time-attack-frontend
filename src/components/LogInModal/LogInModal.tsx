import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";

function LogInModal() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logIn } = useAuth();
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const dispatch = useDispatch();

  const handleClickLogIn = async () => {
    if (!email || !password)
      return alert("이메일과 비밀번호를 모두 입력해주세요");

    try {
      const response = await mutateAsync({
        email: email,
        password: password,
      });

      if (response.data.success) {
        logIn();
        alert("로그인 성공");
        const action = setModal(null);
        dispatch(action);
      }
    } catch (error) {
      alert("아이디 또는 비밀번호가 잘못되었습니다. 다시 확인해주세요.");
    }
  };

  return (
    <Modal title="로그인">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-y-4"
      >
        <ul className="flex flex-col gap-y-4">
          <li className="flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button
          onClick={handleClickLogIn}
          className="bg-black text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
        >
          로그인하기
        </button>
      </form>
    </Modal>
  );
}

export default LogInModal;
