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
      name: "name",
      type: "email",
    },
    {
      label: "Your Phone Number",
      name: "name",
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
      <form
        name="contact"
        action="/contact?success=true"
        method="POST"
        data-netlify="true"
      >
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

export default function Contact({ title, image, video_link, source }: any) {
  const content = hydrate(source);
  return (
    <div className="container lg:w-2/3 space-y-10 flex-col pb-8">
      {title && <h1 className="text-3xl">{title}</h1>}
      {video_link && (
        <div className="youtube-container">
          <iframe
            src={video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {image && <img className="rounded-full w-1/2 m-auto" src={image} />}
      <div className="prose space-y-8 mx-auto">{content}</div>
      <ContactForm />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = "contact";
  const { data, source } = await getSourceAndDataBySlug(slug);
  return {
    props: {
      title: data.title,
      image: data.thumbnail,
      video_link: data.video_link,
      source,
    },
  };
};
