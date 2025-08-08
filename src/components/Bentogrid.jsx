function Bentogrid() {
  return (
    <>
      <div className="flex w-1/2 justify-center items-center flex-col">
        <div className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title font-semibold">
            How to Summerize any artile using link?
          </div>
          <div className="collapse-content text-sm">
            <iframe
              className="mt-2 w-full rounded-4xl aspect-video"
              src="https://www.youtube.com/embed/Gc4khpDJM_Y?autoplay=1&mute=1&loop=1&playlist=Gc4khpDJM_Y&controls=0&modestbranding=1&showinfo=0"
              allow="autoplay; encrypted-media"
              title="How to Create an Account"
            />
          </div>
        </div>
        <div className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title font-semibold">
            How to create shareable link?
          </div>
          <div className="collapse-content text-sm">
            <iframe
              className="mt-2 w-full rounded-4xl aspect-video"
              src="https://www.youtube.com/embed/rZp_ue4aK7Y?autoplay=1&mute=1&loop=1&playlist=rZp_ue4aK7Y&controls=0&modestbranding=1&showinfo=0"
              allow="autoplay; encrypted-media"
              title="How to Create an Account"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bentogrid;
