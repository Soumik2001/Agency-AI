
import styled from "styled-components";

const WebsiteButton = ({
    children,
    href,
    icon,
    onClick,
    className,
    type = "button",
    disabled = false
}) => {
    return (
          
      <StyledWrapper>
            {href ? (
                <a href={href} className={`custom-btn ${className || ""}`}>
                    <span className="btn-content">
                        {children}
                        {icon}
                    </span>
                </a>
            ) : (
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`custom-btn ${className || ""}`}
                >
                    <span className="btn-content">
                        {children}
                        {icon}
                    </span>
                </button>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
 
.custom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
  .custom-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: #5044E5;
  transition: all 0.3s ease;
  z-index: 1;
}

.custom-btn:before,
.custom-btn:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  transition: all 0.5s ease;
  z-index: -1;
}

.custom-btn:before {
  left: 50%;
  top: 100%;
  width: 140%;
  height: 180%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
}

.custom-btn:after {
  left: 55%;
  top: 180%;
  width: 160%;
  height: 190%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
}

.custom-btn:hover {
  color: #5044E5; /* text becomes purple */
  box-shadow: 0 10px 25px rgba(80, 68, 229, 0.25);
}

.custom-btn:hover:before {
  top: -35%;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.custom-btn:hover:after {
  top: -45%;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
`;

export default WebsiteButton;