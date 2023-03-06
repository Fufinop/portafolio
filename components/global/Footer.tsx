import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={item.icon}
                                alt="icon"
                                width={30}
                                height={30}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold text-center">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div className="w-full flex justify-center">
                <a
                  className="text-center flex justify-center items-center"
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <Image
                    alt="Buy me a coffee"
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 hover:opacity-80 opacity-100 transition-opacity mx-auto"
                    width={220}
                    height={220}
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div className="w-full flex justify-center">
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <Image
                    alt="Paypal"
                    src="/static/misc/paypal.svg"
                    className="h-12 hover:opacity-80 opacity-100 transition-opacity"
                    width={220}
                    height={220}
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1 text-center w-full">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <section className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image
                  alt="React"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  height={26}
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  alt="NextJS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  height={40}
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  alt="TailwindCSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  title="TailwindCSS"
                  width="26"
                  height={26}
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:ernestodelazamora@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Fufinop
            </a>
            . All rights reserved.
          </div>
        </section>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/Fufinop/Fufinop.github.io"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
