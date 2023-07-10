import { useDisclosure } from "@/hooks/disclosure";
import { FC } from "react";
import MenuButton from "../ui/MenuButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Message } from "@/models/message";
import { object, string } from "yup";
import { messagesCol } from "@/database/client";
import { addDoc } from "firebase/firestore";
import { useSnackbar } from "@/contexts/snackbar-context";

const ContactButton: FC = () => {
  const { isOpen, close, open } = useDisclosure(false);
  const { openSnackbar } = useSnackbar();

  const formik = useFormik<Message>({
    initialValues: {
      email: "",
      text: "",
    },
    validationSchema: object({
      email: string()
        .email("Email must be valid.")
        .required("Email is required."),
      text: string().required("Message is required."),
    }),
    onSubmit: (values) => {
      addDoc(messagesCol(), values)
        .then(() => {
          openSnackbar(
            "success",
            "Message sent successfully. Please wait for a reply."
          );
          clearForm();
        })
        .catch(() => {
          openSnackbar(
            "error",
            "Message failed to send. Please try again later."
          );
          clearForm();
        });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const clearForm = () => {
    formik.setSubmitting(false);
    formik.resetForm();
    close();
  };

  return (
    <>
      <MenuButton onClick={open}>Contact</MenuButton>
      <Dialog fullWidth open={isOpen} onClose={close}>
        <DialogTitle>You can leave a message here.</DialogTitle>

        <DialogContent>
          <Stack component="form">
            <TextField
              required
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              disabled={formik.isSubmitting}
              label="Email"
              variant="outlined"
            />
            <TextField
              required
              {...formik.getFieldProps("text")}
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={formik.touched.text && formik.errors.text}
              margin="normal"
              disabled={formik.isSubmitting}
              rows={4}
              multiline
              label="Message"
              variant="outlined"
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button disabled={formik.isSubmitting} onClick={close}>
            Close
          </Button>
          <Button disabled={formik.isSubmitting} onClick={formik.submitForm}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactButton;
