import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ children, title }: PropsWithChildren<ModalProps>) {
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
        <h2 className="text-3xl font-bold text-center pb-10">{title}</h2>
        {children}
      </section>
    </div>
  );
}

export default Modal;
