import Layout from 'components/Layout';
import Link from 'next/link';

export default function Town() {
  return (
    <Layout title="동네생활">
      <>
        {new Array(6).fill(0).map((_, idx) => (
          <div key={idx} className="mt-10">
            <span className="rounded-2xl bg-gray-200 p-2 text-xs">
              동네질문
            </span>
            <div className="space-y-3">
              <Link href="/town/1">
                <a>
                  <div className="mt-2 flex space-x-2">
                    <span className="text-orange-400">Q</span>
                    <span>What is the best korean restaurant?</span>
                  </div>
                </a>
              </Link>
              <div className="flex justify-between text-sm text-gray-400">
                <span>하킴</span>
                <span>18시간 전</span>
              </div>
              <div className="h-[1px] w-full bg-gray-200" />
              <div className="flex space-x-4">
                <div className="flex space-x-2">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm">궁금해요 1</span>
                </div>
                <div className="flex space-x-2">
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
                  <span className="text-sm">답변 1</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </Layout>
  );
}
