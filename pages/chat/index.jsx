import Layout from 'components/Layout';
import Link from 'next/link';

export default function Chat() {
  return (
    <Layout title="채팅">
      <div className="mt-10">
        <div className="divide-y-2">
          {new Array(6).fill(0).map((_, idx) => (
            <div key={idx} className="flex items-center space-x-3 py-4">
              <div className="aspect-square h-12 rounded-full bg-gray-400"></div>
              <Link href="/chat/123">
                <a>
                  <p>Steve Jebs</p>
                  <p className="text-sm text-gray-400">
                    See you tomorrow in the corner at 2pm!
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
