"use client";

import Page from "@/components/Page";

function SignUpPage() {
  return (
    <Page>
      <section className="max-w-sm mx-auto my-32 rounded-lg">
        <h2 className="text-center font-bold text-3xl pb-10">회원가입</h2>
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
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="rePassword">비밀번호 확인</label>
              <input
                type="password"
                id="rePassword"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md"
              />
            </li>
          </ul>
          <button className="bg-black text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0">
            회원가입하기
          </button>
        </form>
      </section>
    </Page>
  );
}

export default SignUpPage;
