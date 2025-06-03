import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactModels/ContactExperience";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        // send the form
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      // reset the form after submit
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("emailjs error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding scroll-mt-15">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get in Touch With Me" sub="Let's Connect!" />
        <div className="mt-16 grid-12-cols">
          {/* left side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border p-10 rounded-xl">
              <form
                className="w-full flex flex-col gap-7"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" className="text-gray-800 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-800 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-white-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-800 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Send me a message"
                    rows="5"
                    required
                    className="bg-white-50"
                  />
                </div>
                <button
                  type="submit"
                  className="md:w-80 md:h-16 w-60 h-12"
                  disabled={loading}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/email.png"
                        alt="arrow"
                        className="size-7"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* right side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-zinc-800  hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
