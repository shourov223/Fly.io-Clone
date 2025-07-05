import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-[#191034] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-4">
          {/* Logo - Full width on mobile, spans 2 cols on tablet */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 sm:mb-6 lg:mb-0">
            <img src="/footer_logo.svg" alt="logo" className="h-8 sm:h-10 lg:h-auto" />
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <ul className="flex flex-col gap-1">
              <ListHeading heading={"Company"} />
              <ListItem Tagname={Link} text={"About"} />
              <ListItem Tagname={Link} text={"Pricing"} />
              <ListItem Tagname={Link} text={"Jobs"} />
            </ul>
          </div>
          
          {/* Articles */}
          <div className="col-span-1">
            <ul className="flex flex-col gap-1">
              <ListHeading heading={"Articles"} />
              <ListItem Tagname={Link} to={"/"} text={"Blog"} />
              <ListItem Tagname={Link} to={"/"} text={"Phoenix Files"} />
              <ListItem Tagname={Link} to={"/"} text={"Laravel Bytes"} />
              <ListItem Tagname={Link} to={"/"} text={"Ruby Dispatch"} />
              <ListItem Tagname={Link} to={"/"} text={"Django Beats"} />
              <ListItem Tagname={Link} to={"/"} text={"JavaScript Journal"} />
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <ul className="flex flex-col gap-1">
              <ListHeading heading={"Resources"} />
              <ListItem Tagname={Link} to={"/"} text={"Docs"} />
              <ListItem Tagname={Link} to={"/"} text={"Customers"} />
              <ListItem Tagname={Link} to={"/"} text={"Support"} />
              <ListItem Tagname={Link} to={"/"} text={"Support Metrics"} />
              <ListItem Tagname={Link} to={"/"} text={"Status"} />
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <ul className="flex flex-col gap-1">
              <ListHeading heading={"Contact"} />
              <ListItem Tagname={Link} to={"/"} text={"GitHub"} />
              <ListItem Tagname={Link} to={"/"} text={"Twitter"} />
              <ListItem Tagname={Link} to={"/"} text={"Community"} />
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <ul className="flex flex-col gap-1">
              <ListHeading heading={"Legal"} />
              <ListItem Tagname={Link} to={"/"} text={"Security"} />
              <ListItem Tagname={Link} to={"/"} text={"Privacy policy"} />
              <ListItem Tagname={Link} to={"/"} text={"Terms of service"} />
              <ListItem Tagname={Link} to={"/"} text={"Acceptable Use Policy"} />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

const ListHeading = ({ heading, path }) => {
  return (
    <li className="text-white text-xs sm:text-[11px] font-semibold leading-[18px] pb-3 sm:pb-[15px] uppercase tracking-wide">
      {heading}
    </li>
  )
}

const ListItem = ({ text, Tagname = "a", ...props }) => {
  return (
    <li> 
      <Tagname 
        {...props} 
        className="text-[#A39AC1] text-sm sm:text-[14px] leading-[24px] font-medium hover:text-white transition-colors duration-200"
      >
        {text}
      </Tagname> 
    </li>
  )
}

export default Footer