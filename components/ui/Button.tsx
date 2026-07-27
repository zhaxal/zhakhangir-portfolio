import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from "react";
import styles from "./ui.module.css";

type Variant = "primary" | "brand";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary: styles.variantPrimary,
  brand: styles.variantBrand,
};

const sizeClass: Record<Size, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Leading 5px dot, the system's signature on pill controls. */
  dot?: boolean;
  children: ReactNode;
}

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const classNames = (variant: Variant, size: Size, extra?: string) =>
  [styles.button, variantClass[variant], sizeClass[size], extra]
    .filter(Boolean)
    .join(" ");

const Button: FC<LinkProps | NativeProps> = ({
  variant = "primary",
  size = "md",
  dot = false,
  children,
  className,
  ...rest
}) => {
  const body = (
    <>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </>
  );

  if (typeof rest.href === "string") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorProps} className={classNames(variant, size, className)}>
        {body}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type="button"
      {...buttonProps}
      className={classNames(variant, size, className)}
    >
      {body}
    </button>
  );
};

export default Button;
