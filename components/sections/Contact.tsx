import { FC } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { addDoc } from "firebase/firestore";
import { messagesCol } from "@/database/client";
import { Message } from "@/models/message";
import { useSnackbar } from "@/contexts/snackbar-context";
import { useLanguage } from "@/contexts/language-context";
import { ui } from "@/data/content";

const Contact: FC = () => {
  const { lang } = useLanguage();
  const { openSnackbar } = useSnackbar();

  const formik = useFormik<Message>({
    initialValues: {
      email: "",
      text: "",
    },
    validationSchema: object({
      email: string()
        .email(ui.contact.emailInvalid[lang])
        .required(ui.contact.emailRequired[lang]),
      text: string().required(ui.contact.messageRequired[lang]),
    }),
    onSubmit: (values, helpers) => {
      addDoc(messagesCol(), values)
        .then(() => {
          openSnackbar("success", ui.contact.success[lang]);
          helpers.resetForm();
        })
        .catch(() => {
          openSnackbar("error", ui.contact.error[lang]);
        })
        .finally(() => {
          helpers.setSubmitting(false);
        });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Box id="contact" component="section">
      <Typography
        color="text.secondary"
        fontSize="0.9rem"
        mb={1.5}
        component="h2"
        fontWeight={500}
      >
        {ui.contact.heading[lang]}
      </Typography>

      <Typography mb={3} maxWidth="36rem" lineHeight={1.7}>
        {ui.contact.subheading[lang]}
      </Typography>

      <Stack
        component="form"
        spacing={2.5}
        maxWidth="28rem"
        onSubmit={(e) => {
          e.preventDefault();
          formik.submitForm();
        }}
      >
        <TextField
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          disabled={formik.isSubmitting}
          label={ui.contact.email[lang]}
          type="email"
          variant="standard"
          fullWidth
        />
        <TextField
          required
          {...formik.getFieldProps("text")}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
          disabled={formik.isSubmitting}
          rows={4}
          multiline
          label={ui.contact.message[lang]}
          variant="standard"
          fullWidth
        />
        <Box>
          <Button
            type="submit"
            variant="outlined"
            color="inherit"
            size="small"
            disabled={formik.isSubmitting}
            sx={{
              borderColor: "divider",
              px: 2.5,
              "&:hover": { borderColor: "text.secondary" },
            }}
          >
            {formik.isSubmitting
              ? ui.contact.sending[lang]
              : ui.contact.send[lang]}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
