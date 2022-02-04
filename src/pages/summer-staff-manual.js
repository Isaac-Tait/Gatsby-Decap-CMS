import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const staffManual = () => {
    return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
        <Header />
            <div className="h-screen">
                <p className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">Summer Staff Manual</p>
                <div className="max-w-4xl mx-auto mt-8">
                    <p className="font-semibold">Summer Senior Staff Contract</p>
                    <a href="https://www.royalridges.org/f/Summer_Senior_Staff_Contract_2022_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">Summer Junior Staff Contract</p>
                    <a href="https://www.royalridges.org/f/Summer_Junior_Staff_Contract_2022_-_Google_Docs.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">New Hire Employee Form</p>
                    <a href="https://www.royalridges.org/f/New_Employee_Form_(4).pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">Background Check Form (ages 18 and over)</p>
                    <a href="https://www.royalridges.org/f/RRR_-_Background_Check_Form_2019_Fillable__(2).pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">Parent Authorization Form (only for ages under 18)</p>
                    <a href="https://www.royalridges.org/f/Parent_Authorization_Form.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">W4 Form (Senior Staff)</p>
                    <a href="https://www.royalridges.org/f/fw4.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                    
                    <p className="mt-4 font-semibold">I-9 Form (Senior Staff)</p>
                    <a href="https://www.royalridges.org/f/i-9-paper-version.pdf" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Link</a>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default staffManual;