import { NextPage } from "next";
import Image from "next/image";
import { titleFont } from "@/src/utils/fonts";

const Terms:NextPage = ()=>{
    return (
      <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#044b8b]  to-[#020024] text-gray-100 p-5 sm:p-10">
        <h1 className={`${titleFont.className} pt-24 text-5xl mb-3 text-center`}>Terms and Conditions</h1>
        <ul className="list-disc ml-6 mt-8">
          <li>
            Incridea is a National level techno-cultural festival for the
            students of technical institutes across the country. However, some
            events like Battle of the Bands, Fashion Show, Vibe and Stomp That!
            (Termed as semi-pro events here onwards) are open to all the
            colleges in the country.
          </li>
          <li>Participants from only same colleges can form a team.</li>
          <li>
            The registrations for semi-pro events are done via invites. Please
            refer the event details provided under special/core events for more
            details.
          </li>
          <li>
            The points gained by the colleges attending the semi-pro events will
            not be considered for the overall championship.
          </li>
          <li>
            Participants must follow all the rules and regulations of the
            college. Display of any unruly behaviour shall lead to
            disqualification of the team and expulsion of the participant from
            the fest.
          </li>
          <li>
            Consumption of any alcoholic drinks, use of any hallucinogenic drugs
            and other illegal substances anywhere in the institute campus is
            strictly prohibited and any person who has consumed such substances
            and makes an attempt to enter the campus will not be allowed inside.
          </li>
          <li>
            Organisers hold the right to change the rules of the event before
            the event begins without prior notice.
          </li>
          <li>
            NMAMIT is not responsible for any loss or damage of
            participant&apos;s personal belongings.
          </li>
          <li>
            The entry for the events and pro-nites will be through the digital
            PID present on the Incridea App. The participant must also present
            their college ID card (compulsory) and Valid government issued ID
            Proof (Any one) (Aadhaar, Driving license, Voter ID, etc.).
          </li>
        </ul>
      <h2 className="text-2xl mt-4">IMPORTANT</h2>
      <p className="mt-2">
        Any participant found violating the above rules may be immediately
        expelled from the campus. His/her registration from all the events may
        be cancelled and he/she will be penalised appropriately. NMAMIT reserves
        the right to take appropriate legal actions in such cases.
      </p>
        <h2 className="text-2xl mt-4">Refund Policy</h2>
        <p className="mt-2">
          Refunds in any particular case can only be initiated upon request.
          Please reach out to the Technical Heads of Incridea for refunds.
        </p>
        <ul className="list-disc ml-10">
          <li>name +91 phone no</li>
          <li>name +91 phone no</li>
          <li>name +91 phone no</li>
        </ul>
        <div className={`flex w-full -translate-x-10 translate-y-6 lg:translate-y-12 opacity-75`} >
          <Image src={'/assets/png/atlantis.png'} width={750} height={50} className='object-center' alt='atlantis' />
          <Image src={'/assets/png/atlantis.png'} width={750} height={50} className='object-center' alt='atlantis' />
        </div>
      </div>
    );
}

export default Terms;
