import { FC } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** 是否使用双径向渐变背景 */
  withGradient?: boolean;
  /** 自定义渐变样式 */
  gradientStyle?: React.CSSProperties;
}

const Container: FC<ContainerProps> = ({ 
  children, 
  className, 
  withGradient = false,
  gradientStyle,
  style,
  ...props 
}) => {
  // 默认的双径向渐变样式
  const defaultGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(ellipse at 25% 50%, rgba(254, 240, 138, 0.4) 0%, rgba(254, 240, 138, 0.2) 10%, transparent 50%),
      radial-gradient(ellipse at 75% 50%, rgba(196, 181, 253, 0.4) 0%, rgba(196, 181, 253, 0.2) 10%, transparent 50%)
    `
  };

  // 合并样式
  const finalStyle = withGradient 
    ? { ...defaultGradientStyle, ...gradientStyle, ...style }
    : style;

  return (
    <div 
      className={cn("flex-grow lg:px-32 md:px-12 px-4", className)} 
      style={finalStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container; 