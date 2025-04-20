// @ts-nocheck
import {
  QStringPath,
  QGuidPath,
  QueryObject,
  QId,
  QStringParam,
  QGuidParam,
  QEnumPath,
  QNumberPath,
  QDateTimeOffsetPath,
  QNumberParam,
  QBinaryPath,
  QDateTimeOffsetParam,
} from "@odata2ts/odata-query-objects";
import type {
  VendPaymModeBankAccountsId,
  VendDependentsId,
  VendPriceAdmTransId,
  VendorReasonsId,
  VendDefaultDocumentClassV2Id,
  VendCorrectionNotesId,
  PurchaseOrderLineV2ExistAddrReadOnlyId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  RelationshipTypeBr,
  DeductionTypePersonBr,
  NoYes,
  TradeLineDlvType,
  PurchCovRef,
  McrDropShipStatus,
  InterCompanyOrigin,
  TradeWorkflowState,
  AssetTransTypePurch,
  ReturnStatusLine,
  InterCompanySkipUpdate,
  VendorOperationTypeMx,
  PurchStatus,
  InventRefType,
  GsthstTaxTypeCa,
  LineDeliveryType,
  PurchMatchingPolicyOption,
  PurchaseType,
  PurchPurchaseOrderCreationMethod,
  PriceDiscSystemSource,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QVendPaymModeBankAccounts extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly lineId = new QGuidPath(this.withPrefix("LineId"));
  public readonly defaultDimensionDisplayValue = new QStringPath(
    this.withPrefix("DefaultDimensionDisplayValue"),
  );
  public readonly currencyCode = new QStringPath(
    this.withPrefix("CurrencyCode"),
  );
  public readonly paymMode = new QStringPath(this.withPrefix("PaymMode"));
  public readonly bankAccountId = new QStringPath(
    this.withPrefix("BankAccountID"),
  );
}

export const qVendPaymModeBankAccounts = new QVendPaymModeBankAccounts();

export class QVendPaymModeBankAccountsId extends QId<VendPaymModeBankAccountsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QGuidParam("LineId", "lineId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QVendDependents extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly relationshipType = new QEnumPath(
    this.withPrefix("RelationshipType"),
    RelationshipTypeBr,
  );
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly cpfNum = new QStringPath(this.withPrefix("CPFNum"));
  public readonly vendTableAccountNum = new QStringPath(
    this.withPrefix("VendTable_AccountNum"),
  );
  public readonly deductionType = new QEnumPath(
    this.withPrefix("DeductionType"),
    DeductionTypePersonBr,
  );
}

export const qVendDependents = new QVendDependents();

export class QVendDependentsId extends QId<VendDependentsId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QVendPriceAdmTrans extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly journalNum = new QStringPath(this.withPrefix("JournalNum"));
  public readonly lineNum = new QNumberPath(this.withPrefix("LineNum"));
  public readonly warehouse = new QStringPath(this.withPrefix("Warehouse"));
  public readonly inventoryStatus = new QStringPath(
    this.withPrefix("InventoryStatus"),
  );
  public readonly priceCharges = new QNumberPath(
    this.withPrefix("PriceCharges"),
  );
  public readonly licensePlate = new QStringPath(
    this.withPrefix("LicensePlate"),
  );
  public readonly style = new QStringPath(this.withPrefix("Style"));
  public readonly currency = new QStringPath(this.withPrefix("Currency"));
  public readonly unitId = new QStringPath(this.withPrefix("UnitId"));
  public readonly serialNumber = new QStringPath(
    this.withPrefix("SerialNumber"),
  );
  public readonly priceUnit = new QNumberPath(this.withPrefix("PriceUnit"));
  public readonly color = new QStringPath(this.withPrefix("Color"));
  public readonly toDate = new QDateTimeOffsetPath(this.withPrefix("ToDate"));
  public readonly batchNumber = new QStringPath(this.withPrefix("BatchNumber"));
  public readonly productProfile = new QStringPath(
    this.withPrefix("ProductProfile"),
  );
  public readonly nameSim = new QStringPath(this.withPrefix("NameSim"));
  public readonly fromDate = new QDateTimeOffsetPath(
    this.withPrefix("FromDate"),
  );
  public readonly location = new QStringPath(this.withPrefix("Location"));
  public readonly configuration = new QStringPath(
    this.withPrefix("Configuration"),
  );
  public readonly productGtd = new QStringPath(this.withPrefix("ProductGtd"));
  public readonly site = new QStringPath(this.withPrefix("Site"));
  public readonly amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly size = new QStringPath(this.withPrefix("Size"));
  public readonly itemNum = new QStringPath(this.withPrefix("ItemNum"));
  public readonly owner = new QStringPath(this.withPrefix("Owner"));
}

export const qVendPriceAdmTrans = new QVendPriceAdmTrans();

export class QVendPriceAdmTransId extends QId<VendPriceAdmTransId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("JournalNum", "journalNum"),
    new QNumberParam("LineNum", "lineNum"),
  ];

  getParams() {
    return this.params;
  }
}

export class QVendorReasons extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly reasonCode = new QStringPath(this.withPrefix("ReasonCode"));
  public readonly purposeCode = new QEnumPath(
    this.withPrefix("PurposeCode"),
    NoYes,
  );
  public readonly forVendorTransactionType = new QEnumPath(
    this.withPrefix("ForVendorTransactionType"),
    NoYes,
  );
  public readonly defaultComment = new QStringPath(
    this.withPrefix("DefaultComment"),
  );
  public readonly cancellationReason = new QEnumPath(
    this.withPrefix("CancellationReason"),
    NoYes,
  );
}

export const qVendorReasons = new QVendorReasons();

export class QVendorReasonsId extends QId<VendorReasonsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ReasonCode", "reasonCode"),
  ];

  getParams() {
    return this.params;
  }
}

export class QVendDefaultDocumentClassV2 extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly accountTypeGroupId = new QStringPath(
    this.withPrefix("AccountTypeGroupId"),
  );
  public readonly creditJournalLineVcId = new QStringPath(
    this.withPrefix("CreditJournalLineVCId"),
  );
  public readonly packingSlipVcId = new QStringPath(
    this.withPrefix("PackingSlipVCId"),
  );
  public readonly refoundRemissionVcId = new QStringPath(
    this.withPrefix("RefoundRemissionVCId"),
  );
  public readonly defaultPaymentDocumentClassId = new QStringPath(
    this.withPrefix("DefaultPaymentDocumentClassId"),
  );
  public readonly purchCreditNoteVcId = new QStringPath(
    this.withPrefix("PurchCreditNoteVCId"),
  );
  public readonly purchInvoiceVcId = new QStringPath(
    this.withPrefix("PurchInvoiceVCId"),
  );
  public readonly debitJournalLineVcId = new QStringPath(
    this.withPrefix("DebitJournalLineVCId"),
  );
}

export const qVendDefaultDocumentClassV2 = new QVendDefaultDocumentClassV2();

export class QVendDefaultDocumentClassV2Id extends QId<VendDefaultDocumentClassV2Id> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("AccountTypeGroupId", "accountTypeGroupId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QVendCorrectionNotes extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly correctionNoteId = new QStringPath(
    this.withPrefix("CorrectionNoteId"),
  );
  public readonly invoice = new QStringPath(this.withPrefix("Invoice"));
  public readonly invoiceAccount = new QStringPath(
    this.withPrefix("InvoiceAccount"),
  );
  public readonly posted = new QEnumPath(this.withPrefix("Posted"), NoYes);
  public readonly date = new QDateTimeOffsetPath(this.withPrefix("Date"));
  public readonly originalText = new QStringPath(
    this.withPrefix("OriginalText"),
  );
  public readonly documentDate = new QDateTimeOffsetPath(
    this.withPrefix("DocumentDate"),
  );
  public readonly correctedText = new QStringPath(
    this.withPrefix("CorrectedText"),
  );
}

export const qVendCorrectionNotes = new QVendCorrectionNotes();

export class QVendCorrectionNotesId extends QId<VendCorrectionNotesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("CorrectionNoteId", "correctionNoteId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPurchaseOrderLineV2ExistAddrReadOnly extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly deliveryAddressLocationId = new QStringPath(
    this.withPrefix("DeliveryAddressLocationId"),
  );
  public readonly deliveryValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("DeliveryValidFrom"),
  );
  public readonly deliveryType = new QEnumPath(
    this.withPrefix("DeliveryType"),
    TradeLineDlvType,
  );
  public readonly covRef = new QEnumPath(
    this.withPrefix("CovRef"),
    PurchCovRef,
  );
  public readonly itemRouteId = new QStringPath(this.withPrefix("ItemRouteId"));
  public readonly priceUnit = new QNumberPath(this.withPrefix("PriceUnit"));
  public readonly vendAccount = new QStringPath(this.withPrefix("VendAccount"));
  public readonly purchPrice = new QNumberPath(this.withPrefix("PurchPrice"));
  public readonly discPercent = new QNumberPath(this.withPrefix("DiscPercent"));
  public readonly origStateId = new QStringPath(this.withPrefix("OrigStateId"));
  public readonly projTaxGroupId = new QStringPath(
    this.withPrefix("ProjTaxGroupId"),
  );
  public readonly reqAttention = new QStringPath(
    this.withPrefix("ReqAttention"),
  );
  public readonly mcrDropShipStatus = new QEnumPath(
    this.withPrefix("MCRDropShipStatus"),
    McrDropShipStatus,
  );
  public readonly tamItemVendRebateGroupId = new QStringPath(
    this.withPrefix("TAMItemVendRebateGroupId"),
  );
  public readonly retailLineNumEx1 = new QNumberPath(
    this.withPrefix("RetailLineNumEx1"),
  );
  public readonly vendGroup = new QStringPath(this.withPrefix("VendGroup"));
  public readonly interCompanyOrigin = new QEnumPath(
    this.withPrefix("InterCompanyOrigin"),
    InterCompanyOrigin,
  );
  public readonly shippingDateRequested = new QDateTimeOffsetPath(
    this.withPrefix("ShippingDateRequested"),
  );
  public readonly pdsCwInventReceivedNow = new QNumberPath(
    this.withPrefix("PdsCWInventReceivedNow"),
  );
  public readonly wfDeliveryDueState = new QEnumPath(
    this.withPrefix("WfDeliveryDueState"),
    TradeWorkflowState,
  );
  public readonly wfInvReceivedState = new QEnumPath(
    this.withPrefix("WfInvReceivedState"),
    TradeWorkflowState,
  );
  public readonly skipCreateMarkup = new QEnumPath(
    this.withPrefix("SkipCreateMarkup"),
    NoYes,
  );
  public readonly externalItemId = new QStringPath(
    this.withPrefix("ExternalItemId"),
  );
  public readonly createFixedAsset = new QEnumPath(
    this.withPrefix("CreateFixedAsset"),
    NoYes,
  );
  public readonly assetTransTypePurch = new QEnumPath(
    this.withPrefix("AssetTransTypePurch"),
    AssetTransTypePurch,
  );
  public readonly pdsCwRemainInventPhysical = new QNumberPath(
    this.withPrefix("PdsCWRemainInventPhysical"),
  );
  public readonly remainPurchPhysical = new QNumberPath(
    this.withPrefix("RemainPurchPhysical"),
  );
  public readonly assetId = new QStringPath(this.withPrefix("AssetId"));
  public readonly rboPackageLineNum = new QNumberPath(
    this.withPrefix("RBOPackageLineNum"),
  );
  public readonly taxItemGroup = new QStringPath(
    this.withPrefix("TaxItemGroup"),
  );
  public readonly workflowState = new QEnumPath(
    this.withPrefix("WorkflowState"),
    TradeWorkflowState,
  );
  public readonly inventRefId = new QStringPath(this.withPrefix("InventRefId"));
  public readonly remainder = new QNumberPath(this.withPrefix("Remainder"));
  public readonly pdsCwRemainInventFinancial = new QNumberPath(
    this.withPrefix("PdsCWRemainInventFinancial"),
  );
  public readonly purchReceivedNow = new QNumberPath(
    this.withPrefix("PurchReceivedNow"),
  );
  public readonly reqPoId = new QStringPath(this.withPrefix("ReqPOId"));
  public readonly serviceAddress = new QStringPath(
    this.withPrefix("ServiceAddress"),
  );
  public readonly isDeleted = new QEnumPath(
    this.withPrefix("IsDeleted"),
    NoYes,
  );
  public readonly inventRefTransId = new QStringPath(
    this.withPrefix("InventRefTransId"),
  );
  public readonly port = new QStringPath(this.withPrefix("Port"));
  public readonly complete = new QEnumPath(this.withPrefix("Complete"), NoYes);
  public readonly mcrDropShipComment = new QStringPath(
    this.withPrefix("MCRDropShipComment"),
  );
  public readonly transactionCode = new QStringPath(
    this.withPrefix("TransactionCode"),
  );
  public readonly serviceDate = new QDateTimeOffsetPath(
    this.withPrefix("ServiceDate"),
  );
  public readonly qtyOrdered = new QNumberPath(this.withPrefix("QtyOrdered"));
  public readonly deliveryDate = new QDateTimeOffsetPath(
    this.withPrefix("DeliveryDate"),
  );
  public readonly depreciationStartDate = new QDateTimeOffsetPath(
    this.withPrefix("DepreciationStartDate"),
  );
  public readonly isInvoiceMatched = new QEnumPath(
    this.withPrefix("IsInvoiceMatched"),
    NoYes,
  );
  public readonly inventTransId = new QStringPath(
    this.withPrefix("InventTransId"),
  );
  public readonly inventDimId = new QStringPath(this.withPrefix("InventDimId"));
  public readonly shippingDateConfirmed = new QDateTimeOffsetPath(
    this.withPrefix("ShippingDateConfirmed"),
  );
  public readonly packedWhsLine = new QBinaryPath(
    this.withPrefix("PackedWHSLine"),
  );
  public readonly isAddedByChannel = new QEnumPath(
    this.withPrefix("IsAddedByChannel"),
    NoYes,
  );
  public readonly remainInventFinancial = new QNumberPath(
    this.withPrefix("RemainInventFinancial"),
  );
  public readonly customerRef = new QStringPath(this.withPrefix("CustomerRef"));
  public readonly transport = new QStringPath(this.withPrefix("Transport"));
  public readonly purchReqId = new QStringPath(this.withPrefix("PurchReqId"));
  public readonly confirmedTaxWriteCode = new QStringPath(
    this.withPrefix("ConfirmedTaxWriteCode"),
  );
  public readonly overDeliveryPct = new QNumberPath(
    this.withPrefix("OverDeliveryPct"),
  );
  public readonly isModified = new QEnumPath(
    this.withPrefix("IsModified"),
    NoYes,
  );
  public readonly multiLnPercent = new QNumberPath(
    this.withPrefix("MultiLnPercent"),
  );
  public readonly custPurchaseOrderFormNum = new QStringPath(
    this.withPrefix("CustPurchaseOrderFormNum"),
  );
  public readonly blocked = new QEnumPath(this.withPrefix("Blocked"), NoYes);
  public readonly projSalesCurrencyId = new QStringPath(
    this.withPrefix("ProjSalesCurrencyId"),
  );
  public readonly intercompanyOsoSourcingInventSiteId = new QStringPath(
    this.withPrefix("IntercompanyOSOSourcingInventSiteId"),
  );
  public readonly discAmount = new QNumberPath(this.withPrefix("DiscAmount"));
  public readonly returnStatus = new QEnumPath(
    this.withPrefix("ReturnStatus"),
    ReturnStatusLine,
  );
  public readonly linePercent = new QNumberPath(this.withPrefix("LinePercent"));
  public readonly countyOrigDest = new QStringPath(
    this.withPrefix("CountyOrigDest"),
  );
  public readonly lineDisc = new QNumberPath(this.withPrefix("LineDisc"));
  public readonly assetBookId = new QStringPath(this.withPrefix("AssetBookId"));
  public readonly projSalesPrice = new QNumberPath(
    this.withPrefix("ProjSalesPrice"),
  );
  public readonly barCode = new QStringPath(this.withPrefix("BarCode"));
  public readonly currencyCode = new QStringPath(
    this.withPrefix("CurrencyCode"),
  );
  public readonly purchId = new QStringPath(this.withPrefix("PurchId"));
  public readonly mcrDropShipment = new QEnumPath(
    this.withPrefix("MCRDropShipment"),
    NoYes,
  );
  public readonly isPwp = new QEnumPath(this.withPrefix("IsPwp"), NoYes);
  public readonly retailTempValueEx2 = new QNumberPath(
    this.withPrefix("RetailTempValueEx2"),
  );
  public readonly shipCalendarId = new QStringPath(
    this.withPrefix("ShipCalendarId"),
  );
  public readonly taxGroup = new QStringPath(this.withPrefix("TaxGroup"));
  public readonly statProcId = new QStringPath(this.withPrefix("StatProcId"));
  public readonly origCountryRegionId = new QStringPath(
    this.withPrefix("OrigCountryRegionId"),
  );
  public readonly purchMarkup = new QNumberPath(this.withPrefix("PurchMarkup"));
  public readonly confirmedTaxAmount = new QNumberPath(
    this.withPrefix("ConfirmedTaxAmount"),
  );
  public readonly overrideSalesTax = new QEnumPath(
    this.withPrefix("OverrideSalesTax"),
    NoYes,
  );
  public readonly assetGroup = new QStringPath(this.withPrefix("AssetGroup"));
  public readonly skipUpdate = new QEnumPath(
    this.withPrefix("SkipUpdate"),
    InterCompanySkipUpdate,
  );
  public readonly lineHeader = new QStringPath(this.withPrefix("LineHeader"));
  public readonly tax1099State = new QStringPath(
    this.withPrefix("Tax1099State"),
  );
  public readonly scrap = new QEnumPath(this.withPrefix("Scrap"), NoYes);
  public readonly packedExtensions = new QBinaryPath(
    this.withPrefix("PackedExtensions"),
  );
  public readonly inventReceivedNow = new QNumberPath(
    this.withPrefix("InventReceivedNow"),
  );
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly taxAutogenerated = new QEnumPath(
    this.withPrefix("TaxAutogenerated"),
    NoYes,
  );
  public readonly inventInvoiceNow = new QNumberPath(
    this.withPrefix("InventInvoiceNow"),
  );
  public readonly retailPackageId = new QStringPath(
    this.withPrefix("RetailPackageId"),
  );
  public readonly planningPriority = new QNumberPath(
    this.withPrefix("PlanningPriority"),
  );
  public readonly skipDeliveryScheduleUpdate = new QEnumPath(
    this.withPrefix("SkipDeliveryScheduleUpdate"),
    NoYes,
  );
  public readonly itemBomId = new QStringPath(this.withPrefix("ItemBOMId"));
  public readonly deliveryName = new QStringPath(
    this.withPrefix("DeliveryName"),
  );
  public readonly intrastatFulfillmentDateHu = new QDateTimeOffsetPath(
    this.withPrefix("IntrastatFulfillmentDate_HU"),
  );
  public readonly returnActionId = new QStringPath(
    this.withPrefix("ReturnActionId"),
  );
  public readonly addressRefTableId = new QNumberPath(
    this.withPrefix("AddressRefTableId"),
  );
  public readonly confirmedDlv = new QDateTimeOffsetPath(
    this.withPrefix("ConfirmedDlv"),
  );
  public readonly projTransId = new QStringPath(this.withPrefix("ProjTransId"));
  public readonly editableInWorkflow = new QEnumPath(
    this.withPrefix("EditableInWorkflow"),
    NoYes,
  );
  public readonly purchSupplierAuxId = new QStringPath(
    this.withPrefix("PurchSupplierAuxId"),
  );
  public readonly returnDispositionCodeId = new QStringPath(
    this.withPrefix("ReturnDispositionCodeId"),
  );
  public readonly skipPriceDiscCalc = new QEnumPath(
    this.withPrefix("SkipPriceDiscCalc"),
    NoYes,
  );
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly interCompanyInventTransId = new QStringPath(
    this.withPrefix("InterCompanyInventTransId"),
  );
  public readonly operationTypeMx = new QEnumPath(
    this.withPrefix("OperationType_MX"),
    VendorOperationTypeMx,
  );
  public readonly statTriangularDeal = new QEnumPath(
    this.withPrefix("StatTriangularDeal"),
    NoYes,
  );
  public readonly agreementSkipAutoLink = new QEnumPath(
    this.withPrefix("AgreementSkipAutoLink"),
    NoYes,
  );
  public readonly intercompanyOsoSourcingInventLocationId = new QStringPath(
    this.withPrefix("IntercompanyOSOSourcingInventLocationId"),
  );
  public readonly projTaxItemGroupId = new QStringPath(
    this.withPrefix("ProjTaxItemGroupId"),
  );
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
  public readonly psaTotalRetainAmount = new QNumberPath(
    this.withPrefix("PSATotalRetainAmount"),
  );
  public readonly reqPlanIdSched = new QStringPath(
    this.withPrefix("ReqPlanIdSched"),
  );
  public readonly variantId = new QStringPath(this.withPrefix("VariantId"));
  public readonly underDeliveryPct = new QNumberPath(
    this.withPrefix("UnderDeliveryPct"),
  );
  public readonly purchUnit = new QStringPath(this.withPrefix("PurchUnit"));
  public readonly tax1099StateAmount = new QNumberPath(
    this.withPrefix("Tax1099StateAmount"),
  );
  public readonly projSalesUnitId = new QStringPath(
    this.withPrefix("ProjSalesUnitId"),
  );
  public readonly statisticValueLt = new QNumberPath(
    this.withPrefix("StatisticValue_LT"),
  );
  public readonly activityNumber = new QStringPath(
    this.withPrefix("ActivityNumber"),
  );
  public readonly lineAmount = new QNumberPath(this.withPrefix("LineAmount"));
  public readonly purchStatus = new QEnumPath(
    this.withPrefix("PurchStatus"),
    PurchStatus,
  );
  public readonly psaRetainScheduleId = new QStringPath(
    this.withPrefix("PSARetainScheduleId"),
  );
  public readonly manualModifiedField = new QNumberPath(
    this.withPrefix("ManualModifiedField"),
  );
  public readonly stockedProduct = new QEnumPath(
    this.withPrefix("StockedProduct"),
    NoYes,
  );
  public readonly tax1099Amount = new QNumberPath(
    this.withPrefix("Tax1099Amount"),
  );
  public readonly pdsCwQty = new QNumberPath(this.withPrefix("PdsCWQty"));
  public readonly itemRefType = new QEnumPath(
    this.withPrefix("ItemRefType"),
    InventRefType,
  );
  public readonly pdsCalculationId = new QStringPath(
    this.withPrefix("PDSCalculationId"),
  );
  public readonly gsthstTaxTypeCa = new QEnumPath(
    this.withPrefix("GSTHSTTaxType_CA"),
    GsthstTaxTypeCa,
  );
  public readonly remainInventPhysical = new QNumberPath(
    this.withPrefix("RemainInventPhysical"),
  );
  public readonly taxWithholdBaseCurTh = new QNumberPath(
    this.withPrefix("TaxWithholdBaseCur_TH"),
  );
  public readonly taxServiceCodeBr = new QStringPath(
    this.withPrefix("TaxServiceCode_BR"),
  );
  public readonly lineDeliveryType = new QEnumPath(
    this.withPrefix("LineDeliveryType"),
    LineDeliveryType,
  );
  public readonly remainPurchFinancial = new QNumberPath(
    this.withPrefix("RemainPurchFinancial"),
  );
  public readonly matchingPolicy = new QEnumPath(
    this.withPrefix("MatchingPolicy"),
    PurchMatchingPolicyOption,
  );
  public readonly purchaseType = new QEnumPath(
    this.withPrefix("PurchaseType"),
    PurchaseType,
  );
  public readonly taxWithholdGroupTh = new QStringPath(
    this.withPrefix("TaxWithholdGroup_TH"),
  );
  public readonly isFinalized = new QEnumPath(
    this.withPrefix("IsFinalized"),
    NoYes,
  );
  public readonly projCategoryId = new QStringPath(
    this.withPrefix("ProjCategoryId"),
  );
  public readonly purchQty = new QNumberPath(this.withPrefix("PurchQty"));
  public readonly purchaseOrderLineCreationMethod = new QEnumPath(
    this.withPrefix("PurchaseOrderLineCreationMethod"),
    PurchPurchaseOrderCreationMethod,
  );
  public readonly projLinePropertyId = new QStringPath(
    this.withPrefix("ProjLinePropertyId"),
  );
  public readonly barCodeType = new QStringPath(this.withPrefix("BarCodeType"));
  public readonly systemEntrySource = new QEnumPath(
    this.withPrefix("SystemEntrySource"),
    PriceDiscSystemSource,
  );
  public readonly multiLnDisc = new QNumberPath(this.withPrefix("MultiLnDisc"));
  public readonly syncIntercompanySalesLine = new QEnumPath(
    this.withPrefix("SyncIntercompanySalesLine"),
    NoYes,
  );
  public readonly purchReqLineRefId = new QGuidPath(
    this.withPrefix("PurchReqLineRefId"),
  );
  public readonly formattedDeliveryAddress = new QStringPath(
    this.withPrefix("FormattedDeliveryAddress"),
  );
  public readonly projId = new QStringPath(this.withPrefix("ProjId"));
}

export const qPurchaseOrderLineV2ExistAddrReadOnly =
  new QPurchaseOrderLineV2ExistAddrReadOnly();

export class QPurchaseOrderLineV2ExistAddrReadOnlyId extends QId<PurchaseOrderLineV2ExistAddrReadOnlyId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("DeliveryAddressLocationId", "deliveryAddressLocationId"),
    new QDateTimeOffsetParam("DeliveryValidFrom", "deliveryValidFrom"),
  ];

  getParams() {
    return this.params;
  }
}
