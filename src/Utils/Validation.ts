import * as Yup from 'yup';
export const email = (data: any) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data
    );
export const password = (data: any) => /^(?=.*\d).{6,20}$/.test(data);
export const validateSubmitForm = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    // Email: Yup.string()
    //     .required("Email is required")
    //     .email("Invalid Email address"),
    // CityId: Yup.string()
    //     .required("City is required"),
    // Message: Yup.string()
    //     .required("Message is required")
    //     .min(10, 'Min 10 character required')
})
export const DoctorEnquiryform = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    Email: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"),
    Message: Yup.string()
        .required("Message is required")
        .min(10, 'Min 10 character required')
})
export const validateBookingEnquiry = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    Gender: Yup.string()
        .required("Gender is required"),
    /* DOB: Yup.string().nullable().default(null)
        .required("DOB is required"), */
    Address: Yup.string()
            .required("Address is required")
            .min(4, 'Min 4 character required')
})
export const validateUploadPrescription = Yup.object().shape({
    FirstName: Yup.string()
        .required("First Name is required")
        .min(2, 'Min 2 character required'),
   /*  LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    CityId: Yup.string()
        .required("City is required"),
    Gender: Yup.string()
        .required("Gender is required"),
    /* Address: Yup.string()
        .required("Address is required")
        .min(4, 'Min 4 character required') */
})
/* export const sendOtpValidation = Yup.object().shape({
    MobileNo: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit')
}) */
export function sendOtpValidation(values: any) {
    var errors: { [k: string]: any } = {};
    if (!values.MobileNo) {
        errors.MobileNo = "mNumber";
    } else if (values.hasOwnProperty("MobileNo") && values.MobileNo.length !== 10) {
        errors.MobileNo = "Enter only 10 Digit";
    }
    errors.isFormValid = values && Object.keys(values).length >= 1 && Object.keys(errors).length == 0;
    return errors;
}

export const validateJobApplyForm = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    Email: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"),
    JobId: Yup.string()
        .required("Postion is required"),
    CityId: Yup.string()
        .required("City is required"),
    Experience: Yup.string()
        .required("Experience is required"),
    /* OtherInformation: Yup.string()
        .required("OtherInformation is required")
        .min(10, 'Min 10 character required') */
})
export const validateAddPatient = Yup.object().shape({
    PatientFirstName: Yup.string()
        .required("First Name is required")
        .min(2, 'Min 2 character required'),
    /* PatientLastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */
    PatientMobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    PatientGender: Yup.string()
        .required("Gender is required"),
    /* PatientDob: Yup.string().nullable().default(null)
        .required("DOB is required"), */
    /* PatientRelation: Yup.string()
        .required("Relation is required"), */
    CustomerAddressLine1: Yup.string()
        .required("Address is required")
        .min(10, 'Min 10 character required'),
})

export const validateAddAddress = Yup.object().shape({
    CustomerName: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    CustomerEmail: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"),
    CustomerAddressLine1: Yup.string()
        .required("Address Line 1 is required")
        .min(4, 'Min 4 character required'),
    /* CustomerAddressLine2: Yup.string()
        .required("Address Line2 is required")
        .min(4, 'Min 4 character required'), */
    CustomerStateId: Yup.string()
        .required("State is required"),
    CustomerCityId: Yup.string()
        .required("City is required"),
    AddressTag: Yup.string()
        .required("Address Tag is required"),
    CustomerLocality: Yup.string()
        .required("Locality is required")
        .min(4, 'Min 4 character required'),
    CustomerPincode: Yup.string()
        .required("Pincode is required")
        .min(6, 'Enter only 6 Digit')
        .max(6, 'Enter only 6 Digit'),
})

export const validatePartner = Yup.object().shape({
    FirstName: Yup.string()
        .required("First Name is required")
        .min(2, 'Min 2 character required'),
    /* LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
   /*  EmailId: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"), */
    CityId: Yup.string()
        .required("City is required"),
    /* Address: Yup.string()
        .required("Address is required")
        .min(4, 'Min 4 character required') */
})
export const validateQuickLink = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    Message: Yup.string()
        .required("Message is required")
        .min(10, 'Min 10 character required')
})
export const validateGeneralEnquiry = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    CityId: Yup.string()
        .required("City is required"),
    Message: Yup.string()
        .required("Message is required")
        /* .min(10, 'Min 10 character required') */
})
export const validateHomeCollection = Yup.object().shape({
    FirstName: Yup.string()
        .required("First Name is required")
        .min(2, 'Min 2 character required'),
    /* LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'), */
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    /* EmailId: Yup.string()
        .required("Email is required")
        .email("Invalid Email address"), */
    CityId: Yup.string()
        .required("City is required"),
    // Address: Yup.string()
    //     .required("Address is required")
    //     .min(4, 'Min 4 character required'),
    PreferredDate: Yup.string().nullable().default(null)
        .required("Preferred Date is required"),
    PreferredTime: Yup.string()
        .required("Preferred Time is required"),
    // PackageId: Yup.string()
    //     .required("Package is required")
})
export const validateGurugramLab = Yup.object().shape({
    Name: Yup.string()
        .required("Name is required")
        .min(2, 'Min 2 character required'),
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    CityId: Yup.string()
        .required("City is required"),
})