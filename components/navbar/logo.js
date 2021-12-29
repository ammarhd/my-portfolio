import Link from "next/link";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <div className="text-gray-800 dark:text-gray-200 font-bold font-sans ml-3">
            Ammar ALdhahyani
          </div>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
