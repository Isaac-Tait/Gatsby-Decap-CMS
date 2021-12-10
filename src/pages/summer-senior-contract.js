import React from "react"

import Header from "../components/header";
import Footer from "../components/footer";

const Contract = () => {
    return (
        <div>
            <Header />
            <div className="h-screen">
                <div className="max-w-4xl mx-auto mt-8">
                    <h1 className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">Contract Information</h1>
                    <p className="font-semibold">Staff Manual</p>
                    <a href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Staff_Manual.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Horsemanship Manual</p>
                    <a href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Horsemanship_Manual.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Bible Curriculum 2022</p>
                    <a href="https://www.royalridges.org/f/Bible_Detective_Summer_Camp_Bible_Curriculum_2022_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Day Horse Extended Stay Bible Curriculum</p>
                    <a href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Bible_Detective_Summer_Camp_Bible_Curriculum_Extended_Stay_2022.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Outdoor Education Curriculum</p>
                    <a href="https://www.royalridges.org/f/OE_Curriculum-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Horse Science</p>
                    <a href="https://www.royalridges.org/f/Horse_Care_Horse_Science_Summer_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Horse Activity</p>
                    <a href="https://www.royalridges.org/f/Horse_Care_Horse_Activity_Summer_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Paintball Rules</p>
                    <a href="https://www.royalridges.org/f/Paintball_Rules.docx_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>

                    <p className="font-semibold">Camp Song Book</p>
                    <a href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/RRR_Camp_Song_Book.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contract;