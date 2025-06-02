import { useEffect, useRef, useState } from "react";
import { counterItems } from "../constanst";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // once triggered, disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // trigger when at least 10% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            className="border-4 border-zinc-800 rounded-xl p-5 flex flex-col justify-center"
            style={{ boxShadow: "4px 4px 5px rgba(90, 90, 90, 0.5)" }}
          >
            <div
              key={counterItems.label}
              className="counter-number text-gray-800 text-5xl font-bold mb-2"
            >
              {isVisible ? (
                <CountUp suffix={item.suffix} end={item.value} />
              ) : (
                <span>0{item.suffix}</span>
              )}
            </div>
            <div className="text-black text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
