import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">Run-lytics Data Services</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Transforming raw data into actionable insights. Business Intelligence & Analytics
              solutions powered by Power BI, Tableau, and Qlik.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {['About', 'Services', 'Clients', 'Contact'].map(label => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-sm text-slate-400 transition-colors hover:text-runlytics-blue-light"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:3093074564"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
                (309) 307-4564
              </a>
              <a
                href="mailto:data@runlytics.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <EmailIcon sx={{ fontSize: 16 }} />
                data@runlytics.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          &copy; {currentYear} Run-lytics Data Services. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
