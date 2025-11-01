import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoSample from '../assets/trl.mp4';
import ReactPlayer from "react-player";

// Landing page for a pre-sale video editing tutorial
// - Tailwind CSS required in the project
// - Framer Motion may be used if you want animations (not necessary)
// Usage: import and render <LandingPage /> in your app

export default function Tutorial() {
  // ----- CONFIG -----
  const videographerName = "Truth"; // replace
  const tiktokHandle = "@ai_am_truth"; // replace
  const paymentLink = "https://payments.example.com/checkout"; // replace with your IntaSend / M-Pesa link
  const earlyBirdPrice = 1500; // KES
  const regularPrice = 2000; // KES
  const totalSeats = 100;
  const earlyBirdLimit = 50; // number of early bird spots

  // Launch date: 7 days from now
  const launchDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // ----- UI state -----
  const [now, setNow] = useState(new Date());
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [signups, setSignups] = useState(() => {
    // Persist a fake signups counter in localStorage so the demo is interactive
    try {
      const raw = localStorage.getItem("preSaleSignups");
      return raw ? parseInt(raw, 10) : 0;
    } catch (e) {
      return 0;
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Countdown timer
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("preSaleSignups", String(signups));
    } catch (e) {}
  }, [signups]);

  // Derived values
  const timeRemaining = Math.max(0, launchDate.getTime() - now.getTime());
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  const earlySpotsLeft = Math.max(0, earlyBirdLimit - signups);
  const seatsLeft = Math.max(0, totalSeats - signups);
  const currentPrice = signups < earlyBirdLimit ? earlyBirdPrice : regularPrice;

  function validateEmail(e) {
    return /\S+@\S+\.\S+/.test(e);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (seatsLeft <= 0) {
      setError("All seats are full for this batch. Please join our waitlist.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate a quick backend call for analytics / seat reservation
      await new Promise((r) => setTimeout(r, 700));

      // Increment demo signup counter (persisted in localStorage). In a real setup
      // this should call your backend which charges the user and records the signup.
      setSignups((s) => s + 1);

      // Redirect to payment provider with params (replace with your real payment link)
      const redirectUrl = new URL(paymentLink);
      redirectUrl.searchParams.set("name", name);
      redirectUrl.searchParams.set("email", email);
      redirectUrl.searchParams.set("amount", String(currentPrice));
      redirectUrl.searchParams.set("product", "Video Editing Tutorial - PreSale");

      window.location.href = redirectUrl.toString();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between mt-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white font-bold">VE</div>
          <div>
            <div className="text-sm text-gray-600">Pre-sale</div>
            <div className="text-xl font-extrabold">Master Video Editing with {videographerName}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm">Early bird</div>
          <div className="text-lg font-semibold">KES {earlyBirdPrice}</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - hero + benefits */}
        <section className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex flex-col gap-4 lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  🎬 Learn Professional Video Editing — From Raw Footage to Cinematic Results
                </h3>
                <p className="mt-3 text-gray-600">
                  Join my first class ever - Taught by <strong>{videographerName}</strong> ({tiktokHandle}).
                  Learn the exact editing workflow I use for viral reels.
                </p>

                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  <div className="text-sm px-3 py-2 rounded bg-amber-100 text-amber-800 font-medium">Limited: 100 seats</div>
                  <div className="text-sm px-3 py-2 rounded bg-green-100 text-green-800 font-medium">Early bird: KES {earlyBirdPrice}</div>
                  <div className="text-sm px-3 py-2 rounded bg-blue-100 text-blue-800 font-medium">Launch in {days}d {hours}h</div>
                </div>
              </div>

              <div className="mt-4 lg:mt-0">
                <video
                  src="https://res.cloudinary.com/dcj3qavxy/video/upload/f_auto,w_1280,q_60,br_500k,vc_auto,vs_1280x720/v1762008778/truth/trl_v3tffn.mp4"
                  controls
                  loop
                  poster="https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639832/truth/gallery-image/nature_p5hwcb.png"
                  playsInline
                  className="object-cover rounded shadow"
                />
               
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <h3 className="font-semibold">What you'll learn</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li>• Turn raw clips into cinematic videos</li>
                  <li>• Storytelling with cuts, pacing & music</li>
                  <li>• Color grading for a professional look</li>
                  <li>• Editing workflows for Reels & Shorts</li>
                  <li>• All while editing a full reel like the one above.</li>
                </ul>
              </div>

              <div className="p-4 border rounded">
                <h3 className="font-semibold">Early-bird bonuses</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li>• First 10 signups get free access to next 2 mini-tutorials</li>
                  <li>• Exclusive WhatsApp group for feedback</li>
                </ul>
              </div>
            </div>

            {/* Social proof / why this course */}
            <div className="mt-6">
              <h3 className="font-semibold">Why learn from {videographerName}?</h3>
              <p className="mt-2 text-sm text-gray-700">
                This is a practical, hands-on class — not theory. You'll learn the exact steps used on client projects and viral content. Perfect for creators who want to level up fast.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <h4 className="font-semibold">Course timeline</h4>
              <p className="text-sm text-gray-700 mt-2">Pre-sale open now. We create the lessons this week and release everything on the launch date.</p>
              <div className="mt-3 text-sm">Launch date: <strong>{launchDate.toDateString()}</strong></div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-xl">FAQ</h3>
            <div className="mt-4 grid gap-4">
              <details className="p-3 border rounded">
                <summary className="font-medium cursor-pointer">Is this for beginners?</summary>
                <p className="mt-2 text-sm text-gray-700">Yes — we start from the basics and show a full real-world workflow.</p>
              </details>

              <details className="p-3 border rounded">
                <summary className="font-medium cursor-pointer">Which software will you use?</summary>
                <p className="mt-2 text-sm text-gray-700">We’ll show edits in Premiere Pro and also explain concepts that work across DaVinci Resolve and CapCut.</p>
              </details>

              <details className="p-3 border rounded">
                <summary className="font-medium cursor-pointer">Refunds?</summary>
                <p className="mt-2 text-sm text-gray-700">Full refund is available before launch day. After the course is delivered we may consider refunds case-by-case.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Right column - signup card */}
        <aside className="lg:col-span-5">
          <div className="sticky top-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Pre-sale Price</div>
                  <div className="text-2xl font-extrabold">KES {currentPrice}</div>
                  <div className="text-xs text-gray-500">Early bird available while spots last</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Seats</div>
                  <div className="text-lg font-semibold">{signups}/{totalSeats}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                  <div className="h-3 rounded bg-emerald-500" style={{ width: `${(signups / totalSeats) * 100}%` }} />
                </div>
                <div className="mt-2 text-xs text-gray-600">{seatsLeft} seats left • {earlySpotsLeft} early-bird spots left</div>
              </div>

              {/* Countdown */}
              <div className="mt-5 p-4 bg-gray-50 rounded">
                <div className="text-xs text-gray-600">Launch countdown</div>
                <div className="mt-2 text-xl font-mono">{String(days).padStart(2, "0")}d {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s</div>
              </div>

              {/* Signup form */}
              <form onSubmit={handleSignUp} className="mt-5 space-y-3">
                <div>
                  <label className="sr-only">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full border rounded px-3 py-2" />
                </div>

                {error && <div className="text-sm text-red-600">{error}</div>}

                <button disabled={isSubmitting || seatsLeft <= 0} type="submit" className="w-full py-3 rounded bg-black text-white font-semibold disabled:opacity-60">
                  {isSubmitting ? "Reserving your spot..." : `Reserve spot — KES ${currentPrice}`}
                </button>

                <div className="text-xs text-gray-600">Secure checkout. Full refund if we don’t launch.</div>
              </form>

              <div className="mt-4 text-sm text-gray-600">
                <div>Bonus for early birds: first 10 signups get free access to next 2 mini-tutorials.</div>
              </div>
            </div>

            {/* Social / trust */}
            <div className="mt-4 p-4 bg-white rounded-2xl shadow text-sm text-gray-700">
              <div className="font-semibold">Seen on TikTok</div>
              <div className="mt-2">Follow <a href={`https://www.tiktok.com/@ai_am_truth?is_from_webapp=1&sender_device=pc`} className="text-blue-600">{tiktokHandle}</a> for editing clips and live demos.</div>

              <div className="mt-3 text-xs text-gray-500">Have questions? Reply to our pinned TikTok post or DM mutual followers. We avoid mass DMs to keep things personal.</div>
            </div>

            {/* Testimonials placeholder */}
            <div className="mt-4 p-4 bg-white rounded-2xl shadow">
              <div className="text-sm font-semibold">What people say</div>
              <div className="mt-2 text-sm text-gray-600">“Your edits are next level — would love to learn!” — Wayne</div>
            </div>
          </div>
        </aside>
      </main>

      {/* <footer className="max-w-5xl mx-auto p-6 text-center text-gray-500 text-sm">© {new Date().getFullYear()} {videographerName} </footer> */}
    </div>
  );
}
