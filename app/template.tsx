import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-slate-900 border-gray-900 dark:bg-gray-900">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">
              <Link href="/">0$</Link>
            </span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <Link href="/home">Home</Link>
                </li>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
