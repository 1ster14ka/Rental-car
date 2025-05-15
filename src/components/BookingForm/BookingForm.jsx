import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .max(20, "Name can't exceed 20 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  date: Yup.date()
    .nullable()
    .min(new Date(), "Please select a date in the future")
    .required("Booking date is required"),
  comment: Yup.string()
    .min(5, "Comment must be at least 5 characters")
    .max(50, "Comment can't exceed 50 characters"),
});

const initialValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};
const BookingForm = () => {
  function handleSubmit(values, actions) {
    iziToast.show({
      message: `<span style="margin-right: 8px;">✔</span> Successfully booked!`,
      color: "green",
      position: "topCenter",
      timeout: 3000,
      width: "700px",
    });
    actions.resetForm();
  }
  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.spanErr}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.spanErr}
            />

            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              placeholderText="Booking date"
              className={css.input}
            />
            {errors.date && touched.date && (
              <span className={css.spanErr}>{errors.date}</span>
            )}
            <Field
              as="textarea"
              name="comment"
              col="20"
              row="3"
              placeholder="Comment"
              className={css.input}
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={css.spanErr}
            />

            <button type="submit" className={css.btnSubmit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
