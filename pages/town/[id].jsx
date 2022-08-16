import Layout from 'components/Layout';
import Link from 'next/link';

export default function TownDetail() {
  return (
    <Layout deps>
      <div className="space-y-4">
        <div className="mt-10">
          <span className="rounded-2xl bg-gray-200 p-2 text-xs">동네질문</span>
        </div>
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="aspect-square h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-sm">Steve Jebs</p>
            <Link href="#">
              <a className="text-xs text-gray-400">View profile →</a>
            </Link>
          </div>
        </div>
        <div className="mt-2 flex space-x-2 border-b pb-4">
          <span className="text-orange-400">Q</span>
          <span>What is the best korean restaurant?</span>
        </div>
        <div className="flex space-x-4 border-b pb-4">
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
        <div className="flex space-x-3">
          <div className="aspect-square h-8 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-sm">Steve Jebs</p>
            <p className="text-xs text-gray-400">2시간 전</p>
            <p className="pt-2">
              The best restaurant is the one next to my house.
            </p>
          </div>
        </div>
        <div>
          <textarea
            name="textarea"
            className="w-full rounded-lg border p-4 focus:border-orange-400 focus:outline-none"
            id=""
            cols="30"
            rows="5"
            placeholder="Answer this question!"
          ></textarea>
        </div>
        <button className="w-full  rounded-lg bg-orange-400 py-2 text-white">
          Reply
        </button>
      </div>
    </Layout>
  );
}
