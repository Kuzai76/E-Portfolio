import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p><span className="text-textGreen font-bold text-2xl">Reflection</span></p>
      <p className="text-center text-textLight">Throughout the Communication and Business Skills for IT module, my learning experience has been both enriching and impactful.
      One of the key challenges I faced was confidently delivering professional presentations and adapting my communication style depending on the audience. 
      I overcame these difficulties through regular practice sessions, participating actively in workshops, and applying feedback provided by both peers and 
      lecturers.</p>
      <p></p>
      <p></p>
      <strong>Key skills developed:</strong>
        <ul className="list-disc list-inside text-base text-textLight space-y-2">
          <li>Effective verbal and written communication in professional contexts.</li>
          <li>Creation of structured business documents such as reports, emails, and proposals.</li>
          <li>Strengthened teamwork, negotiation, and conflict resolution skills.</li>
        </ul>
      <p></p>
      <p></p>
      <strong>Lessons learned:</strong> 
      <p className="text-center">I learned the importance of consistency over motivation, the power of breaking down large projects into smaller, actionable steps, and the value of seeking help and feedback early in the development process.</p>
      <p></p>
      <p></p>
      <strong>Areas for further improvement:</strong>
      <ul className="list-disc list-inside text-base text-textLight space-y-2">
        <li>Enhancing my proficiency in full-stack development.</li>
        <li>Strengthening my testing and debugging skills.</li>
        <li>Focusing more on designing user-centered interfaces and improving accessibility across applications.</li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <a href="mailto:esaie.moos1@umail.uom.ac.mu">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
