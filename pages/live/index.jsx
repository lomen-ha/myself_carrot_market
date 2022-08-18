import Layout from 'components/Layout';

export default function Live() {
  return (
    <Layout title="라이브">
      <div className="mt-10 space-y-8">
        {new Array(6).fill(0).map((_, idx) => (
          <div key={idx} className="w-full space-y-2">
            <div className="mt-2 h-60 w-full bg-gray-400"></div>
            <h1 className="text-xl font-semibold">iPhone14</h1>
          </div>
        ))}
      </div>
    </Layout>
  );
}
