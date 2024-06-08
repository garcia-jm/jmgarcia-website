import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  message: string;
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  company,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Contact Person</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>
          Hello, I&apos;m {firstName + " " + lastName}
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>{message}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>{company}</Text>
        <Text style={footer}>{email}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
