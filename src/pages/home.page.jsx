const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-[60%] min-w-[320px] mx-auto text-sm">
      <img src="/medicsewa.jpg" className="mt-24 w-[120px] h-[120px]" />
      <div className="text-center my-8">
        <strong>Who we are?</strong>
        <p className="mt-4">
          We are a software company specializing in medical software systems.
          Other than medical softwares we also develop systems like Accounting
          System, Booking System, SMS systems, which are directly or indirectly
          connected with the systems that we build. We are also developing
          education systems.
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center my-8">
        <p>
          <b>MedicSewa</b> is a telemedicine application that allows patients to
          consult with certified doctors, book virtual appointments, and
          securely store their medical records in one place. With MedicSewa,
          patients can access healthcare from the comfort of their own homes,
          reducing the need for in-person visits and providing greater
          convenience and accessibility.
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center py-8">
        <strong>Contact Us</strong>
        <p className="mt-4">
          If you have anything to ask please feel free to contact us here:
          <br />
          <span className="italic underline text-sky-700 font-medium">
            info@medicsewa.com
          </span>
        </p>
        <nav className="flex items-center justify-center gap-2 mt-8">
          <a href="/terms-and-conditions" className="hover:underline">
            Terms &amp; Conditions
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
