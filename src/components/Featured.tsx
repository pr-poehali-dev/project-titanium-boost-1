export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/f54095ae-4a2e-4ba2-9edc-8b4b0f715afc/files/351eed1a-d4c9-4551-972d-3de9616a128c.jpg"
          alt="Чашка карпатского травяного чая"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Сила карпатских трав</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Чабрец, мята, душица и горные цветы — мы собираем их на чистых склонах Карпат
          в самый ароматный сезон. Каждый сбор хранит тепло гор и пользу дикой природы.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Купить чай
        </button>
      </div>
    </div>
  );
}