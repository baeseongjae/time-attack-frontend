import { ReduxProvider } from "@/redux/store";

function Providers({ children }: { children: React.ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

export default Providers;
