import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const [shortUrl, setShortUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
        shortUrl: shortUrl,
      });
      setFullUrl("");
      setShortUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w=full h-full rounded-xl p-20 backdrop-brightness-50:">
          <h2 className="text-white text-4xl text-center pb-4">URL Shortner</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            Let's paste your untidy link to shorten it.
          </p>
          <p className="text-white text-center pb-4 text-sm font-thin">
            Free tool to shorten a URL or reduce link, Use our URL shortner to
            create a shortened & neat link making it easy to use
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-lg space-y-3">
              {/* full url */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  anuragband.com /
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  className="block w-full p-4 ps-40 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
              </div>
              {/* short url */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  Short URL Name /
                </div>
                <input
                  type="text"
                  placeholder="add Short URL Name"
                  className="block w-full p-4 ps-40 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={shortUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setShortUrl(e.target.value)
                  }
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center mx-auto w-60 p-4 text-lg font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Shorten URL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
