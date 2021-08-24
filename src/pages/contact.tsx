import { GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import { getSourceAndDataBySlug } from "../lib/pages";

function ContactForm() {
  const fields = [
    {
      label: "Your Name",
      name: "name",
      type: "text",
    },
    {
      label: "Your Email",
      name: "email",
      type: "email",
    },
    {
      label: "Your Phone Number",
      name: "phone",
      type: "tel",
    },
    {
      label: "Your Message",
      name: "message",
      textArea: true,
    },
  ];
  return (
    <div className="flex flex-col">
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input
          type="hidden"
          name="form-name"
          className="w-full h-10  border cursor-default "
          value="contact"
        />
        <div className="pb-8 space-y-4">
          {fields.map((field) => (
            <p className="flex flex-col">
              <label className="pb-2" htmlFor="yourname">
                {field.label}
              </label>
              {!field.textArea && (
                <input
                  type={field.type}
                  required
                  name={field.name}
                  id={field.name}
                  className="rounded w-full p-2 h-12 border border-gray-400"
                />
              )}
              {field.textArea && (
                <textarea
                  name={field.name}
                  id={field.name}
                  required
                  className="rounded w-full p-2 h-24 border border-gray-400"
                />
              )}
            </p>
          ))}
        </div>
        <p className="flex">
          <button
            type="submit"
            className="w-full sm:w-auto px-5 h-12 border hover:bg-black hover:text-white ease-in border-black rounded text-center"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="container lg:w-2/3 space-y-10 flex-col pb-8">
      <h1 className="text-3xl">Contact Us</h1>
      <img className="rounded-full w-1/2 m-auto" src="/images/stall.png" />
      <ContactForm />
    </div>
  );
}
