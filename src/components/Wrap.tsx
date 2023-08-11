import wrapImg from "../../public/wrap-hero-homepage.svg";

const Wrap = () => {
  return (
    <div className="tablet:w-[95%] w-[80%] border-2 border-white rounded-lg m-auto text-white flex max-tablet:max-w-[500px] max-tablet:flex-col min-h-[407px]">
      <div className="flex flex-col px-6 pb-6 pt-8 tablet:w-1/2 p-10">
        <p className="tablet:text-[62px] text-[30px] tablet:leading-[64px] tablet:tracking-[-2.5px] mb-[1rem] font-normal w-[85%]">
          That's a wrap on Google I/O 2023
        </p>
        <div className="flex flex-col justify-between flex-1 gap-4">
          <p className="tablet:text-[20px] tablet:leading-[28px] font-normal">
            Catch up on announcements, deep-dives, and anything you may have
            missed.
          </p>
          <a
            href="http://www.youtube.com/watch_videos?video_ids=QpBTM0GO6xI,hleLlcHwQLM"
            target="_blank"
            className="w-fit"
          >
            <button className="bg-blue-500 text-[20px] leading-[24px] hover:bg-blue-700 text-white py-2 px-4 rounded">
              Watch the recaps
            </button>
          </a>
        </div>
      </div>
      <div className="max-tablet:pl-5">
        <img
          src={wrapImg}
          alt="wrap image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Wrap;