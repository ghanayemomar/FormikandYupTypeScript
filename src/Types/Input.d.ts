export namespace Formik {
    type initalValues = {
        email: string,
        age: null | number,
        password: string,
        confirmPassword: string,
        acceptTerms: boolean,
        selectGender: "Male" | "Female" | "Others" | null,
        favDate: string | Date | null
    }
}