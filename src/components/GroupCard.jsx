export default function GroupCard(props) {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg bg-[#222] rounded-md duration-300 hover:shadow-sm h-[400px] w-[320px] relative">
      <img src="https://mj-gallery.com/806b7aae-697c-4f35-aca9-9ef1bc2a9912/grid_0.png" alt="lol" className="w-full h-[50%]" />
      <div className="pt-3 mr-4 ml-2 mb-3">
        <h3 className="text-xl text-gray-900">{props.title}</h3>
        {/* <p className="text-gray-400 text-sm mt-1">{props.desc}</p> */}
      </div>
      <button className="px-6 py-3 text-white duration-150 bg-success active:shadow-lg absolute bottom-5 left-1/2 -translate-x-1/2">
        الإنضمام
      </button>
    </article>
  );
}
