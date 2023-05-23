import { Box, Text } from "@chakra-ui/react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import ContactListComponent from "./ContactListComponent";
import SectionTitle from "../Helper/SectionTitle";
import Resume from "../assets/files/rajeev_resume.pdf";

export default function Contact() {
  return (
    <Box mt="10rem">
      <SectionTitle title="Contact" IconDetails={AiOutlineMessage} />
      <Box mt="1rem" p="5rem 0">
        <Text textAlign="center" fontSize="4xl" marginBottom="2rem">
          Get in touch!
        </Text>
        <ContactListComponent
          title="E-mail"
          linkdesc="rajeevanand840@gmail.com"
          IconDetail={HiOutlineMail}
          linkurl="mailto:rajeevanand840@gmail.com"
        />
        <ContactListComponent
          title="Mobile"
          linkdesc="+91-6200122508"
          IconDetail={BsPhone}
          linkurl="tel:6200122508"
        />
        <ContactListComponent
          title="LinkedIn"
          linkdesc="rajeev-anand-0304"
          linkurl="https://www.linkedin.com/in/rajeev-anand-0304/"
          IconDetail={FaLinkedin}
        />
        <ContactListComponent
          title="Github"
          linkdesc="raj0ds"
          linkurl="https://github.com/raj0ds"
          IconDetail={FaGithub}
        />
        <ContactListComponent
          title="Resume"
          linkdesc="Download Resume"
          linkurl={Resume}
          IconDetail={FaFilePdf}
        />
      </Box>
    </Box>
  );
}
