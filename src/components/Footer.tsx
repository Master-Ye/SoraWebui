import Image from "next/image";
import Link from "next/link";

const navigation = {
  product: [
    {name: 'SoraWeb', href: 'https://sorawebui.com'}
  ],

}

export default function Footer({
                                 locale = '',
                                 description = ''
                               }) {
  return (
    <footer className="bg-[#020d24]" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href={`/${locale}`}>
              <Image
                className="h-10"
                src="/appicon.svg"
                width={32}
                height={32}
                alt="Sorawebui.com"
              />
            </a>
            <p className="text-sm text-gray-300">
              {description}
            </p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="text-sm font-semibold leading-6 text-white"></div>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-semibold leading-6 ">Product</div>
                <ul role="list" className="mt-6 space-y-4 text-white" >
                  <li>Reach Me 联系我
                  </li>
                  <li>masterye.xyz</li>
                  <li>1813708165@qq.com</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
