import { Carousel } from "@material-tailwind/react";
import items from "./items"


const OurCarousel = () => {
    return (
        <Carousel loop={true}>
            {items.map((item, index) => {
                return (
                    < div className={`bg-${item.color}-500 rounded-3xl text-white  h-full w-full flex flex-col items-center justify-center gap-5 p-12`
                    } key={index} >
                        <img
                            // src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            src={`/speakers/speaker${index + 1}.png`}
                            alt={`"image ${index + 1}"`}
                            className=" object-cover  w-32 h-32  rounded-full border-4"
                        />
                        <div className="text-3xl font-bold">{item.name}</div>
                        <div>{item.bio}</div>
                    </div>
                )
            })}

        </Carousel >
    );
}
export default OurCarousel