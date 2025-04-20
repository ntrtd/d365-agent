// @ts-nocheck

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum EcoResCategoryChangeStatus {
  NoChange = "NoChange",
  Changed = "Changed",
  NewlyAdded = "NewlyAdded",
  NoLongerValid = "NoLongerValid",
  NotApplicable = "NotApplicable",
  All = "All",
}

export enum RetailTenderFunction {
  Normal = "Normal",
  Card = "Card",
  Check = "Check",
  Customer = "Customer",
  TenderRemoveFloat = "TenderRemoveFloat",
  Wallet = "Wallet",
}

export enum EcoResProductType {
  Item = "Item",
  Service = "Service",
}

export enum EcoResCategoryNamedHierarchyRole {
  Procurement = "Procurement",
  Sales = "Sales",
  Retail = "Retail",
  Commodity = "Commodity",
  Financials = "Financials",
  RetailSpecialGroup = "RetailSpecialGroup",
  RetailVendorProductHierarchy = "RetailVendorProductHierarchy",
  RetailChannelNavigation = "RetailChannelNavigation",
  PackingMaterials_W = "PackingMaterials_W",
  CommonDataService = "CommonDataService",
  CostManagement = "CostManagement",
  Traceability = "Traceability",
  EngineeringProduct = "EngineeringProduct",
}

export enum RetailLoyaltyRewardPointEntryType {
  Earn = "Earn",
  Redeem = "Redeem",
  ReturnEarned = "ReturnEarned",
  Adjust = "Adjust",
  Refund = "Refund",
}

export enum RetailNoneNearestUpDown {
  None = "None",
  Nearest = "Nearest",
  Up = "Up",
  Down = "Down",
}

export enum RetailLedgerBank {
  Ledger = "Ledger",
  Bank = "Bank",
  RCash = "RCash",
}

export enum RetailAuthorizationTypes {
  No = "No",
  EFTServer = "EFTServer",
  EFTTerminal = "EFTTerminal",
  Manual = "Manual",
}

export enum RetailLoyaltyTransactionType {
  RetailTransaction = "RetailTransaction",
  SalesOrder = "SalesOrder",
  LoyaltyAdjustment = "LoyaltyAdjustment",
  NonTransactionalActivity = "NonTransactionalActivity",
}

export enum RetailLoyaltyTenderTypeBase {
  AsCardTender = "AsCardTender",
  AsContactTender = "AsContactTender",
  NoTender = "NoTender",
  Blocked = "Blocked",
}

export enum RetailGiftCardOperation {
  None = "None",
  Issue = "Issue",
  Redeem = "Redeem",
  AddTo = "AddTo",
  Refund = "Refund",
  Adjust = "Adjust",
  MCRVoid = "MCRVoid",
  Close = "Close",
  ManualUnlock = "ManualUnlock",
  OfflineUnlock = "OfflineUnlock",
  VoidIssue = "VoidIssue",
  CashOut = "CashOut",
}

export enum RetailRecoListElementTypeBase {
  None = "None",
  Product = "Product",
  Content = "Content",
  Category = "Category",
}

export enum RetailLoyaltyCardRewardPointNonTransactionalActivityStatus {
  Draft = "Draft",
  Posted = "Posted",
  Error = "Error",
  All = "All",
}

export enum EcoResCategoryHierarchyModifier {
  Category = "Category",
  Component = "Component",
  Engineering = "Engineering",
}

export enum RetailMediaType {
  None = "None",
  Image = "Image",
  Video = "Video",
  File = "File",
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

export interface RetailEcoResCategory {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  name: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategoryHierarchy_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResCategoryHierarchyName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategory1_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResCategory1Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NestedSetRight` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  nestedSetRight: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CategoryHierarchy` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  categoryHierarchy: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultThreshold_PSN` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  defaultThresholdPsn: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NestedSetLeft` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  nestedSetLeft: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsTangible` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isTangible: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentCategory` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  parentCategory: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsActive` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isActive: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsCategoryAttributesInherited` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isCategoryAttributesInherited: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SharedCategory_CategoryId` |
   * | Type | `Edm.String` |
   */
  sharedCategoryCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InstanceRelationType` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  instanceRelationType: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AxRecId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  axRecId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Code` |
   * | Type | `Edm.String` |
   */
  code: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Level` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  level: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChangeStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResCategoryChangeStatus` |
   */
  changeStatus: EcoResCategoryChangeStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PKWiUCode` |
   * | Type | `Edm.String` |
   */
  pkWiUCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategoryHierarchy1_Name` |
   * | Type | `Edm.String` |
   */
  ecoResCategoryHierarchy1Name: string | null;
}

export type RetailEcoResCategoryId = {
  name: string;
  ecoResCategoryHierarchyName: string;
  ecoResCategory1Name: string;
};

export interface EditableRetailEcoResCategory
  extends Pick<
      RetailEcoResCategory,
      | "name"
      | "ecoResCategoryHierarchyName"
      | "ecoResCategory1Name"
      | "nestedSetRight"
      | "categoryHierarchy"
      | "defaultThresholdPsn"
      | "nestedSetLeft"
      | "parentCategory"
      | "instanceRelationType"
      | "axRecId"
      | "level"
    >,
    Partial<
      Pick<
        RetailEcoResCategory,
        | "isTangible"
        | "isActive"
        | "isCategoryAttributesInherited"
        | "sharedCategoryCategoryId"
        | "code"
        | "changeStatus"
        | "pkWiUCode"
        | "ecoResCategoryHierarchy1Name"
      >
    > {}

export interface RetailStoreTenderTypeTable {
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
   * | Name | `OMOperatingUnit_PartyNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  omOperatingUnitPartyNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TenderTypeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  tenderTypeId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OpenDrawer` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  openDrawer: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OMOperatingUnitNumber` |
   * | Type | `Edm.String` |
   */
  omOperatingUnitNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumAmountAllowed` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumAmountAllowed: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNumInTransaction` |
   * | Type | `Edm.String` |
   */
  lineNumInTransaction: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoundingMethod` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailNoneNearestUpDown` |
   */
  roundingMethod: RetailNoneNearestUpDown | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DifferenceAccLedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  differenceAccLedgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChangeLineOnReceipt` |
   * | Type | `Edm.String` |
   */
  changeLineOnReceipt: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Rounding` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  rounding: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConnectorName` |
   * | Type | `Edm.String` |
   */
  connectorName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTerminalId` |
   * | Type | `Edm.String` |
   */
  paymentTerminalId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SlipFrontInPrinter` |
   * | Type | `Edm.String` |
   */
  slipFrontInPrinter: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiffAccBigDiffLedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  diffAccBigDiffLedgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowFloat` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowFloat: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TakenToBank` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  takenToBank: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumOvertenderAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumOvertenderAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActiveAccount` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  activeAccount: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BankBagAccountType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLedgerBank` |
   */
  bankBagAccountType: RetailLedgerBank | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SafeAccountType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLedgerBank` |
   */
  safeAccountType: RetailLedgerBank | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumAmountEntered` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumAmountEntered: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RestrictReturnsWithoutReceipt` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  restrictReturnsWithoutReceipt: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumNormalDifferenceAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumNormalDifferenceAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SeekAuthorization` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailAuthorizationTypes` |
   */
  seekAuthorization: RetailAuthorizationTypes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AboveMinimumTenderId` |
   * | Type | `Edm.String` |
   */
  aboveMinimumTenderId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GiftCardCashOutThreshold` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  giftCardCashOutThreshold: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumCountingDifference` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumCountingDifference: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayAccountBill` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  payAccountBill: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GiftCardItemId` |
   * | Type | `Edm.String` |
   */
  giftCardItemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountTypeGiftCardCompany` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLedgerBank` |
   */
  accountTypeGiftCardCompany: RetailLedgerBank | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SigCapMinAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  sigCapMinAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TenderFlowLedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  tenderFlowLedgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GiftCardCompany` |
   * | Type | `Edm.String` |
   */
  giftCardCompany: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndorseCheck` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  endorseCheck: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  ledgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CountingRequired` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  countingRequired: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AskForDate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  askForDate: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TakenToSafe` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  takenToSafe: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SafeActiveAccount` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  safeActiveAccount: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BankBagLedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  bankBagLedgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumChangeAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumChangeAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SigCapEnabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sigCapEnabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MultiplyInTenderOperations` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  multiplyInTenderOperations: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumRecount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  maximumRecount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndorsmentLine2` |
   * | Type | `Edm.String` |
   */
  endorsmentLine2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UndertenderAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  undertenderAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndorsmentLine1` |
   * | Type | `Edm.String` |
   */
  endorsmentLine1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FrontOfCheck` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  frontOfCheck: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompressPaymentEntries` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  compressPaymentEntries: NoYes | null;
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
   * | Name | `HideCardInputDetailsInPOS` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  hideCardInputDetailsInPos: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLedgerBank` |
   */
  accountType: RetailLedgerBank | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PosOperation` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  posOperation: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChangeTenderId` |
   * | Type | `Edm.String` |
   */
  changeTenderId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowUndertender` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowUndertender: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumAmountAllowed` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  maximumAmountAllowed: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowReturnNegative` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowReturnNegative: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Function` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailTenderFunction` |
   */
  function: RetailTenderFunction | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SafeAccLedgerDimensionDisplayValue` |
   * | Type | `Edm.String` |
   */
  safeAccLedgerDimensionDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FiscalPrinterTenderType_BR` |
   * | Type | `Edm.String` |
   */
  fiscalPrinterTenderTypeBr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowOvertender` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowOvertender: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PosCountEntries` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  posCountEntries: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MinimumAmountEntered` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  minimumAmountEntered: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CashDrawerLimit` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  cashDrawerLimit: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SlipBackInPrinter` |
   * | Type | `Edm.String` |
   */
  slipBackInPrinter: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckPayee` |
   * | Type | `Edm.String` |
   */
  checkPayee: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LedgerDimensionGiftCardCompanyDisplayValue` |
   * | Type | `Edm.String` |
   */
  ledgerDimensionGiftCardCompanyDisplayValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CashDrawerLimitEnabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  cashDrawerLimitEnabled: NoYes | null;
}

export type RetailStoreTenderTypeTableId = {
  dataAreaId: string;
  omOperatingUnitPartyNumber: string;
  tenderTypeId: string;
};

export interface EditableRetailStoreTenderTypeTable
  extends Pick<
      RetailStoreTenderTypeTable,
      | "dataAreaId"
      | "omOperatingUnitPartyNumber"
      | "tenderTypeId"
      | "minimumAmountAllowed"
      | "rounding"
      | "maximumOvertenderAmount"
      | "maximumAmountEntered"
      | "maximumNormalDifferenceAmount"
      | "giftCardCashOutThreshold"
      | "maximumCountingDifference"
      | "sigCapMinAmount"
      | "minimumChangeAmount"
      | "maximumRecount"
      | "undertenderAmount"
      | "posOperation"
      | "maximumAmountAllowed"
      | "minimumAmountEntered"
      | "cashDrawerLimit"
    >,
    Partial<
      Pick<
        RetailStoreTenderTypeTable,
        | "openDrawer"
        | "omOperatingUnitNumber"
        | "lineNumInTransaction"
        | "roundingMethod"
        | "differenceAccLedgerDimensionDisplayValue"
        | "changeLineOnReceipt"
        | "connectorName"
        | "paymentTerminalId"
        | "slipFrontInPrinter"
        | "diffAccBigDiffLedgerDimensionDisplayValue"
        | "allowFloat"
        | "takenToBank"
        | "activeAccount"
        | "bankBagAccountType"
        | "safeAccountType"
        | "restrictReturnsWithoutReceipt"
        | "seekAuthorization"
        | "aboveMinimumTenderId"
        | "payAccountBill"
        | "giftCardItemId"
        | "accountTypeGiftCardCompany"
        | "tenderFlowLedgerDimensionDisplayValue"
        | "giftCardCompany"
        | "endorseCheck"
        | "ledgerDimensionDisplayValue"
        | "countingRequired"
        | "askForDate"
        | "takenToSafe"
        | "safeActiveAccount"
        | "bankBagLedgerDimensionDisplayValue"
        | "sigCapEnabled"
        | "multiplyInTenderOperations"
        | "endorsmentLine2"
        | "endorsmentLine1"
        | "frontOfCheck"
        | "compressPaymentEntries"
        | "name"
        | "hideCardInputDetailsInPos"
        | "accountType"
        | "changeTenderId"
        | "allowUndertender"
        | "allowReturnNegative"
        | "function"
        | "safeAccLedgerDimensionDisplayValue"
        | "fiscalPrinterTenderTypeBr"
        | "allowOvertender"
        | "posCountEntries"
        | "slipBackInPrinter"
        | "checkPayee"
        | "ledgerDimensionGiftCardCompanyDisplayValue"
        | "cashDrawerLimitEnabled"
      >
    > {}

export interface RetailEcoResProduct {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayProductNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  displayProductNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductType` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResProductType` |
   */
  productType: EcoResProductType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InstanceRelationType` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  instanceRelationType: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SearchName` |
   * | Type | `Edm.String` |
   */
  searchName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PdsCWProduct` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  pdsCwProduct: NoYes | null;
}

export type RetailEcoResProductId = string | { displayProductNumber: string };

export interface EditableRetailEcoResProduct
  extends Pick<RetailEcoResProduct, "instanceRelationType">,
    Partial<
      Pick<RetailEcoResProduct, "productType" | "searchName" | "pdsCwProduct">
    > {}

export interface RetailGiftCardTransactions {
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
   * | Name | `CardNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  cardNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  transactionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MCRInvoiceAccount` |
   * | Type | `Edm.String` |
   */
  mcrInvoiceAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StaffId` |
   * | Type | `Edm.String` |
   */
  staffId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Operation` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailGiftCardOperation` |
   */
  operation: RetailGiftCardOperation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceiptId` |
   * | Type | `Edm.String` |
   */
  receiptId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TerminalId` |
   * | Type | `Edm.String` |
   */
  terminalId: string | null;
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
   * | Name | `RetailChannelTable_RetailChannelId` |
   * | Type | `Edm.String` |
   */
  retailChannelTableRetailChannelId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  transactionDate: string;
}

export type RetailGiftCardTransactionsId = {
  dataAreaId: string;
  cardNumber: string;
  transactionId: string;
};

export interface EditableRetailGiftCardTransactions
  extends Pick<
      RetailGiftCardTransactions,
      | "dataAreaId"
      | "cardNumber"
      | "transactionId"
      | "amount"
      | "transactionDate"
    >,
    Partial<
      Pick<
        RetailGiftCardTransactions,
        | "mcrInvoiceAccount"
        | "staffId"
        | "operation"
        | "receiptId"
        | "terminalId"
        | "retailChannelTableRetailChannelId"
      >
    > {}

export interface RetailRecoListElements {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ListId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  listId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailRecoListElementTypeBase` |
   */
  elementType: RetailRecoListElementTypeBase | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProductNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  productNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  displayOrder: number;
}

export type RetailRecoListElementsId = {
  listId: string;
  elementType: RetailRecoListElementTypeBase | null;
  productNumber: string;
};

export interface EditableRetailRecoListElements
  extends Pick<
      RetailRecoListElements,
      "listId" | "productNumber" | "displayOrder"
    >,
    Partial<Pick<RetailRecoListElements, "elementType">> {}

export interface LoyaltyCardRewardPointNonTransactionalActivityV2Entity {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NonTransactionalActivityId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  nonTransactionalActivityId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CardNumber` |
   * | Type | `Edm.String` |
   */
  cardNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailAffiliationName` |
   * | Type | `Edm.String` |
   */
  retailAffiliationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Status` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLoyaltyCardRewardPointNonTransactionalActivityStatus` |
   */
  status: RetailLoyaltyCardRewardPointNonTransactionalActivityStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryTime` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  entryTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyOtherActivityTypeId` |
   * | Type | `Edm.String` |
   */
  loyaltyOtherActivityTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  entryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ErrorLogs` |
   * | Type | `Edm.String` |
   */
  errorLogs: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailAffiliationId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  retailAffiliationId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OMOperatingUnitNumber` |
   * | Type | `Edm.String` |
   */
  omOperatingUnitNumber: string | null;
}

export type LoyaltyCardRewardPointNonTransactionalActivityV2EntityId =
  | string
  | { nonTransactionalActivityId: string };

export interface EditableLoyaltyCardRewardPointNonTransactionalActivityV2Entity
  extends Pick<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
      "entryTime" | "entryDate" | "retailAffiliationId"
    >,
    Partial<
      Pick<
        LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
        | "cardNumber"
        | "retailAffiliationName"
        | "status"
        | "loyaltyOtherActivityTypeId"
        | "errorLogs"
        | "omOperatingUnitNumber"
      >
    > {}

export interface RetailLoyaltyCardRewardPointTransactionV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperatingUnitNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  operatingUnitNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `storeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  storeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Terminal` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  terminal: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransactionNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  transactionNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyTransactionCompany` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  loyaltyTransactionCompany: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyTransactionLineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  loyaltyTransactionLineNumber: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesOrderId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  salesOrderId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdjustmentId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  adjustmentId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CardNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  cardNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NonTransactionalActivityId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  nonTransactionalActivityId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  entryDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryTime` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  entryTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyTierLoyaltyProgramName` |
   * | Type | `Edm.String` |
   */
  loyaltyTierLoyaltyProgramName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyOtherActivityTypeName` |
   * | Type | `Edm.String` |
   */
  loyaltyOtherActivityTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLoyaltyRewardPointEntryType` |
   */
  entryType: RetailLoyaltyRewardPointEntryType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomerAccount` |
   * | Type | `Edm.String` |
   */
  customerAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SalesLineLineNum` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  salesLineLineNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RewardPointAmountQty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  rewardPointAmountQty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpirationDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expirationDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  startDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyTransactionType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLoyaltyTransactionType` |
   */
  loyaltyTransactionType: RetailLoyaltyTransactionType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomerAccountCompany` |
   * | Type | `Edm.String` |
   */
  customerAccountCompany: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Remaining` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  remaining: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyProgramName` |
   * | Type | `Edm.String` |
   */
  loyaltyProgramName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OperatorId` |
   * | Type | `Edm.String` |
   */
  operatorId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CardTenderType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailLoyaltyTenderTypeBase` |
   */
  cardTenderType: RetailLoyaltyTenderTypeBase | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailTransactionSalesTransLineNum` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  retailTransactionSalesTransLineNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceiptId` |
   * | Type | `Edm.String` |
   */
  receiptId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RewardPointId` |
   * | Type | `Edm.String` |
   */
  rewardPointId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoyaltyTierId` |
   * | Type | `Edm.String` |
   */
  loyaltyTierId: string | null;
}

export type RetailLoyaltyCardRewardPointTransactionV2Id = {
  operatingUnitNumber: string;
  storeId: string;
  terminal: string;
  transactionNumber: string;
  loyaltyTransactionCompany: string;
  loyaltyTransactionLineNumber: number;
  salesOrderId: string;
  adjustmentId: string;
  cardNumber: string;
  nonTransactionalActivityId: string;
  entryDate: string;
  entryTime: number;
};

export interface EditableRetailLoyaltyCardRewardPointTransactionV2
  extends Pick<
      RetailLoyaltyCardRewardPointTransactionV2,
      | "operatingUnitNumber"
      | "storeId"
      | "terminal"
      | "transactionNumber"
      | "loyaltyTransactionCompany"
      | "loyaltyTransactionLineNumber"
      | "salesOrderId"
      | "adjustmentId"
      | "cardNumber"
      | "nonTransactionalActivityId"
      | "entryDate"
      | "entryTime"
      | "salesLineLineNum"
      | "rewardPointAmountQty"
      | "expirationDate"
      | "startDate"
      | "remaining"
      | "retailTransactionSalesTransLineNum"
    >,
    Partial<
      Pick<
        RetailLoyaltyCardRewardPointTransactionV2,
        | "loyaltyTierLoyaltyProgramName"
        | "loyaltyOtherActivityTypeName"
        | "entryType"
        | "customerAccount"
        | "loyaltyTransactionType"
        | "customerAccountCompany"
        | "loyaltyProgramName"
        | "operatorId"
        | "cardTenderType"
        | "receiptId"
        | "rewardPointId"
        | "loyaltyTierId"
      >
    > {}

export interface RetailEcoResProductTranslation {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResProduct_DisplayProductNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResProductDisplayProductNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LanguageId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  languageId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Product` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  product: number;
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
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
}

export type RetailEcoResProductTranslationId = {
  ecoResProductDisplayProductNumber: string;
  languageId: string;
};

export interface EditableRetailEcoResProductTranslation
  extends Pick<
      RetailEcoResProductTranslation,
      "ecoResProductDisplayProductNumber" | "languageId" | "product"
    >,
    Partial<Pick<RetailEcoResProductTranslation, "name" | "description">> {}

export interface Media {
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
   * | Name | `Media` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  media: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  addressValidFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Building` |
   * | Type | `Edm.String` |
   */
  building: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressCity` |
   * | Type | `Edm.String` |
   */
  addressCity: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressState` |
   * | Type | `Edm.String` |
   */
  addressState: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GroupOfHouses` |
   * | Type | `Edm.String` |
   */
  groupOfHouses: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  addressValidTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Extension` |
   * | Type | `Edm.String` |
   */
  extension: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MobilePhone` |
   * | Type | `Edm.String` |
   */
  mobilePhone: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Telephone` |
   * | Type | `Edm.String` |
   */
  telephone: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MediaType` |
   * | Type | `Edm.String` |
   */
  mediaType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Email` |
   * | Type | `Edm.String` |
   */
  email: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressDescription` |
   * | Type | `Edm.String` |
   */
  addressDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLocationId` |
   * | Type | `Edm.String` |
   */
  addressLocationId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Fax` |
   * | Type | `Edm.String` |
   */
  fax: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Language` |
   * | Type | `Edm.String` |
   */
  language: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressStreet` |
   * | Type | `Edm.String` |
   */
  addressStreet: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressCounty` |
   * | Type | `Edm.String` |
   */
  addressCounty: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Apartment` |
   * | Type | `Edm.String` |
   */
  apartment: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InternetAddress` |
   * | Type | `Edm.String` |
   */
  internetAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Edm.String` |
   */
  settlement: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TelexNumber` |
   * | Type | `Edm.String` |
   */
  telexNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressZipCode` |
   * | Type | `Edm.String` |
   */
  addressZipCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressCountryRegionId` |
   * | Type | `Edm.String` |
   */
  addressCountryRegionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressCountryRegionISOCode` |
   * | Type | `Edm.String` |
   */
  addressCountryRegionIsoCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `vendAccount` |
   * | Type | `Edm.String` |
   */
  vendAccount: string | null;
}

export type MediaId = { dataAreaId: string; media: string };

export interface EditableMedia
  extends Pick<
      Media,
      "dataAreaId" | "media" | "addressValidFrom" | "addressValidTo"
    >,
    Partial<
      Pick<
        Media,
        | "building"
        | "addressCity"
        | "addressState"
        | "groupOfHouses"
        | "extension"
        | "description"
        | "mobilePhone"
        | "telephone"
        | "mediaType"
        | "email"
        | "addressDescription"
        | "addressLocationId"
        | "fax"
        | "language"
        | "addressStreet"
        | "addressCounty"
        | "apartment"
        | "internetAddress"
        | "settlement"
        | "telexNumber"
        | "addressZipCode"
        | "addressCountryRegionId"
        | "addressCountryRegionIsoCode"
        | "vendAccount"
      >
    > {}

export interface RetailInventItemBarcode {
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
   * | Name | `barcodeSetupId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  barcodeSetupId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `inventDimId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  inventDimId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `itemId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `itemBarCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemBarCode: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailVariantId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  retailVariantId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnitID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unitId: string;
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
   * | Name | `useForInput` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useForInput: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailShowForItem` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  retailShowForItem: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `qty` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  qty: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `useForPrinting` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  useForPrinting: NoYes | null;
}

export type RetailInventItemBarcodeId = {
  dataAreaId: string;
  barcodeSetupId: string;
  inventDimId: string;
  itemId: string;
  itemBarCode: string;
  retailVariantId: string;
  unitId: string;
};

export interface EditableRetailInventItemBarcode
  extends Pick<
      RetailInventItemBarcode,
      | "dataAreaId"
      | "barcodeSetupId"
      | "inventDimId"
      | "itemId"
      | "itemBarCode"
      | "retailVariantId"
      | "unitId"
      | "qty"
    >,
    Partial<
      Pick<
        RetailInventItemBarcode,
        | "blocked"
        | "useForInput"
        | "retailShowForItem"
        | "description"
        | "useForPrinting"
      >
    > {}

export interface RetailEcoResCategoryTranslation {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategory_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResCategoryName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategoryHierarchy_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResCategoryHierarchyName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LanguageId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  languageId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SearchText` |
   * | Type | `Edm.String` |
   */
  searchText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FriendlyName` |
   * | Type | `Edm.String` |
   */
  friendlyName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Category` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  category: number;
}

export type RetailEcoResCategoryTranslationId = {
  ecoResCategoryName: string;
  ecoResCategoryHierarchyName: string;
  languageId: string;
};

export interface EditableRetailEcoResCategoryTranslation
  extends Pick<
      RetailEcoResCategoryTranslation,
      | "ecoResCategoryName"
      | "ecoResCategoryHierarchyName"
      | "languageId"
      | "category"
    >,
    Partial<
      Pick<
        RetailEcoResCategoryTranslation,
        "searchText" | "description" | "friendlyName"
      >
    > {}

export interface RetailEcoResCategoryHierarchyRole {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NamedCategoryHierarchyRoleAsInt` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  namedCategoryHierarchyRoleAsInt: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResCategoryHierarchy_Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ecoResCategoryHierarchyName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NamedCategoryHierarchyRole` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResCategoryNamedHierarchyRole` |
   */
  namedCategoryHierarchyRole: EcoResCategoryNamedHierarchyRole | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CategoryHierarchy` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  categoryHierarchy: number;
}

export type RetailEcoResCategoryHierarchyRoleId = {
  namedCategoryHierarchyRoleAsInt: number;
  ecoResCategoryHierarchyName: string;
};

export interface EditableRetailEcoResCategoryHierarchyRole
  extends Pick<
      RetailEcoResCategoryHierarchyRole,
      | "namedCategoryHierarchyRoleAsInt"
      | "ecoResCategoryHierarchyName"
      | "categoryHierarchy"
    >,
    Partial<
      Pick<RetailEcoResCategoryHierarchyRole, "namedCategoryHierarchyRole">
    > {}

export interface RetailMediaResources {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResourceId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  resourceId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SmallImageSharedStorageId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  smallImageSharedStorageId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsCustomer` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isCustomer: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileName` |
   * | Type | `Edm.String` |
   */
  fileName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPos` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPos: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsSecuredResource` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isSecuredResource: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SizeInKilobytes` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  sizeInKilobytes: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Height` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  height: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SharedStorageId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  sharedStorageId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsWorker` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isWorker: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsExternallyHosted` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isExternallyHosted: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `isPartialUrl` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPartialUrl: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InstanceRelationType` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  instanceRelationType: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Width` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  width: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsCategory` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isCategory: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsCatalog` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isCatalog: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MediaType` |
   * | Type | `Microsoft.Dynamics.DataEntities.RetailMediaType` |
   */
  mediaType: RetailMediaType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ThumbnailSharedStorageId` |
   * | Type | `Edm.Guid` |
   * | Nullable | `false` |
   */
  thumbnailSharedStorageId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InUse` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inUse: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SmallImageUrl` |
   * | Type | `Edm.String` |
   */
  smallImageUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResourceUrl` |
   * | Type | `Edm.String` |
   */
  resourceUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ThumbnailUrl` |
   * | Type | `Edm.String` |
   */
  thumbnailUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsProduct` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isProduct: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalResourceId` |
   * | Type | `Edm.String` |
   */
  externalResourceId: string | null;
}

export type RetailMediaResourcesId = number | { resourceId: number };

export interface EditableRetailMediaResources
  extends Pick<
      RetailMediaResources,
      | "smallImageSharedStorageId"
      | "sizeInKilobytes"
      | "height"
      | "sharedStorageId"
      | "instanceRelationType"
      | "width"
      | "thumbnailSharedStorageId"
    >,
    Partial<
      Pick<
        RetailMediaResources,
        | "description"
        | "isCustomer"
        | "fileName"
        | "isPos"
        | "isSecuredResource"
        | "isWorker"
        | "isExternallyHosted"
        | "isPartialUrl"
        | "isCategory"
        | "isCatalog"
        | "mediaType"
        | "inUse"
        | "smallImageUrl"
        | "resourceUrl"
        | "thumbnailUrl"
        | "isProduct"
        | "externalResourceId"
      >
    > {}

export interface RetailEcoResCategoryHierarchy {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AxRecId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  axRecId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HierarchyModifier` |
   * | Type | `Microsoft.Dynamics.DataEntities.EcoResCategoryHierarchyModifier` |
   */
  hierarchyModifier: EcoResCategoryHierarchyModifier | null;
}

export type RetailEcoResCategoryHierarchyId = string | { name: string };

export interface EditableRetailEcoResCategoryHierarchy
  extends Pick<RetailEcoResCategoryHierarchy, "axRecId">,
    Partial<Pick<RetailEcoResCategoryHierarchy, "hierarchyModifier">> {}

export interface RetailInventTable {
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
   * | Name | `ItemId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Product` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  product: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EcoResProduct_DisplayProductNumber` |
   * | Type | `Edm.String` |
   */
  ecoResProductDisplayProductNumber: string | null;
}

export type RetailInventTableId = { dataAreaId: string; itemId: string };

export interface EditableRetailInventTable
  extends Pick<RetailInventTable, "dataAreaId" | "itemId" | "product">,
    Partial<Pick<RetailInventTable, "ecoResProductDisplayProductNumber">> {}

export interface RetailPackageLines {
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
   * | Name | `PackageId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  packageId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  itemId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PurchaseUnit` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  purchaseUnit: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Color` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  color: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Size` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  size: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Style` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  style: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfigId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  configId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Quantity` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  quantity: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LineNumber` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  lineNumber: number;
}

export type RetailPackageLinesId = {
  dataAreaId: string;
  packageId: string;
  itemId: string;
  purchaseUnit: string;
  color: string;
  size: string;
  style: string;
  configId: string;
};

export interface EditableRetailPackageLines
  extends Pick<
    RetailPackageLines,
    | "dataAreaId"
    | "packageId"
    | "itemId"
    | "purchaseUnit"
    | "color"
    | "size"
    | "style"
    | "configId"
    | "quantity"
    | "lineNumber"
  > {}

export interface RetailImages {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PictureId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  pictureId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Picture` |
   * | Type | `Edm.Binary` |
   */
  picture: string | null;
}

export type RetailImagesId = number | { pictureId: number };

export interface EditableRetailImages
  extends Partial<Pick<RetailImages, "picture">> {}

export interface MixAndMatchLineGroups {
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
   * | Name | `MixAndMatchOfferId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  mixAndMatchOfferId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MixAndMatchLineGroup` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  mixAndMatchLineGroup: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscountLineColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  discountLineColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfItemsNeeded` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  numberOfItemsNeeded: number;
}

export type MixAndMatchLineGroupsId = {
  dataAreaId: string;
  mixAndMatchOfferId: string;
  mixAndMatchLineGroup: string;
};

export interface EditableMixAndMatchLineGroups
  extends Pick<
    MixAndMatchLineGroups,
    | "dataAreaId"
    | "mixAndMatchOfferId"
    | "mixAndMatchLineGroup"
    | "discountLineColor"
    | "numberOfItemsNeeded"
  > {}

export interface CardTypes {
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
   * | Name | `TrvCreditCardType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  trvCreditCardType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrvCreditCardDesc` |
   * | Type | `Edm.String` |
   */
  trvCreditCardDesc: string | null;
}

export type CardTypesId = { dataAreaId: string; trvCreditCardType: string };

export interface EditableCardTypes
  extends Pick<CardTypes, "dataAreaId" | "trvCreditCardType">,
    Partial<Pick<CardTypes, "trvCreditCardDesc">> {}
