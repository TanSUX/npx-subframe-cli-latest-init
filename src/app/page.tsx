"use client";

import React from "react";
import { TextField } from "@/ui/components/TextField";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-default-background px-1 py-1">
      <div className="flex w-full max-w-[768px] flex-col items-center gap-11 px-4 py-10">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-full relative mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <img
              className="w-full grow shrink-0 basis-0 object-cover absolute mobile:h-11 mobile:w-8 mobile:flex-none mobile:object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1746122773/uploads/11167/ygk10lvtpbeeh781yiui.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-['Barlow'] text-[24px] font-[500] leading-[20px] text-default-font">
              A Nuclear design directive
            </span>
            <span className="font-['Barlow'] text-[14px] font-[400] leading-[20px] text-neutral-500">
              Ready to launch.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16 px-4 py-4">
          <span className="font-['Barlow'] text-[16px] font-[400] leading-[20px] text-default-font text-center mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[400] mobile:leading-[20px] mobile:tracking-normal">
            To pursue a thought process directed by purpose and clarity, not
            decoration. A state achieved through the exclusion of the non
            essential.
          </span>
          <div className="flex items-center gap-8">
            <span className="text-body-bold font-body-bold text-default-font mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[500] mobile:leading-[20px] mobile:tracking-normal mobile:text-neutral-500">
              HMI Design
            </span>
            <span className="text-body-bold font-body-bold text-default-font mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[500] mobile:leading-[20px] mobile:tracking-normal mobile:text-neutral-500">
              Design for AI
            </span>
            <span className="text-body-bold font-body-bold text-default-font mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[500] mobile:leading-[20px] mobile:tracking-normal mobile:text-neutral-500">
              UX for complexity
            </span>
            <span className="text-body-bold font-body-bold text-default-font mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[500] mobile:leading-[20px] mobile:tracking-normal mobile:text-neutral-500">
              UX audits
            </span>
          </div>
          <div className="flex h-52 w-52 flex-none flex-col items-center justify-center gap-6">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="h-52 w-52 flex-none items-center justify-between grid grid-cols-3">
                <div className="flex h-52 w-52 flex-none flex-col items-center gap-6">
                  <img
                    className="grow shrink-0 basis-0 rounded-md object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1746123326/uploads/11167/sjxjn1vjfshjiqvmmghj.png"
                  />
                </div>
              </div>
            </div>
            <span className="font-['Barlow'] text-[14px] font-[400] leading-[20px] text-[#171717ff] mobile:font-['Barlow'] mobile:text-[14px] mobile:font-[300] mobile:leading-[20px] mobile:tracking-normal">
              Full website coming soon!
            </span>
          </div>
          <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-4">
            <span className="font-['Barlow'] text-[14px] font-[500] leading-[20px] text-brand-600">
              Collaborate early
            </span>
            <TextField className="h-auto w-full flex-none" label="" helpText="">
              <TextField.Input
                placeholder="Email address"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );


}