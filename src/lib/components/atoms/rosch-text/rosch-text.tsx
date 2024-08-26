import { FunctionComponent } from "react";
import { RoschTextStyled, RoschTextStyledProps } from "./rosch-text.style";

/**
 * Props for the RoschText component.
 * 
 * @interface RoschTextProps
 * @extends {RoschTextStyledProps}
 * @property {string} children - The text content to be displayed.
 */
export interface RoschTextProps extends RoschTextStyledProps {
  /**
   * The text content to be displayed.
   */
    children: string
}

/**
 * `RoschText` is a functional component that renders styled text.
 * It wraps the `RoschTextStyled` component, passing down all props
 * and rendering any children within the styled text element.
 *
 * @param {RoschTextProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the text component.
 *
 * @example
 * ```tsx
 * <RoschText bold="true" fontSize="lg">
 *   Bold and large text
 * </RoschText>
 * ```
 *
 * @returns A JSX element with styled text.
 */
const RoschText : FunctionComponent<RoschTextProps> = ({ children, ...props }) => {
  return(
    <RoschTextStyled className="rosch__text" { ...props } >
      { children }
    </RoschTextStyled>
  );
};

export { RoschText };