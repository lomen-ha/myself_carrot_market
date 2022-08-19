import Layout from 'components/Layout';

export default function Detail() {
  return (
    <Layout deps>
      <div className="mt-10">
        <div className="space-y-2">
          <div className="mt-2 h-60 w-full bg-gray-400"></div>
          <div>
            <h1 className="text-xl font-semibold">iPhone14</h1>
            <p className="text-lg">$140</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="mt-4">
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              eligendi sapiente, quos eos explicabo quisquam nisi culpa
              consequuntur rerum asperiores voluptate facere facilis atque?
              Laboriosam veniam dolore nemo odio dicta!
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Live Chat</h1>
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
        </div>
      </div>
    </Layout>
  );
}
