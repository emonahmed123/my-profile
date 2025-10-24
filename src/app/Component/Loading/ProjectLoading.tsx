const ProjectLoading = () => {
  const shimmer =
    "animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%]";

  return (
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
  );
};

export default ProjectLoading;
