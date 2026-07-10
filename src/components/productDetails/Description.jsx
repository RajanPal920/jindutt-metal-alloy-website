const Description = ({ product }) => {
  const types = product?.types || product?.productTypes || [];
  const sizes = product?.sizes || product?.sizeRange || [];
  const finishes = product?.finishes || [];
  const benefits = product?.benefits || [];
  const industries = product?.industries || [];

  return (
    <section className="rounded-[2rem] border border-slate-200/90 bg-white p-2 shadow-[0_18px_55px_-25px_rgba(15,23,42,0.35)]">
      <div className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_45%,#f8fafc_100%)] p-8 lg:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
              {product.category}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {product.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>

            {types.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Available Types
                </h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {sizes.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {finishes.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Finishes
              </h3>
              <ul className="space-y-2 text-slate-600">
                {finishes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {benefits.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Benefits
              </h3>
              <ul className="space-y-2 text-slate-600">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {industries.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Industries Served
              </h3>
              <ul className="space-y-2 text-slate-600">
                {industries.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Description;
