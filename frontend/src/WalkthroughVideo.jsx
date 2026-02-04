import React from "react";

const WalkthroughVideo = () => {
  // Your URL: https://youtu.be/jqCjUFjN9Vg?si=dQR8Pg6z6QZGkgYl
  const videoId = "jqCjUFjN9Vg";

  return (
    <section id="walkthrough" className="bg-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
            Walkthrough Video <br />
            <span className="text-[#f97316]">Experience the Project Virtually</span>
          </h2>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Responsive 16:9 */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Project Walkthrough Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Bottom Info */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Watch MOdel Flat Video
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Watch the full Model Flat  Video for a better understanding.
              </p>
            </div>

            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium
                         bg-gradient-to-r from-[#002954] to-[#00b4e6] hover:opacity-90 transition"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalkthroughVideo;
