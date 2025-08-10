const LoadingPage = () => {
  const shimmer =
    "animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%]";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation Skeleton */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`h-8 w-32 rounded ${shimmer}`}></div>
          <div className="hidden md:flex space-x-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-6 w-16 rounded ${shimmer}`}></div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`h-4 w-48 rounded ${shimmer}`}></div>
            <div className={`h-16 w-full rounded ${shimmer}`}></div>
            <div className={`h-6 w-64 rounded ${shimmer}`}></div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-4 w-full rounded ${shimmer}`}></div>
              ))}
            </div>
            <div className="flex space-x-4">
              <div className={`h-12 w-32 rounded-lg ${shimmer}`}></div>
              <div className={`h-12 w-32 rounded-lg ${shimmer}`}></div>
            </div>
            <div className="flex space-x-4 pt-4">
              <div className="space-y-2">
                <div className={`h-4 w-16 rounded ${shimmer}`}></div>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-8 w-8 rounded ${shimmer}`}></div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className={`h-4 w-20 rounded ${shimmer}`}></div>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-8 w-8 rounded ${shimmer}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={`h-80 w-72 rounded-2xl ${shimmer}`}></div>
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`h-8 w-32 mx-auto rounded ${shimmer}`}></div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div
                  className={`h-16 w-16 mx-auto rounded-xl ${shimmer}`}
                ></div>
                <div className={`h-4 w-12 mx-auto rounded ${shimmer}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`h-6 w-24 mx-auto mb-2 rounded ${shimmer}`}></div>
            <div className={`h-8 w-32 mx-auto rounded ${shimmer}`}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-600 rounded-xl p-6 space-y-4"
              >
                <div className={`h-12 w-12 rounded-lg ${shimmer}`}></div>
                <div className={`h-6 w-40 rounded ${shimmer}`}></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className={`h-4 w-full rounded ${shimmer}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`h-8 w-36 mx-auto rounded ${shimmer}`}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-600 rounded-xl overflow-hidden"
              >
                <div className={`h-48 w-full ${shimmer}`}></div>
                <div className="p-6 space-y-4">
                  <div className={`h-6 w-32 rounded ${shimmer}`}></div>
                  <div className="space-y-2">
                    <div className={`h-4 w-full rounded ${shimmer}`}></div>
                    <div className={`h-4 w-3/4 rounded ${shimmer}`}></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className={`h-8 w-20 rounded-lg ${shimmer}`}></div>
                    <div className={`h-8 w-20 rounded-lg ${shimmer}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className={`h-8 w-32 mx-auto rounded ${shimmer}`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`h-32 w-full rounded-lg ${shimmer}`}></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className={`h-6 w-6 rounded ${shimmer}`}></div>
                    <div className={`h-4 w-40 rounded ${shimmer}`}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className={`h-12 w-full rounded-lg ${shimmer}`}></div>
              <div className={`h-12 w-full rounded-lg ${shimmer}`}></div>
              <div className={`h-32 w-full rounded-lg ${shimmer}`}></div>
              <div className={`h-12 w-full rounded-lg ${shimmer}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`h-8 w-40 mx-auto mb-8 rounded ${shimmer}`}></div>
          <div
            className={`h-20 w-20 mx-auto mb-8 rounded-full ${shimmer}`}
          ></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-4 w-full max-w-2xl mx-auto rounded ${shimmer}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`h-4 w-64 mx-auto rounded ${shimmer}`}></div>
        </div>
      </footer>
    </div>
  );
};

export default LoadingPage;
