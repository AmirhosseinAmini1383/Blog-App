import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ", // a default is required when creating a template
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="light-mode">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <ReactQueryProvider>
          <DarkModeProvider>
            <AuthProvider>{children}</AuthProvider>
          </DarkModeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
