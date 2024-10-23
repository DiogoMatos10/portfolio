import "./ContactContent.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

function ContactContent() {
    const [t] = useTranslation("global");
    const [formStatus, setFormStatus] = useState("Send");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [agree, setAgree] = useState(false);

    const formRef = useRef(null);

    const validateForm = (e) => {
        e.preventDefault();
        let newErrors = { name: "", email: "", subject: "", message: "" };
        let isValid = true;

        const { name, email, subject, message } = e.target.elements;

        if (!name.value.trim()) {
            newErrors.name = "Required";
            isValid = false;
        }
        if (!email.value.trim()) {
            newErrors.email = "Required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            newErrors.email = "Invalid";
            isValid = false;
        }
        if (!subject.value.trim()) {
            newErrors.subject = "Required";
            isValid = false;
        }
        if (!message.value.trim()) {
            newErrors.message = "Required";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid && agree) {
            setFormStatus('Submitting');
            console.log({
                name: name.value,
                email: email.value,
                message: message.value,
            });
        }
    };

    return (
        <div className="contact-container">
            <p className="titles">{t("contact.title")}</p>
            <div className="links-icon">
                <abbr title="GitHub">
                    <Link className="github-icon" to={'https://github.com/DiogoMatos10'}>
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_211_51)">
                                <path d="M15 31.6667C6.66671 34.1667 6.66671 27.5 3.33337 26.6667M26.6667 36.6667V30.2167C26.7292 29.4219 26.6219 28.623 26.3517 27.873C26.0816 27.123 25.6549 26.439 25.1 25.8667C30.3334 25.2833 35.8334 23.3 35.8334 14.2C35.8329 11.873 34.9379 9.63533 33.3334 7.95C34.0931 5.91417 34.0394 3.66391 33.1834 1.66666C33.1834 1.66666 31.2167 1.08333 26.6667 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48337 1.66666 8.48337 1.66666C7.62733 3.66391 7.57361 5.91417 8.33337 7.95C6.71692 9.64783 5.82091 11.9058 5.83337 14.25C5.83337 23.2833 11.3334 25.2667 16.5667 25.9167C16.0184 26.4833 15.5955 27.159 15.3256 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167V36.6667"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_211_51">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </abbr>
                <abbr title="Linkedin">
                    <Link className="linkdin-icon" to={'https://www.linkedin.com/in/diogo-matos-72b387274'}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6667 13.3333C29.3189 13.3333 31.8624 14.3869 33.7378 16.2622C35.6131 18.1376 36.6667 20.6811 36.6667 23.3333V35H30V23.3333C30 22.4493 29.6489 21.6014 29.0237 20.9763C28.3986 20.3512 27.5508 20 26.6667 20C25.7827 20 24.9348 20.3512 24.3097 20.9763C23.6846 21.6014 23.3334 22.4493 23.3334 23.3333V35H16.6667V23.3333C16.6667 20.6811 17.7203 18.1376 19.5956 16.2622C21.471 14.3869 24.0145 13.3333 26.6667 13.3333Z"
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 15H3.33337V35H10V15Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66671 9.99998C8.50766 9.99998 10 8.5076 10 6.66665C10 4.8257 8.50766 3.33331 6.66671 3.33331C4.82576 3.33331 3.33337 4.8257 3.33337 6.66665C3.33337 8.5076 4.82576 9.99998 6.66671 9.99998Z"
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </abbr>
            </div>
            <form onSubmit={validateForm} noValidate ref={formRef}>
                <div className="form-left">
                    <div className="form-group">
                        <TextField
                            autoComplete="off"
                            id="outlined-name"
                            name="name"
                            label={t("contact.fname")}
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name}
                            fullWidth
                            InputProps={{
                                autoComplete: "new-name", 
                                sx: {
                                    color: "#D3ECEC",
                                    "&::placeholder": { color: "var(--text-color)" } // Cor do placeholder
                                }

                            }}
                            sx={{
                                "& label": { color: "var(--text-color)" }, // Cor da label padrão
                                "& label.Mui-focused": { color: "var(--hover-color)" }, // Cor da label quando focada
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "var(--text-color)" }, // Cor da borda
                                    "&:hover fieldset": { borderColor: "var(--hover-color)" }, // Cor da borda no hover
                                    "&.Mui-focused fieldset": { borderColor: "var(--hover-color)" } // Cor da borda quando focada
                                }
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            autoComplete="off"
                            id="outlined-email"
                            name="email"
                            label={t("contact.femail")}
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            InputProps={{
                                autoComplete: "new-email", // Desativa o preenchimento automático
                                sx: {
                                    color: "#D3ECEC",
                                    "&::placeholder": { color: "var(--text-color)" } // Cor do placeholder
                                }
                            }}
                            sx={{
                                "& label": { color: "var(--text-color)" }, // Cor da label padrão
                                "& label.Mui-focused": { color: "var(--hover-color)" }, // Cor da label quando focada
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "var(--text-color)" }, // Cor da borda
                                    "&:hover fieldset": { borderColor: "var(--hover-color)" }, // Cor da borda no hover
                                    "&.Mui-focused fieldset": { borderColor: "var(--hover-color)" } // Cor da borda quando focada
                                }
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            autoComplete="off"
                            id="outlined-subject"
                            name="subject"
                            label={t("contact.fsubject")}
                            variant="outlined"
                            error={!!errors.subject}
                            helperText={errors.subject}
                            fullWidth
                            InputProps={{
                                autoComplete: "new-subject", 
                                sx: {
                                    color: "#D3ECEC",
                                    "&::placeholder": { color: "var(--text-color)" } // Cor do placeholder
                                }
                            }}
                            sx={{
                                "& label": { color: "var(--text-color)" }, // Cor da label padrão
                                "& label.Mui-focused": { color: "var(--hover-color)" }, // Cor da label quando focada
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "var(--text-color)" }, // Cor da borda
                                    "&:hover fieldset": { borderColor: "var(--hover-color)" }, // Cor da borda no hover
                                    "&.Mui-focused fieldset": { borderColor: "var(--hover-color)" } // Cor da borda quando focada
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="form-right">
                    <div className="form-group">
                        <TextField
                            autoComplete="off"
                            id="outlined-message"
                            name="message"
                            label={t("contact.fmessage")}
                            variant="outlined"
                            multiline
                            rows={5}
                            error={!!errors.message}
                            helperText={errors.message}
                            fullWidth
                            InputProps={{
                                autoComplete: "new-message", 
                                sx: {
                                    color: "#D3ECEC",
                                    "&::placeholder": { color: "var(--text-color)" } // Cor do placeholder
                                }
                            }}
                            sx={{
                                "& label": { color: "var(--text-color)" }, // Cor da label padrão
                                "& label.Mui-focused": { color: "var(--hover-color)" }, // Cor da label quando focada
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "var(--text-color)" }, // Cor da borda
                                    "&:hover fieldset": { borderColor: "var(--hover-color)" }, // Cor da borda no hover
                                    "&.Mui-focused fieldset": { borderColor: "var(--hover-color)" } // Cor da borda quando focada
                                }
                            }}
                        />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agree}
                                onChange={() => setAgree(!agree)}
                                sx={{
                                    color: "var(--text-color)",
                                    "&.Mui-checked": { color: "hsl(0, 0%, 50%);" }
                                }}
                            />
                        }
                        label={
                            <p>
                                I agree to the <Link to="/terms-conditions">Terms and Conditions</Link> and acknowledge the <Link to="/terms-conditions">Privacy Policy</Link>.
                            </p>
                        }
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: "hsl(0, 0%, 50%);",
                            color: "#D3ECEC",
                            "&:hover": {
                                backgroundColor: "hsl(0, 0%, 40%);"
                            },
                            "&.Mui-disabled": {
                                backgroundColor: 'transparent', // Mantém fundo transparente quando desabilitado
                                color:"transparent"
                            }
                        }}
                        disabled={!agree}
                    >
                        {t("contact.fsubmit")}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactContent;
