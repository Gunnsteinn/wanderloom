const MasonryGallery = () => {
  return (
    <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2 ">
      <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src="/image/places/beach.jpg"
          />
        </div>
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src="/image/places/airport.jpeg"
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
            src="/image/places/family.jpg"
          />
        </div>
      </div>
      <div className="flex w-full sm:w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src="/image/places/globe.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src="/image/places/houses.jpg"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src="/image/places/beaches.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default MasonryGallery;
