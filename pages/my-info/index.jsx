import Layout from 'components/Layout';
import Link from 'next/link';

export default function MyInfo() {
  return (
    <Layout title="내 정보">
      <div className="mt-10 space-y-8">
        <div className="flex items-center space-x-3">
          <div className="aspect-square h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-sm">Steve Jebs</p>
            <Link href="#">
              <a className="text-xs text-gray-400">Edit profile →</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <Link href="/my-info/sell-history/123">
            <a className="flex flex-col items-center space-y-2">
              <div className="flex aspect-square h-14 items-center justify-center rounded-full bg-orange-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-sm">판매내역</p>
            </a>
          </Link>
          <Link href="#">
            <a className="flex flex-col items-center space-y-2">
              <div className="flex aspect-square h-14 items-center justify-center rounded-full bg-orange-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <p className="text-sm">구매내역</p>
            </a>
          </Link>
          <Link href="#">
            <a className="flex flex-col items-center space-y-2">
              <div className="flex aspect-square h-14 items-center justify-center rounded-full bg-orange-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <p className="text-sm">관심목록</p>
            </a>
          </Link>
        </div>
        <div>
          <div className="flex space-x-2">
            <div className="aspect-square h-12 rounded-full bg-gray-300"></div>
            <div className="">
              <p>하킴</p>
              <div className="flex">
                {new Array(5).fill(0).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sint voluptate quia rerum dolor facilis porro, aspernatur, culpa
            nihil similique omnis cumque quaerat vero autem quod alias illo
            officia magni.
          </p>
        </div>
      </div>
    </Layout>
  );
}
