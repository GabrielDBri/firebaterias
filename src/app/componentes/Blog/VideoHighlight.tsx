import React from "react";

const VideoHighlight = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-white items-center justify-center px-4 lg:px-0 min-h-[75vh]">
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-lg lg:space-x-6">
        {/* Informações do texto no lado esquerdo */}
        <div className="w-full lg:w-1/2 bg-white p-10 text-gray-800 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Videos for Good: Mo Scarpelli on stories that liberate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This month, were shining a light on creators who use video to unearth urgent stories and tackle the issues that matter most. These creators are pushing boundaries, sparking conversations, and inspiring action in ways that resonate deeply with audiences across the globe.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join us as we delve into the stories and motivations behind their work, exploring the challenges they face and the impact they hope to achieve. Through this series, we hope to elevate voices that are making a difference and using the power of video to bring about change.
          </p>
        </div>

        {/* Vídeo no lado direito */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dBCBixORrjE?si=vsynWJt5WdT-Fw67"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
