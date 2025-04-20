// @ts-nocheck

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum InventRefType {
  None = "None",
  Sales = "Sales",
  Purch = "Purch",
  Production = "Production",
  ProdLine = "ProdLine",
  InventJournal = "InventJournal",
  CRMQuotation = "CRMQuotation",
  InventTransfer = "InventTransfer",
  FixedAsset = "FixedAsset",
}

export enum TradeLineDlvType {
  None = "None",
  DropShip = "DropShip",
}

export enum VendorOperationTypeMx {
  Blank = "Blank",
  ProServices = "ProServices",
  RentLease = "RentLease",
  Other = "Other",
}

export enum PurchMatchingPolicyOption {
  ThreeWayMatch = "ThreeWayMatch",
  TwoWayMatch = "TwoWayMatch",
  NoMatch = "NoMatch",
}

export enum GsthstTaxTypeCa {
  None = "None",
  Rebates111 = "Rebates111",
  TaxOnAcquisition205 = "TaxOnAcquisition205",
  SelfAssessment405 = "SelfAssessment405",
}

export enum RelationshipTypeBr {
  Spouse = "Spouse",
  Partner = "Partner",
  Son = "Son",
  Sibling = "Sibling",
  Parents = "Parents",
  Grandparents = "Grandparents",
  PoorMinor = "PoorMinor",
  AbsolutelyIncapable = "AbsolutelyIncapable",
  ExSpouse = "ExSpouse",
  Other = "Other",
}

export enum DeductionTypePersonBr {
  AlimonyPension = "AlimonyPension",
  Dependents = "Dependents",
  SimplifiedMonthlyDiscount = "SimplifiedMonthlyDiscount",
}

export enum PurchStatus {
  None = "None",
  Backorder = "Backorder",
  Received = "Received",
  Invoiced = "Invoiced",
  Canceled = "Canceled",
}

export enum TradeWorkflowState {
  NotSubmitted = "NotSubmitted",
  Submitted = "Submitted",
  PendingApproval = "PendingApproval",
  PendingCompletion = "PendingCompletion",
  Returned = "Returned",
  ChangeRequest = "ChangeRequest",
  Completed = "Completed",
  Approved = "Approved",
}

export enum AssetTransTypePurch {
  Acquisition = "Acquisition",
  AcquisitionAdj = "AcquisitionAdj",
  PreAcquisition_CZ = "PreAcquisition_CZ",
}

export enum PurchPurchaseOrderCreationMethod {
  Purchase = "Purchase",
  Consignment = "Consignment",
}

export enum LineDeliveryType {
  OrderLine = "OrderLine",
  OrderLineWithMultipleDeliveries = "OrderLineWithMultipleDeliveries",
  DeliveryLine = "DeliveryLine",
}

export enum InterCompanySkipUpdate {
  No = "No",
  Internal = "Internal",
  InterCompany = "InterCompany",
  Both = "Both",
}

export enum InterCompanyOrigin {
  Source = "Source",
  Derived = "Derived",
}

export enum PriceDiscSystemSource {
  None = "None",
  CopyFromSalesOrder = "CopyFromSalesOrder",
  CopyFromSalesQuotation = "CopyFromSalesQuotation",
  Project = "Project",
  SalesQuotation = "SalesQuotation",
  CopyFromPurchaseOrder = "CopyFromPurchaseOrder",
  RequestForQuote = "RequestForQuote",
  PurchaseReq = "PurchaseReq",
  ManualEntry = "ManualEntry",
  Agreement = "Agreement",
  ProductConfig = "ProductConfig",
  RetailPOS = "RetailPOS",
}

export enum ReturnStatusLine {
  None = "None",
  Awaiting = "Awaiting",
  Registered = "Registered",
  Quarantine = "Quarantine",
  Received = "Received",
  Invoiced = "Invoiced",
  Canceled = "Canceled",
}

export enum PurchaseType {
  Journal = "Journal",
  DEL_Quotation = "DEL_Quotation",
  DEL_Subscription = "DEL_Subscription",
  Purch = "Purch",
  ReturnItem = "ReturnItem",
  DEL_Blanket = "DEL_Blanket",
}

export enum PurchCovRef {
  None = "None",
  ProjectTrans = "ProjectTrans",
  FixedAssetsTrans = "FixedAssetsTrans",
  SalesOrderLine = "SalesOrderLine",
  ProdTrans = "ProdTrans",
}

export enum McrDropShipStatus {
  None = "None",
  ToBeDropShipped = "ToBeDropShipped",
  POCreated = "POCreated",
  POReleased = "POReleased",
  POShipped = "POShipped",
}

export enum AxType {
  Container = "Container",
  Date = "Date",
  Enum = "Enum",
  Guid = "Guid",
  Int32 = "Int32",
  Int64 = "Int64",
  Real = "Real",
  Record = "Record",
  String = "String",
  Time = "Time",
  UtcDateTime = "UtcDateTime",
  Void = "Void",
}

export interface VendPaymModeBankAccounts {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  lineId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  defaultDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrencyCode` |
   * | Type | `Edm.String` |
   */
  currencyCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymMode` |
   * | Type | `Edm.String` |
   */
  paymMode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BankAccountID` |
   * | Type | `Edm.String` |
   */
  bankAccountId: string | null;
}

export type VendPaymModeBankAccountsId = { dataAreaId: string; lineId: string };

export interface EditableVendPaymModeBankAccounts
  extends Pick<VendPaymModeBankAccounts, "dataAreaId" | "lineId">,
    Partial<
      Pick<
        VendPaymModeBankAccounts,
        | "defaultDimensionDisplayValue"
        | "currencyCode"
        | "paymMode"
        | "bankAccountId"
      >
    > {}

export interface VendDependents {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelationshipType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RelationshipType_BR` |
   */
  relationshipType: RelationshipTypeBr | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPFNum` |
   * | Type | `Edm.String` |
   */
  cpfNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendTable_AccountNum` |
   * | Type | `Edm.String` |
   */
  vendTableAccountNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeductionType` |
   * | Type | `Microsoft.Dynamics.DataEntities.DeductionTypePerson_BR` |
   */
  deductionType: DeductionTypePersonBr | null;
}

export type VendDependentsId = string | { dataAreaId: string };

export interface EditableVendDependents
  extends Pick<VendDependents, "amount">,
    Partial<
      Pick<
        VendDependents,
        | "relationshipType"
        | "name"
        | "cpfNum"
        | "vendTableAccountNum"
        | "deductionType"
      >
    > {}

export interface VendPriceAdmTrans {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JournalNum` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  journalNum: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNum` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  lineNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Warehouse` |
   * | Type | `Edm.String` |
   */
  warehouse: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventoryStatus` |
   * | Type | `Edm.String` |
   */
  inventoryStatus: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceCharges` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  priceCharges: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LicensePlate` |
   * | Type | `Edm.String` |
   */
  licensePlate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Style` |
   * | Type | `Edm.String` |
   */
  style: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Currency` |
   * | Type | `Edm.String` |
   */
  currency: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnitId` |
   * | Type | `Edm.String` |
   */
  unitId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SerialNumber` |
   * | Type | `Edm.String` |
   */
  serialNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceUnit` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  priceUnit: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Color` |
   * | Type | `Edm.String` |
   */
  color: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ToDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  toDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BatchNumber` |
   * | Type | `Edm.String` |
   */
  batchNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductProfile` |
   * | Type | `Edm.String` |
   */
  productProfile: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NameSim` |
   * | Type | `Edm.String` |
   */
  nameSim: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FromDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  fromDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  location: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Configuration` |
   * | Type | `Edm.String` |
   */
  configuration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductGtd` |
   * | Type | `Edm.String` |
   */
  productGtd: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Site` |
   * | Type | `Edm.String` |
   */
  site: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Size` |
   * | Type | `Edm.String` |
   */
  size: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemNum` |
   * | Type | `Edm.String` |
   */
  itemNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Owner` |
   * | Type | `Edm.String` |
   */
  owner: string | null;
}

export type VendPriceAdmTransId = {
  dataAreaId: string;
  journalNum: string;
  lineNum: number;
};

export interface EditableVendPriceAdmTrans
  extends Pick<
      VendPriceAdmTrans,
      | "dataAreaId"
      | "journalNum"
      | "lineNum"
      | "priceCharges"
      | "priceUnit"
      | "toDate"
      | "fromDate"
      | "amount"
    >,
    Partial<
      Pick<
        VendPriceAdmTrans,
        | "warehouse"
        | "inventoryStatus"
        | "licensePlate"
        | "style"
        | "currency"
        | "unitId"
        | "serialNumber"
        | "color"
        | "batchNumber"
        | "productProfile"
        | "nameSim"
        | "location"
        | "configuration"
        | "productGtd"
        | "site"
        | "size"
        | "itemNum"
        | "owner"
      >
    > {}

export interface VendorReasons {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReasonCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  reasonCode: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurposeCode` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  purposeCode: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ForVendorTransactionType` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  forVendorTransactionType: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultComment` |
   * | Type | `Edm.String` |
   */
  defaultComment: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CancellationReason` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  cancellationReason: NoYes | null;
}

export type VendorReasonsId = { dataAreaId: string; reasonCode: string };

export interface EditableVendorReasons
  extends Pick<VendorReasons, "dataAreaId" | "reasonCode">,
    Partial<
      Pick<
        VendorReasons,
        | "purposeCode"
        | "forVendorTransactionType"
        | "defaultComment"
        | "cancellationReason"
      >
    > {}

export interface VendDefaultDocumentClassV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountTypeGroupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  accountTypeGroupId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreditJournalLineVCId` |
   * | Type | `Edm.String` |
   */
  creditJournalLineVcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PackingSlipVCId` |
   * | Type | `Edm.String` |
   */
  packingSlipVcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RefoundRemissionVCId` |
   * | Type | `Edm.String` |
   */
  refoundRemissionVcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultPaymentDocumentClassId` |
   * | Type | `Edm.String` |
   */
  defaultPaymentDocumentClassId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchCreditNoteVCId` |
   * | Type | `Edm.String` |
   */
  purchCreditNoteVcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchInvoiceVCId` |
   * | Type | `Edm.String` |
   */
  purchInvoiceVcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DebitJournalLineVCId` |
   * | Type | `Edm.String` |
   */
  debitJournalLineVcId: string | null;
}

export type VendDefaultDocumentClassV2Id = {
  dataAreaId: string;
  accountTypeGroupId: string;
};

export interface EditableVendDefaultDocumentClassV2
  extends Pick<VendDefaultDocumentClassV2, "dataAreaId" | "accountTypeGroupId">,
    Partial<
      Pick<
        VendDefaultDocumentClassV2,
        | "creditJournalLineVcId"
        | "packingSlipVcId"
        | "refoundRemissionVcId"
        | "defaultPaymentDocumentClassId"
        | "purchCreditNoteVcId"
        | "purchInvoiceVcId"
        | "debitJournalLineVcId"
      >
    > {}

export interface VendCorrectionNotes {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CorrectionNoteId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  correctionNoteId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Invoice` |
   * | Type | `Edm.String` |
   */
  invoice: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvoiceAccount` |
   * | Type | `Edm.String` |
   */
  invoiceAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Posted` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  posted: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Date` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginalText` |
   * | Type | `Edm.String` |
   */
  originalText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  documentDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CorrectedText` |
   * | Type | `Edm.String` |
   */
  correctedText: string | null;
}

export type VendCorrectionNotesId = {
  dataAreaId: string;
  correctionNoteId: string;
};

export interface EditableVendCorrectionNotes
  extends Pick<
      VendCorrectionNotes,
      "dataAreaId" | "correctionNoteId" | "date" | "documentDate"
    >,
    Partial<
      Pick<
        VendCorrectionNotes,
        | "invoice"
        | "invoiceAccount"
        | "posted"
        | "originalText"
        | "correctedText"
      >
    > {}

export interface PurchaseOrderLineV2ExistAddrReadOnly {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryAddressLocationId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  deliveryAddressLocationId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deliveryValidFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryType` |
   * | Type | `Microsoft.Dynamics.DataEntities.TradeLineDlvType` |
   */
  deliveryType: TradeLineDlvType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CovRef` |
   * | Type | `Microsoft.Dynamics.DataEntities.PurchCovRef` |
   */
  covRef: PurchCovRef | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemRouteId` |
   * | Type | `Edm.String` |
   */
  itemRouteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PriceUnit` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  priceUnit: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendAccount` |
   * | Type | `Edm.String` |
   */
  vendAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchPrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  purchPrice: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscPercent` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  discPercent: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrigStateId` |
   * | Type | `Edm.String` |
   */
  origStateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjTaxGroupId` |
   * | Type | `Edm.String` |
   */
  projTaxGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReqAttention` |
   * | Type | `Edm.String` |
   */
  reqAttention: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MCRDropShipStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.MCRDropShipStatus` |
   */
  mcrDropShipStatus: McrDropShipStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TAMItemVendRebateGroupId` |
   * | Type | `Edm.String` |
   */
  tamItemVendRebateGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailLineNumEx1` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  retailLineNumEx1: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendGroup` |
   * | Type | `Edm.String` |
   */
  vendGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InterCompanyOrigin` |
   * | Type | `Microsoft.Dynamics.DataEntities.InterCompanyOrigin` |
   */
  interCompanyOrigin: InterCompanyOrigin | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShippingDateRequested` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  shippingDateRequested: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWInventReceivedNow` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  pdsCwInventReceivedNow: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WfDeliveryDueState` |
   * | Type | `Microsoft.Dynamics.DataEntities.TradeWorkflowState` |
   */
  wfDeliveryDueState: TradeWorkflowState | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WfInvReceivedState` |
   * | Type | `Microsoft.Dynamics.DataEntities.TradeWorkflowState` |
   */
  wfInvReceivedState: TradeWorkflowState | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SkipCreateMarkup` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  skipCreateMarkup: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalItemId` |
   * | Type | `Edm.String` |
   */
  externalItemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateFixedAsset` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  createFixedAsset: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssetTransTypePurch` |
   * | Type | `Microsoft.Dynamics.DataEntities.AssetTransTypePurch` |
   */
  assetTransTypePurch: AssetTransTypePurch | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWRemainInventPhysical` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  pdsCwRemainInventPhysical: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainPurchPhysical` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainPurchPhysical: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssetId` |
   * | Type | `Edm.String` |
   */
  assetId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RBOPackageLineNum` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  rboPackageLineNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxItemGroup` |
   * | Type | `Edm.String` |
   */
  taxItemGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkflowState` |
   * | Type | `Microsoft.Dynamics.DataEntities.TradeWorkflowState` |
   */
  workflowState: TradeWorkflowState | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventRefId` |
   * | Type | `Edm.String` |
   */
  inventRefId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Remainder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWRemainInventFinancial` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  pdsCwRemainInventFinancial: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchReceivedNow` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  purchReceivedNow: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReqPOId` |
   * | Type | `Edm.String` |
   */
  reqPoId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceAddress` |
   * | Type | `Edm.String` |
   */
  serviceAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isDeleted: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventRefTransId` |
   * | Type | `Edm.String` |
   */
  inventRefTransId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Port` |
   * | Type | `Edm.String` |
   */
  port: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Complete` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  complete: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MCRDropShipComment` |
   * | Type | `Edm.String` |
   */
  mcrDropShipComment: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionCode` |
   * | Type | `Edm.String` |
   */
  transactionCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  serviceDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QtyOrdered` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  qtyOrdered: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deliveryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepreciationStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  depreciationStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsInvoiceMatched` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isInvoiceMatched: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventTransId` |
   * | Type | `Edm.String` |
   */
  inventTransId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventDimId` |
   * | Type | `Edm.String` |
   */
  inventDimId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShippingDateConfirmed` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  shippingDateConfirmed: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PackedWHSLine` |
   * | Type | `Edm.Binary` |
   */
  packedWhsLine: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAddedByChannel` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isAddedByChannel: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainInventFinancial` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainInventFinancial: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomerRef` |
   * | Type | `Edm.String` |
   */
  customerRef: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Transport` |
   * | Type | `Edm.String` |
   */
  transport: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchReqId` |
   * | Type | `Edm.String` |
   */
  purchReqId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmedTaxWriteCode` |
   * | Type | `Edm.String` |
   */
  confirmedTaxWriteCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OverDeliveryPct` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  overDeliveryPct: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsModified` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isModified: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultiLnPercent` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  multiLnPercent: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustPurchaseOrderFormNum` |
   * | Type | `Edm.String` |
   */
  custPurchaseOrderFormNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Blocked` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  blocked: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjSalesCurrencyId` |
   * | Type | `Edm.String` |
   */
  projSalesCurrencyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntercompanyOSOSourcingInventSiteId` |
   * | Type | `Edm.String` |
   */
  intercompanyOsoSourcingInventSiteId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  discAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReturnStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.ReturnStatusLine` |
   */
  returnStatus: ReturnStatusLine | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LinePercent` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  linePercent: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CountyOrigDest` |
   * | Type | `Edm.String` |
   */
  countyOrigDest: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineDisc` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  lineDisc: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssetBookId` |
   * | Type | `Edm.String` |
   */
  assetBookId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjSalesPrice` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  projSalesPrice: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BarCode` |
   * | Type | `Edm.String` |
   */
  barCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrencyCode` |
   * | Type | `Edm.String` |
   */
  currencyCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchId` |
   * | Type | `Edm.String` |
   */
  purchId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MCRDropShipment` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mcrDropShipment: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPwp` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPwp: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailTempValueEx2` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  retailTempValueEx2: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShipCalendarId` |
   * | Type | `Edm.String` |
   */
  shipCalendarId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxGroup` |
   * | Type | `Edm.String` |
   */
  taxGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatProcId` |
   * | Type | `Edm.String` |
   */
  statProcId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrigCountryRegionId` |
   * | Type | `Edm.String` |
   */
  origCountryRegionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchMarkup` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  purchMarkup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmedTaxAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  confirmedTaxAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OverrideSalesTax` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  overrideSalesTax: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssetGroup` |
   * | Type | `Edm.String` |
   */
  assetGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SkipUpdate` |
   * | Type | `Microsoft.Dynamics.DataEntities.InterCompanySkipUpdate` |
   */
  skipUpdate: InterCompanySkipUpdate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineHeader` |
   * | Type | `Edm.String` |
   */
  lineHeader: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Tax1099State` |
   * | Type | `Edm.String` |
   */
  tax1099State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Scrap` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  scrap: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PackedExtensions` |
   * | Type | `Edm.Binary` |
   */
  packedExtensions: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventReceivedNow` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inventReceivedNow: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxAutogenerated` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  taxAutogenerated: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InventInvoiceNow` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inventInvoiceNow: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailPackageId` |
   * | Type | `Edm.String` |
   */
  retailPackageId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanningPriority` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  planningPriority: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SkipDeliveryScheduleUpdate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  skipDeliveryScheduleUpdate: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemBOMId` |
   * | Type | `Edm.String` |
   */
  itemBomId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeliveryName` |
   * | Type | `Edm.String` |
   */
  deliveryName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntrastatFulfillmentDate_HU` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  intrastatFulfillmentDateHu: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReturnActionId` |
   * | Type | `Edm.String` |
   */
  returnActionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressRefTableId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  addressRefTableId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmedDlv` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  confirmedDlv: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjTransId` |
   * | Type | `Edm.String` |
   */
  projTransId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditableInWorkflow` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  editableInWorkflow: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchSupplierAuxId` |
   * | Type | `Edm.String` |
   */
  purchSupplierAuxId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReturnDispositionCodeId` |
   * | Type | `Edm.String` |
   */
  returnDispositionCodeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SkipPriceDiscCalc` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  skipPriceDiscCalc: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemId` |
   * | Type | `Edm.String` |
   */
  itemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InterCompanyInventTransId` |
   * | Type | `Edm.String` |
   */
  interCompanyInventTransId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperationType_MX` |
   * | Type | `Microsoft.Dynamics.DataEntities.VendorOperationType_MX` |
   */
  operationTypeMx: VendorOperationTypeMx | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatTriangularDeal` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  statTriangularDeal: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AgreementSkipAutoLink` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  agreementSkipAutoLink: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntercompanyOSOSourcingInventLocationId` |
   * | Type | `Edm.String` |
   */
  intercompanyOsoSourcingInventLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjTaxItemGroupId` |
   * | Type | `Edm.String` |
   */
  projTaxItemGroupId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNumber` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  lineNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PSATotalRetainAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  psaTotalRetainAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReqPlanIdSched` |
   * | Type | `Edm.String` |
   */
  reqPlanIdSched: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VariantId` |
   * | Type | `Edm.String` |
   */
  variantId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderDeliveryPct` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  underDeliveryPct: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchUnit` |
   * | Type | `Edm.String` |
   */
  purchUnit: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Tax1099StateAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  tax1099StateAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjSalesUnitId` |
   * | Type | `Edm.String` |
   */
  projSalesUnitId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatisticValue_LT` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  statisticValueLt: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityNumber` |
   * | Type | `Edm.String` |
   */
  activityNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  lineAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.PurchStatus` |
   */
  purchStatus: PurchStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PSARetainScheduleId` |
   * | Type | `Edm.String` |
   */
  psaRetainScheduleId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ManualModifiedField` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  manualModifiedField: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StockedProduct` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  stockedProduct: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Tax1099Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  tax1099Amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  pdsCwQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemRefType` |
   * | Type | `Microsoft.Dynamics.DataEntities.InventRefType` |
   */
  itemRefType: InventRefType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PDSCalculationId` |
   * | Type | `Edm.String` |
   */
  pdsCalculationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GSTHSTTaxType_CA` |
   * | Type | `Microsoft.Dynamics.DataEntities.GSTHSTTaxType_CA` |
   */
  gsthstTaxTypeCa: GsthstTaxTypeCa | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainInventPhysical` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainInventPhysical: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxWithholdBaseCur_TH` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  taxWithholdBaseCurTh: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxServiceCode_BR` |
   * | Type | `Edm.String` |
   */
  taxServiceCodeBr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineDeliveryType` |
   * | Type | `Microsoft.Dynamics.DataEntities.LineDeliveryType` |
   */
  lineDeliveryType: LineDeliveryType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RemainPurchFinancial` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remainPurchFinancial: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MatchingPolicy` |
   * | Type | `Microsoft.Dynamics.DataEntities.PurchMatchingPolicyOption` |
   */
  matchingPolicy: PurchMatchingPolicyOption | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchaseType` |
   * | Type | `Microsoft.Dynamics.DataEntities.PurchaseType` |
   */
  purchaseType: PurchaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TaxWithholdGroup_TH` |
   * | Type | `Edm.String` |
   */
  taxWithholdGroupTh: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsFinalized` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isFinalized: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjCategoryId` |
   * | Type | `Edm.String` |
   */
  projCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  purchQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchaseOrderLineCreationMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.PurchPurchaseOrderCreationMethod` |
   */
  purchaseOrderLineCreationMethod: PurchPurchaseOrderCreationMethod | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjLinePropertyId` |
   * | Type | `Edm.String` |
   */
  projLinePropertyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BarCodeType` |
   * | Type | `Edm.String` |
   */
  barCodeType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemEntrySource` |
   * | Type | `Microsoft.Dynamics.DataEntities.PriceDiscSystemSource` |
   */
  systemEntrySource: PriceDiscSystemSource | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultiLnDisc` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  multiLnDisc: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SyncIntercompanySalesLine` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  syncIntercompanySalesLine: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchReqLineRefId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  purchReqLineRefId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FormattedDeliveryAddress` |
   * | Type | `Edm.String` |
   */
  formattedDeliveryAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProjId` |
   * | Type | `Edm.String` |
   */
  projId: string | null;
}

export type PurchaseOrderLineV2ExistAddrReadOnlyId = {
  dataAreaId: string;
  deliveryAddressLocationId: string;
  deliveryValidFrom: string;
};

export interface EditablePurchaseOrderLineV2ExistAddrReadOnly
  extends Pick<
      PurchaseOrderLineV2ExistAddrReadOnly,
      | "dataAreaId"
      | "deliveryAddressLocationId"
      | "deliveryValidFrom"
      | "priceUnit"
      | "purchPrice"
      | "discPercent"
      | "retailLineNumEx1"
      | "shippingDateRequested"
      | "pdsCwInventReceivedNow"
      | "pdsCwRemainInventPhysical"
      | "remainPurchPhysical"
      | "rboPackageLineNum"
      | "remainder"
      | "pdsCwRemainInventFinancial"
      | "purchReceivedNow"
      | "serviceDate"
      | "qtyOrdered"
      | "deliveryDate"
      | "depreciationStartDate"
      | "shippingDateConfirmed"
      | "remainInventFinancial"
      | "overDeliveryPct"
      | "multiLnPercent"
      | "discAmount"
      | "linePercent"
      | "lineDisc"
      | "projSalesPrice"
      | "retailTempValueEx2"
      | "purchMarkup"
      | "confirmedTaxAmount"
      | "inventReceivedNow"
      | "inventInvoiceNow"
      | "planningPriority"
      | "intrastatFulfillmentDateHu"
      | "addressRefTableId"
      | "confirmedDlv"
      | "lineNumber"
      | "psaTotalRetainAmount"
      | "underDeliveryPct"
      | "tax1099StateAmount"
      | "statisticValueLt"
      | "lineAmount"
      | "manualModifiedField"
      | "tax1099Amount"
      | "pdsCwQty"
      | "remainInventPhysical"
      | "taxWithholdBaseCurTh"
      | "remainPurchFinancial"
      | "purchQty"
      | "multiLnDisc"
      | "purchReqLineRefId"
    >,
    Partial<
      Pick<
        PurchaseOrderLineV2ExistAddrReadOnly,
        | "deliveryType"
        | "covRef"
        | "itemRouteId"
        | "vendAccount"
        | "origStateId"
        | "projTaxGroupId"
        | "reqAttention"
        | "mcrDropShipStatus"
        | "tamItemVendRebateGroupId"
        | "vendGroup"
        | "interCompanyOrigin"
        | "wfDeliveryDueState"
        | "wfInvReceivedState"
        | "skipCreateMarkup"
        | "externalItemId"
        | "createFixedAsset"
        | "assetTransTypePurch"
        | "assetId"
        | "taxItemGroup"
        | "workflowState"
        | "inventRefId"
        | "reqPoId"
        | "serviceAddress"
        | "isDeleted"
        | "inventRefTransId"
        | "port"
        | "complete"
        | "mcrDropShipComment"
        | "transactionCode"
        | "isInvoiceMatched"
        | "inventTransId"
        | "inventDimId"
        | "packedWhsLine"
        | "isAddedByChannel"
        | "customerRef"
        | "transport"
        | "purchReqId"
        | "confirmedTaxWriteCode"
        | "isModified"
        | "custPurchaseOrderFormNum"
        | "blocked"
        | "projSalesCurrencyId"
        | "intercompanyOsoSourcingInventSiteId"
        | "returnStatus"
        | "countyOrigDest"
        | "assetBookId"
        | "barCode"
        | "currencyCode"
        | "purchId"
        | "mcrDropShipment"
        | "isPwp"
        | "shipCalendarId"
        | "taxGroup"
        | "statProcId"
        | "origCountryRegionId"
        | "overrideSalesTax"
        | "assetGroup"
        | "skipUpdate"
        | "lineHeader"
        | "tax1099State"
        | "scrap"
        | "packedExtensions"
        | "name"
        | "taxAutogenerated"
        | "retailPackageId"
        | "skipDeliveryScheduleUpdate"
        | "itemBomId"
        | "deliveryName"
        | "returnActionId"
        | "projTransId"
        | "editableInWorkflow"
        | "purchSupplierAuxId"
        | "returnDispositionCodeId"
        | "skipPriceDiscCalc"
        | "itemId"
        | "interCompanyInventTransId"
        | "operationTypeMx"
        | "statTriangularDeal"
        | "agreementSkipAutoLink"
        | "intercompanyOsoSourcingInventLocationId"
        | "projTaxItemGroupId"
        | "reqPlanIdSched"
        | "variantId"
        | "purchUnit"
        | "projSalesUnitId"
        | "activityNumber"
        | "purchStatus"
        | "psaRetainScheduleId"
        | "stockedProduct"
        | "itemRefType"
        | "pdsCalculationId"
        | "gsthstTaxTypeCa"
        | "taxServiceCodeBr"
        | "lineDeliveryType"
        | "matchingPolicy"
        | "purchaseType"
        | "taxWithholdGroupTh"
        | "isFinalized"
        | "projCategoryId"
        | "purchaseOrderLineCreationMethod"
        | "projLinePropertyId"
        | "barCodeType"
        | "systemEntrySource"
        | "syncIntercompanySalesLine"
        | "formattedDeliveryAddress"
        | "projId"
      >
    > {}
