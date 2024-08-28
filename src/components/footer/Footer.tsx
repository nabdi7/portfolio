import { siteConfig } from "@/config/site";
import Icons from "./Icons";

export function Footer() {
  return (
    <footer>
      <div className="mb-6  flex flex-col items-center mt-14">
        <div className="mb-3 flex space-x-8">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github} className="hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Icons name="github" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin} className="hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Icons name="linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.instagram} className="hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            {/* <Icons name="twitter" className="h-6 w-6" /> */}
            <Icons name="instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:abdinajka@gmail.com" className="hover:text-gray-300">
            <span className="sr-only">Mail</span>
            <Icons name="email" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          {/* <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a> */}
        </div>
      </div>
    </footer>
  );
}
