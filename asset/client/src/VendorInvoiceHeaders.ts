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
import type { VendorInvoiceHeadersApi } from './VendorInvoiceHeadersApi';
import { NoYes } from './NoYes';
import { FiscalDocumentSpecieBr } from './FiscalDocumentSpecieBr';
import { WmsFreightChargeTerms } from './WmsFreightChargeTerms';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { Listcode } from './Listcode';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { TypeOfCTeBr } from './TypeOfCTeBr';
import { PurchInvoiceType } from './PurchInvoiceType';
import { SettlementType } from './SettlementType';
import { WmsFreightedBy } from './WmsFreightedBy';
import { PsnPurchasingCardTransactionType } from './PsnPurchasingCardTransactionType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  VendorInvoiceLines,
  VendorInvoiceLinesType
} from './VendorInvoiceLines';
import {
  VendorInvoiceDocumentAttachments,
  VendorInvoiceDocumentAttachmentsType
} from './VendorInvoiceDocumentAttachments';

/**
 * This class represents the entity "VendorInvoiceHeaders" of service "d365_metadata".
 */
export class VendorInvoiceHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceHeadersType<T>
{
  /**
   * Technical entity name for VendorInvoiceHeaders.
   */
  static override _entityName = 'VendorInvoiceHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceHeaders entity.
   */
  static _keys = ['dataAreaId', 'HeaderReference'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Carrier Name.
   * @nullable
   */
  declare carrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * Error Invalid Distribution.
   * @nullable
   */
  declare errorInvalidDistribution?: NoYes | null;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uuid.
   * @nullable
   */
  declare uuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Specie.
   * @nullable
   */
  declare fiscalDocumentSpecie?: FiscalDocumentSpecieBr | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Freight Charge Terms.
   * @nullable
   */
  declare deliveryFreightChargeTerms?: WmsFreightChargeTerms | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Date Comment.
   * @nullable
   */
  declare releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Received Date.
   */
  declare invoiceReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is On Hold.
   * @nullable
   */
  declare isOnHold?: NoYes | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recalculation.
   */
  declare recalculation: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cfps Code.
   * @nullable
   */
  declare cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variance Approved Date Time.
   */
  declare varianceApprovedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Invoice Review Status.
   * @nullable
   */
  declare vendorInvoiceReviewStatus?: VendInvoiceRequestStatus | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Uuid.
   * @nullable
   */
  declare invoiceUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Fine Code.
   * @nullable
   */
  declare vendorPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Description.
   * @nullable
   */
  declare invoiceDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Packing Name.
   * @nullable
   */
  declare deliveryPackingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount.
   */
  declare totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Specific Symbol.
   * @nullable
   */
  declare bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Constant Symbol.
   * @nullable
   */
  declare bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Invoice Type.
   * @nullable
   */
  declare gstInvoiceType?: InvoiceTypeMy | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Correction.
   * @nullable
   */
  declare creditCorrection?: NoYes | null;
  /**
   * Fiscal Operation Presence Type.
   * @nullable
   */
  declare fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Vendor Payment Financial Interest Code.
   * @nullable
   */
  declare vendorPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exchange Rate.
   */
  declare reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variance Personnel Number.
   * @nullable
   */
  declare variancePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Group Code.
   * @nullable
   */
  declare paymentGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * C Te Type.
   * @nullable
   */
  declare cTeType?: TypeOfCTeBr | null;
  /**
   * Charges Group.
   * @nullable
   */
  declare chargesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount.
   */
  declare cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Document Submission Id W.
   */
  declare businessDocumentSubmissionIdW: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Service Code On Delivery Address.
   * @nullable
   */
  declare serviceCodeOnDeliveryAddress?: NoYes | null;
  /**
   * Invoice Payment Release Date.
   */
  declare invoicePaymentReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Imported Sales Tax.
   */
  declare importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Vehicle Number.
   * @nullable
   */
  declare deliveryVehicleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Import Declaration Number.
   * @nullable
   */
  declare gstImportDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Imported Amount.
   */
  declare importedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Triangulation.
   * @nullable
   */
  declare triangulation?: NoYes | null;
  /**
   * Secondary Exchange Rate.
   */
  declare secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Ignore Calculated Sales Tax.
   * @nullable
   */
  declare ignoreCalculatedSalesTax?: NoYes | null;
  /**
   * Vendor Requested Worker Email.
   * @nullable
   */
  declare vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Rounding.
   */
  declare salesTaxRounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Round Off.
   */
  declare invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Batch.
   * @nullable
   */
  declare isBatch?: NoYes | null;
  /**
   * Delivery State Registered.
   * @nullable
   */
  declare deliveryStateRegistered?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Final User.
   * @nullable
   */
  declare isFinalUser?: NoYes | null;
  /**
   * Approve Posting With Matching Discrepancies.
   * @nullable
   */
  declare approvePostingWithMatchingDiscrepancies?: NoYes | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Only Import.
   * @nullable
   */
  declare headerOnlyImport?: NoYes | null;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Declaration Number.
   * @nullable
   */
  declare importDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Invoice Type.
   * @nullable
   */
  declare vendorInvoiceType?: PurchInvoiceType | null;
  /**
   * Fiscal Document Model.
   * @nullable
   */
  declare fiscalDocumentModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Electronic Invoice For Service.
   * @nullable
   */
  declare isElectronicInvoiceForService?: NoYes | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Series.
   * @nullable
   */
  declare fiscalDocumentSeries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Group.
   * @nullable
   */
  declare invoiceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prices Include Sales Tax.
   * @nullable
   */
  declare isPricesIncludeSalesTax?: NoYes | null;
  /**
   * Invoice Series.
   * @nullable
   */
  declare invoiceSeries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistics Procedure.
   * @nullable
   */
  declare statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Rate.
   * @nullable
   */
  declare fixedRate?: NoYes | null;
  /**
   * Delivery Transport Brand.
   * @nullable
   */
  declare deliveryTransportBrand?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Id Range.
   * @nullable
   */
  declare purchIdRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packingslip Range.
   * @nullable
   */
  declare packingslipRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Purch Receipt Date W.
   */
  declare purchReceiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Freighted By.
   * @nullable
   */
  declare freightedBy?: WmsFreightedBy | null;
  /**
   * Access Key.
   * @nullable
   */
  declare accessKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Manager Fr.
   * @nullable
   */
  declare projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Service Code Fr.
   * @nullable
   */
  declare invoiceAccountServiceCodeFr?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Invoice Framework Type Fr.
   */
  declare electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Project Manager Service Code Fr.
   * @nullable
   */
  declare projectManagerServiceCodeFr?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Psn Posting Definition Code.
   * @nullable
   */
  declare psnPostingDefinitionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Vendor Account For Balance Payoff.
   * @nullable
   */
  declare psnVendorAccountForBalancePayoff?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Psn Reference Invoice Number.
   * @nullable
   */
  declare psnReferenceInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Bank Account Id.
   * @nullable
   */
  declare psnBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Purchasing Card Transaction Type.
   * @nullable
   */
  declare psnPurchasingCardTransactionType?: PsnPurchasingCardTransactionType | null;
  /**
   * Psn Card Number Digits.
   * @nullable
   */
  declare psnCardNumberDigits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Card Holder Name.
   * @nullable
   */
  declare psnCardHolderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dte File Name.
   * @nullable
   */
  declare dteFileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dte Digest.
   * @nullable
   */
  declare dteDigest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Classification Id.
   * @nullable
   */
  declare documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dte Shipment Id.
   * @nullable
   */
  declare dteShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Set Id.
   * @nullable
   */
  declare withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Classification Number.
   * @nullable
   */
  declare documentClassificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link VendorInvoiceLines} entity.
   */
  declare vendorInvoiceLine: VendorInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceDocumentAttachments} entity.
   */
  declare vendorInvoiceDocumentAttachment: VendorInvoiceDocumentAttachments<T>[];

  constructor(_entityApi: VendorInvoiceHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  carrierName?: DeserializedType<T, 'Edm.String'> | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  errorInvalidDistribution?: NoYes | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  uuid?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentSpecie?: FiscalDocumentSpecieBr | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryFreightChargeTerms?: WmsFreightChargeTerms | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  isOnHold?: NoYes | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  recalculation: DeserializedType<T, 'Edm.Boolean'>;
  cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  varianceApprovedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorInvoiceReviewStatus?: VendInvoiceRequestStatus | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  invoiceUuid?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDescription?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPackingName?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  gstInvoiceType?: InvoiceTypeMy | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  listCode?: Listcode | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  creditCorrection?: NoYes | null;
  fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  vendorPaymentFinancialInterestCode?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  variancePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  cTeType?: TypeOfCTeBr | null;
  chargesGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessDocumentSubmissionIdW: DeserializedType<T, 'Edm.Guid'>;
  serviceCodeOnDeliveryAddress?: NoYes | null;
  invoicePaymentReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  deliveryVehicleNumber?: DeserializedType<T, 'Edm.String'> | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  gstImportDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  importedAmount: DeserializedType<T, 'Edm.Decimal'>;
  triangulation?: NoYes | null;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overrideSalesTax?: NoYes | null;
  ignoreCalculatedSalesTax?: NoYes | null;
  vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxRounding: DeserializedType<T, 'Edm.Decimal'>;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  isBatch?: NoYes | null;
  deliveryStateRegistered?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  isFinalUser?: NoYes | null;
  approvePostingWithMatchingDiscrepancies?: NoYes | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  headerOnlyImport?: NoYes | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  importDeclarationNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceType?: PurchInvoiceType | null;
  fiscalDocumentModel?: DeserializedType<T, 'Edm.String'> | null;
  isElectronicInvoiceForService?: NoYes | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentSeries?: DeserializedType<T, 'Edm.String'> | null;
  invoiceGroup?: DeserializedType<T, 'Edm.String'> | null;
  isPricesIncludeSalesTax?: NoYes | null;
  invoiceSeries?: DeserializedType<T, 'Edm.String'> | null;
  statisticsProcedure?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedRate?: NoYes | null;
  deliveryTransportBrand?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchIdRange?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  packingslipRange?: DeserializedType<T, 'Edm.String'> | null;
  settleVoucher?: SettlementType | null;
  purchReceiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  freightedBy?: WmsFreightedBy | null;
  accessKey?: DeserializedType<T, 'Edm.String'> | null;
  projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountServiceCodeFr?: DeserializedType<T, 'Edm.String'> | null;
  electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  projectManagerServiceCodeFr?: DeserializedType<T, 'Edm.String'> | null;
  psnPostingDefinitionCode?: DeserializedType<T, 'Edm.String'> | null;
  psnVendorAccountForBalancePayoff?: DeserializedType<T, 'Edm.String'> | null;
  psnReferenceInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  psnBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  psnPurchasingCardTransactionType?: PsnPurchasingCardTransactionType | null;
  psnCardNumberDigits?: DeserializedType<T, 'Edm.String'> | null;
  psnCardHolderName?: DeserializedType<T, 'Edm.String'> | null;
  dteFileName?: DeserializedType<T, 'Edm.String'> | null;
  dteDigest?: DeserializedType<T, 'Edm.String'> | null;
  documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  dteShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  documentClassificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  vendorInvoiceLine: VendorInvoiceLinesType<T>[];
  vendorInvoiceDocumentAttachment: VendorInvoiceDocumentAttachmentsType<T>[];
}
