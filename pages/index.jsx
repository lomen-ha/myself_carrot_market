import Layout from 'components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout title="홈">
        <div className="divide-y">
          {new Array(8).fill(0).map((_, idx) => (
            <div key={idx.toString()}>
              <Link href={`/detail/${idx}`}>
                <a className="flex items-end justify-between pt-6 pb-6">
                  <div className="flex space-x-4 text-left">
                    <div className="aspect-square w-16 rounded-md bg-gray-400"></div>
                    <div className="pt-2 text-sm">
                      <p>iPhone14</p>
                      <p>$99</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm">
                    <div className="flex space-x-1">
                      <span>
                        <svg
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </span>
                      <span>1</span>
                    </div>
                    <div className="flex space-x-1">
                      <span>
                        <svg
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
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </span>
                      <span>1</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
