import { CertificateItem } from "./CertificateItem";
import download from '../../assets/download.png'

export default function Certificates() {
  return (
    <div className="certificates__main-container" id="certificates">
      <h3 className="title__content">Courses</h3>

      <div className="certificates__content-container mt-3">
        <CertificateItem
          title="Html Css JavaScript"
          year="2022"
          url="https://coursera.org/share/5e3eabd332476a89fcf75dcdbefe111a"
          logoUrl="https://about.coursera.org/static/whiteC-ebcee57f469112d4f4c17dc1ae17c70d.svg"
        />

        <CertificateItem
          title="c Programming"
          year="2022"
          url="https://olympus.mygreatlearning.com/courses/14552/certificate"
          logoUrl={download}
        />

        <CertificateItem
          title="React - The Complete Guide"
          year="2023"
          url="https://olympus.mygreatlearning.com/courses/14551/certificate"
          logoUrl={download}
        />
      </div>
    </div>
  );
}
