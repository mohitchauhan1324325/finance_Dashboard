const Footer = () => {
  return (
   <footer className="fixed bottom-0 left-0 w-full bg-neutral-primary-soft border border-default">
      <div className="max-w-screen-xl p-4 md:flex md:justify-between">
        <span className="text-sm text-body sm:text-center">
          © 2023 Flowbite™. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
          <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline me-4 md:me-6">Licensing</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer