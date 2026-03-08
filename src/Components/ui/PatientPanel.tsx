export default function PatientPanel() {
  return (
    <div
      className="patient-panel absolute flex flex-col items-start gap-4 p-5"
      style={{
        top: "122px",
        left: "18px",
        width: "367px",
        height: "1054px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
      }}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bold text-[24px]">Patients</h1>
        <img
          className="h-4 w-4 cursor-pointer"
          src="/Assets/PatientPanel/search.svg"
          alt="Search"
        />
      </div>

      <div className="patient-cards flex flex-col gap-4">
        <div className="patient-info flex items-center gap-4 pt-6 w-full ">
          <img
            src="/public/Assets/PatientPanel/Patient_01.png"
            alt="patient_01"
          />
          <div className="flex items-center gap-3">
            <div className="info">
              {" "}
              <p className="font-semibold whitespace-nowrap">Emily Williams</p>
              <p className="text-[0.85rem] text-[#4f4f4f]">Female, 18</p>
            </div>
          </div>

          <img
            className="h-1 cursor-pointer items-center justify-between pl-30"
            src="/public/Assets/PatientPanel/more-detail.png"
            alt="more-options"
          />
        </div>
      </div>
    </div>
  );
}
