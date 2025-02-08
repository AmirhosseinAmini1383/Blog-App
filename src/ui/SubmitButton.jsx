import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgLoaderComponent from "./SvgLoaderComponent";

function SubmitButton({ children, className, ...props }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4
          ${className} 
          `}
    >
      {children}
      {pending && <SvgLoaderComponent />}
    </Button>
  );
}
export default SubmitButton;
