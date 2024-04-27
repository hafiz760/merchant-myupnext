import { Button, Image } from "react-bootstrap";
import uploadFileIcon from "../../assets/img/uploadFileIcon.svg";
import "../../scss/components/_fileinput.scss";

const AddUploadMedia = ({
  label,
  getInputProps,
  UploadImg,
  docFiles,
  initialImages,
}) => {
  return (
    <div className="mb-4">
      <div className="form-label">{label}</div>
      <div className="file-input-container d-flex gap-2  dotted  mb-3 flex-sm-row flex-column">
        <div className=" w-100 flex-1  my-auto px-4 py-2 d-flex align-items-center gap-2">
          {docFiles.length > 0 ? (
            <div className="d-flex gap-3 align-items-center flex-wrap">
              {docFiles.map((file, index) => {
                return (
                  <div key={index}>
                    <p className="text-muted p-1 my-auto d-flex align-items-center justify-content-center gap-3">
                      <span>
                        <Image fluid src={uploadFileIcon} loading="lazy" />
                      </span>
                      {file.name}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted my-auto">
              {initialImages && initialImages.length > 0
                ? ""
                : "No File Selected"}
            </p>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-sm-center p-3">
          <label
            htmlFor="image"
            className="btn-primary px-5 my-1 me-1 cr-p d-flex align-items-center justify-content-center gap-1"
          >
            <span>
              <Image src={UploadImg} loading="lazy" />
            </span>
            Upload
            <input
              {...getInputProps()}
              multiple
              accept="image/png, image/jpg, image/jpeg"
              className="h-100 w-100"
              id="image"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddUploadMedia;
