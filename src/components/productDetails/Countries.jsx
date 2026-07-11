import { Globe, MapPin } from "lucide-react";
import countries from "../../data/countries";
import cities from "../../data/state";

const Countries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-600 font-semibold">
            Global Presence
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Export Countries
          </h2>

          <div className="w-24 h-1 bg-sky-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-7">
            Jindutt Metal & Alloy Pvt. Ltd. supplies premium quality industrial
            products to customers across the globe with reliable delivery,
            certified quality, and competitive pricing.
          </p>
        </div>

        {/* Countries */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 bg-slate-50 border rounded-xl p-6"
            >
              <span
                className={`fi fi-${country.code.toLowerCase()} text-3xl rounded`}
              ></span>

              <div>
                <h3 className="font-semibold">{country.name}</h3>
                <p className="text-sm text-slate-500">Export Destination</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cities */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Major Supply Cities
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-sky-600 hover:text-white transition-all duration-300"
              >
                <MapPin size={18} />
                <span>{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
