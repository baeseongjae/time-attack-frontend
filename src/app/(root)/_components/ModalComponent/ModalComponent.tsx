"use client";

import { useAppSelector } from "@/redux/store";

function ModalComponent() {
  const modal = useAppSelector((state) => state.utils.modal);

  return <>{modal}</>;
}

export default ModalComponent;
