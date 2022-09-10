import { ReactNode } from "react";
import Meta from "../meta";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Meta />
      {children}
    </div>
  );
}