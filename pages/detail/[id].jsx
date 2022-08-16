import Layout from 'components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Detail() {
  const router = useRouter();
  return (
    <Layout deps>
      <div className="mt-10 space-y-6">
        <div className="aspect-video w-full bg-gray-300"></div>
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="aspect-square h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-sm">Steve Jebs</p>
            <Link href="#">
              <a className="text-xs text-gray-400">View profile →</a>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">iPhone14</h1>
          <p className="text-lg">$140</p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            eligendi sapiente, quos eos explicabo quisquam nisi culpa
            consequuntur rerum asperiores voluptate facere facilis atque?
            Laboriosam veniam dolore nemo odio dicta!
          </p>
        </div>
        <div className="flex justify-between gap-x-2 text-center">
          <button className="flex-1 rounded-lg bg-orange-400 py-2 text-white">
            Talk to seller
          </button>
          <button className="hover:text-orange-400">
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
          </button>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Similar items</h1>
          <div className="grid grid-cols-2 gap-x-4">
            {new Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="mb-4">
                <Link href="#">
                  <a>
                    <div className="mb-2 aspect-square w-full bg-gray-300"></div>
                    <p>iPhone14</p>
                    <p>$140</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
