// @ts-nocheck
import {
  QStringPath,
  QNumberPath,
  QDateTimeOffsetPath,
  QEnumPath,
  QueryObject,
  QId,
  QStringParam,
  QNumberParam,
  QDateTimeOffsetParam,
  QEnumParam,
} from "@odata2ts/odata-query-objects";
import type {
  WarrantyTransactionSalesId,
  DirParametersId,
  PriceTermJournalTransId,
  SalesAutomaticSalesDocumentHeaderChargeId,
  GupParametersId,
  BusinessDocumentDocumentParametersId,
  SalesAutomaticSalesDocumentHeaderChargesId,
  CdsPostalAddressHistoryId,
  PartyLocationPrivateRolesId,
  ReturnFormatErrorCodesId,
  CustomerParametersId,
  SalesInvoiceQrCodeId,
  SubBillMassTerminationScheduleHeaderAndLinesId,
  DeliveryModeId,
  BusinessDocumentElectronicInvoiceFrameworkTableEntityId,
  SalesAgreementSalesTransId,
  MixAndMatchLineGroupsId,
  CdsPostalAddressHistoryV2Id,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  WarrantySalesAction,
  NoYes,
  DirPartyBaseType,
  GupPricingRuleExclusionType,
  MarkupCategory,
  GupFreeItemConcurrencyControlModel,
  RetailBookingLedgerAccountTypeBase,
  GupActivePriceCalcPriceRule,
  GupBasePriceType,
  GupFreeItemCalculationBase,
  GupPriceComponentCodeMaintenanceMode,
  GupBasePriceVersionPriceBasis,
  GupActivePriceCalcPriceBasis,
  SalesPriceDateType,
  GupBasePriceVersionPriceRule,
  Timezone,
  CustInvoiceLinePriority,
  UseFiscalInvoiceAccount,
  TypeOfCreditmaxCheck,
  CustPostedPrinted,
  CustInterestAdjustmentDateToUse,
  CustLanguageAccountType,
  CustSettlementProrationType,
  MarkupValueBase,
  CreditCardEstShippingChargeType,
  ItemCust,
  CustTableChangeProposalDataEntityBehavior,
  UnspecificSpecific,
  CreditLineErrorType,
  MarkupPeriodChargeRuleSiteLocationMatch,
  CustInterestCalc,
  MarkupPeriodChargeRuleQtyThresholdMatch,
  LedgerJournalAcType,
  CustVendShowTransaction,
  CustVendExchAdjRateSource,
  SalesReturnDeliverRemainderPolicy,
  CustCollectionLetterGenerationLevel,
  TaxVatNumCountryRegionType,
  TamDeductionCustPaymSettleMethod,
  McrItemCustCatalog,
  CustSettlePrepaymentVatTypeRu,
  ErrorTolerance,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QWarrantyTransactionSales extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly warrantablePartyNumber = new QStringPath(
    this.withPrefix("WarrantablePartyNumber"),
  );
  public readonly warrantableStore = new QStringPath(
    this.withPrefix("WarrantableStore"),
  );
  public readonly warrantableTerminalId = new QStringPath(
    this.withPrefix("WarrantableTerminalId"),
  );
  public readonly warrantableTransactionId = new QStringPath(
    this.withPrefix("WarrantableTransactionId"),
  );
  public readonly warrantableLineNum = new QNumberPath(
    this.withPrefix("WarrantableLineNum"),
  );
  public readonly transactionDateTime = new QDateTimeOffsetPath(
    this.withPrefix("TransactionDateTime"),
  );
  public readonly action = new QEnumPath(
    this.withPrefix("Action"),
    WarrantySalesAction,
  );
  public readonly warrantyPartyNumber = new QStringPath(
    this.withPrefix("WarrantyPartyNumber"),
  );
  public readonly warrantyStore = new QStringPath(
    this.withPrefix("WarrantyStore"),
  );
  public readonly warrantyTerminalId = new QStringPath(
    this.withPrefix("WarrantyTerminalId"),
  );
  public readonly warrantyTransactionId = new QStringPath(
    this.withPrefix("WarrantyTransactionId"),
  );
  public readonly warrantyLineNum = new QNumberPath(
    this.withPrefix("WarrantyLineNum"),
  );
  public readonly warrantableOmOperatingUnitNumber = new QStringPath(
    this.withPrefix("WarrantableOMOperatingUnitNumber"),
  );
  public readonly warrantyOmOperatingUnitNumber = new QStringPath(
    this.withPrefix("WarrantyOMOperatingUnitNumber"),
  );
  public readonly warrantableSerialId = new QStringPath(
    this.withPrefix("WarrantableSerialId"),
  );
}

export const qWarrantyTransactionSales = new QWarrantyTransactionSales();

export class QWarrantyTransactionSalesId extends QId<WarrantyTransactionSalesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("WarrantablePartyNumber", "warrantablePartyNumber"),
    new QStringParam("WarrantableStore", "warrantableStore"),
    new QStringParam("WarrantableTerminalId", "warrantableTerminalId"),
    new QStringParam("WarrantableTransactionId", "warrantableTransactionId"),
    new QNumberParam("WarrantableLineNum", "warrantableLineNum"),
    new QDateTimeOffsetParam("TransactionDateTime", "transactionDateTime"),
    new QEnumParam("Action", "action"),
    new QStringParam("WarrantyPartyNumber", "warrantyPartyNumber"),
    new QStringParam("WarrantyStore", "warrantyStore"),
    new QStringParam("WarrantyTerminalId", "warrantyTerminalId"),
    new QStringParam("WarrantyTransactionId", "warrantyTransactionId"),
    new QNumberParam("WarrantyLineNum", "warrantyLineNum"),
  ];

  getParams() {
    return this.params;
  }
}

export class QDirParameters extends QueryObject {
  public readonly key = new QNumberPath(this.withPrefix("Key"));
  public readonly nameSequence = new QStringPath(
    this.withPrefix("NameSequence"),
  );
  public readonly dunsDisplayOnAddress = new QEnumPath(
    this.withPrefix("DunsDisplayOnAddress"),
    NoYes,
  );
  public readonly defaultPartyType = new QEnumPath(
    this.withPrefix("DefaultPartyType"),
    DirPartyBaseType,
  );
  public readonly enableEditForExternallyMaintainedFields = new QEnumPath(
    this.withPrefix("EnableEditForExternallyMaintainedFields"),
    NoYes,
  );
  public readonly deletePartiesWithNoRole = new QEnumPath(
    this.withPrefix("DeletePartiesWithNoRole"),
    NoYes,
  );
  public readonly useDuplicateCheck = new QEnumPath(
    this.withPrefix("UseDuplicateCheck"),
    NoYes,
  );
  public readonly dunsCheckUnique = new QEnumPath(
    this.withPrefix("DunsCheckUnique"),
    NoYes,
  );
  public readonly enableSystemRelationships = new QEnumPath(
    this.withPrefix("EnableSystemRelationships"),
    NoYes,
  );
  public readonly enableEmailAddressFieldValidation = new QEnumPath(
    this.withPrefix("EnableEmailAddressFieldValidation"),
    NoYes,
  );
}

export const qDirParameters = new QDirParameters();

export class QDirParametersId extends QId<DirParametersId> {
  private readonly params = [new QNumberParam("Key", "key")];

  getParams() {
    return this.params;
  }
}

export class QPriceTermJournalTrans extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly agreementId = new QStringPath(this.withPrefix("AgreementId"));
  public readonly lineNum = new QNumberPath(this.withPrefix("LineNum"));
  public readonly warehouse = new QStringPath(this.withPrefix("Warehouse"));
  public readonly inventoryStatus = new QStringPath(
    this.withPrefix("InventoryStatus"),
  );
  public readonly licensePlate = new QStringPath(
    this.withPrefix("LicensePlate"),
  );
  public readonly value = new QNumberPath(this.withPrefix("Value"));
  public readonly style = new QStringPath(this.withPrefix("Style"));
  public readonly unitId = new QStringPath(this.withPrefix("UnitId"));
  public readonly priceAttributeGroup = new QStringPath(
    this.withPrefix("PriceAttributeGroup"),
  );
  public readonly serialNumber = new QStringPath(
    this.withPrefix("SerialNumber"),
  );
  public readonly line11 = new QStringPath(this.withPrefix("Line11"));
  public readonly combinationLineStructure = new QStringPath(
    this.withPrefix("CombinationLineStructure"),
  );
  public readonly color = new QStringPath(this.withPrefix("Color"));
  public readonly batchNumber = new QStringPath(this.withPrefix("BatchNumber"));
  public readonly line13 = new QStringPath(this.withPrefix("Line13"));
  public readonly line15 = new QStringPath(this.withPrefix("Line15"));
  public readonly compoundCalculationBasis = new QEnumPath(
    this.withPrefix("CompoundCalculationBasis"),
    NoYes,
  );
  public readonly line7 = new QStringPath(this.withPrefix("Line7"));
  public readonly line6 = new QStringPath(this.withPrefix("Line6"));
  public readonly line5 = new QStringPath(this.withPrefix("Line5"));
  public readonly line4 = new QStringPath(this.withPrefix("Line4"));
  public readonly line3 = new QStringPath(this.withPrefix("Line3"));
  public readonly line2 = new QStringPath(this.withPrefix("Line2"));
  public readonly line1 = new QStringPath(this.withPrefix("Line1"));
  public readonly location = new QStringPath(this.withPrefix("Location"));
  public readonly line9 = new QStringPath(this.withPrefix("Line9"));
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly line8 = new QStringPath(this.withPrefix("Line8"));
  public readonly configuration = new QStringPath(
    this.withPrefix("Configuration"),
  );
  public readonly lineExclusionType = new QEnumPath(
    this.withPrefix("LineExclusionType"),
    GupPricingRuleExclusionType,
  );
  public readonly code = new QStringPath(this.withPrefix("Code"));
  public readonly line10 = new QStringPath(this.withPrefix("Line10"));
  public readonly site = new QStringPath(this.withPrefix("Site"));
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly lineExclusion = new QStringPath(
    this.withPrefix("LineExclusion"),
  );
  public readonly size = new QStringPath(this.withPrefix("Size"));
  public readonly line12 = new QStringPath(this.withPrefix("Line12"));
  public readonly line14 = new QStringPath(this.withPrefix("Line14"));
  public readonly owner = new QStringPath(this.withPrefix("Owner"));
}

export const qPriceTermJournalTrans = new QPriceTermJournalTrans();

export class QPriceTermJournalTransId extends QId<PriceTermJournalTransId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("AgreementId", "agreementId"),
    new QNumberParam("LineNum", "lineNum"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSalesAutomaticSalesDocumentHeaderCharge extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
  public readonly toDate = new QDateTimeOffsetPath(this.withPrefix("ToDate"));
  public readonly value = new QNumberPath(this.withPrefix("Value"));
  public readonly isCompound = new QEnumPath(
    this.withPrefix("IsCompound"),
    NoYes,
  );
  public readonly toTotalLineAmount = new QNumberPath(
    this.withPrefix("ToTotalLineAmount"),
  );
  public readonly salesDocumentCurrencyCode = new QStringPath(
    this.withPrefix("SalesDocumentCurrencyCode"),
  );
  public readonly salesTaxGroupCode = new QStringPath(
    this.withPrefix("SalesTaxGroupCode"),
  );
  public readonly inventLocationId = new QStringPath(
    this.withPrefix("InventLocationId"),
  );
  public readonly fromDate = new QDateTimeOffsetPath(
    this.withPrefix("FromDate"),
  );
  public readonly sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly salesChargeCode = new QStringPath(
    this.withPrefix("SalesChargeCode"),
  );
  public readonly chargeAccountingCurrencyCode = new QStringPath(
    this.withPrefix("ChargeAccountingCurrencyCode"),
  );
  public readonly inventSiteId = new QStringPath(
    this.withPrefix("InventSiteId"),
  );
  public readonly willInvoiceProcessingKeepCharge = new QEnumPath(
    this.withPrefix("WillInvoiceProcessingKeepCharge"),
    NoYes,
  );
  public readonly chargeCategory = new QEnumPath(
    this.withPrefix("ChargeCategory"),
    MarkupCategory,
  );
  public readonly fromTotalLineAmount = new QNumberPath(
    this.withPrefix("FromTotalLineAmount"),
  );
}

export const qSalesAutomaticSalesDocumentHeaderCharge =
  new QSalesAutomaticSalesDocumentHeaderCharge();

export class QSalesAutomaticSalesDocumentHeaderChargeId extends QId<SalesAutomaticSalesDocumentHeaderChargeId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("Description", "description"),
    new QNumberParam("LineNumber", "lineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QGupParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly freeItemConcurrencyControlModel = new QEnumPath(
    this.withPrefix("FreeItemConcurrencyControlModel"),
    GupFreeItemConcurrencyControlModel,
  );
  public readonly ledgerAccountType = new QEnumPath(
    this.withPrefix("ledgerAccountType"),
    RetailBookingLedgerAccountTypeBase,
  );
  public readonly postPeriodicDisc = new QEnumPath(
    this.withPrefix("postPeriodicDisc"),
    NoYes,
  );
  public readonly salesOrderAttributeGroupName = new QStringPath(
    this.withPrefix("SalesOrderAttributeGroupName"),
  );
  public readonly priceDiscSearchAgainDefault = new QEnumPath(
    this.withPrefix("PriceDiscSearchAgainDefault"),
    NoYes,
  );
  public readonly priceSearchWithoutAttributes = new QEnumPath(
    this.withPrefix("PriceSearchWithoutAttributes"),
    NoYes,
  );
  public readonly postPeriodicDiscountForOrders = new QEnumPath(
    this.withPrefix("PostPeriodicDiscountForOrders"),
    NoYes,
  );
  public readonly activePricePriceRule = new QEnumPath(
    this.withPrefix("ActivePrice_PriceRule"),
    GupActivePriceCalcPriceRule,
  );
  public readonly searchAutoChargesWithoutAttributes = new QEnumPath(
    this.withPrefix("SearchAutoChargesWithoutAttributes"),
    NoYes,
  );
  public readonly freeItemLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("FreeItemLedgerDimensionDisplayValue"),
  );
  public readonly enableGlobalUnifiedPricingOnSalesOrder = new QEnumPath(
    this.withPrefix("EnableGlobalUnifiedPricingOnSalesOrder"),
    NoYes,
  );
  public readonly enablePriceTree = new QEnumPath(
    this.withPrefix("EnablePriceTree"),
    NoYes,
  );
  public readonly mixMatchLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("MixMatchLedgerDimensionDisplayValue"),
  );
  public readonly postMarginComponentAdjustments = new QEnumPath(
    this.withPrefix("PostMarginComponentAdjustments"),
    NoYes,
  );
  public readonly activePriceFallbackPriceBasis = new QEnumPath(
    this.withPrefix("ActivePrice_FallbackPriceBasis"),
    GupBasePriceType,
  );
  public readonly enableDelayedPriceAndDiscountCalculation = new QEnumPath(
    this.withPrefix("EnableDelayedPriceAndDiscountCalculation"),
    NoYes,
  );
  public readonly postSalesTradeAgreementPrice = new QEnumPath(
    this.withPrefix("PostSalesTradeAgreementPrice"),
    NoYes,
  );
  public readonly thresholdLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("ThresholdLedgerDimensionDisplayValue"),
  );
  public readonly couponBarcodeSetupId = new QStringPath(
    this.withPrefix("CouponBarcodeSetupId"),
  );
  public readonly freeItemCalculationBase = new QEnumPath(
    this.withPrefix("FreeItemCalculationBase"),
    GupFreeItemCalculationBase,
  );
  public readonly defaultPriceComponentCodeMaintenanceMode = new QEnumPath(
    this.withPrefix("DefaultPriceComponentCodeMaintenanceMode"),
    GupPriceComponentCodeMaintenanceMode,
  );
  public readonly autoConfirmSalesOrderWithComplete = new QEnumPath(
    this.withPrefix("AutoConfirmSalesOrderWithComplete"),
    NoYes,
  );
  public readonly cleanupExpiredDiscountsRequiredDays = new QNumberPath(
    this.withPrefix("CleanupExpiredDiscountsRequiredDays"),
  );
  public readonly allowApplyAdjustmentsToStandardTradeAgreements =
    new QEnumPath(
      this.withPrefix("AllowApplyAdjustmentsToStandardTradeAgreements"),
      NoYes,
    );
  public readonly multiBuyLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("MultiBuyLedgerDimensionDisplayValue"),
  );
  public readonly mcrEnablePriceDetails = new QEnumPath(
    this.withPrefix("MCREnablePriceDetails"),
    NoYes,
  );
  public readonly discountVendorClaimJournalName = new QStringPath(
    this.withPrefix("DiscountVendorClaimJournalName"),
  );
  public readonly marginComponentAdjustmentDefaultLedgerDimensionDisplayValue =
    new QStringPath(
      this.withPrefix(
        "MarginComponentAdjustmentDefaultLedgerDimensionDisplayValue",
      ),
    );
  public readonly multiThreadCalculationThreadNums = new QNumberPath(
    this.withPrefix("MultiThreadCalculationThreadNums"),
  );
  public readonly holdTogetherForDiscountRounding = new QEnumPath(
    this.withPrefix("HoldTogetherForDiscountRounding"),
    NoYes,
  );
  public readonly basePricePriceBasis = new QEnumPath(
    this.withPrefix("BasePrice_PriceBasis"),
    GupBasePriceVersionPriceBasis,
  );
  public readonly activePricePriceBasis = new QEnumPath(
    this.withPrefix("ActivePrice_PriceBasis"),
    GupActivePriceCalcPriceBasis,
  );
  public readonly applyDiscountsToPriceOverrides = new QEnumPath(
    this.withPrefix("ApplyDiscountsToPriceOverrides"),
    NoYes,
  );
  public readonly applyDiscountsToPriceKeyedIn = new QEnumPath(
    this.withPrefix("ApplyDiscountsToPriceKeyedIn"),
    NoYes,
  );
  public readonly priceTreeAttributeName = new QStringPath(
    this.withPrefix("PriceTreeAttributeName"),
  );
  public readonly customerAttributeGroupName = new QStringPath(
    this.withPrefix("CustomerAttributeGroupName"),
  );
  public readonly salesTradeAgreementPriceDefaultLedgerDimensionDisplayValue =
    new QStringPath(
      this.withPrefix(
        "SalesTradeAgreementPriceDefaultLedgerDimensionDisplayValue",
      ),
    );
  public readonly priceDateType = new QEnumPath(
    this.withPrefix("PriceDateType"),
    SalesPriceDateType,
  );
  public readonly postInfocodeDisc = new QEnumPath(
    this.withPrefix("postInfocodeDisc"),
    NoYes,
  );
  public readonly basePricePriceRule = new QEnumPath(
    this.withPrefix("BasePrice_PriceRule"),
    GupBasePriceVersionPriceRule,
  );
  public readonly skipOrderCompletion = new QEnumPath(
    this.withPrefix("SkipOrderCompletion"),
    NoYes,
  );
  public readonly offerLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("OfferLedgerDimensionDisplayValue"),
  );
}

export const qGupParameters = new QGupParameters();

export class QGupParametersId extends QId<GupParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QBusinessDocumentDocumentParameters extends QueryObject {
  public readonly environmentName = new QStringPath(
    this.withPrefix("EnvironmentName"),
  );
  public readonly clientId = new QStringPath(this.withPrefix("ClientId"));
  public readonly serviceEndpoint = new QStringPath(
    this.withPrefix("ServiceEndpoint"),
  );
  public readonly tenantId = new QStringPath(this.withPrefix("TenantId"));
}

export const qBusinessDocumentDocumentParameters =
  new QBusinessDocumentDocumentParameters();

export class QBusinessDocumentDocumentParametersId extends QId<BusinessDocumentDocumentParametersId> {
  private readonly params = [
    new QStringParam("EnvironmentName", "environmentName"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSalesAutomaticSalesDocumentHeaderCharges extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly chargingCustomerAccountNumber = new QStringPath(
    this.withPrefix("ChargingCustomerAccountNumber"),
  );
  public readonly chargingChargeCustomerGroupId = new QStringPath(
    this.withPrefix("ChargingChargeCustomerGroupId"),
  );
  public readonly chargingDeliveryModeCode = new QStringPath(
    this.withPrefix("ChargingDeliveryModeCode"),
  );
  public readonly chargingChargeDeliveryGroupId = new QStringPath(
    this.withPrefix("ChargingChargeDeliveryGroupId"),
  );
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
  public readonly isCompound = new QEnumPath(
    this.withPrefix("IsCompound"),
    NoYes,
  );
  public readonly toTotalLineAmount = new QNumberPath(
    this.withPrefix("ToTotalLineAmount"),
  );
  public readonly salesDocumentCurrencyCode = new QStringPath(
    this.withPrefix("SalesDocumentCurrencyCode"),
  );
  public readonly salesTaxGroupCode = new QStringPath(
    this.withPrefix("SalesTaxGroupCode"),
  );
  public readonly sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly salesChargeCode = new QStringPath(
    this.withPrefix("SalesChargeCode"),
  );
  public readonly chargeAccountingCurrencyCode = new QStringPath(
    this.withPrefix("ChargeAccountingCurrencyCode"),
  );
  public readonly willInvoiceProcessingKeepCharge = new QEnumPath(
    this.withPrefix("WillInvoiceProcessingKeepCharge"),
    NoYes,
  );
  public readonly chargeCategory = new QEnumPath(
    this.withPrefix("ChargeCategory"),
    MarkupCategory,
  );
  public readonly fromTotalLineAmount = new QNumberPath(
    this.withPrefix("FromTotalLineAmount"),
  );
  public readonly chargePercentage = new QNumberPath(
    this.withPrefix("ChargePercentage"),
  );
  public readonly fixedChargeAmount = new QNumberPath(
    this.withPrefix("FixedChargeAmount"),
  );
}

export const qSalesAutomaticSalesDocumentHeaderCharges =
  new QSalesAutomaticSalesDocumentHeaderCharges();

export class QSalesAutomaticSalesDocumentHeaderChargesId extends QId<SalesAutomaticSalesDocumentHeaderChargesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "ChargingCustomerAccountNumber",
      "chargingCustomerAccountNumber",
    ),
    new QStringParam(
      "ChargingChargeCustomerGroupId",
      "chargingChargeCustomerGroupId",
    ),
    new QStringParam("ChargingDeliveryModeCode", "chargingDeliveryModeCode"),
    new QStringParam(
      "ChargingChargeDeliveryGroupId",
      "chargingChargeDeliveryGroupId",
    ),
    new QNumberParam("LineNumber", "lineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QCdsPostalAddressHistory extends QueryObject {
  public readonly locationId = new QStringPath(this.withPrefix("LocationId"));
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly isPrivate = new QEnumPath(
    this.withPrefix("IsPrivate"),
    NoYes,
  );
  public readonly address = new QStringPath(this.withPrefix("Address"));
  public readonly timeZone = new QEnumPath(
    this.withPrefix("TimeZone"),
    Timezone,
  );
  public readonly street = new QStringPath(this.withPrefix("Street"));
  public readonly latitude = new QNumberPath(this.withPrefix("Latitude"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly county = new QStringPath(this.withPrefix("County"));
  public readonly districtName = new QStringPath(
    this.withPrefix("DistrictName"),
  );
  public readonly longitude = new QNumberPath(this.withPrefix("Longitude"));
  public readonly city = new QStringPath(this.withPrefix("City"));
  public readonly streetNumber = new QStringPath(
    this.withPrefix("StreetNumber"),
  );
  public readonly countryRegionId = new QStringPath(
    this.withPrefix("CountryRegionId"),
  );
  public readonly state = new QStringPath(this.withPrefix("State"));
  public readonly postBox = new QStringPath(this.withPrefix("PostBox"));
  public readonly buildingCompliment = new QStringPath(
    this.withPrefix("BuildingCompliment"),
  );
  public readonly zipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly countryRegionIsoCode = new QStringPath(
    this.withPrefix("CountryRegionISOCode"),
  );
}

export const qCdsPostalAddressHistory = new QCdsPostalAddressHistory();

export class QCdsPostalAddressHistoryId extends QId<CdsPostalAddressHistoryId> {
  private readonly params = [
    new QStringParam("LocationId", "locationId"),
    new QDateTimeOffsetParam("ValidFrom", "validFrom"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPartyLocationPrivateRoles extends QueryObject {
  public readonly securityRoleName = new QStringPath(
    this.withPrefix("SecurityRoleName"),
  );
}

export const qPartyLocationPrivateRoles = new QPartyLocationPrivateRoles();

export class QPartyLocationPrivateRolesId extends QId<PartyLocationPrivateRolesId> {
  private readonly params = [
    new QStringParam("SecurityRoleName", "securityRoleName"),
  ];

  getParams() {
    return this.params;
  }
}

export class QReturnFormatErrorCodes extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly code = new QStringPath(this.withPrefix("Code"));
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
}

export const qReturnFormatErrorCodes = new QReturnFormatErrorCodes();

export class QReturnFormatErrorCodesId extends QId<ReturnFormatErrorCodesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("Code", "code"),
  ];

  getParams() {
    return this.params;
  }
}

export class QCustomerParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly creditCardPostingBankTransactionType = new QStringPath(
    this.withPrefix("CreditCardPostingBankTransactionType"),
  );
  public readonly creditCardAuthTransArchiveThreshold = new QNumberPath(
    this.withPrefix("CreditCardAuthTransArchiveThreshold"),
  );
  public readonly collectionLetterDisputedTransactionsExcluded = new QEnumPath(
    this.withPrefix("CollectionLetterDisputedTransactionsExcluded"),
    NoYes,
  );
  public readonly creditCardEstimatedShippingChargeMaximum = new QNumberPath(
    this.withPrefix("CreditCardEstimatedShippingChargeMaximum"),
  );
  public readonly settlementInvoiceLinePrioritizationMethod = new QEnumPath(
    this.withPrefix("SettlementInvoiceLinePrioritizationMethod"),
    CustInvoiceLinePriority,
  );
  public readonly isInvoiceZeroAmount = new QEnumPath(
    this.withPrefix("IsInvoiceZeroAmount"),
    NoYes,
  );
  public readonly useFiscalDataFromInvoiceAccount = new QEnumPath(
    this.withPrefix("UseFiscalDataFromInvoiceAccount"),
    UseFiscalInvoiceAccount,
  );
  public readonly cashDiscountReasonCode = new QStringPath(
    this.withPrefix("CashDiscountReasonCode"),
  );
  public readonly creditLimitCheckType = new QEnumPath(
    this.withPrefix("CreditLimitCheckType"),
    TypeOfCreditmaxCheck,
  );
  public readonly invoicePrintPackagingWeight = new QEnumPath(
    this.withPrefix("InvoicePrintPackagingWeight"),
    NoYes,
  );
  public readonly isMarkupResearchPriorPostingEnabled = new QEnumPath(
    this.withPrefix("IsMarkupResearchPriorPostingEnabled"),
    NoYes,
  );
  public readonly collectionsStatementToContactEmailTemplateId =
    new QStringPath(
      this.withPrefix("CollectionsStatementToContactEmailTemplateId"),
    );
  public readonly collectionLetterCodeUpdate = new QEnumPath(
    this.withPrefix("CollectionLetterCodeUpdate"),
    CustPostedPrinted,
  );
  public readonly settlementWriteOffReasonCode = new QStringPath(
    this.withPrefix("SettlementWriteOffReasonCode"),
  );
  public readonly settlementMaximumOverUnderPayment = new QNumberPath(
    this.withPrefix("SettlementMaximumOverUnderPayment"),
  );
  public readonly enableDateOfVatRegisterChanging = new QEnumPath(
    this.withPrefix("EnableDateOfVATRegisterChanging"),
    NoYes,
  );
  public readonly collectionsWriteOffReasonCode = new QStringPath(
    this.withPrefix("CollectionsWriteOffReasonCode"),
  );
  public readonly interestAdjustmentDateToUse = new QEnumPath(
    this.withPrefix("InterestAdjustmentDateToUse"),
    CustInterestAdjustmentDateToUse,
  );
  public readonly defaultLanguage = new QEnumPath(
    this.withPrefix("DefaultLanguage"),
    CustLanguageAccountType,
  );
  public readonly settlementProrationTypeForInvoices = new QEnumPath(
    this.withPrefix("SettlementProrationTypeForInvoices"),
    CustSettlementProrationType,
  );
  public readonly markupValueBase = new QEnumPath(
    this.withPrefix("MarkupValueBase"),
    MarkupValueBase,
  );
  public readonly creditCardPostingLedgerDimensionDisplayValue =
    new QStringPath(
      this.withPrefix("CreditCardPostingLedgerDimensionDisplayValue"),
    );
  public readonly creditCardEstimatedShippingChargeType = new QEnumPath(
    this.withPrefix("CreditCardEstimatedShippingChargeType"),
    CreditCardEstShippingChargeType,
  );
  public readonly reasonRequirementForCreditNotes = new QEnumPath(
    this.withPrefix("ReasonRequirementForCreditNotes"),
    NoYes,
  );
  public readonly interestMinimumDaysToAllowWaiving = new QNumberPath(
    this.withPrefix("InterestMinimumDaysToAllowWaiving"),
  );
  public readonly initializeAttributeBasedPricingId = new QEnumPath(
    this.withPrefix("InitializeAttributeBasedPricingID"),
    NoYes,
  );
  public readonly collectionLetterIgnoreCreditTransactionCodes = new QEnumPath(
    this.withPrefix("CollectionLetterIgnoreCreditTransactionCodes"),
    NoYes,
  );
  public readonly changeProposalIsEnabled = new QEnumPath(
    this.withPrefix("ChangeProposalIsEnabled"),
    NoYes,
  );
  public readonly generalLedgerPostingAccountForRevenue = new QEnumPath(
    this.withPrefix("GeneralLedgerPostingAccountForRevenue"),
    ItemCust,
  );
  public readonly changeProposalDataEntityBehavior = new QEnumPath(
    this.withPrefix("ChangeProposalDataEntityBehavior"),
    CustTableChangeProposalDataEntityBehavior,
  );
  public readonly editCashDiscountsWhenDueDateChanged = new QEnumPath(
    this.withPrefix("EditCashDiscountsWhenDueDateChanged"),
    NoYes,
  );
  public readonly priceDetailsEnabledForSalesDocuments = new QEnumPath(
    this.withPrefix("PriceDetailsEnabledForSalesDocuments"),
    NoYes,
  );
  public readonly cashDiscountAdministration = new QEnumPath(
    this.withPrefix("CashDiscountAdministration"),
    UnspecificSpecific,
  );
  public readonly collectionsIsReferToCollectionAgencyEnabled = new QEnumPath(
    this.withPrefix("CollectionsIsReferToCollectionAgencyEnabled"),
    NoYes,
  );
  public readonly customerIsConsolidatedInvoiceUsed = new QEnumPath(
    this.withPrefix("CustomerIsConsolidatedInvoiceUsed"),
    NoYes,
  );
  public readonly generalLedgerIsAmountDebitCreditShown = new QEnumPath(
    this.withPrefix("GeneralLedgerIsAmountDebitCreditShown"),
    NoYes,
  );
  public readonly creditCardEstimatedShippingChargeValue = new QNumberPath(
    this.withPrefix("CreditCardEstimatedShippingChargeValue"),
  );
  public readonly accountingCurrencyExchangeRateType = new QStringPath(
    this.withPrefix("AccountingCurrencyExchangeRateType"),
  );
  public readonly customerMinimumRefund = new QNumberPath(
    this.withPrefix("CustomerMinimumRefund"),
  );
  public readonly creditCardNotes = new QStringPath(
    this.withPrefix("CreditCardNotes"),
  );
  public readonly bypassValidationOfAccountingDistributions = new QEnumPath(
    this.withPrefix("BypassValidationOfAccountingDistributions"),
    NoYes,
  );
  public readonly settlementSpanBillingCodeAcrossInvoices = new QEnumPath(
    this.withPrefix("SettlementSpanBillingCodeAcrossInvoices"),
    NoYes,
  );
  public readonly creditCardAuthorization = new QEnumPath(
    this.withPrefix("CreditCardAuthorization"),
    NoYes,
  );
  public readonly entryCertificateIsManagementEnabled = new QEnumPath(
    this.withPrefix("EntryCertificateIsManagementEnabled"),
    NoYes,
  );
  public readonly freeTextInvoiceCanEditLedgerAccountForProject = new QEnumPath(
    this.withPrefix("FreeTextInvoiceCanEditLedgerAccountForProject"),
    NoYes,
  );
  public readonly customerIsTaxGroupMandatory = new QEnumPath(
    this.withPrefix("CustomerIsTaxGroupMandatory"),
    NoYes,
  );
  public readonly creditLimitIsCheckedOnFreeTextInvoice = new QEnumPath(
    this.withPrefix("CreditLimitIsCheckedOnFreeTextInvoice"),
    NoYes,
  );
  public readonly creditLimitMessageTypeShownWhenExceeding = new QEnumPath(
    this.withPrefix("CreditLimitMessageTypeShownWhenExceeding"),
    CreditLineErrorType,
  );
  public readonly freeTextInvoiceIsItemTaxGroupMandatory = new QEnumPath(
    this.withPrefix("FreeTextInvoiceIsItemTaxGroupMandatory"),
    NoYes,
  );
  public readonly creditLimitIsCheckedOnSalesOrder = new QEnumPath(
    this.withPrefix("CreditLimitIsCheckedOnSalesOrder"),
    NoYes,
  );
  public readonly markupPeriodChargeRuleSiteLocationMatch = new QEnumPath(
    this.withPrefix("MarkupPeriodChargeRuleSiteLocationMatch"),
    MarkupPeriodChargeRuleSiteLocationMatch,
  );
  public readonly interestTransactionsToCalculateFor = new QEnumPath(
    this.withPrefix("InterestTransactionsToCalculateFor"),
    CustInterestCalc,
  );
  public readonly interestMaximumDaysAllowedToWaive = new QNumberPath(
    this.withPrefix("InterestMaximumDaysAllowedToWaive"),
  );
  public readonly settlementMaximumPennyDifference = new QNumberPath(
    this.withPrefix("SettlementMaximumPennyDifference"),
  );
  public readonly isMarkupCalculationPerInvoiceForSummaryUpdateEnabled =
    new QEnumPath(
      this.withPrefix("IsMarkupCalculationPerInvoiceForSummaryUpdateEnabled"),
      NoYes,
    );
  public readonly reasonRequirementForPaymentCancellation = new QEnumPath(
    this.withPrefix("ReasonRequirementForPaymentCancellation"),
    NoYes,
  );
  public readonly collectionsTransactionsToContactEmailTemplateId =
    new QStringPath(
      this.withPrefix("CollectionsTransactionsToContactEmailTemplateId"),
    );
  public readonly creditCardAuthorizationLastNumberOfDays = new QNumberPath(
    this.withPrefix("CreditCardAuthorizationLastNumberOfDays"),
  );
  public readonly isValidationOnBillOfExchangeJournalsEnabled = new QEnumPath(
    this.withPrefix("IsValidationOnBillOfExchangeJournalsEnabled"),
    NoYes,
  );
  public readonly skipReferencedDataDuringChangeTracking = new QEnumPath(
    this.withPrefix("SkipReferencedDataDuringChangeTracking"),
    NoYes,
  );
  public readonly paymentProposalWarnWhenMultipleMethodsOfPayment =
    new QEnumPath(
      this.withPrefix("PaymentProposalWarnWhenMultipleMethodsOfPayment"),
      NoYes,
    );
  public readonly freeTextInvoiceStopInvoicePostingOnFirstError = new QEnumPath(
    this.withPrefix("FreeTextInvoiceStopInvoicePostingOnFirstError"),
    NoYes,
  );
  public readonly collectionsTeamPartyNumber = new QStringPath(
    this.withPrefix("CollectionsTeamPartyNumber"),
  );
  public readonly isDateTreatmentOfBillOfExchangeJournalsEnabled =
    new QEnumPath(
      this.withPrefix("IsDateTreatmentOfBillOfExchangeJournalsEnabled"),
      NoYes,
    );
  public readonly markupPeriodChargeRuleQtyThresholdMatch = new QEnumPath(
    this.withPrefix("MarkupPeriodChargeRuleQtyThresholdMatch"),
    MarkupPeriodChargeRuleQtyThresholdMatch,
  );
  public readonly directDebitCoreSchemeDefaultDaysForRecurringBankSubmission =
    new QNumberPath(
      this.withPrefix(
        "DirectDebitCoreSchemeDefaultDaysForRecurringBankSubmission",
      ),
    );
  public readonly isTotalsCalculationAutomatic = new QEnumPath(
    this.withPrefix("IsTotalsCalculationAutomatic"),
    NoYes,
  );
  public readonly invoiceIsCreditNotePostedAsCorrection = new QEnumPath(
    this.withPrefix("InvoiceIsCreditNotePostedAsCorrection"),
    NoYes,
  );
  public readonly totalDiscountIsCalculatedOnPosting = new QEnumPath(
    this.withPrefix("TotalDiscountIsCalculatedOnPosting"),
    NoYes,
  );
  public readonly settlementAutoSettleEnabled = new QEnumPath(
    this.withPrefix("SettlementAutoSettleEnabled"),
    NoYes,
  );
  public readonly directDebitCor1SchemeDefaultDaysForFirstBankSubmission =
    new QNumberPath(
      this.withPrefix("DirectDebitCor1SchemeDefaultDaysForFirstBankSubmission"),
    );
  public readonly settlementIsPriorityUsedOnAutoSettlement = new QEnumPath(
    this.withPrefix("SettlementIsPriorityUsedOnAutoSettlement"),
    NoYes,
  );
  public readonly useSequentialLineNumbersWhenPostingCustomerInvoiceLines =
    new QEnumPath(
      this.withPrefix(
        "UseSequentialLineNumbersWhenPostingCustomerInvoiceLines",
      ),
      NoYes,
    );
  public readonly cashFlowLiquidityAccountForPaymentsDisplayValue =
    new QStringPath(
      this.withPrefix("CashFlowLiquidityAccountForPaymentsDisplayValue"),
    );
  public readonly prepaymentCalculateTax = new QEnumPath(
    this.withPrefix("PrepaymentCalculateTax"),
    NoYes,
  );
  public readonly cashDiscountIsCalculatedForPartialPayments = new QEnumPath(
    this.withPrefix("CashDiscountIsCalculatedForPartialPayments"),
    NoYes,
  );
  public readonly creditCardPostingAccountType = new QEnumPath(
    this.withPrefix("CreditCardPostingAccountType"),
    LedgerJournalAcType,
  );
  public readonly settlementWriteOffJournalName = new QStringPath(
    this.withPrefix("SettlementWriteOffJournalName"),
  );
  public readonly billOfExchangePostingProfileForEndorsed = new QStringPath(
    this.withPrefix("BillOfExchangePostingProfileForEndorsed"),
  );
  public readonly generalLedgerPostingAccountForConsumption = new QEnumPath(
    this.withPrefix("GeneralLedgerPostingAccountForConsumption"),
    ItemCust,
  );
  public readonly cashFlowPercentageOfAmountToAllocateToCashFlowForecast =
    new QStringPath(
      this.withPrefix("CashFlowPercentageOfAmountToAllocateToCashFlowForecast"),
    );
  public readonly defaultFilterForCustomerTransactions = new QEnumPath(
    this.withPrefix("DefaultFilterForCustomerTransactions"),
    CustVendShowTransaction,
  );
  public readonly exchAdjRateSource = new QEnumPath(
    this.withPrefix("ExchAdjRateSource"),
    CustVendExchAdjRateSource,
  );
  public readonly prepaymentPostingProfile = new QStringPath(
    this.withPrefix("PrepaymentPostingProfile"),
  );
  public readonly tamDeductionRequireFullSettle = new QEnumPath(
    this.withPrefix("TAMDeductionRequireFullSettle"),
    NoYes,
  );
  public readonly generalLedgerPostingAccountForDiscount = new QEnumPath(
    this.withPrefix("GeneralLedgerPostingAccountForDiscount"),
    ItemCust,
  );
  public readonly giroAccountPositions = new QNumberPath(
    this.withPrefix("GiroAccountPositions"),
  );
  public readonly markupPeriodChargeBatchHelpers = new QNumberPath(
    this.withPrefix("MarkupPeriodChargeBatchHelpers"),
  );
  public readonly freeTextInvoiceIsProjectEnabled = new QEnumPath(
    this.withPrefix("FreeTextInvoiceIsProjectEnabled"),
    NoYes,
  );
  public readonly entryCertificateIsIssuingEnabled = new QEnumPath(
    this.withPrefix("EntryCertificateIsIssuingEnabled"),
    NoYes,
  );
  public readonly cashFlowTimeBetweenDeliveryDateAndInvoiceDate =
    new QStringPath(
      this.withPrefix("CashFlowTimeBetweenDeliveryDateAndInvoiceDate"),
    );
  public readonly directDebitMandateDefaultExpirationInMonths = new QNumberPath(
    this.withPrefix("DirectDebitMandateDefaultExpirationInMonths"),
  );
  public readonly settlementIsPriorityUsed = new QEnumPath(
    this.withPrefix("SettlementIsPriorityUsed"),
    NoYes,
  );
  public readonly generalLedgerEnableCancelPostingProfiles = new QEnumPath(
    this.withPrefix("GeneralLedgerEnableCancelPostingProfiles"),
    NoYes,
  );
  public readonly directDebitB2BSchemeDefaultDaysForRecurringBankSubmission =
    new QNumberPath(
      this.withPrefix(
        "DirectDebitB2BSchemeDefaultDaysForRecurringBankSubmission",
      ),
    );
  public readonly collectionsWriteOffIsSalesTaxSeparated = new QEnumPath(
    this.withPrefix("CollectionsWriteOffIsSalesTaxSeparated"),
    NoYes,
  );
  public readonly customerDefaultOneTimeAccount = new QStringPath(
    this.withPrefix("CustomerDefaultOneTimeAccount"),
  );
  public readonly cashFlowTimeBetweenInvoiceDueDateAndPaymentDate =
    new QStringPath(
      this.withPrefix("CashFlowTimeBetweenInvoiceDueDateAndPaymentDate"),
    );
  public readonly billOfExchangePostingProfileForRemitCollection =
    new QStringPath(
      this.withPrefix("BillOfExchangePostingProfileForRemitCollection"),
    );
  public readonly directDebitDefaultDaysForRecurringPrenotification =
    new QNumberPath(
      this.withPrefix("DirectDebitDefaultDaysForRecurringPrenotification"),
    );
  public readonly creditCardCostCenterDimensionAttribute = new QStringPath(
    this.withPrefix("CreditCardCostCenterDimensionAttribute"),
  );
  public readonly collectionsAgencyTaxRate = new QNumberPath(
    this.withPrefix("CollectionsAgencyTaxRate"),
  );
  public readonly reasonRequirementForReturnOrders = new QEnumPath(
    this.withPrefix("ReasonRequirementForReturnOrders"),
    NoYes,
  );
  public readonly billOfExchangePostingProfile = new QStringPath(
    this.withPrefix("BillOfExchangePostingProfile"),
  );
  public readonly reasonRequirementForTransactionReversals = new QEnumPath(
    this.withPrefix("ReasonRequirementForTransactionReversals"),
    NoYes,
  );
  public readonly replaceAlternativeItemLineDefaults = new QEnumPath(
    this.withPrefix("ReplaceAlternativeItemLineDefaults"),
    NoYes,
  );
  public readonly primaryRelation = new QEnumPath(
    this.withPrefix("PrimaryRelation"),
    ItemCust,
  );
  public readonly cashDiscountIsCreditNotePosted = new QEnumPath(
    this.withPrefix("CashDiscountIsCreditNotePosted"),
    NoYes,
  );
  public readonly salesReturnDeliverRemainderPolicy = new QEnumPath(
    this.withPrefix("SalesReturnDeliverRemainderPolicy"),
    SalesReturnDeliverRemainderPolicy,
  );
  public readonly salesEntityCalculateLineAmount = new QEnumPath(
    this.withPrefix("SalesEntityCalculateLineAmount"),
    NoYes,
  );
  public readonly collectionsTransactionsToSalespersonEmailTemplateId =
    new QStringPath(
      this.withPrefix("CollectionsTransactionsToSalespersonEmailTemplateId"),
    );
  public readonly collectionsAgingPeriodDefinition = new QStringPath(
    this.withPrefix("CollectionsAgingPeriodDefinition"),
  );
  public readonly markupPeriodChargeRuleIsChargeCodeMatchRequired =
    new QEnumPath(
      this.withPrefix("MarkupPeriodChargeRuleIsChargeCodeMatchRequired"),
      NoYes,
    );
  public readonly settlementMarkOpenInvoiceLine = new QEnumPath(
    this.withPrefix("SettlementMarkOpenInvoiceLine"),
    NoYes,
  );
  public readonly settlementWriteOffEnabled = new QEnumPath(
    this.withPrefix("SettlementWriteOffEnabled"),
    NoYes,
  );
  public readonly creditCardEnableIdempotencyKey = new QEnumPath(
    this.withPrefix("CreditCardEnableIdempotencyKey"),
    NoYes,
  );
  public readonly generalLedgerEnableReturnPostingProfiles = new QEnumPath(
    this.withPrefix("GeneralLedgerEnableReturnPostingProfiles"),
    NoYes,
  );
  public readonly cashDiscountIsCalculatedOnAmountInclSalesTax = new QEnumPath(
    this.withPrefix("CashDiscountIsCalculatedOnAmountInclSalesTax"),
    NoYes,
  );
  public readonly billOfExchangePostingProfileForRemitDiscount =
    new QStringPath(
      this.withPrefix("BillOfExchangePostingProfileForRemitDiscount"),
    );
  public readonly tamDeductionType = new QStringPath(
    this.withPrefix("TAMDeductionType"),
  );
  public readonly collectionLetterGenerationLevel = new QEnumPath(
    this.withPrefix("CollectionLetterGenerationLevel"),
    CustCollectionLetterGenerationLevel,
  );
  public readonly customerTaxExemptNumberRequirement = new QEnumPath(
    this.withPrefix("CustomerTaxExemptNumberRequirement"),
    TaxVatNumCountryRegionType,
  );
  public readonly directDebitB2BSchemeDefaultDaysForFirstBankSubmission =
    new QNumberPath(
      this.withPrefix("DirectDebitB2BSchemeDefaultDaysForFirstBankSubmission"),
    );
  public readonly maxNumberOfSalesOrdersForPosting = new QNumberPath(
    this.withPrefix("MaxNumberOfSalesOrdersForPosting"),
  );
  public readonly creditCardPaymentBreakDownProcess = new QEnumPath(
    this.withPrefix("CreditCardPaymentBreakDownProcess"),
    NoYes,
  );
  public readonly reportingCurrencyExchangeRateType = new QStringPath(
    this.withPrefix("ReportingCurrencyExchangeRateType"),
  );
  public readonly cashDiscountIsCalculatedForCreditNotes = new QEnumPath(
    this.withPrefix("CashDiscountIsCalculatedForCreditNotes"),
    NoYes,
  );
  public readonly invoiceTaxExemptNumberRequirement = new QEnumPath(
    this.withPrefix("InvoiceTaxExemptNumberRequirement"),
    TaxVatNumCountryRegionType,
  );
  public readonly tamDeductionCustPaymSettleMethod = new QEnumPath(
    this.withPrefix("TAMDeductionCustPaymSettleMethod"),
    TamDeductionCustPaymSettleMethod,
  );
  public readonly billOfExchangePostingProfileForProtested = new QStringPath(
    this.withPrefix("BillOfExchangePostingProfileForProtested"),
  );
  public readonly isIntegrationWithTaxSystemEnabled = new QEnumPath(
    this.withPrefix("IsIntegrationWithTaxSystemEnabled"),
    NoYes,
  );
  public readonly suppressDepreciationOfPaymentSection = new QEnumPath(
    this.withPrefix("SuppressDepreciationOfPaymentSection"),
    NoYes,
  );
  public readonly preserveImportedSalesOrderLineNumbers = new QEnumPath(
    this.withPrefix("PreserveImportedSalesOrderLineNumbers"),
    NoYes,
  );
  public readonly freeTextInvoiceOverrideSalesTax = new QEnumPath(
    this.withPrefix("FreeTextInvoiceOverrideSalesTax"),
    NoYes,
  );
  public readonly directDebitCoreSchemeDefaultDaysForFirstBankSubmission =
    new QNumberPath(
      this.withPrefix("DirectDebitCoreSchemeDefaultDaysForFirstBankSubmission"),
    );
  public readonly tamRebatePosting = new QEnumPath(
    this.withPrefix("TAMRebatePosting"),
    McrItemCustCatalog,
  );
  public readonly collectionsGracePeriodForDuesTransfer = new QNumberPath(
    this.withPrefix("CollectionsGracePeriodForDuesTransfer"),
  );
  public readonly invoicePrintCreditInvoicingLayout = new QEnumPath(
    this.withPrefix("InvoicePrintCreditInvoicingLayout"),
    NoYes,
  );
  public readonly generalLedgerPostingProfile = new QStringPath(
    this.withPrefix("GeneralLedgerPostingProfile"),
  );
  public readonly directDebitDefaultDaysForFirstPrenotification =
    new QNumberPath(
      this.withPrefix("DirectDebitDefaultDaysForFirstPrenotification"),
    );
  public readonly collectionsWriteOffLedgerJournalName = new QStringPath(
    this.withPrefix("CollectionsWriteOffLedgerJournalName"),
  );
  public readonly directDebitCor1SchemeDefaultDaysForRecurringBankSubmission =
    new QNumberPath(
      this.withPrefix(
        "DirectDebitCor1SchemeDefaultDaysForRecurringBankSubmission",
      ),
    );
  public readonly customerIsBillingClassificationUsed = new QEnumPath(
    this.withPrefix("CustomerIsBillingClassificationUsed"),
    NoYes,
  );
  public readonly skipSalesQuotationReferencedDataDuringChangeTracking =
    new QEnumPath(
      this.withPrefix("SkipSalesQuotationReferencedDataDuringChangeTracking"),
      NoYes,
    );
  public readonly applyPriceDiscOnSalesLineEntity = new QEnumPath(
    this.withPrefix("ApplyPriceDiscOnSalesLineEntity"),
    NoYes,
  );
  public readonly generalLedgerDefaultDimensionHierarchy = new QEnumPath(
    this.withPrefix("GeneralLedgerDefaultDimensionHierarchy"),
    McrItemCustCatalog,
  );
  public readonly cashFlowTermsOfPayment = new QStringPath(
    this.withPrefix("CashFlowTermsOfPayment"),
  );
  public readonly settlePrepaymentVatType = new QEnumPath(
    this.withPrefix("SettlePrepaymentVATType"),
    CustSettlePrepaymentVatTypeRu,
  );
  public readonly taxItemGroup = new QStringPath(
    this.withPrefix("TaxItemGroup"),
  );
  public readonly prepaymentFactureAutoCreate = new QEnumPath(
    this.withPrefix("PrepaymentFactureAutoCreate"),
    NoYes,
  );
  public readonly taxGroup = new QStringPath(this.withPrefix("TaxGroup"));
  public readonly reversePrepayment = new QEnumPath(
    this.withPrefix("ReversePrepayment"),
    NoYes,
  );
  public readonly deductionsCustClaimJournalName = new QStringPath(
    this.withPrefix("DeductionsCustClaimJournalName"),
  );
  public readonly deductionsReturnOrderPreApproval = new QEnumPath(
    this.withPrefix("DeductionsReturnOrderPreApproval"),
    NoYes,
  );
  public readonly deductionsReturnOrderInvoiceTolerance = new QEnumPath(
    this.withPrefix("DeductionsReturnOrderInvoiceTolerance"),
    ErrorTolerance,
  );
  public readonly deductionsReturnOrderCreate = new QEnumPath(
    this.withPrefix("DeductionsReturnOrderCreate"),
    NoYes,
  );
}

export const qCustomerParameters = new QCustomerParameters();

export class QCustomerParametersId extends QId<CustomerParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QSalesInvoiceQrCode extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly invoiceId = new QStringPath(this.withPrefix("InvoiceId"));
  public readonly ledgerVoucher = new QStringPath(
    this.withPrefix("LedgerVoucher"),
  );
  public readonly invoiceDate = new QDateTimeOffsetPath(
    this.withPrefix("InvoiceDate"),
  );
  public readonly qrCodeSa = new QStringPath(this.withPrefix("QRCode_SA"));
}

export const qSalesInvoiceQrCode = new QSalesInvoiceQrCode();

export class QSalesInvoiceQrCodeId extends QId<SalesInvoiceQrCodeId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("InvoiceId", "invoiceId"),
    new QStringParam("LedgerVoucher", "ledgerVoucher"),
    new QDateTimeOffsetParam("InvoiceDate", "invoiceDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSubBillMassTerminationScheduleHeaderAndLines extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly billingScheduleNumber = new QStringPath(
    this.withPrefix("BillingScheduleNumber"),
  );
  public readonly terminationProcessId = new QStringPath(
    this.withPrefix("TerminationProcessId"),
  );
}

export const qSubBillMassTerminationScheduleHeaderAndLines =
  new QSubBillMassTerminationScheduleHeaderAndLines();

export class QSubBillMassTerminationScheduleHeaderAndLinesId extends QId<SubBillMassTerminationScheduleHeaderAndLinesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("BillingScheduleNumber", "billingScheduleNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QDeliveryMode extends QueryObject {
  public readonly deliveryModeId = new QStringPath(
    this.withPrefix("DeliveryModeId"),
  );
  public readonly deliveryModeName = new QStringPath(
    this.withPrefix("DeliveryModeName"),
  );
}

export const qDeliveryMode = new QDeliveryMode();

export class QDeliveryModeId extends QId<DeliveryModeId> {
  private readonly params = [
    new QStringParam("DeliveryModeId", "deliveryModeId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QBusinessDocumentElectronicInvoiceFrameworkTableEntity extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly type = new QStringPath(this.withPrefix("Type"));
  public readonly projectManagerServiceCodeValidationEnabled = new QEnumPath(
    this.withPrefix("ProjectManagerServiceCodeValidationEnabled"),
    NoYes,
  );
  public readonly projectManagerSiretValidationEnabled = new QEnumPath(
    this.withPrefix("ProjectManagerSiretValidationEnabled"),
    NoYes,
  );
  public readonly invoiceAccountServiceCodeValidationEnabled = new QEnumPath(
    this.withPrefix("InvoiceAccountServiceCodeValidationEnabled"),
    NoYes,
  );
  public readonly invoiceAccountSiretValidationEnabled = new QEnumPath(
    this.withPrefix("InvoiceAccountSiretValidationEnabled"),
    NoYes,
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
}

export const qBusinessDocumentElectronicInvoiceFrameworkTableEntity =
  new QBusinessDocumentElectronicInvoiceFrameworkTableEntity();

export class QBusinessDocumentElectronicInvoiceFrameworkTableEntityId extends QId<BusinessDocumentElectronicInvoiceFrameworkTableEntityId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("Type", "type"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSalesAgreementSalesTrans extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly omOperatingUnitPartyNumber = new QStringPath(
    this.withPrefix("OMOperatingUnit_PartyNumber"),
  );
  public readonly store = new QStringPath(this.withPrefix("Store"));
  public readonly terminal = new QStringPath(this.withPrefix("Terminal"));
  public readonly transactionId = new QStringPath(
    this.withPrefix("TransactionId"),
  );
  public readonly transactionLineNumber = new QNumberPath(
    this.withPrefix("TransactionLineNumber"),
  );
  public readonly agreementLineNumber = new QNumberPath(
    this.withPrefix("AgreementLineNumber"),
  );
  public readonly salesAgreementId = new QStringPath(
    this.withPrefix("SalesAgreementId"),
  );
}

export const qSalesAgreementSalesTrans = new QSalesAgreementSalesTrans();

export class QSalesAgreementSalesTransId extends QId<SalesAgreementSalesTransId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "OMOperatingUnit_PartyNumber",
      "omOperatingUnitPartyNumber",
    ),
    new QStringParam("Store", "store"),
    new QStringParam("Terminal", "terminal"),
    new QStringParam("TransactionId", "transactionId"),
    new QNumberParam("TransactionLineNumber", "transactionLineNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QMixAndMatchLineGroups extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly mixAndMatchOfferId = new QStringPath(
    this.withPrefix("MixAndMatchOfferId"),
  );
  public readonly mixAndMatchLineGroup = new QStringPath(
    this.withPrefix("MixAndMatchLineGroup"),
  );
  public readonly discountLineColor = new QNumberPath(
    this.withPrefix("DiscountLineColor"),
  );
  public readonly numberOfItemsNeeded = new QNumberPath(
    this.withPrefix("NumberOfItemsNeeded"),
  );
}

export const qMixAndMatchLineGroups = new QMixAndMatchLineGroups();

export class QMixAndMatchLineGroupsId extends QId<MixAndMatchLineGroupsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("MixAndMatchOfferId", "mixAndMatchOfferId"),
    new QStringParam("MixAndMatchLineGroup", "mixAndMatchLineGroup"),
  ];

  getParams() {
    return this.params;
  }
}

export class QCdsPostalAddressHistoryV2 extends QueryObject {
  public readonly locationId = new QStringPath(this.withPrefix("LocationId"));
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly isPrivate = new QEnumPath(
    this.withPrefix("IsPrivate"),
    NoYes,
  );
  public readonly address = new QStringPath(this.withPrefix("Address"));
  public readonly timeZone = new QEnumPath(
    this.withPrefix("TimeZone"),
    Timezone,
  );
  public readonly street = new QStringPath(this.withPrefix("Street"));
  public readonly latitude = new QNumberPath(this.withPrefix("Latitude"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly county = new QStringPath(this.withPrefix("County"));
  public readonly districtName = new QStringPath(
    this.withPrefix("DistrictName"),
  );
  public readonly longitude = new QNumberPath(this.withPrefix("Longitude"));
  public readonly city = new QStringPath(this.withPrefix("City"));
  public readonly streetNumber = new QStringPath(
    this.withPrefix("StreetNumber"),
  );
  public readonly countryRegionId = new QStringPath(
    this.withPrefix("CountryRegionId"),
  );
  public readonly state = new QStringPath(this.withPrefix("State"));
  public readonly postBox = new QStringPath(this.withPrefix("PostBox"));
  public readonly buildingCompliment = new QStringPath(
    this.withPrefix("BuildingCompliment"),
  );
  public readonly zipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly countryRegionIsoCode = new QStringPath(
    this.withPrefix("CountryRegionISOCode"),
  );
}

export const qCdsPostalAddressHistoryV2 = new QCdsPostalAddressHistoryV2();

export class QCdsPostalAddressHistoryV2Id extends QId<CdsPostalAddressHistoryV2Id> {
  private readonly params = [
    new QStringParam("LocationId", "locationId"),
    new QDateTimeOffsetParam("ValidFrom", "validFrom"),
  ];

  getParams() {
    return this.params;
  }
}
