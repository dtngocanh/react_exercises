import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function StaticButton() {
  return (
    <>
      <div style={{ margin: "12px", display: "flex", gap: "12px" }}>
        <DangerButton />
        <PrimaryButton />
        <SecondaryButton />
      </div>
    </>
  );
}
export default StaticButton;
