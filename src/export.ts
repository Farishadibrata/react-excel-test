import ExcelJS from "exceljs";
import FileSaver from "file-saver";
import { useState } from "react";
const ExportExcel = async (visibleColumns : string[], data :any) => {
  const dropdownItems = [
    {
      document_type: "BFD",
      id: 2,
    },
    {
      document_type: "BOD",
      id: 3,
    },
  ];
  const workbook = new ExcelJS.Workbook();
  const templateSheet = workbook.addWorksheet("Template");
  const wsHidden = workbook.addWorksheet("HiddenDocumentType");
  wsHidden.state = "veryHidden";
  wsHidden.columns = [
    {
      header: "document_type",
      key: "document_type",
    },
  ];
  wsHidden.addRows(dropdownItems);


  templateSheet.columns = visibleColumns;


  templateSheet.addRows(data)
  templateSheet.getCell("C2").dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ["=HiddenDocumentType!$A$2:$A$9999"],
  };
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  FileSaver.saveAs(blob, "excel.xlsx");
};
export default ExportExcel;
