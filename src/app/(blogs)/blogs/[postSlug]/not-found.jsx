import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10 ">
          <div>
            <p className="mb-8 text-9xl font-black text-primary-900">404</p>
            <p className="text-xl font-bold text-secondary-700 mb-8">
              هیچ پستی با این مشخصات نشد
            </p>
            <Link
              href="/blogs"
              className="text-secondary-700 flex items-center gap-x-2"
            >
              <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              <span>رفتن به صفحه پست</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
