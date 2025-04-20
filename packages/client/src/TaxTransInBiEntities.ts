/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { TaxTransInBiEntitiesApi } from './TaxTransInBiEntitiesApi';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { NoYes } from './NoYes';
import { TaxTypeIn } from './TaxTypeIn';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { DisposalTypeIn } from './DisposalTypeIn';
import { TaxModuleType } from './TaxModuleType';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { DirectionIn } from './DirectionIn';
import { CustomerCalculationDateTypeIn } from './CustomerCalculationDateTypeIn';
import { LedgerJournalType } from './LedgerJournalType';
import { TaxCalculationDateType } from './TaxCalculationDateType';
import { ItcCategoryIn } from './ItcCategoryIn';
import { TaxDirection } from './TaxDirection';
import { TaxOrigin } from './TaxOrigin';
import { ExciseRegisterIn } from './ExciseRegisterIn';
import { VendorCalculationDateTypeIn } from './VendorCalculationDateTypeIn';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { DirectSettlementIn } from './DirectSettlementIn';
import { PriceTypeIn } from './PriceTypeIn';

/**
 * This class represents the entity "TaxTransINBiEntities" of service "d365_metadata".
 */
export class TaxTransInBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransInBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransInBiEntities.
   */
  static override _entityName = 'TaxTransINBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransInBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retention Pct.
   */
  declare retentionPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Division Vendor Master.
   * @nullable
   */
  declare divisionVendorMaster?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Record Type.
   * @nullable
   */
  declare exciseRecordType?: ExciseRecordTypeIn | null;
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: ExciseTypeIn | null;
  /**
   * Rg 23 Dcenvat Credit Transferred Amount.
   */
  declare rg23DcenvatCreditTransferredAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Minor Head.
   * @nullable
   */
  declare minorHead?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Form Types.
   */
  declare salesTaxFormTypes: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Date.
   */
  declare purchaseOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Challan Number.
   * @nullable
   */
  declare challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration.
   * @nullable
   */
  declare configuration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ssi Validity Date.
   */
  declare ssiValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Excise Credit Entry Id.
   * @nullable
   */
  declare exciseCreditEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking List Quantity.
   */
  declare pickingListQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bill Of Material Journal Number.
   * @nullable
   */
  declare billOfMaterialJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Challan Date.
   */
  declare challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Excise Entry Id.
   * @nullable
   */
  declare exciseEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Inter State.
   * @nullable
   */
  declare isInterState?: NoYes | null;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dsa Id Number Sequence Code.
   * @nullable
   */
  declare dsaIdNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Range Vendor Master.
   * @nullable
   */
  declare rangeVendorMaster?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Serial Number.
   * @nullable
   */
  declare fixedAssetSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Origin.
   */
  declare taxOrigin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Form Number.
   * @nullable
   */
  declare custVendFormNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Gtd Id Ru.
   * @nullable
   */
  declare inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rg 23 D Number Sequence Code.
   * @nullable
   */
  declare rg23DNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bsr Code.
   * @nullable
   */
  declare bsrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Voucher.
   * @nullable
   */
  declare taxVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Order Date.
   */
  declare productionOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Component Table.
   */
  declare taxComponentTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pla Id Date.
   */
  declare plaIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Vend Form Series.
   * @nullable
   */
  declare custVendFormSeries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Report Period In.
   */
  declare taxReportPeriodIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Trans Vat Ref Rec Id.
   */
  declare taxTransVatRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Location.
   * @nullable
   */
  declare assetLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeIn | null;
  /**
   * Customs Preferential Value.
   */
  declare customsPreferentialValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessable Value Accounting Currency.
   */
  declare assessableValueAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exempt Code.
   * @nullable
   */
  declare exemptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Address.
   * @nullable
   */
  declare companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Ledger Account Group.
   */
  declare taxLedgerAccountGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ssi Vendor.
   * @nullable
   */
  declare ssiVendor?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customs Exchange Rate.
   */
  declare customsExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Def Line Transferred.
   * @nullable
   */
  declare vatDefLineTransferred?: NoYes | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Goods Type.
   * @nullable
   */
  declare vatGoodsType?: VatGoodsTypeIn | null;
  /**
   * Customer Tax Information.
   */
  declare customerTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Division Customer Master.
   * @nullable
   */
  declare divisionCustomerMaster?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposal Type.
   * @nullable
   */
  declare disposalType?: DisposalTypeIn | null;
  /**
   * Production Order Qty.
   */
  declare productionOrderQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Item.
   * @nullable
   */
  declare purchaseItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Ref Rec Id.
   */
  declare invoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Owner Id Ru.
   * @nullable
   */
  declare inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Recoverable Pct.
   */
  declare nonRecoverablePct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Amount.
   */
  declare expenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transfer Order Number.
   * @nullable
   */
  declare transferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load On Inventory Percent.
   */
  declare loadOnInventoryPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hsn Code Table.
   */
  declare hsnCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Excise Without Duty.
   * @nullable
   */
  declare isExciseWithoutDuty?: NoYes | null;
  /**
   * Sales Packing Slip Number.
   * @nullable
   */
  declare salesPackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Vend Registration Number.
   */
  declare custVendRegistrationNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Landing Charges Amount.
   */
  declare customsLandingChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Invoice.
   * @nullable
   */
  declare journalInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Internal Default Group.
   * @nullable
   */
  declare vendInvoiceInternalDefaultGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invent Style Id.
   * @nullable
   */
  declare inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Order Qty.
   */
  declare salesOrderQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customs Shipping Bill Date.
   */
  declare customsShippingBillDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Regulate Amount Cur.
   */
  declare sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignment.
   * @nullable
   */
  declare consignment?: NoYes | null;
  /**
   * Invent Status Id.
   * @nullable
   */
  declare inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Tariff Codes.
   */
  declare exciseTariffCodes: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Shipping Bill Number Table.
   */
  declare customsShippingBillNumberTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bill Of Entry Qty.
   */
  declare billOfEntryQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Abatement Amount.
   */
  declare abatementAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Packing Slip Date.
   */
  declare salesPackingSlipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Compounding.
   * @nullable
   */
  declare isCompounding?: NoYes | null;
  /**
   * Model.
   * @nullable
   */
  declare model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * E Commerce Sale.
   * @nullable
   */
  declare eCommerceSale?: NoYes | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rg 23 Dcenvat Credit Amount.
   */
  declare rg23DcenvatCreditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Placed In Service.
   */
  declare placedInService: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pla Entry Number.
   * @nullable
   */
  declare plaEntryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Packing Slip Quantity.
   */
  declare purchasePackingSlipQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Code Table.
   */
  declare serviceCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Abatement Percent.
   */
  declare abatementPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Table Id.
   */
  declare transTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxModuleType | null;
  /**
   * Source Base Amount Cur Regulated.
   */
  declare sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Invoice Amount.
   */
  declare journalInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commissionarate Customer Master.
   * @nullable
   */
  declare commissionarateCustomerMaster?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Marked Settle.
   * @nullable
   */
  declare markedSettle?: NoYes | null;
  /**
   * Pla Id.
   * @nullable
   */
  declare plaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Category.
   * @nullable
   */
  declare serviceCategory?: ServiceCategoryIn | null;
  /**
   * Non Business Usage Percentage.
   */
  declare nonBusinessUsagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customs Direction.
   * @nullable
   */
  declare customsDirection?: DirectionIn | null;
  /**
   * Abatement Certificate Number.
   * @nullable
   */
  declare abatementCertificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Registration Number.
   */
  declare companyRegistrationNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rg 23 Ai Id Date.
   */
  declare rg23AiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferred Amount.
   */
  declare deferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Calculation Date Type.
   * @nullable
   */
  declare customerCalculationDateType?: CustomerCalculationDateTypeIn | null;
  /**
   * Source Tax Amount Cur.
   */
  declare sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Commissionarate Vendor Master.
   * @nullable
   */
  declare commissionarateVendorMaster?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Location.
   */
  declare vendorLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rg 23 Ci Id Date.
   */
  declare rg23CiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Address.
   * @nullable
   */
  declare vendorAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Misc Charge Amount.
   */
  declare miscChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Address.
   * @nullable
   */
  declare customerAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Excise.
   * @nullable
   */
  declare applyExcise?: NoYes | null;
  /**
   * Logistics Address State Id.
   * @nullable
   */
  declare logisticsAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Fob Amount.
   */
  declare customsFobAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Period.
   * @nullable
   */
  declare taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rg 23 Ai Number Sequence Code.
   * @nullable
   */
  declare rg23AiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Invoice Date.
   */
  declare journalInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Maximum Retail Price.
   */
  declare maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rg 23 Aii Id Date.
   */
  declare rg23AiiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculation Date Type.
   * @nullable
   */
  declare calculationDateType?: TaxCalculationDateType | null;
  /**
   * Source Currency Code.
   * @nullable
   */
  declare sourceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Bill Of Entry Date.
   */
  declare customsBillOfEntryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receipt List Quantity.
   */
  declare receiptListQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Claim Percentage.
   */
  declare claimPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Merchant Id.
   * @nullable
   */
  declare merchantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Tax Regulation Amount Cur.
   */
  declare customsTaxRegulationAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Tax Information.
   */
  declare vendorTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Itc Category.
   * @nullable
   */
  declare itcCategory?: ItcCategoryIn | null;
  /**
   * Tax Direction.
   * @nullable
   */
  declare taxDirection?: TaxDirection | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: TaxOrigin | null;
  /**
   * Purchase Packing Slip Number.
   * @nullable
   */
  declare purchasePackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Invoice Date.
   */
  declare purchaseInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate Id.
   * @nullable
   */
  declare licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Report Hierarchy Node In.
   */
  declare taxReportHierarchyNodeIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Calculation Date Type.
   * @nullable
   */
  declare taxCalculationDateType?: TaxCalculationDateType | null;
  /**
   * Tax Value.
   */
  declare taxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Register.
   * @nullable
   */
  declare exciseRegister?: ExciseRegisterIn | null;
  /**
   * Vendor Calculation Date Type.
   * @nullable
   */
  declare vendorCalculationDateType?: VendorCalculationDateTypeIn | null;
  /**
   * E Commrce Operator Gstin.
   */
  declare eCommrceOperatorGstin: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Charge Percentage In.
   */
  declare reverseChargePercentageIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Def Line Ref Rec Id.
   */
  declare vatDefLineRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Charge As Expense Percent In.
   */
  declare customsChargeAsExpensePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scrap Quantity.
   */
  declare scrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Recoverable Amount.
   */
  declare recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal.
   * @nullable
   */
  declare journal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Bank Address.
   * @nullable
   */
  declare companyBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking List Number.
   * @nullable
   */
  declare pickingListNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gta Service Category.
   * @nullable
   */
  declare gtaServiceCategory?: GtaServiceCategoryIn | null;
  /**
   * Transferred.
   * @nullable
   */
  declare transferred?: NoYes | null;
  /**
   * Retention Amount.
   */
  declare retentionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rg 23 Cii Number Sequence Code.
   * @nullable
   */
  declare rg23CiiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Range Company Information.
   * @nullable
   */
  declare rangeCompanyInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Schedule Name.
   */
  declare vatScheduleName: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cost Ledger Voucher.
   * @nullable
   */
  declare costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load On Inventory Amount.
   */
  declare loadOnInventoryAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pla Amount.
   */
  declare plaAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignment Note Num.
   * @nullable
   */
  declare consignmentNoteNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rg 23 A Deferred Amount.
   */
  declare rg23ADeferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Ref Num.
   * @nullable
   */
  declare bankRefNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Recoverable Amt.
   */
  declare nonRecoverableAmt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Accounting Code Table.
   */
  declare serviceAccountingCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Invoice Date.
   */
  declare salesInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Manufactured Quantity.
   */
  declare manufacturedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customs Tariff Code Table.
   */
  declare customsTariffCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Packing Slip Date.
   */
  declare purchasePackingSlipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Form Series.
   * @nullable
   */
  declare companyFormSeries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Currency.
   * @nullable
   */
  declare customsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Quantity.
   */
  declare purchaseOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Direct Settlement.
   * @nullable
   */
  declare directSettlement?: DirectSettlementIn | null;
  /**
   * Receipt List Date.
   */
  declare receiptListDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customs Import Invoice Number Table.
   */
  declare customsImportInvoiceNumberTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Order Date.
   */
  declare salesOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Bank Name.
   * @nullable
   */
  declare companyBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsa Id Date.
   */
  declare dsaIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsa Quantity.
   */
  declare dsaQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rg 23 Ci Number Sequence Code.
   * @nullable
   */
  declare rg23CiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Range Customer Master.
   * @nullable
   */
  declare rangeCustomerMaster?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Base Amount Cur.
   */
  declare sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payable Amount.
   */
  declare payableAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted Tax Amout.
   */
  declare postedTaxAmout: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Currency.
   * @nullable
   */
  declare taxCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Secondary.
   */
  declare taxAmountSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Division Company Information.
   * @nullable
   */
  declare divisionCompanyInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Deferement Ext Table Id.
   */
  declare vatDeferementExtTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Cif Amount.
   */
  declare customsCifAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Deferment Ext Rec Id.
   */
  declare vatDefermentExtRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rg 23 C Deferred Amount.
   */
  declare rg23CDeferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Picking List Date.
   */
  declare pickingListDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receipt List Number.
   * @nullable
   */
  declare receiptListNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Currency.
   * @nullable
   */
  declare voucherCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rg 23 Cii Id Date.
   */
  declare rg23CiiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Packing Slip Quantity.
   */
  declare salesPackingSlipQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Number.
   * @nullable
   */
  declare batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption State Code.
   * @nullable
   */
  declare consumptionStateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Make.
   * @nullable
   */
  declare make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Bill Of Entry Number Table.
   */
  declare customsBillOfEntryNumberTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company Form Number.
   * @nullable
   */
  declare companyFormNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessable Value.
   */
  declare assessableValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rg 23 Aii Number Sequence Code.
   * @nullable
   */
  declare rg23AiiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Maximum Retail Price.
   */
  declare totalMaximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Location.
   */
  declare customerLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Landing Charges Pct.
   */
  declare customsLandingChargesPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commissionarate Company Information.
   * @nullable
   */
  declare commissionarateCompanyInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: PriceTypeIn | null;
  /**
   * Excise Register Type.
   * @nullable
   */
  declare exciseRegisterType?: NoYes | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Commerce Operator.
   * @nullable
   */
  declare eCommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Scrap.
   * @nullable
   */
  declare isScrap?: NoYes | null;

  constructor(_entityApi: TaxTransInBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransInBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  retentionPct: DeserializedType<T, 'Edm.Decimal'>;
  divisionVendorMaster?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  exciseRecordType?: ExciseRecordTypeIn | null;
  registrationNumberType?: ExciseTypeIn | null;
  rg23DcenvatCreditTransferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  minorHead?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxFormTypes: DeserializedType<T, 'Edm.Int64'>;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  configuration?: DeserializedType<T, 'Edm.String'> | null;
  ssiValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exciseCreditEntryId?: DeserializedType<T, 'Edm.String'> | null;
  pickingListQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  billOfMaterialJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exciseEntryId?: DeserializedType<T, 'Edm.String'> | null;
  isInterState?: NoYes | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  dsaIdNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  rangeVendorMaster?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  taxOrigin: DeserializedType<T, 'Edm.Decimal'>;
  custVendFormNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventGtdIdRu?: DeserializedType<T, 'Edm.String'> | null;
  rg23DNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  bsrCode?: DeserializedType<T, 'Edm.String'> | null;
  taxVoucher?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxComponentTable: DeserializedType<T, 'Edm.Int64'>;
  plaIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custVendFormSeries?: DeserializedType<T, 'Edm.String'> | null;
  taxReportPeriodIn: DeserializedType<T, 'Edm.Int64'>;
  taxTransVatRefRecId: DeserializedType<T, 'Edm.Int64'>;
  assetLocation?: DeserializedType<T, 'Edm.String'> | null;
  taxType?: TaxTypeIn | null;
  customsPreferentialValue: DeserializedType<T, 'Edm.Decimal'>;
  assessableValueAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  exemptCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  taxLedgerAccountGroup: DeserializedType<T, 'Edm.Int64'>;
  ssiVendor?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customsExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  vatDefLineTransferred?: NoYes | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  vatGoodsType?: VatGoodsTypeIn | null;
  customerTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  divisionCustomerMaster?: DeserializedType<T, 'Edm.String'> | null;
  disposalType?: DisposalTypeIn | null;
  productionOrderQty: DeserializedType<T, 'Edm.Decimal'>;
  purchaseItem?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  inventOwnerIdRu?: DeserializedType<T, 'Edm.String'> | null;
  nonRecoverablePct: DeserializedType<T, 'Edm.Decimal'>;
  expenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  transferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadOnInventoryPercent: DeserializedType<T, 'Edm.Decimal'>;
  hsnCodeTable: DeserializedType<T, 'Edm.Int64'>;
  isExciseWithoutDuty?: NoYes | null;
  salesPackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  custVendRegistrationNumber: DeserializedType<T, 'Edm.Int64'>;
  customsLandingChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  journalInvoice?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceInternalDefaultGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventStyleId?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  salesOrderQty: DeserializedType<T, 'Edm.Decimal'>;
  customsShippingBillDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  consignment?: NoYes | null;
  inventStatusId?: DeserializedType<T, 'Edm.String'> | null;
  exciseTariffCodes: DeserializedType<T, 'Edm.Int64'>;
  customsShippingBillNumberTable: DeserializedType<T, 'Edm.Int64'>;
  billOfEntryQty: DeserializedType<T, 'Edm.Decimal'>;
  abatementAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesPackingSlipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isCompounding?: NoYes | null;
  model?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  eCommerceSale?: NoYes | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  rg23DcenvatCreditAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  placedInService: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plaEntryNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePackingSlipQuantity: DeserializedType<T, 'Edm.Decimal'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  serviceCodeTable: DeserializedType<T, 'Edm.Int64'>;
  abatementPercent: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  transTableId: DeserializedType<T, 'Edm.Int32'>;
  source?: TaxModuleType | null;
  sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  journalInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  commissionarateCustomerMaster?: DeserializedType<T, 'Edm.String'> | null;
  markedSettle?: NoYes | null;
  plaId?: DeserializedType<T, 'Edm.String'> | null;
  serviceCategory?: ServiceCategoryIn | null;
  nonBusinessUsagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  customsDirection?: DirectionIn | null;
  abatementCertificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  companyRegistrationNumber: DeserializedType<T, 'Edm.Int64'>;
  rg23AiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerCalculationDateType?: CustomerCalculationDateTypeIn | null;
  sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalType?: LedgerJournalType | null;
  commissionarateVendorMaster?: DeserializedType<T, 'Edm.String'> | null;
  vendorLocation: DeserializedType<T, 'Edm.Int64'>;
  rg23CiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorAddress?: DeserializedType<T, 'Edm.String'> | null;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  miscChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerAddress?: DeserializedType<T, 'Edm.String'> | null;
  applyExcise?: NoYes | null;
  logisticsAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  customsFobAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
  rg23AiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  journalInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exempt?: NoYes | null;
  maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  rg23AiiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculationDateType?: TaxCalculationDateType | null;
  sourceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  customsBillOfEntryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiptListQuantity: DeserializedType<T, 'Edm.Decimal'>;
  claimPercentage: DeserializedType<T, 'Edm.Decimal'>;
  merchantId?: DeserializedType<T, 'Edm.String'> | null;
  customsTaxRegulationAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  vendorTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  itcCategory?: ItcCategoryIn | null;
  taxDirection?: TaxDirection | null;
  origin?: TaxOrigin | null;
  purchasePackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  purchaseInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  taxReportHierarchyNodeIn: DeserializedType<T, 'Edm.Int64'>;
  taxCalculationDateType?: TaxCalculationDateType | null;
  taxValue: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  exciseRegister?: ExciseRegisterIn | null;
  vendorCalculationDateType?: VendorCalculationDateTypeIn | null;
  eCommrceOperatorGstin: DeserializedType<T, 'Edm.Int64'>;
  color?: DeserializedType<T, 'Edm.String'> | null;
  reverseChargePercentageIn: DeserializedType<T, 'Edm.Decimal'>;
  vatDefLineRefRecId: DeserializedType<T, 'Edm.Int64'>;
  customsChargeAsExpensePercentIn: DeserializedType<T, 'Edm.Decimal'>;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  scrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  recoverableAmount: DeserializedType<T, 'Edm.Decimal'>;
  journal?: DeserializedType<T, 'Edm.String'> | null;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  companyBankAddress?: DeserializedType<T, 'Edm.String'> | null;
  pickingListNumber?: DeserializedType<T, 'Edm.String'> | null;
  gtaServiceCategory?: GtaServiceCategoryIn | null;
  transferred?: NoYes | null;
  retentionAmount: DeserializedType<T, 'Edm.Decimal'>;
  rg23CiiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  rangeCompanyInformation?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  vatScheduleName: DeserializedType<T, 'Edm.Int64'>;
  costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  loadOnInventoryAmount: DeserializedType<T, 'Edm.Decimal'>;
  plaAmount: DeserializedType<T, 'Edm.Decimal'>;
  consignmentNoteNum?: DeserializedType<T, 'Edm.String'> | null;
  rg23ADeferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankRefNum?: DeserializedType<T, 'Edm.String'> | null;
  nonRecoverableAmt: DeserializedType<T, 'Edm.Decimal'>;
  serviceAccountingCodeTable: DeserializedType<T, 'Edm.Int64'>;
  salesInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  manufacturedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customsTariffCodeTable: DeserializedType<T, 'Edm.Int64'>;
  purchasePackingSlipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyFormSeries?: DeserializedType<T, 'Edm.String'> | null;
  customsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  directSettlement?: DirectSettlementIn | null;
  receiptListDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customsImportInvoiceNumberTable: DeserializedType<T, 'Edm.Int64'>;
  salesOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyBankName?: DeserializedType<T, 'Edm.String'> | null;
  dsaIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  dsaQuantity: DeserializedType<T, 'Edm.Decimal'>;
  rg23CiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  rangeCustomerMaster?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  payableAmount: DeserializedType<T, 'Edm.Decimal'>;
  postedTaxAmout: DeserializedType<T, 'Edm.Decimal'>;
  taxCurrency?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountSecondary: DeserializedType<T, 'Edm.Decimal'>;
  divisionCompanyInformation?: DeserializedType<T, 'Edm.String'> | null;
  vatDeferementExtTableId: DeserializedType<T, 'Edm.Int32'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  customsCifAmount: DeserializedType<T, 'Edm.Decimal'>;
  vatDefermentExtRecId: DeserializedType<T, 'Edm.Int64'>;
  rg23CDeferredAmount: DeserializedType<T, 'Edm.Decimal'>;
  pickingListDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiptListNumber?: DeserializedType<T, 'Edm.String'> | null;
  voucherCurrency?: DeserializedType<T, 'Edm.String'> | null;
  rg23CiiIdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPackingSlipQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionStateCode?: DeserializedType<T, 'Edm.String'> | null;
  make?: DeserializedType<T, 'Edm.String'> | null;
  customsBillOfEntryNumberTable: DeserializedType<T, 'Edm.Int64'>;
  companyFormNumber?: DeserializedType<T, 'Edm.String'> | null;
  assessableValue: DeserializedType<T, 'Edm.Decimal'>;
  rg23AiiNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  totalMaximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  customerLocation: DeserializedType<T, 'Edm.Int64'>;
  customsLandingChargesPct: DeserializedType<T, 'Edm.Decimal'>;
  commissionarateCompanyInformation?: DeserializedType<T, 'Edm.String'> | null;
  priceType?: PriceTypeIn | null;
  exciseRegisterType?: NoYes | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  eCommerceOperator?: DeserializedType<T, 'Edm.String'> | null;
  isScrap?: NoYes | null;
}
