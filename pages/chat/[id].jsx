import Layout from 'components/Layout';

export default function Detail() {
  return (
    <Layout deps>
      <div className="mt-10 flex min-h-[80vh] flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="aspect-square h-8 rounded-full bg-gray-400"></div>
            <p className="rounded-md border p-2">
              Hi how much are you selling them for?
            </p>
          </div>
          <div className="flex flex-row-reverse items-center gap-x-2">
            <div className="aspect-square h-8 rounded-full bg-gray-400"></div>
            <p className="rounded-md border p-2">I want $200.</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="aspect-square h-8 rounded-full bg-gray-400"></div>
            <p className="rounded-md border p-2">Sounds Great!</p>
          </div>
        </div>
        <div className="mx-auto w-11/12">
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              className="flex-1 rounded-2xl border py-1 px-2 focus:border-orange-400 focus:outline-none"
            />
            <div className="absolute right-1">
              <button className="w-8 rounded-xl bg-orange-400 text-white">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
