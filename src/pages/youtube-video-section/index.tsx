import React, { useEffect, useState } from "react";

import BreadCrumb from "@/Component/Common/BreadCrumb";
import { ROUTE } from '@/Const/Route';

import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import VideoCard from "@/Component/Feature/VideoSection/videocard";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
  seoData:any;
}

const VideoSection: NextPage<MyPageProps> = ({ seoData }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const  {t}  = useTranslation();
  const router = useRouter()
  const Cdata = [
    {
      youtubeUrl: "https://www.youtube.com/watch?v=qHJttjDve04",
      videoDescription: "Why go for a Preventive Health check-up in Oncquest Laboratories? It' s a highly advanced lab with tonnes of the latest facilities - We provide research-based health insights along with the digitally enabled solutions - We are quick with their hassle-free testing experience - We have a test menu of over 4000+ tests whose sample collection facility is even provided at your doorstep - Most importantly, we follow all safety protocols and the lab is highly hygienic.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=8CGXYqe7Uek",
      videoDescription: "At Oncquest Laboratories Ltd., we believe in raising our voices together to spread the word and create awareness about the importance of breast cancer screening and support. Early detection not only provides the best chance for treatment but also helps in increasing survival rates.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=txqA3IDPaWE",
      videoDescription: "Want to know more - Listen to our expert Dr. Shivali Ahlawat speaking in this video on the Scenario of Breast cancer in India and the role of early diagnosis and screening for better survival outcomes. When it comes to your health #ignoranceisnotbliss.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=Lc-7T8WTpus",
      videoDescription: "Listen to our expert Dr. Vinay Bhatia on how precision medicine plays a significant role in making a more accurate diagnosis. When it comes to your health 'Ignorance is not bliss'.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=JeoZaLVm8Es",
      videoDescription: "At Oncquest Laboratories Ltd., we believe in raising our voices together to spread the word and create awareness about the importance of breast cancer screening and support. Early detection not only provides the best chance for treatment but also helps in increasing survival rates.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=uHY1kJbuQjE",
      videoDescription: "Liquid biopsy in lung cancer is evolving as an important added tool for screening, early detection, monitoring, and even prognostication of lung cancer. LB is mainly utilized as an auxiliary tool in lung cancer diagnosis when a LDCT detects an abnormality. Early detection could be pursued using different approaches, such as diagnostic imaging techniques in high-risk individuals, including low-dose computed tomography (LDCT).",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=q0OoS8Ihbbs",
      videoDescription: "Your Health should never be an obstacle. Book your preventive health checkup to detect early symptoms for diagnosis.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=8MvwHOLlmME&t=1s",
      videoDescription: "We thank all our doctors, technical team, healthcare workers and teammates for partnering with our new initiative on World Cancer Day. Thank you for your participation & feedback on this awareness campaign that we will continue to carry out in the years ahead as when it comes to your health –“Ignorance is not Bliss”",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=b8ngkLo4aBw",
      videoDescription: "Early detection increases the possibility of a healthy outcome. Biopsy, Cytology, Radiology along with Blood test helps in diagnosing cancer at early stage. Consult your doctor today to know more.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=39lapelTKSM",
      videoDescription: "Ignoring bad habits & negativity can be bliss for you but when it comes to your health IGNORANCE IS NOT BLISS. Early detection & diagnosis makes treatment more effective. This World Cancer Day let’s come together and join this initiative towards raising awareness and defeating cancer.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=kHVRefRLr4g&t=6s",
      videoDescription: "Oncquest is out there in your city, educating on the importance of preventive health checks, doing free health screenings to get you started, and doing its bit to keep India Healthy.",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=zOH5sZ5evmI&t=3s",
      videoDescription: "Dr. Bushra shares her wonderful experience of her #preventivehealthcheck experience at #Oncquestlaboratories.",
    },
    {
      youtubeUrl: "https://youtube.com/shorts/c17nr36u7gI?feature=share",
      videoDescription: "Listen to RJ Khurafati Nitin delivering a message from Oncquest on the need to keep our lungs healthy.",
    },
    {
      youtubeUrl: "https://youtu.be/nKW1-AmDU_Y",
      videoDescription: "Oncquest Laboratories Ltd. wins the Award of Excellence in healthcare for 2021 at Ayushman India organised by Dainik Jagran.",
    },
    {
      youtubeUrl: "https://youtu.be/29BISMOf44c",
      videoDescription: 'A session on "3 steps to defeating cancer" by Dr. Shivali Ahlawat.',
    },
  ];
  if (!initialRenderComplete) return <></>;
  return (
    <React.Fragment>
    <NextSeo
       title={seoData?.SeoTitle}
       description={seoData?.SeoDescription}
       canonical={`${SITE_URL}${router.asPath}`}
       openGraph={{
         title:seoData?.SeoTitle,
         description:seoData?.SeoDescription,
         type: "website",
         locale: "en_IE",
         url: `${SITE_URL}${router.asPath}`,
         siteName: "oncquest-lab",
       }}
       twitter={{
         handle: "@handle",
         site: "@site",
         cardType: "summary_large_image",
       }}
       additionalMetaTags={[
         {
           property: "keywords",
           content:seoData?.SeoKeywords
         },
       ]}
    />
      <BreadCrumb page={t("videos")} data={{ slug: "", path: "#" }} />
      <section className="team-section video-section-n">
        <div className="container">
          <div className="tab-content mb-4">
            <div className="mt-25 text-center">
              <h2>{t("videos")}</h2>
              <div className="mt-10-v">
                <p className="text-center dull_heading pb-3">
                  {t("video_content")}
                </p>
              </div>
            </div>
            <>
              <div className="equal_clm h-services testimonial_list equal_clm_video">
                {Cdata.map((val) => {
                  return (
                    <>
                      <VideoCard 
                      youtubeUrl={val.youtubeUrl} 
                      videoDescription={val.videoDescription} 
                      />
                    </>
                  );
                })}
              </div>
            </>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
  // let Slug = ROUTE.VIDEOSECTION?.replace("/en", "");
  // const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
  return {
    props: {
      // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default VideoSection;
