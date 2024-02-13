import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";

function LogInModal() {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <div
      className="fixed top-0 left-0 bg-black/50 w-screen h-screen z-3"
      onClick={handleClickBackdrop}
    >
      <section
        className="bg-white w-full max-w-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-12 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center pb-10">로그인</h2>
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
      </section>
    </div>
  );
}

export default LogInModal;
