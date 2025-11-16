export default function GreetingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b8d8ff] to-[#dcecff] p-6">
      
      {/* VIDEO SECTION */}
      <section className="flex flex-col items-center">
        <video
          controls
          className="w-full max-w-xl rounded-2xl shadow-xl border border-blue-200"
        >
          <source src="/happy-bday.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* MESSAGE SECTION */}
      <section className="mt-10 flex justify-center">
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl text-center border border-blue-100">
          
          <h1 className="text-3xl font-bold text-blue-700">
            Happy Birthday Baby Ko!!🎉💙
          </h1>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Hello bb ko, today is a very special day for you and I really am grateful
            that nandito ka sa buhay ko
            <br /><br />
            Hope that your day is filled with joy, warmth and yung love that you deserve
            <br /><br />
            I know pasaway ako sometimes sa iyo, but just know that I am doing my best to make
            you happy for as long as possible, kahit na unfriend ako 😭
            <br /><br />
            I hope you'll enjoy this little video and website that I created to cherish or to have 
            something to remember on this day.
            <br /><br />
            I LOVEEEE YOUUU SOOOOOOO MUCH BB KO!!!!! 🥰🥰
            <br /><br />
            From your BABY - DDrayley
          </p>
        </div>
      </section>

    </div>
  );
}
