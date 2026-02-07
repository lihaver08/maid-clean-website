import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function MaidCleanWebsite() {
  return (
    <div className="font-sans text-gray-900">
      {/* HERO */}
      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          MAID CLEAN
        </motion.h1>
        <p className="text-xl max-w-2xl mb-8">
          Bold. Modern. Professional cleaning services for commercial spaces,
          short-term rentals, and property professionals across Niagara Region.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg">Book Online</Button>
          <Button size="lg" variant="outline">Request a Quote</Button>
          <Button size="lg" variant="secondary">Call / Text 365‑720‑0474</Button>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            "Commercial‑Grade Standards",
            "Reliable & Insured",
            "Flexible Scheduling",
            "Trusted by Property Professionals",
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-6 flex flex-col items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                <p className="font-medium">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Commercial & Office Cleaning",
            "Airbnb & Short‑Term Rental Cleaning",
            "Move‑In / Move‑Out Cleaning",
            "Deep Cleaning",
            "Post‑Construction Cleaning",
            "Realtor & Property Management Cleaning",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-8">
                <Building2 className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional, detail‑oriented cleaning tailored to your
                  schedule and standards.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Who We Work With</h2>
          <p className="text-lg mb-10">
            Built for professionals who need consistency, reliability, and
            spotless results.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {["Property Managers", "Realtors", "Contractors", "Airbnb Hosts", "Business Owners"].map(
              (item, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-xl">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready for a Cleaner Standard?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Serving St. Catharines, Niagara Region, Niagara‑on‑the‑Lake, Fort Erie
          (Crystal Beach), and Burlington, Ontario.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg"><Calendar className="mr-2" />Book Now</Button>
          <Button size="lg" variant="outline"><Phone className="mr-2" />365‑720‑0474</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="font-semibold">MAID CLEAN</p>
        <p className="text-sm text-gray-400 mt-2">
          Professional Cleaning Services • Niagara Region, Ontario
        </p>
      </footer>
    </div>
  );
}
