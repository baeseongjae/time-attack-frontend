import Modal from "../Modal";

function LogInModal() {
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
        </ul>
        <button className="bg-black text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0">
          로그인하기
        </button>
      </form>
    </Modal>
  );
}

export default LogInModal;
