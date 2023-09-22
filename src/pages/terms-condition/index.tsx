import React, { useEffect } from "react";
import BreadCrumb from "@/Component/Common/BreadCrumb";

import { useRouter } from "next/router";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ROUTE } from '@/Const/Route';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
    seoData: any;
  }

const TermsAndConditon : NextPage<MyPageProps> = ({seoData})=>  {
  const  {t} = useTranslation();
  const router = useRouter();
  useEffect(() => {
    window?.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <React.Fragment>
    <NextSeo
        title={seoData?.SeoTitle}
        description={seoData?.SeoDescription}
        canonical={`${SITE_URL}${router.asPath}`}
        openGraph={{
          title: seoData?.SeoTitle,
          description: seoData?.SeoDescription,
          type: "website",
          locale: "en_IE",
          url: `${SITE_URL}${router.asPath}`,
          siteName: "oncquest-lab",
          images: [
            {
              url: 'https://admin.oncquestlabs.com/public/en/uploads/packages/inner-fitness-advance1643629102.jpg',
              alt: 'Og Image Alt'
            }
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: seoData?.SeoKeywords,
          },
        ]}
      />
    <div className="content pb-0 pt-0 bg-gray">
      <BreadCrumb page={t("terms_condition")} data={{ slug: "", path: "" }} />
      <section className="about-section">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap">
                <div className="headingmains text-center pb-4">
                  <h1 className="right">Terms and Conditions of Use</h1>
                </div>
                <h5 className="text-center text-dark pb-4">GENERAL TERMS</h5>
                <ul className="policy">
                  <li>
                    For these Terms of Use, along with any amendments to the
                    same, and wherever the context so requires “You”, ”Your” or
                    “User” shall mean any natural or legal person who has agreed
                    to become a user of the Website. The term “We”, “Us”, “Our”,
                    “Company”, and “Oncquest” shall mean Oncquest Laboratories
                    Limited. (which includes successors,
                    representative-in-interest, and permitted assigns). “Third
                    Party” shall mean and refer to any individual(s), company,
                    or entity apart from the User and Oncquest Laboratories
                    Limited.
                  </li>
                  <li>
                    These Terms of Use, Privacy policy, together with any
                    additional Service-specific terms and conditions, other
                    policies which may be applicable and/or available on our
                    Website{" "}
                    <a href="https://oncquestlabs.com" target="_blank">
                      www.oncquestlabs.com,
                    </a>{" "}
                    and any disclaimers which may be present on the
                    Website/Application are jointly referred to as “Terms of Use
                    or Agreement” and constitute the terms of your access and
                    use of the Website/Application and the Services. Where any
                    part of the Agreement is amended in accordance with the
                    terms of the Agreement, the Agreement shall be enforceable
                    in its amended form. Please be sure to review this Agreement
                    periodically to ensure familiarity with the most current
                    version. If at any time the terms and conditions of this
                    Agreement are no longer acceptable to you, you should
                    immediately cease all use of the Service.
                  </li>
                  <li>
                    By accessing, registering, or using the Services you agree
                    to be legally bound by these Terms of Use/Agreement and
                    consent to our usage of information as outlined in our
                    Privacy Policy. Your use of our Services is subject to your
                    compliance with these Terms of Use. These Terms of Use apply
                    to all visits to our web portal{" "}
                    <a href="https://oncquestlabs.com" target="_blank">
                      www.oncquestlabs.com
                    </a>{" "}
                    or any other portal and all other applications, (“Website”)
                    and all uses of our services, including (but not limited to)
                    all associated content, information, recommendations, and/or
                    services provided to you by or through our services, as
                    detailed on the Website (“Services”). By accessing and using
                    our Services, you hereby agree to these Terms of
                    Use/Agreement, in its entirety. You may not use our Services
                    (or any part thereof) if you do not agree to be bound by
                    this agreement. If you continue to browse and use this
                    Website, you are agreeing to comply with and be bound by the
                    following terms and conditions of use/Agreement.{" "}
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <p>
                    The use of this Website is subject to the following terms
                    and conditions:
                  </p>
                  <p>
                    In case of non-compliance with any applicable laws, rules,
                    or regulations, or the Agreement by a User, Oncquest
                    Laboratories Limited has the right to immediately terminate
                    the access or usage rights of the User to the Services and
                    to remove non-compliant information.
                  </p>
                  <p>
                    Oncquest Laboratories Limited may disclose or transfer
                    sensitive personal data/ information to the extent it is
                    necessary to provide the Services, to another entity or
                    person, as per the Privacy Policy.
                  </p>
                  <p>
                    Oncquest Laboratories Limited retains the right at any time
                    to deny or suspend access to any or all sections of/services
                    provided through the Website to any user, whom We believe,
                    has violated any of the provisions of these Terms and
                    Conditions of Use/Agreement.
                  </p>
                </div>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">1. Services and use of Website</h6>
                </div>
                <ul className="policy">
                  <li>
                    Oncquest Laboratories Limited provides Services through the
                    Website to facilitate customers/ users to avail diagnostic
                    test/package facilities through the website. However,
                    Oncquest Laboratories Limited shall not be liable and does
                    not validate, endorse or approve any information or content
                    posted on its Website. Furthermore, while availing of the
                    Services, the users/customers understand and accept that:{" "}
                    <p className="numberUtil text-left">
                      1. Oncquest Laboratories Limited does not recommend or
                      endorse any diagnostic test/packages mentioned on the
                      Website;
                    </p>
                    <p className="numberUtil text-left">
                      {" "}
                      2. Oncquest Laboratories Limited does not make any
                      representations and warranties concerning the diagnostic
                      labs/doctors/consultants or the quality of the services
                      that are provided by such diagnostic
                      labs/doctors/consultants; 3. Users/customers will be
                      responsible for choosing the services listed on the
                      Website.
                    </p>
                  </li>
                  <li>
                    Oncquest Laboratories Limited is not and shall not be
                    responsible for any sample collected, tests conducted, and
                    reports generated by the labs and does not deal with any of
                    User’s clients or patients managed by User through the
                    Website and only provides Services to User through the
                    Website. User agrees to use the Website and the materials
                    provided therein only for purposes that are permitted by:
                    (a) the Terms of Use; and (b) any applicable law,
                    regulation, or generally accepted practices or guidelines in
                    the relevant jurisdictions.
                  </li>
                  <li>
                    The User may not access the Services for purposes of
                    monitoring their availability, performance, or
                    functionality, or for any other benchmarking or competitive
                    purposes.
                  </li>
                  <li>
                    The user is hereby granted a limited, non-exclusive,
                    non-transferable right to access our website and use the
                    Services solely for the user’s personal non-commercial use
                    and in accordance with the permitted Terms of Use mentioned
                    herein. Without limitation to the foregoing, in the event
                    the user is barred from undertaking legally binding
                    obligations under the Indian Contract Act, 1872, or is for
                    any reason, unable to provide ‘Consent’ as per the
                    Information Technology (Reasonable security practices and
                    procedures and sensitive personal data or information)
                    Rules, 2011, the user is not eligible to register for, use
                    or avail the services available on the Website.
                  </li>
                  <li>
                    Oncquest Laboratories Limited will provide to the User basic
                    support for the Services at no additional charge, and/or
                    upgraded support, if purchased separately, and will use
                    commercially reasonable efforts to make the Services
                    available, except for (i) planned downtime or (ii) any
                    unavailability caused by circumstances beyond Oncquest
                    Laboratories Limited reasonable control, including without
                    limitation, acts of God, acts of government, flood, fire,
                    earthquakes, civil unrest, acts of terror, strikes or other
                    labor problems, or internet service provider failures or
                    delays. Oncquest Laboratories Limited will provide the
                    Services only in accordance with applicable laws and
                    government regulations.
                  </li>
                  <li>
                    Notwithstanding anything to the contrary contained herein,
                    User alone shall be liable for User’s dealings and
                    interaction with clients or diagnostic centres and
                    laboratories contacted or managed through the Website and
                    Oncquest Laboratories Limited shall have no liability or
                    responsibility in this regard. Oncquest Laboratories Limited
                    does not guarantee or make any representation with respect
                    to the correctness, completeness, or accuracy of the
                    information or details provided by such client, diagnostic
                    centre, or any third party through the Website. The Services
                    should not be used for emergency appointment purposes.
                  </li>
                  <li>
                    Oncquest Laboratories Limited may, at its sole discretion,
                    suspend the User’s ability to use or access the Website at
                    any time while Oncquest Laboratories Limited investigates
                    complaints or alleged violations of these Terms of Use, or
                    for any other reason. Oncquest Laboratories Limited has the
                    right to edit profiles of diagnostic centres to make them
                    more suitable for Package searches on the Website. If Users
                    find any wrong information on the Website concerning such
                    Users, they can correct it themselves or contact Oncquest
                    Laboratories Limited at <a href="mailto:life@oncquestlabs.com" target="_blank">life@oncquestlabs.com
                    </a>{" "}
                    immediately for such corrections. Oncquest Laboratories
                    Limited shall have no liability or responsibility in this
                    regard.
                  </li>
                  <li>
                    User shall be bound by the terms and conditions of this
                    Agreement. Any violation of the same gives the right to the
                    company to take appropriate action against the user.
                  </li>
                  <li>
                    Shipping and delivery of reports: Oncquest Laboratories
                    Limited provides you with the best-in-class experience at
                    every step of the way. We assure you that all due
                    precautions are taken so that your report reaches you
                    intact.
                  </li>
                  <li>
                    Estimated Sample collection time and Report Generation
                    Time:-
                    <p className="numberUtil text-left">
                      <b>1.</b> Your sample collection will typically be done on
                      the chosen date and time. If not, you can always
                      reschedule to another available date and available time
                      slot.{" "}
                    </p>
                    <p className="numberUtil text-left">
                      2. Sometimes, sample collection may take longer due to bad
                      weather, political disruptions, government orders, and
                      other unforeseen circumstances. In such cases, we will
                      proactively reach out to you. Please check your emails and
                      SMS regularly for such updates.
                    </p>
                    <p className="numberUtil text-left">
                      3. Report for a test will be generated within the
                      specified TAT (Turn Around Time) applicable against the
                      test within 24 hours, and a soft copy will be sent to you
                      for the same from our end. However, sometimes, some
                      tests/culture tests may take more time, in which case your
                      report will be sent when your test results are ready and
                      after we receive it. You hereby agree to the delay that
                      may be caused in providing the reports.
                    </p>
                    <p className="numberUtil text-left">
                      4. With regard to the B2B services provided by the Company
                      to the Users of the other business entity, the User hereby
                      provides his/her consent to the Company to share the
                      Diagnostic Medical Report of the User, including but not
                      limited to the report regarding the HIV test, with the
                      said business entity. However, the business entity is
                      entitled to collect, process, and treat the said report of
                      its Users in compliance with the provisions of the
                      Information Technology Act, 2000 and the Information
                      Technology (Reasonable Security and Procedures and
                      Sensitive Personal Data or Information) Rules, 2011 or any
                      other applicable data protection laws". Furthermore, with
                      regard to the HIV report of the User, the role of Oncquest
                      Laboratories Limited is only limited to conducting the
                      tests. All the other responsibilities shall lie with the
                      Business entity only.
                    </p>
                    <p className="numberUtil text-left">
                      {" "}
                      5. You hereby give your consent to share your Diagnostic
                      medical report with the concerned employer/business entity
                      which is dealing with us on your behalf unless specified
                      otherwise.
                    </p>
                  </li>
                  <li>
                    Oncquest Laboratories Limited reserves the right to activate
                    or deactivate any offers and promotions on the service
                    provided at any time.
                  </li>
                  <li>
                    You agree that we may send you text notifications and
                    marketing offers. You acknowledge that consent is not a
                    condition for any purchase.
                  </li>
                  <li>
                    Dear Customer, we are pleased about your signup with
                    Oncquest Laboratories Limited today. By entering your phone
                    number you agree that we may send you text notifications,
                    text marketing offers, and health check-up reminders. By
                    signing up you provide your consent to receive communication
                    from Oncquest Laboratories Limited.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    2. Non-transferable right to use the Services
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    Your right to use the Services is not transferable. Any
                    password or right given to you to obtain information or
                    documents from the Website is not transferable. Oncquest
                    Laboratories Limited may freely transfer, assign or delegate
                    all or any part of this Terms of Use, and any rights and
                    duties hereunder. These Terms of Use will be binding upon
                    and inure to the benefit of the heirs, successors, and
                    permitted assignees of the parties.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">3. Payment, Fees, and Taxes</h6>
                </div>
                <ul className="policy">
                  <li>
                    The User agrees to pay all Package fees, consulting fees and
                    other fees applicable to the User’s use of Services and the
                    User shall not circumvent the fee structure. The fee is
                    dependent on the Package that the User purchases and not on
                    actual usage of the Services
                  </li>
                  <li>
                    Each User/member is solely responsible for payment of all
                    taxes, legal compliances, statutory registrations, and
                    reporting. Oncquest Laboratories Limited is in no way
                    responsible for any of the taxes except for its income tax.
                  </li>
                  <li>
                    The fees could be paid online through the facility made on
                    the Website. Third parties support and services are required
                    to process online fee payments. Oncquest Laboratories
                    Limited is not responsible for any loss or damage caused to
                    the User during this process as these third parties are
                    beyond the control of Oncquest Laboratories Limited. The
                    fees could also be paid offline and be either collected
                    personally from the User.
                  </li>
                  <li>All fees are exclusive of applicable taxes.</li>
                  <li>
                    Oncquest Laboratories Limited reserves the right to modify
                    the fee structure by updating the fee structure on the
                    Website which shall be considered as valid and agreed
                    communication.
                  </li>
                  <li>
                    In order to process the payments, Oncquest Laboratories
                    Limited might require details of the User’s bank account,
                    credit card number, etc.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    4. Cancellation and Refund Policy
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    Oncquest Laboratories Limited reserves the right to
                    reschedule or cancel an appointment without any prior
                    notice. The time provided for consultation or conducting the
                    test is indicative and the actual time for availing of the
                    Services may change depending on the availability of the
                    phlebotomists. The user/customer can reschedule or cancel
                    the service.
                  </li>
                  <li>
                    In case of cancellation or non-confirmation of the
                    appointment by Oncquest Laboratories Limiteddue to any
                    reason, the user/customer may ask for rescheduling the
                    appointment within the next 7 working days15 (fifteen) days
                    and if the user/customer fails to reschedule the appointment
                    within the next 7 working days 15 (fifteen) days, then such
                    user/customer will not be entitled to any refund or
                    cancellation of the payment as may be made to Oncquest
                    Laboratories Limited.
                  </li>
                  <li>
                    No refund request will be entertained given after 7 (Seven)
                    days15 (fifteen) days from the day the payment is made to
                    the company. However, in case a written request for a refund
                    reaches the company within 15 7(Seven)(fifteen) days, the
                    entire amount paid (without interest-subject to a deduction
                    of INR _____/- (Indian Rupees________________________)
                    towards administrative charges) will be credited for any
                    further purchase of similar or exceeding amount within a
                    maximum of 30 (thirty) days from date of cancellation. • The
                    stated amount due for refund shall be processed within 15
                    (fifteen) business working days from the date of the
                    cancellation, subject to all terms and conditions being met
                    successfully. In case of cash payment, the money will be
                    transferred through Bank a/c NEFT or Cheque.
                  </li>
                  <li>
                    Oncquest Laboratories Limited shall not be responsible in
                    any manner for any inconvenience or loss caused to the user
                    as a result of such rescheduling or cancellation. Further
                    Oncquest Laboratories Limited reserves the right to refuse
                    Service at any time without providing any reasons.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    5. Collection, Use, Storage, and Transfer of Personal
                    Information
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    Our Website may include pages that give you the opportunity
                    to provide us with Personal Information about yourself which
                    shall be dealt with as per the Privacy Policy of the
                    Company. Further, You agree to the following:
                    <p className="numberUtil text-left">
                      1. Collection and Delivery are dependent on various
                      technical and quality parameters. Oncquest Laboratories
                      Limited assumes no liability towards any time delay caused
                      on account of the above factors necessary for review,
                      analysis reporting, and third-party service delay outside
                      of our control. Oncquest Laboratories Limited does not
                      provide medical advice and services offered must not be
                      considered as a substitute for professional medical
                      advice, diagnosis, or treatment. Do not disregard, delay
                      or avoid obtaining medical advice from a qualified medical
                      and health care professional. Please correlate clinically.
                    </p>
                    <p className="numberUtil text-left">
                      2. Oncquest Laboratories Limited shall not be responsible
                      in any manner for the authenticity of the personal
                      information or sensitive personal data or information
                      supplied by the User to Oncquest Laboratories Limited or
                      any other person acting on behalf of Oncquest Laboratories
                      Limited.
                    </p>
                    <p className="numberUtil text-left">
                      3. The User is responsible for maintaining the
                      confidentiality of the User’s account access information
                      and password and restricting any unauthorized access and
                      use of Services through the Website. The User shall be
                      responsible for all uses of the User’s account and
                      password, whether or not authorized by the User. The User
                      shall immediately notify Oncquest Laboratories Limited of
                      any actual or suspected unauthorized use of the User’s
                      account or password.
                    </p>
                    <p className="numberUtil text-left">
                      4. If a User provides any information that is false,
                      inaccurate, not current or incomplete (or becomes false,
                      inaccurate, not current or incomplete), or Oncquest
                      Laboratories Limited has reasonable grounds to suspect
                      that such information is false, inaccurate, not current or
                      incomplete, Oncquest Laboratories Limited has the right to
                      suspend or terminate such account at its sole discretion.
                    </p>
                    <p className="numberUtil text-left">
                      5. The User does hereby authorize Oncquest Laboratories
                      Limited and its officials to collect the electronic copy
                      of the report from the Diagnostic Centre/ Labs and provide
                      the same to the User.
                    </p>
                    <p className="numberUtil text-left">
                      6. By Subscribing to Healthy Updates on the website/app of
                      Oncquest Laboratories Limited by inputting the email id of
                      the user, the User gives Oncquest Laboratories Limited
                      permission/ consent to communicate via email for relevant
                      and related commercial emails. Oncquest Laboratories
                      Limited may use email addresses to periodically send
                      promotional emails from Oncquest Laboratories Limited
                      about products and services, offers, or updates relating
                      to recent developments in our services that may be
                      relevant and/or updates regarding the tests reports, etc.
                      If a User does not wish to receive such emails, please
                      advise us and we will immediately unsubscribe that person
                      from such emails.
                    </p>
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">6. Prohibited actions:</h6>
                </div>
                <ul className="policy">
                  <li>
                    The User is prohibited from:
                    <ul className="policy policynested">
                      <li>
                        Violating or attempting to violate the integrity or
                        security of the Website or any Oncquest Laboratories
                        LimitedContent;
                      </li>
                      <li>
                        Transmitting any information (including job posts,
                        messages, and hyperlinks) on or through the Website that
                        is disruptive or competitive to the provision of
                        Services by Oncquest Laboratories Limited;
                      </li>
                      <li>
                        Intentionally submitting on the Website any incomplete,
                        false, or inaccurate information;
                      </li>
                      <li>
                        Making any unsolicited communications to other Users;
                      </li>
                      <li>
                        Using any engine, software, tool, agent, or other device
                        or mechanism (such as spiders, robots, avatars, or
                        intelligent agents) to navigate or search the Website;
                      </li>
                      <li>
                        Attempting to decipher, decompile, disassemble, or
                        reverse engineer any part of the Website;
                      </li>
                      <li>
                        Copying or duplicating in any manner any of the Oncquest
                        Laboratories LimitedContent or other information
                        available on the Website;
                      </li>
                      <li>
                        Conducting any systematic or automated data collection
                        activities including without limitation scraping, data
                        mining, data extraction, and data harvesting on or in
                        relation to our website Services without the written
                        consent of Oncquest;
                      </li>
                      <li>
                        Violating any local, state, national, or international
                        law;
                      </li>
                      <li>
                        Using the website in a way that interferes, disrupts, or
                        hampers with the proper functioning of the website;
                      </li>
                      <li>
                        To gain or attempt to gain unauthorized access (other
                        than through the interface that is provided by the
                        Website) to our website and/or Services;
                      </li>
                      <li>
                        To interfere with or disrupt the integrity, security, or
                        performance of our Services;
                      </li>
                      <li>
                        To create accounts for our Services through unauthorized
                        or automated means;
                      </li>
                      <li>
                        Framing or hotlinking or deep linking any Oncquest
                        Laboratories LimitedContent;
                      </li>
                      <li>
                        Posting materials to any of the Website’s social media
                        pages or otherwise on social media, that are unlawful,
                        fraudulent, libelous, slanderous, defamatory, abusive,
                        harassing, threatening, obscene, or infringing on the
                        rights of any third-party, including without limitation
                        intellectual property, privacy/confidentiality or
                        publicity rights;
                      </li>
                      <li>
                        Posting information/materials to any of the social media
                        pages or otherwise on social media concerning Oncquest
                        Laboratories Limited that is unlawful, fraudulent,
                        libelous, slanderous, defamatory, abusive, harassing,
                        threatening, obscene, or infringing on the rights of
                        Oncquest Laboratories Limited, including without
                        limitation intellectual property,
                        privacy/confidentiality or publicity rights;
                      </li>
                      <li>
                        Oncquest Laboratories Limited does not permit any of
                        these practices and reserves the right to immediately
                        remove content within its sole discretion. Oncquest
                        Laboratories Limited further reserves the right to block
                        or otherwise prohibit the user/customer from accessing
                        or using Website, Website’s social media pages, or
                        application;
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">7. Liability</h6>
                </div>
                <ul className="policy">
                  <li>
                    Oncquest Laboratories Limited shall not be responsible or
                    liable in any manner to the Users for any losses, damage,
                    injuries, or expenses incurred by the Users as a result of
                    any disclosures made by Oncquest Laboratories Limited, where
                    the User has consented to the making of disclosures by
                    Oncquest Laboratories Limited. The User further shall not
                    hold Oncquest Laboratories Limited responsible or liable in
                    any way for any disclosures by Oncquest Laboratories Limited
                    in as much as it is in compliance with applicable laws and
                    as per the Privacy Policy.
                  </li>
                  <li>
                    The Services provided by Oncquest Laboratories Limited or
                    any of its licensors or providers are provided "as is," as
                    available, and without any warranties or conditions (express
                    or implied, including the implied warranties of
                    merchantability, accuracy, fitness for a particular purpose,
                    title and non-infringement, arising by statute or otherwise
                    in law or from a course of dealing or usage or trade).
                    Oncquest Laboratories Limited does not provide or make any
                    representation, warranty, or guarantee, express or implied,
                    about the Website or the Services. Oncquest Laboratories
                    Limited does not verify any content or information provided
                    by the Users/ diagnostic centres on the Website and to the
                    fullest extent permitted by law, disclaims all liability
                    arising out of the User’s use or reliance upon the Website,
                    the Services, the Oncquest Laboratories LimitedContent,
                    representations and warranties made by the Users/ diagnostic
                    centres or the content or information provided by such
                    Users/ diagnostic centres on the Website or any loss arising
                    out of the manner in which the Services have been rendered.
                    The information via the Services is for general information
                    purposes only and does not constitute advice, medical, or
                    otherwise.
                  </li>
                  <li>
                    The Website may be linked to the website of third parties,
                    affiliates, and business partners. Oncquest Laboratories
                    Limited has no control over and is not liable or responsible
                    for the content, accuracy, validity, reliability, and
                    quality of such websites or made available by/through our
                    Website. The inclusion of any link on the Website does not
                    imply that Oncquest Laboratories Limited endorses the linked
                    site. Users may use the links and these services at User’s
                    own risk.
                  </li>
                  <li>
                    We are not responsible for any charges or fees associated
                    with financial transactions that occur on or through
                    third-party websites. We encourage you to read the privacy
                    statements of each and every website that collects
                    personally identifiable information.
                  </li>
                  <li>
                    Oncquest Laboratories Limited shall not be responsible for
                    the mishaps/missed services due to no service/no show from
                    the lab for sample collection; Oncquest Laboratories Limited
                    shall not be responsible for any error in the sample
                    collection and/ or reports generated by the Labs/ Diagnostic
                    Centres.
                  </li>
                  <li>
                    Oncquest Laboratories Limited assumes no responsibility, and
                    shall not be liable for, any damages to, or viruses that may
                    infect User’s equipment on account of User’s access to, use
                    of, or browsing the Website, or the downloading of any
                    material, data, text, images, video content, or audio
                    content from the Website. If a User is dissatisfied with the
                    Website, the User’s sole remedy is to discontinue using the
                    Website.
                  </li>
                  <li>
                    In no event, including but not limited to negligence, shall
                    Oncquest Laboratories Limited, or any of its directors,
                    officers, employees, agents, or content or service providers
                    (collectively, the "protected entities") be liable for any
                    direct, indirect, special, incidental, consequential,
                    exemplary or punitive damages arising from, or directly or
                    indirectly related to the use of, or the inability to use,
                    the Website or the content, materials, and functions related
                    thereto, User’s provision of information via the Website,
                    lost business or lost sales, even if such protected entity
                    has been advised of the possibility of such damages. In no
                    event shall the protected entities be liable for the
                    provision of or failure to provide all or any service by a
                    User/ diagnostic centre to any User/ client. In no event
                    shall the protected entities be liable for or in connection
                    with any content posted, transmitted, exchanged, or received
                    by or on behalf of any User or other person on or through
                    the Website. In no event shall the total aggregate liability
                    of the protected entities to a User for all damages, losses,
                    and causes of action (whether in contract or tort,
                    including, but not limited to, negligence or otherwise)
                    arising from the terms and conditions or a User’s use of the
                    Website exceed, in the aggregate INR. 1,000/-.
                  </li>
                  <li>
                    In no event shall the protected entities be liable for
                    failure on the part of the diagnostic centres to provide
                    agreed services or to make provisions for the carrying out
                    of the Services. In no event shall the protected entities be
                    liable for any comments or feedback given by any of the
                    Users in relation to the services provided by any diagnostic
                    centres.
                  </li>
                  <li>
                    The listing of diagnostic centres on the Website is based on
                    numerous factors including User’s comments and feedback. In
                    no event shall the protected entities be liable or
                    responsible for the listing order of diagnostic centres on
                    the Website.
                  </li>
                  <li>
                    Furthermore, the use of the website may take the user to
                    links to websites, Applications, or mobile Applications on
                    the Internet which are owned and operated by third parties.
                    The user agrees that we are not liable or responsible for
                    the content of the third-party applications.
                  </li>
                  <li>
                    User further agrees that by using the website or related
                    Services, the user may be exposed to content from other
                    Users or Third Parties that the user may consider offensive,
                    indecent, or otherwise objectionable. We shall not be liable
                    for such content on the website. Further, users may report
                    such offensive content.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">8. Indemnity</h6>
                </div>
                <ul className="policy">
                  <li>
                    User agrees to indemnify and hold harmless Oncquest
                    Laboratories Limited, its affiliates, officers, directors,
                    employees, consultants, licensors, agents, and
                    representatives from any and all third-party claims, losses,
                    liability, damages, and/or costs (including reasonable
                    attorney fees and costs) arising from his/her/its access to
                    or use of Website, violation of this Terms of Use, or
                    infringement by a user of any intellectual property or other
                    rights of Oncquest Laboratories Limited or any person or
                    entity. Oncquest Laboratories Limited will notify you
                    promptly of any such claim, loss, liability, or demand, and
                    in addition to your foregoing obligations, you agree to
                    provide us with reasonable assistance, at your expense, in
                    defending any such claim, loss, liability, damage, or cost.
                    The obligation to indemnify shall be effective and shall
                    extend to all such claims or losses in their entirety. This
                    shall further include any third-party claims made against
                    Oncquest Laboratories Limited in respect of any infringement
                    of the Terms of Use or claims made on account of any
                    negligence, default, or breach by you arising out of or in
                    respect of the performance of these Terms of Use.
                  </li>
                  <li>
                    Further, under no circumstances, the Oncquest Laboratories
                    Limited shall be liable for any defamatory, offensive, or
                    illegal conduct of any user/customer. If any user/customer
                    is dissatisfied with any of the services provided by the
                    diagnostic labs, the user/customer may approach such
                    diagnostic lab and/or discontinue using the Website and the
                    services provided/listed on the Website.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    9. Term, Termination, and Disputes
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    These Terms and Conditions of Use/Agreement will remain in
                    full force and effect while the User is a user of the
                    Website in any form or capacity.
                  </li>
                  <li>
                    Oncquest Laboratories Limited reserves the right to
                    terminate the access to the Website and account of the user,
                    in case, including but not limited to:
                    <p className="numberUtil text-left">
                      {" "}
                      1. A User breaches any terms and conditions of this
                      Agreement
                    </p>
                    <p className="numberUtil text-left">
                      {" "}
                      2. Oncquest Laboratories Limited is unable to verify or
                      authenticate any information provided to Oncquest
                      Laboratories Limitedby a User; or
                    </p>
                    <p className="numberUtil text-left">
                      3. Oncquest Laboratories Limited believes in its sole
                      discretion that the User’s actions may cause legal
                      liability for such User, other Users, or for Oncquest
                      Laboratories Limited or are contrary to the interests of
                      the Website.
                    </p>
                  </li>
                  <li>
                    Further, Oncquest Laboratories Limited reserves the right to
                    suspend, restrict or terminate the profile/account of the
                    user on the website without stating any reasons whatsoever.
                    Similarly, the users may remove its account from the
                    app/website at any time. Without prejudice, the termination
                    of this agreement for any cause shall not release the user
                    from any liability/claim, which at the time of termination
                    has already accrued to it or which thereafter may accrue in
                    respect of any act or omission prior to such termination or
                    which has accrued in consequence of this clause. On
                    termination of an account due to the reasons mentioned
                    herein, such User shall no longer have access to data,
                    messages, files, and other material kept on the Website by
                    such User. The User shall ensure that he/she/it has
                    continuous backup of the Services the User has rendered in
                    order to comply with his/her/its record-keeping process and
                    practices.
                  </li>
                  <li>
                    Oncquest Laboratories Limited reserves the right, at its
                    sole discretion, to pursue all of its legal remedies,
                    including but not limited to deletion of the User’s content
                    from the Website with or without the ability to access the
                    Website and the other Services, upon any breach by the User
                    of these Terms and Conditions of Use/Agreement or if
                    Oncquest Laboratories Limited is unable to verify or
                    authenticate any information the User submits to Oncquest
                    Laboratories Limited, or if the User fails to provide (or
                    after providing such consent, later revokes) the consents
                    necessary or desirable for Oncquest Laboratories Limited to
                    provide the Services to the User.
                  </li>
                  <li>
                    These binding Terms of Use and any contractual obligation
                    between Oncquest Laboratories Limited and the User will be
                    governed by the laws of India.
                  </li>
                  <li>
                    All disputes related to this Agreement will be subject to
                    arbitration in New Delhi in English [by an independent sole
                    arbitrator (who shall be a retired judge/judicial officer),
                    to be appointed by Oncquest Laboratories Limited] in
                    accordance with the provisions of the Arbitration and
                    Conciliation Act, 1996 (as amended). Subject to arbitration,
                    the jurisdictional courts at New Delhi shall be entitled to
                    grant interim relief/injunction.
                  </li>
                  <li>
                    Even after termination, the terms of this Agreement shall
                    survive such termination of your profile/account including
                    without limitation, obligations mentioned under Covenants,
                    Liability, Indemnity, Intellectual Property, Dispute
                    Resolution will continue and survive termination.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    10. Severability & Waiver Contact Information
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    If any provision of this Terms of Use is held to be invalid
                    or unenforceable, such provision shall be struck and the
                    remaining provisions shall be enforced. The failure of
                    either Party to act in the event of a breach of this
                    Agreement by the other shall not be deemed a waiver of such
                    breach or a waiver of future breaches unless such waiver
                    shall be in writing and signed by the Party against whom
                    enforcement is sought.
                  </li>
                  <li>
                    We Do Not Provide Medical Advice: The information that you
                    obtain or receive from Oncquest Laboratories Limited, and
                    its employees, contractors, partners, sponsors, advertisers,
                    licensors, or otherwise on the Website is for informational
                    and scheduling purposes only. THE INFORMATION PROVIDED ON
                    THE WEBSITE IS NOT INTENDED AS A SUBSTITUTE FOR, NOR DOES IT
                    REPLACE, PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR
                    TREATMENT. DO NOT DISREGARD, AVOID OR DELAY OBTAINING
                    MEDICAL ADVICE FROM A QUALIFIED HEALTHCARE PROFESSIONAL
                    BECAUSE OF SOMETHING YOU MAY HAVE READ ON THE SITE. DO NOT
                    USE THE SITE FOR EMERGENCY MEDICAL NEEDS. YOUR USE OF
                    INFORMATION PROVIDED ON THE WEBSITE IS SOLELY AT YOUR OWN
                    RISK. NOTHING STATED OR POSTED ON THE SITE OR AVAILABLE
                    THROUGH ANY SERVICES IS INTENDED TO BE, AND MUST NOT BE
                    TAKEN TO BE, THE PRACTICE OF MEDICINE OR THE PROVISION OF
                    MEDICAL CARE. We do not recommend or endorse any specific
                    tests, physicians, procedures, opinions, or other
                    information that may appear on the Site. If you rely on any
                    of the information provided by the Website, you do so solely
                    at your own risk.
                  </li>
                  <li>
                    No Doctor-Patient Relationship: NO LICENSED MEDICAL
                    PROFESSIONAL/PATIENT RELATIONSHIP IS CREATED BY USING
                    INFORMATION PROVIDED BY OR THROUGH THE USE OF THE WEBSITE
                    INCLUDING, BUT NOT LIMITED TO, THE FIND A TEST FEATURE,
                    LINKS TO OTHER SITES OR ANY ASSISTANCE WE MAY PROVIDE TO
                    HELP YOU FIND AN APPROPRIATE MEDICAL PROFESSIONAL/DIAGNOSTIC
                    CENTER OR SPECIALIST IN ANY FIELD CONDUCTING TEST. WE MAKE
                    NO GUARANTEES, REPRESENTATIONS, OR WARRANTIES, WHETHER
                    EXPRESSED OR IMPLIED, WITH RESPECT TO PROFESSIONAL
                    QUALIFICATIONS, EXPERTISE, QUALITY OF WORK, OR OTHER
                    INFORMATION HEREIN. FURTHER, WE DO NOT IN ANY WAY ENDORSE
                    ANY INDIVIDUAL DESCRIBED HEREIN. IN NO EVENT SHALL WE BE
                    LIABLE TO YOU OR ANYONE ELSE FOR ANY DECISION MADE OR ACTION
                    TAKEN BY YOU IN RELIANCE ON SUCH INFORMATION. We have no
                    control over, and cannot guarantee the availability of any
                    diagnostic centre at any particular time. We will not be
                    liable for cancelled or otherwise unfulfilled appointments
                    or any injury resulting therefrom, or for any other injury
                    resulting from the use of the Website or Services
                    whatsoever. You are strongly advised to perform your own
                    investigation prior to selecting a health care diagnostic
                    centre by making confirming telephone calls to the relevant
                    diagnostic centre. Any kind of engagement with the third
                    parties including with the diagnostic centre would be on a
                    principal-to-principal basis in your best judgement.
                  </li>
                  <li>
                    We do not represent or warrant that the content or
                    information provided or made available via our Services is
                    accurate, complete, or current, that our services will be
                    uninterrupted or error-free, or that any defects in our
                    Services will be corrected, or that our Services or the
                    server that makes our Services available are free of viruses
                    or any other harmful components. We do not make any
                    warrantees or representations regarding the use of the
                    materials in our Services in terms of their correctness,
                    accuracy, adequacy, usefulness, timeliness, reliability, or
                    otherwise, in each case to the fullest extent permitted by
                    applicable law. Information published or made available via
                    our Services may refer to products, programs, or services
                    that are not available in your region. You understand and
                    acknowledge that your sole and exclusive remedy with respect
                    to any defect in or dissatisfaction with our services is to
                    cease the use of our Services. We reserve the right to
                    suspend or withdraw the whole or any part of our Services at
                    any time without notice and without incurring any liability.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">
                    11. Right to Modify Terms of Service
                  </h6>
                </div>
                <ul className="policy">
                  <li>
                    Oncquest Laboratories Limited reserves the right to revise
                    and update these Terms of Use and the Privacy Policy at any
                    time without notifying you. As such, please periodically
                    review these Terms of Use, our Privacy Policy, and any other
                    policies that may be posted on this Website, each of which
                    are accessible via the Website homepage. Continued usage of
                    our Services will be considered acceptance of any changes.
                    The User agrees that, during the period of this Agreement,
                    we may revise the Terms and Conditions, and change the
                    services provided under this Agreement. Any such revision or
                    change will be binding and effective immediately on release
                    of the revised Agreement or change to the Service(s) on our
                    website. Unless we expressly notify you otherwise, these
                    terms incorporate and supersede any other terms associated
                    with the Services.
                  </li>
                  <li>
                    Oncquest Laboratories Limited has the right to discontinue
                    service or deny access to anyone who violates our policies
                    or the terms and conditions stated herein, without prior
                    notice or warning.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">12. Governing Law</h6>
                </div>
                <ul className="policy">
                  <li>
                    This Privacy Policy and Terms of Use shall be governed by
                    and constructed in accordance with the laws of India only
                    without reference to conflict of laws principles and
                    disputes arising in relation hereto.
                  </li>
                  <li>
                    A printed version of these Terms and Conditions of
                    Use/Agreement and any notice given in electronic form shall
                    be admissible in judicial or administrative proceedings
                    based upon or relating to these Terms and Conditions of
                    Use/Agreement to the same extent and subject to the same
                    conditions as other business documents and records
                    originally generated and maintained in printed form.
                  </li>
                </ul>
                <div className="boxtermsutil text-left">
                  <h6 className="text-dark">13. Entire Agreement</h6>
                </div>
                <ul className="policy">
                  <li>
                    These Terms of Use, together with the Privacy Policy, and
                    any other terms of use/policy posted at Oncquest
                    Laboratories Limitedweb portal and other applications,
                    represent the complete agreement between you and Oncquest
                    Laboratories Limited concerning the subject matter hereof,
                    and it replaces all prior oral or written communications (if
                    any) concerning such subject matter.
                  </li>
                  <li>
                    Your booking of the service and details provided therein
                    shall stand deemed confirmed unless a change is updated to
                    Oncquest Laboratories Limited. Acceptance of our service is
                    deemed acceptance of our terms of use and privacy policy.
                    Please review our terms of use and privacy policy available
                    at our website:
                    <a href="https://oncquestlabs.com" target="_blank">
                      www.oncquestlabs.com.
                    </a>
                  </li>
                  <li>
                    Any rights not expressly granted herein by Oncquest
                    Laboratories Limited are reserved by Oncquest Laboratories
                    Limited.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </React.Fragment>
  );
};
export const getServerSideProps= async ({locale}:{locale:string}) => {
    let Slug = ROUTE.TERMSCONDITION?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default TermsAndConditon;
