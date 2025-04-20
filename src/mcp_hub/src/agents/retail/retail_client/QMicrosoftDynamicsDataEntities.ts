// @ts-nocheck
import {
  QStringPath,
  QNumberPath,
  QEnumPath,
  QueryObject,
  QId,
  QStringParam,
  QAction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QDateTimeOffsetPath,
  QEnumParam,
  QNumberParam,
  QDateTimeOffsetParam,
  QGuidPath,
  QBinaryPath,
} from "@odata2ts/odata-query-objects";
import type {
  RetailEcoResCategoryId,
  RetailStoreTenderTypeTableId,
  RetailEcoResProductId,
  RetailGiftCardTransactionsId,
  RetailRecoListElementsId,
  LoyaltyCardRewardPointNonTransactionalActivityV2EntityId,
  RetailLoyaltyCardRewardPointTransactionV2Id,
  RetailEcoResProductTranslationId,
  MediaId,
  RetailInventItemBarcodeId,
  RetailEcoResCategoryTranslationId,
  RetailEcoResCategoryHierarchyRoleId,
  RetailMediaResourcesId,
  RetailEcoResCategoryHierarchyId,
  RetailInventTableId,
  RetailPackageLinesId,
  RetailImagesId,
  MixAndMatchLineGroupsId,
  CardTypesId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  NoYes,
  EcoResCategoryChangeStatus,
  RetailNoneNearestUpDown,
  RetailLedgerBank,
  RetailAuthorizationTypes,
  RetailTenderFunction,
  EcoResProductType,
  RetailGiftCardOperation,
  RetailRecoListElementTypeBase,
  RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
  RetailLoyaltyRewardPointEntryType,
  RetailLoyaltyTransactionType,
  RetailLoyaltyTenderTypeBase,
  EcoResCategoryNamedHierarchyRole,
  RetailMediaType,
  EcoResCategoryHierarchyModifier,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QRetailEcoResCategory extends QueryObject {
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly ecoResCategoryHierarchyName = new QStringPath(
    this.withPrefix("EcoResCategoryHierarchy_Name"),
  );
  public readonly ecoResCategory1Name = new QStringPath(
    this.withPrefix("EcoResCategory1_Name"),
  );
  public readonly nestedSetRight = new QNumberPath(
    this.withPrefix("NestedSetRight"),
  );
  public readonly categoryHierarchy = new QNumberPath(
    this.withPrefix("CategoryHierarchy"),
  );
  public readonly defaultThresholdPsn = new QNumberPath(
    this.withPrefix("DefaultThreshold_PSN"),
  );
  public readonly nestedSetLeft = new QNumberPath(
    this.withPrefix("NestedSetLeft"),
  );
  public readonly isTangible = new QEnumPath(
    this.withPrefix("IsTangible"),
    NoYes,
  );
  public readonly parentCategory = new QNumberPath(
    this.withPrefix("ParentCategory"),
  );
  public readonly isActive = new QEnumPath(this.withPrefix("IsActive"), NoYes);
  public readonly isCategoryAttributesInherited = new QEnumPath(
    this.withPrefix("IsCategoryAttributesInherited"),
    NoYes,
  );
  public readonly sharedCategoryCategoryId = new QStringPath(
    this.withPrefix("SharedCategory_CategoryId"),
  );
  public readonly instanceRelationType = new QNumberPath(
    this.withPrefix("InstanceRelationType"),
  );
  public readonly axRecId = new QNumberPath(this.withPrefix("AxRecId"));
  public readonly code = new QStringPath(this.withPrefix("Code"));
  public readonly level = new QNumberPath(this.withPrefix("Level"));
  public readonly changeStatus = new QEnumPath(
    this.withPrefix("ChangeStatus"),
    EcoResCategoryChangeStatus,
  );
  public readonly pkWiUCode = new QStringPath(this.withPrefix("PKWiUCode"));
  public readonly ecoResCategoryHierarchy1Name = new QStringPath(
    this.withPrefix("EcoResCategoryHierarchy1_Name"),
  );
}

export const qRetailEcoResCategory = new QRetailEcoResCategory();

export class QRetailEcoResCategoryId extends QId<RetailEcoResCategoryId> {
  private readonly params = [
    new QStringParam("Name", "name"),
    new QStringParam(
      "EcoResCategoryHierarchy_Name",
      "ecoResCategoryHierarchyName",
    ),
    new QStringParam("EcoResCategory1_Name", "ecoResCategory1Name"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailStoreTenderTypeTable extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly omOperatingUnitPartyNumber = new QStringPath(
    this.withPrefix("OMOperatingUnit_PartyNumber"),
  );
  public readonly tenderTypeId = new QStringPath(
    this.withPrefix("TenderTypeId"),
  );
  public readonly openDrawer = new QEnumPath(
    this.withPrefix("OpenDrawer"),
    NoYes,
  );
  public readonly omOperatingUnitNumber = new QStringPath(
    this.withPrefix("OMOperatingUnitNumber"),
  );
  public readonly minimumAmountAllowed = new QNumberPath(
    this.withPrefix("MinimumAmountAllowed"),
  );
  public readonly lineNumInTransaction = new QStringPath(
    this.withPrefix("LineNumInTransaction"),
  );
  public readonly roundingMethod = new QEnumPath(
    this.withPrefix("RoundingMethod"),
    RetailNoneNearestUpDown,
  );
  public readonly differenceAccLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("DifferenceAccLedgerDimensionDisplayValue"),
  );
  public readonly changeLineOnReceipt = new QStringPath(
    this.withPrefix("ChangeLineOnReceipt"),
  );
  public readonly rounding = new QNumberPath(this.withPrefix("Rounding"));
  public readonly connectorName = new QStringPath(
    this.withPrefix("ConnectorName"),
  );
  public readonly paymentTerminalId = new QStringPath(
    this.withPrefix("PaymentTerminalId"),
  );
  public readonly slipFrontInPrinter = new QStringPath(
    this.withPrefix("SlipFrontInPrinter"),
  );
  public readonly diffAccBigDiffLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("DiffAccBigDiffLedgerDimensionDisplayValue"),
  );
  public readonly allowFloat = new QEnumPath(
    this.withPrefix("AllowFloat"),
    NoYes,
  );
  public readonly takenToBank = new QEnumPath(
    this.withPrefix("TakenToBank"),
    NoYes,
  );
  public readonly maximumOvertenderAmount = new QNumberPath(
    this.withPrefix("MaximumOvertenderAmount"),
  );
  public readonly activeAccount = new QEnumPath(
    this.withPrefix("ActiveAccount"),
    NoYes,
  );
  public readonly bankBagAccountType = new QEnumPath(
    this.withPrefix("BankBagAccountType"),
    RetailLedgerBank,
  );
  public readonly safeAccountType = new QEnumPath(
    this.withPrefix("SafeAccountType"),
    RetailLedgerBank,
  );
  public readonly maximumAmountEntered = new QNumberPath(
    this.withPrefix("MaximumAmountEntered"),
  );
  public readonly restrictReturnsWithoutReceipt = new QEnumPath(
    this.withPrefix("RestrictReturnsWithoutReceipt"),
    NoYes,
  );
  public readonly maximumNormalDifferenceAmount = new QNumberPath(
    this.withPrefix("MaximumNormalDifferenceAmount"),
  );
  public readonly seekAuthorization = new QEnumPath(
    this.withPrefix("SeekAuthorization"),
    RetailAuthorizationTypes,
  );
  public readonly aboveMinimumTenderId = new QStringPath(
    this.withPrefix("AboveMinimumTenderId"),
  );
  public readonly giftCardCashOutThreshold = new QNumberPath(
    this.withPrefix("GiftCardCashOutThreshold"),
  );
  public readonly maximumCountingDifference = new QNumberPath(
    this.withPrefix("MaximumCountingDifference"),
  );
  public readonly payAccountBill = new QEnumPath(
    this.withPrefix("PayAccountBill"),
    NoYes,
  );
  public readonly giftCardItemId = new QStringPath(
    this.withPrefix("GiftCardItemId"),
  );
  public readonly accountTypeGiftCardCompany = new QEnumPath(
    this.withPrefix("AccountTypeGiftCardCompany"),
    RetailLedgerBank,
  );
  public readonly sigCapMinAmount = new QNumberPath(
    this.withPrefix("SigCapMinAmount"),
  );
  public readonly tenderFlowLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("TenderFlowLedgerDimensionDisplayValue"),
  );
  public readonly giftCardCompany = new QStringPath(
    this.withPrefix("GiftCardCompany"),
  );
  public readonly endorseCheck = new QEnumPath(
    this.withPrefix("EndorseCheck"),
    NoYes,
  );
  public readonly ledgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("LedgerDimensionDisplayValue"),
  );
  public readonly countingRequired = new QEnumPath(
    this.withPrefix("CountingRequired"),
    NoYes,
  );
  public readonly askForDate = new QEnumPath(
    this.withPrefix("AskForDate"),
    NoYes,
  );
  public readonly takenToSafe = new QEnumPath(
    this.withPrefix("TakenToSafe"),
    NoYes,
  );
  public readonly safeActiveAccount = new QEnumPath(
    this.withPrefix("SafeActiveAccount"),
    NoYes,
  );
  public readonly bankBagLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("BankBagLedgerDimensionDisplayValue"),
  );
  public readonly minimumChangeAmount = new QNumberPath(
    this.withPrefix("MinimumChangeAmount"),
  );
  public readonly sigCapEnabled = new QEnumPath(
    this.withPrefix("SigCapEnabled"),
    NoYes,
  );
  public readonly multiplyInTenderOperations = new QEnumPath(
    this.withPrefix("MultiplyInTenderOperations"),
    NoYes,
  );
  public readonly maximumRecount = new QNumberPath(
    this.withPrefix("MaximumRecount"),
  );
  public readonly endorsmentLine2 = new QStringPath(
    this.withPrefix("EndorsmentLine2"),
  );
  public readonly undertenderAmount = new QNumberPath(
    this.withPrefix("UndertenderAmount"),
  );
  public readonly endorsmentLine1 = new QStringPath(
    this.withPrefix("EndorsmentLine1"),
  );
  public readonly frontOfCheck = new QEnumPath(
    this.withPrefix("FrontOfCheck"),
    NoYes,
  );
  public readonly compressPaymentEntries = new QEnumPath(
    this.withPrefix("CompressPaymentEntries"),
    NoYes,
  );
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly hideCardInputDetailsInPos = new QEnumPath(
    this.withPrefix("HideCardInputDetailsInPOS"),
    NoYes,
  );
  public readonly accountType = new QEnumPath(
    this.withPrefix("AccountType"),
    RetailLedgerBank,
  );
  public readonly posOperation = new QNumberPath(
    this.withPrefix("PosOperation"),
  );
  public readonly changeTenderId = new QStringPath(
    this.withPrefix("ChangeTenderId"),
  );
  public readonly allowUndertender = new QEnumPath(
    this.withPrefix("AllowUndertender"),
    NoYes,
  );
  public readonly maximumAmountAllowed = new QNumberPath(
    this.withPrefix("MaximumAmountAllowed"),
  );
  public readonly allowReturnNegative = new QEnumPath(
    this.withPrefix("AllowReturnNegative"),
    NoYes,
  );
  public readonly function = new QEnumPath(
    this.withPrefix("Function"),
    RetailTenderFunction,
  );
  public readonly safeAccLedgerDimensionDisplayValue = new QStringPath(
    this.withPrefix("SafeAccLedgerDimensionDisplayValue"),
  );
  public readonly fiscalPrinterTenderTypeBr = new QStringPath(
    this.withPrefix("FiscalPrinterTenderType_BR"),
  );
  public readonly allowOvertender = new QEnumPath(
    this.withPrefix("AllowOvertender"),
    NoYes,
  );
  public readonly posCountEntries = new QEnumPath(
    this.withPrefix("PosCountEntries"),
    NoYes,
  );
  public readonly minimumAmountEntered = new QNumberPath(
    this.withPrefix("MinimumAmountEntered"),
  );
  public readonly cashDrawerLimit = new QNumberPath(
    this.withPrefix("CashDrawerLimit"),
  );
  public readonly slipBackInPrinter = new QStringPath(
    this.withPrefix("SlipBackInPrinter"),
  );
  public readonly checkPayee = new QStringPath(this.withPrefix("CheckPayee"));
  public readonly ledgerDimensionGiftCardCompanyDisplayValue = new QStringPath(
    this.withPrefix("LedgerDimensionGiftCardCompanyDisplayValue"),
  );
  public readonly cashDrawerLimitEnabled = new QEnumPath(
    this.withPrefix("CashDrawerLimitEnabled"),
    NoYes,
  );
}

export const qRetailStoreTenderTypeTable = new QRetailStoreTenderTypeTable();

export class QRetailStoreTenderTypeTableId extends QId<RetailStoreTenderTypeTableId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam(
      "OMOperatingUnit_PartyNumber",
      "omOperatingUnitPartyNumber",
    ),
    new QStringParam("TenderTypeId", "tenderTypeId"),
  ];

  getParams() {
    return this.params;
  }
}

export class RetailStoreTenderTypeTable_QQueryDistictTenderTypeIdAndName extends QAction {
  private readonly params: [] = [];

  constructor() {
    super(
      "Microsoft.Dynamics.DataEntities.QueryDistictTenderTypeIdAndName",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
        new QComplexParam("NONE", new QRetailStoreTenderTypeTable()),
      ),
    );
  }

  getParams() {
    return this.params;
  }
}

export class QRetailEcoResProduct extends QueryObject {
  public readonly displayProductNumber = new QStringPath(
    this.withPrefix("DisplayProductNumber"),
  );
  public readonly productType = new QEnumPath(
    this.withPrefix("ProductType"),
    EcoResProductType,
  );
  public readonly instanceRelationType = new QNumberPath(
    this.withPrefix("InstanceRelationType"),
  );
  public readonly searchName = new QStringPath(this.withPrefix("SearchName"));
  public readonly pdsCwProduct = new QEnumPath(
    this.withPrefix("PdsCWProduct"),
    NoYes,
  );
}

export const qRetailEcoResProduct = new QRetailEcoResProduct();

export class QRetailEcoResProductId extends QId<RetailEcoResProductId> {
  private readonly params = [
    new QStringParam("DisplayProductNumber", "displayProductNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailGiftCardTransactions extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly cardNumber = new QStringPath(this.withPrefix("CardNumber"));
  public readonly transactionId = new QStringPath(
    this.withPrefix("TransactionId"),
  );
  public readonly mcrInvoiceAccount = new QStringPath(
    this.withPrefix("MCRInvoiceAccount"),
  );
  public readonly staffId = new QStringPath(this.withPrefix("StaffId"));
  public readonly operation = new QEnumPath(
    this.withPrefix("Operation"),
    RetailGiftCardOperation,
  );
  public readonly receiptId = new QStringPath(this.withPrefix("ReceiptId"));
  public readonly terminalId = new QStringPath(this.withPrefix("TerminalId"));
  public readonly amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly retailChannelTableRetailChannelId = new QStringPath(
    this.withPrefix("RetailChannelTable_RetailChannelId"),
  );
  public readonly transactionDate = new QDateTimeOffsetPath(
    this.withPrefix("TransactionDate"),
  );
}

export const qRetailGiftCardTransactions = new QRetailGiftCardTransactions();

export class QRetailGiftCardTransactionsId extends QId<RetailGiftCardTransactionsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("CardNumber", "cardNumber"),
    new QStringParam("TransactionId", "transactionId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailRecoListElements extends QueryObject {
  public readonly listId = new QStringPath(this.withPrefix("ListId"));
  public readonly elementType = new QEnumPath(
    this.withPrefix("ElementType"),
    RetailRecoListElementTypeBase,
  );
  public readonly productNumber = new QStringPath(
    this.withPrefix("ProductNumber"),
  );
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
}

export const qRetailRecoListElements = new QRetailRecoListElements();

export class QRetailRecoListElementsId extends QId<RetailRecoListElementsId> {
  private readonly params = [
    new QStringParam("ListId", "listId"),
    new QEnumParam("ElementType", "elementType"),
    new QStringParam("ProductNumber", "productNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QLoyaltyCardRewardPointNonTransactionalActivityV2Entity extends QueryObject {
  public readonly nonTransactionalActivityId = new QStringPath(
    this.withPrefix("NonTransactionalActivityId"),
  );
  public readonly cardNumber = new QStringPath(this.withPrefix("CardNumber"));
  public readonly retailAffiliationName = new QStringPath(
    this.withPrefix("RetailAffiliationName"),
  );
  public readonly status = new QEnumPath(
    this.withPrefix("Status"),
    RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
  );
  public readonly entryTime = new QNumberPath(this.withPrefix("EntryTime"));
  public readonly loyaltyOtherActivityTypeId = new QStringPath(
    this.withPrefix("LoyaltyOtherActivityTypeId"),
  );
  public readonly entryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate"),
  );
  public readonly errorLogs = new QStringPath(this.withPrefix("ErrorLogs"));
  public readonly retailAffiliationId = new QNumberPath(
    this.withPrefix("RetailAffiliationId"),
  );
  public readonly omOperatingUnitNumber = new QStringPath(
    this.withPrefix("OMOperatingUnitNumber"),
  );
}

export const qLoyaltyCardRewardPointNonTransactionalActivityV2Entity =
  new QLoyaltyCardRewardPointNonTransactionalActivityV2Entity();

export class QLoyaltyCardRewardPointNonTransactionalActivityV2EntityId extends QId<LoyaltyCardRewardPointNonTransactionalActivityV2EntityId> {
  private readonly params = [
    new QStringParam(
      "NonTransactionalActivityId",
      "nonTransactionalActivityId",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailLoyaltyCardRewardPointTransactionV2 extends QueryObject {
  public readonly operatingUnitNumber = new QStringPath(
    this.withPrefix("OperatingUnitNumber"),
  );
  public readonly storeId = new QStringPath(this.withPrefix("storeId"));
  public readonly terminal = new QStringPath(this.withPrefix("Terminal"));
  public readonly transactionNumber = new QStringPath(
    this.withPrefix("TransactionNumber"),
  );
  public readonly loyaltyTransactionCompany = new QStringPath(
    this.withPrefix("LoyaltyTransactionCompany"),
  );
  public readonly loyaltyTransactionLineNumber = new QNumberPath(
    this.withPrefix("LoyaltyTransactionLineNumber"),
  );
  public readonly salesOrderId = new QStringPath(
    this.withPrefix("SalesOrderId"),
  );
  public readonly adjustmentId = new QStringPath(
    this.withPrefix("AdjustmentId"),
  );
  public readonly cardNumber = new QStringPath(this.withPrefix("CardNumber"));
  public readonly nonTransactionalActivityId = new QStringPath(
    this.withPrefix("NonTransactionalActivityId"),
  );
  public readonly entryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate"),
  );
  public readonly entryTime = new QNumberPath(this.withPrefix("EntryTime"));
  public readonly loyaltyTierLoyaltyProgramName = new QStringPath(
    this.withPrefix("LoyaltyTierLoyaltyProgramName"),
  );
  public readonly loyaltyOtherActivityTypeName = new QStringPath(
    this.withPrefix("LoyaltyOtherActivityTypeName"),
  );
  public readonly entryType = new QEnumPath(
    this.withPrefix("EntryType"),
    RetailLoyaltyRewardPointEntryType,
  );
  public readonly customerAccount = new QStringPath(
    this.withPrefix("CustomerAccount"),
  );
  public readonly salesLineLineNum = new QNumberPath(
    this.withPrefix("SalesLineLineNum"),
  );
  public readonly rewardPointAmountQty = new QNumberPath(
    this.withPrefix("RewardPointAmountQty"),
  );
  public readonly expirationDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpirationDate"),
  );
  public readonly startDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate"),
  );
  public readonly loyaltyTransactionType = new QEnumPath(
    this.withPrefix("LoyaltyTransactionType"),
    RetailLoyaltyTransactionType,
  );
  public readonly customerAccountCompany = new QStringPath(
    this.withPrefix("CustomerAccountCompany"),
  );
  public readonly remaining = new QNumberPath(this.withPrefix("Remaining"));
  public readonly loyaltyProgramName = new QStringPath(
    this.withPrefix("LoyaltyProgramName"),
  );
  public readonly operatorId = new QStringPath(this.withPrefix("OperatorId"));
  public readonly cardTenderType = new QEnumPath(
    this.withPrefix("CardTenderType"),
    RetailLoyaltyTenderTypeBase,
  );
  public readonly retailTransactionSalesTransLineNum = new QNumberPath(
    this.withPrefix("RetailTransactionSalesTransLineNum"),
  );
  public readonly receiptId = new QStringPath(this.withPrefix("ReceiptId"));
  public readonly rewardPointId = new QStringPath(
    this.withPrefix("RewardPointId"),
  );
  public readonly loyaltyTierId = new QStringPath(
    this.withPrefix("LoyaltyTierId"),
  );
}

export const qRetailLoyaltyCardRewardPointTransactionV2 =
  new QRetailLoyaltyCardRewardPointTransactionV2();

export class QRetailLoyaltyCardRewardPointTransactionV2Id extends QId<RetailLoyaltyCardRewardPointTransactionV2Id> {
  private readonly params = [
    new QStringParam("OperatingUnitNumber", "operatingUnitNumber"),
    new QStringParam("storeId"),
    new QStringParam("Terminal", "terminal"),
    new QStringParam("TransactionNumber", "transactionNumber"),
    new QStringParam("LoyaltyTransactionCompany", "loyaltyTransactionCompany"),
    new QNumberParam(
      "LoyaltyTransactionLineNumber",
      "loyaltyTransactionLineNumber",
    ),
    new QStringParam("SalesOrderId", "salesOrderId"),
    new QStringParam("AdjustmentId", "adjustmentId"),
    new QStringParam("CardNumber", "cardNumber"),
    new QStringParam(
      "NonTransactionalActivityId",
      "nonTransactionalActivityId",
    ),
    new QDateTimeOffsetParam("EntryDate", "entryDate"),
    new QNumberParam("EntryTime", "entryTime"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailEcoResProductTranslation extends QueryObject {
  public readonly ecoResProductDisplayProductNumber = new QStringPath(
    this.withPrefix("EcoResProduct_DisplayProductNumber"),
  );
  public readonly languageId = new QStringPath(this.withPrefix("LanguageId"));
  public readonly product = new QNumberPath(this.withPrefix("Product"));
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
}

export const qRetailEcoResProductTranslation =
  new QRetailEcoResProductTranslation();

export class QRetailEcoResProductTranslationId extends QId<RetailEcoResProductTranslationId> {
  private readonly params = [
    new QStringParam(
      "EcoResProduct_DisplayProductNumber",
      "ecoResProductDisplayProductNumber",
    ),
    new QStringParam("LanguageId", "languageId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QMedia extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly media = new QStringPath(this.withPrefix("Media"));
  public readonly addressValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("AddressValidFrom"),
  );
  public readonly building = new QStringPath(this.withPrefix("Building"));
  public readonly addressCity = new QStringPath(this.withPrefix("AddressCity"));
  public readonly addressState = new QStringPath(
    this.withPrefix("AddressState"),
  );
  public readonly groupOfHouses = new QStringPath(
    this.withPrefix("GroupOfHouses"),
  );
  public readonly addressValidTo = new QDateTimeOffsetPath(
    this.withPrefix("AddressValidTo"),
  );
  public readonly extension = new QStringPath(this.withPrefix("Extension"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly mobilePhone = new QStringPath(this.withPrefix("MobilePhone"));
  public readonly telephone = new QStringPath(this.withPrefix("Telephone"));
  public readonly mediaType = new QStringPath(this.withPrefix("MediaType"));
  public readonly email = new QStringPath(this.withPrefix("Email"));
  public readonly addressDescription = new QStringPath(
    this.withPrefix("AddressDescription"),
  );
  public readonly addressLocationId = new QStringPath(
    this.withPrefix("AddressLocationId"),
  );
  public readonly fax = new QStringPath(this.withPrefix("Fax"));
  public readonly language = new QStringPath(this.withPrefix("Language"));
  public readonly addressStreet = new QStringPath(
    this.withPrefix("AddressStreet"),
  );
  public readonly addressCounty = new QStringPath(
    this.withPrefix("AddressCounty"),
  );
  public readonly apartment = new QStringPath(this.withPrefix("Apartment"));
  public readonly internetAddress = new QStringPath(
    this.withPrefix("InternetAddress"),
  );
  public readonly settlement = new QStringPath(this.withPrefix("Settlement"));
  public readonly telexNumber = new QStringPath(this.withPrefix("TelexNumber"));
  public readonly addressZipCode = new QStringPath(
    this.withPrefix("AddressZipCode"),
  );
  public readonly addressCountryRegionId = new QStringPath(
    this.withPrefix("AddressCountryRegionId"),
  );
  public readonly addressCountryRegionIsoCode = new QStringPath(
    this.withPrefix("AddressCountryRegionISOCode"),
  );
  public readonly vendAccount = new QStringPath(this.withPrefix("vendAccount"));
}

export const qMedia = new QMedia();

export class QMediaId extends QId<MediaId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("Media", "media"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailInventItemBarcode extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly barcodeSetupId = new QStringPath(
    this.withPrefix("barcodeSetupId"),
  );
  public readonly inventDimId = new QStringPath(this.withPrefix("inventDimId"));
  public readonly itemId = new QStringPath(this.withPrefix("itemId"));
  public readonly itemBarCode = new QStringPath(this.withPrefix("itemBarCode"));
  public readonly retailVariantId = new QStringPath(
    this.withPrefix("RetailVariantId"),
  );
  public readonly unitId = new QStringPath(this.withPrefix("UnitID"));
  public readonly blocked = new QEnumPath(this.withPrefix("Blocked"), NoYes);
  public readonly useForInput = new QEnumPath(
    this.withPrefix("useForInput"),
    NoYes,
  );
  public readonly retailShowForItem = new QEnumPath(
    this.withPrefix("RetailShowForItem"),
    NoYes,
  );
  public readonly description = new QStringPath(this.withPrefix("description"));
  public readonly qty = new QNumberPath(this.withPrefix("qty"));
  public readonly useForPrinting = new QEnumPath(
    this.withPrefix("useForPrinting"),
    NoYes,
  );
}

export const qRetailInventItemBarcode = new QRetailInventItemBarcode();

export class QRetailInventItemBarcodeId extends QId<RetailInventItemBarcodeId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("barcodeSetupId"),
    new QStringParam("inventDimId"),
    new QStringParam("itemId"),
    new QStringParam("itemBarCode"),
    new QStringParam("RetailVariantId", "retailVariantId"),
    new QStringParam("UnitID", "unitId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailEcoResCategoryTranslation extends QueryObject {
  public readonly ecoResCategoryName = new QStringPath(
    this.withPrefix("EcoResCategory_Name"),
  );
  public readonly ecoResCategoryHierarchyName = new QStringPath(
    this.withPrefix("EcoResCategoryHierarchy_Name"),
  );
  public readonly languageId = new QStringPath(this.withPrefix("LanguageId"));
  public readonly searchText = new QStringPath(this.withPrefix("SearchText"));
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly friendlyName = new QStringPath(
    this.withPrefix("FriendlyName"),
  );
  public readonly category = new QNumberPath(this.withPrefix("Category"));
}

export const qRetailEcoResCategoryTranslation =
  new QRetailEcoResCategoryTranslation();

export class QRetailEcoResCategoryTranslationId extends QId<RetailEcoResCategoryTranslationId> {
  private readonly params = [
    new QStringParam("EcoResCategory_Name", "ecoResCategoryName"),
    new QStringParam(
      "EcoResCategoryHierarchy_Name",
      "ecoResCategoryHierarchyName",
    ),
    new QStringParam("LanguageId", "languageId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailEcoResCategoryHierarchyRole extends QueryObject {
  public readonly namedCategoryHierarchyRoleAsInt = new QNumberPath(
    this.withPrefix("NamedCategoryHierarchyRoleAsInt"),
  );
  public readonly ecoResCategoryHierarchyName = new QStringPath(
    this.withPrefix("EcoResCategoryHierarchy_Name"),
  );
  public readonly namedCategoryHierarchyRole = new QEnumPath(
    this.withPrefix("NamedCategoryHierarchyRole"),
    EcoResCategoryNamedHierarchyRole,
  );
  public readonly categoryHierarchy = new QNumberPath(
    this.withPrefix("CategoryHierarchy"),
  );
}

export const qRetailEcoResCategoryHierarchyRole =
  new QRetailEcoResCategoryHierarchyRole();

export class QRetailEcoResCategoryHierarchyRoleId extends QId<RetailEcoResCategoryHierarchyRoleId> {
  private readonly params = [
    new QNumberParam(
      "NamedCategoryHierarchyRoleAsInt",
      "namedCategoryHierarchyRoleAsInt",
    ),
    new QStringParam(
      "EcoResCategoryHierarchy_Name",
      "ecoResCategoryHierarchyName",
    ),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailMediaResources extends QueryObject {
  public readonly resourceId = new QNumberPath(this.withPrefix("ResourceId"));
  public readonly smallImageSharedStorageId = new QGuidPath(
    this.withPrefix("SmallImageSharedStorageId"),
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly isCustomer = new QEnumPath(
    this.withPrefix("IsCustomer"),
    NoYes,
  );
  public readonly fileName = new QStringPath(this.withPrefix("FileName"));
  public readonly isPos = new QEnumPath(this.withPrefix("IsPos"), NoYes);
  public readonly isSecuredResource = new QEnumPath(
    this.withPrefix("IsSecuredResource"),
    NoYes,
  );
  public readonly sizeInKilobytes = new QNumberPath(
    this.withPrefix("SizeInKilobytes"),
  );
  public readonly height = new QNumberPath(this.withPrefix("Height"));
  public readonly sharedStorageId = new QGuidPath(
    this.withPrefix("SharedStorageId"),
  );
  public readonly isWorker = new QEnumPath(this.withPrefix("IsWorker"), NoYes);
  public readonly isExternallyHosted = new QEnumPath(
    this.withPrefix("IsExternallyHosted"),
    NoYes,
  );
  public readonly isPartialUrl = new QEnumPath(
    this.withPrefix("isPartialUrl"),
    NoYes,
  );
  public readonly instanceRelationType = new QNumberPath(
    this.withPrefix("InstanceRelationType"),
  );
  public readonly width = new QNumberPath(this.withPrefix("Width"));
  public readonly isCategory = new QEnumPath(
    this.withPrefix("IsCategory"),
    NoYes,
  );
  public readonly isCatalog = new QEnumPath(
    this.withPrefix("IsCatalog"),
    NoYes,
  );
  public readonly mediaType = new QEnumPath(
    this.withPrefix("MediaType"),
    RetailMediaType,
  );
  public readonly thumbnailSharedStorageId = new QGuidPath(
    this.withPrefix("ThumbnailSharedStorageId"),
  );
  public readonly inUse = new QEnumPath(this.withPrefix("InUse"), NoYes);
  public readonly smallImageUrl = new QStringPath(
    this.withPrefix("SmallImageUrl"),
  );
  public readonly resourceUrl = new QStringPath(this.withPrefix("ResourceUrl"));
  public readonly thumbnailUrl = new QStringPath(
    this.withPrefix("ThumbnailUrl"),
  );
  public readonly isProduct = new QEnumPath(
    this.withPrefix("IsProduct"),
    NoYes,
  );
  public readonly externalResourceId = new QStringPath(
    this.withPrefix("ExternalResourceId"),
  );
}

export const qRetailMediaResources = new QRetailMediaResources();

export class QRetailMediaResourcesId extends QId<RetailMediaResourcesId> {
  private readonly params = [new QNumberParam("ResourceId", "resourceId")];

  getParams() {
    return this.params;
  }
}

export class QRetailEcoResCategoryHierarchy extends QueryObject {
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly axRecId = new QNumberPath(this.withPrefix("AxRecId"));
  public readonly hierarchyModifier = new QEnumPath(
    this.withPrefix("HierarchyModifier"),
    EcoResCategoryHierarchyModifier,
  );
}

export const qRetailEcoResCategoryHierarchy =
  new QRetailEcoResCategoryHierarchy();

export class QRetailEcoResCategoryHierarchyId extends QId<RetailEcoResCategoryHierarchyId> {
  private readonly params = [new QStringParam("Name", "name")];

  getParams() {
    return this.params;
  }
}

export class QRetailInventTable extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly product = new QNumberPath(this.withPrefix("Product"));
  public readonly ecoResProductDisplayProductNumber = new QStringPath(
    this.withPrefix("EcoResProduct_DisplayProductNumber"),
  );
}

export const qRetailInventTable = new QRetailInventTable();

export class QRetailInventTableId extends QId<RetailInventTableId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("ItemId", "itemId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailPackageLines extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly packageId = new QStringPath(this.withPrefix("PackageId"));
  public readonly itemId = new QStringPath(this.withPrefix("ItemId"));
  public readonly purchaseUnit = new QStringPath(
    this.withPrefix("PurchaseUnit"),
  );
  public readonly color = new QStringPath(this.withPrefix("Color"));
  public readonly size = new QStringPath(this.withPrefix("Size"));
  public readonly style = new QStringPath(this.withPrefix("Style"));
  public readonly configId = new QStringPath(this.withPrefix("ConfigId"));
  public readonly quantity = new QNumberPath(this.withPrefix("Quantity"));
  public readonly lineNumber = new QNumberPath(this.withPrefix("LineNumber"));
}

export const qRetailPackageLines = new QRetailPackageLines();

export class QRetailPackageLinesId extends QId<RetailPackageLinesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("PackageId", "packageId"),
    new QStringParam("ItemId", "itemId"),
    new QStringParam("PurchaseUnit", "purchaseUnit"),
    new QStringParam("Color", "color"),
    new QStringParam("Size", "size"),
    new QStringParam("Style", "style"),
    new QStringParam("ConfigId", "configId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QRetailImages extends QueryObject {
  public readonly pictureId = new QNumberPath(this.withPrefix("PictureId"));
  public readonly picture = new QBinaryPath(this.withPrefix("Picture"));
}

export const qRetailImages = new QRetailImages();

export class QRetailImagesId extends QId<RetailImagesId> {
  private readonly params = [new QNumberParam("PictureId", "pictureId")];

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

export class QCardTypes extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly trvCreditCardType = new QStringPath(
    this.withPrefix("TrvCreditCardType"),
  );
  public readonly trvCreditCardDesc = new QStringPath(
    this.withPrefix("TrvCreditCardDesc"),
  );
}

export const qCardTypes = new QCardTypes();

export class QCardTypesId extends QId<CardTypesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("TrvCreditCardType", "trvCreditCardType"),
  ];

  getParams() {
    return this.params;
  }
}
