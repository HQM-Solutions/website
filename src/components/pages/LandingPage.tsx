import Button from "@/components/Button"

const LandingPage = () => {
  return (<div className="w-full max-w-[1440px] mx-auto">
    <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-6xl font-bold">
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="primarytext text-center leading-[1.24] font-bold">Crafting Tomorrow's Digital Experiences</h1>
        <p className="text-primary-500 text-lg text-center">We are a digital services company specializing in UI/UX Design, Development, Video Editing, and Graphic Design. We build the future, today. Start Your Project</p>
        {/*<div className="flex items-center justify-center">*/}
         <Button buttonText="Start Your Project" buttonClassName={"text-xl mx-auto px-12 py-4 rounded-lg primarybtn"}/>
        {/*</div>*/}
      </div>
    </div>
    <div className="bg-black h-[calc(100vh)] flex flex-col items-center justify-center text-6xl font-bold">
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="primarytext text-center leading-[1.24] font-bold">Crafting Tomorrow's Digital Experiences</h1>
        <p className="text-primary-500 text-lg text-center">We are a digital services company specializing in UI/UX Design, Development, Video Editing, and Graphic Design. We build the future, today. Start Your Project</p>
        {/*<div className="flex items-center justify-center">*/}
         <Button buttonText="Start Your Project" buttonClassName={"text-xl mx-auto px-12 py-4 rounded-lg primarybtn"}/>
        {/*</div>*/}
      </div>
    </div>
    <div className="bg-black h-[calc(100vh)] flex flex-col items-center justify-center text-6xl font-bold">
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="primarytext text-center leading-[1.24] font-bold">Crafting Tomorrow's Digital Experiences</h1>
        <p className="text-primary-500 text-lg text-center">We are a digital services company specializing in UI/UX Design, Development, Video Editing, and Graphic Design. We build the future, today. Start Your Project</p>
        {/*<div className="flex items-center justify-center">*/}
         <Button buttonText="Start Your Project" buttonClassName={"text-xl mx-auto px-12 py-4 rounded-lg primarybtn"}/>
        {/*</div>*/}
      </div>
    </div>
  </div>)
}

export default LandingPage
