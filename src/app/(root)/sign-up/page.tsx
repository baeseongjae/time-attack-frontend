"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    if (!email || !password || !rePassword)
      return alert("모든 값을 입력해 주세요");

    if (password !== rePassword)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    const { accessToken } = await mutateAsync({
      email: email,
      password: password,
    });
    logIn(accessToken);
    alert("회원가입 성공하셨습니다.");
  };

  return (
    <Page>
      <section className="max-w-sm mx-auto my-32 rounded-lg">
        <h2 className="text-center font-bold text-3xl pb-20">회원가입</h2>
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
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="rePassword">비밀번호 확인</label>
              <input
                type="password"
                id="rePassword"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </li>
          </ul>
          <button
            onClick={handleClickSignUp}
            className="bg-black text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
          >
            회원가입하기
          </button>
        </form>
      </section>
    </Page>
  );
}

export default SignUpPage;
