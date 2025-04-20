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
import type { VendInvoiceInfoTableBiEntitiesApi } from './VendInvoiceInfoTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { DocumentOrigin } from './DocumentOrigin';
import { VendInvoiceMatchStatus } from './VendInvoiceMatchStatus';
import { VendInvoiceAutomationStatus } from './VendInvoiceAutomationStatus';
import { VendInvoiceSaveStatus } from './VendInvoiceSaveStatus';
import { LastMatchVarianceOptions } from './LastMatchVarianceOptions';
import { Listcode } from './Listcode';
import { UnknownNoYes } from './UnknownNoYes';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PurchInvoiceType } from './PurchInvoiceType';
import { DocumentStatus } from './DocumentStatus';
import { ParmJobStatus } from './ParmJobStatus';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
import { SettlementType } from './SettlementType';

/**
 * This class represents the entity "VendInvoiceInfoTableBiEntities" of service "d365_metadata".
 */
export class VendInvoiceInfoTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceInfoTableBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceInfoTableBiEntities.
   */
  static override _entityName = 'VendInvoiceInfoTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceInfoTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'TableRefId', 'ParmId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Ref Id.
   */
  declare tableRefId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parm Id.
   */
  declare parmId: DeserializedType<T, 'Edm.String'>;
  /**
   * Storno.
   * @nullable
   */
  declare storno?: NoYes | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Origin.
   * @nullable
   */
  declare documentOrigin?: DocumentOrigin | null;
  /**
   * Purch Name.
   * @nullable
   */
  declare purchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plafond Date It.
   */
  declare plafondDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Match Status.
   * @nullable
   */
  declare matchStatus?: VendInvoiceMatchStatus | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Round Off.
   */
  declare taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Automation Status.
   * @nullable
   */
  declare automationStatus?: VendInvoiceAutomationStatus | null;
  /**
   * Variance Approved Date Time.
   */
  declare varianceApprovedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Invoice Save Status.
   * @nullable
   */
  declare vendInvoiceSaveStatus?: VendInvoiceSaveStatus | null;
  /**
   * Include In Automated Processing.
   * @nullable
   */
  declare includeInAutomatedProcessing?: NoYes | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Re Calculate.
   */
  declare reCalculate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Last Match Variance.
   * @nullable
   */
  declare lastMatchVariance?: LastMatchVarianceOptions | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Electronic Address.
   */
  declare logisticsElectronicAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Variance Approver.
   */
  declare varianceApprover: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Payment Group.
   * @nullable
   */
  declare vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Perform Full Invoice Matching.
   * @nullable
   */
  declare performFullInvoiceMatching?: NoYes | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Advanced.
   * @nullable
   */
  declare processingAdvanced?: NoYes | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Correction.
   * @nullable
   */
  declare creditCorrection?: UnknownNoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Num.
   * @nullable
   */
  declare num?: DeserializedType<T, 'Edm.String'> | null;
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
   * Bank Lc Import Line.
   */
  declare bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hold.
   * @nullable
   */
  declare hold?: NoYes | null;
  /**
   * Vat Num Rec Id.
   */
  declare vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vendor Vat Date.
   */
  declare vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Received Date.
   */
  declare receivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Rate Secondary.
   */
  declare exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exch Rate.
   * @nullable
   */
  declare fixedExchRate?: NoYes | null;
  /**
   * Pool Rec Id.
   */
  declare poolRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Imported Sales Tax.
   */
  declare importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Num Table Type.
   * @nullable
   */
  declare vatNumTableType?: TaxExemptNumberSourceType | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: PurchInvoiceType | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Imported Amount.
   */
  declare importedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordering.
   * @nullable
   */
  declare ordering?: DocumentStatus | null;
  /**
   * Cash Disc.
   */
  declare cashDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Bank Account Id.
   * @nullable
   */
  declare vendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Date.
   */
  declare cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ignore Calculated Sales Tax.
   * @nullable
   */
  declare ignoreCalculatedSalesTax?: NoYes | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Parm Job Status.
   * @nullable
   */
  declare parmJobStatus?: ParmJobStatus | null;
  /**
   * Cash Disc Percent.
   */
  declare cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Requested Worker Email.
   * @nullable
   */
  declare vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Group.
   * @nullable
   */
  declare vendInvoiceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Round Off.
   */
  declare invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Request Status.
   * @nullable
   */
  declare requestStatus?: VendInvoiceRequestStatus | null;
  /**
   * Variance Comment.
   * @nullable
   */
  declare varianceComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Release Date.
   */
  declare invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subcontract Invoice.
   * @nullable
   */
  declare subcontractInvoice?: NoYes | null;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Sched.
   * @nullable
   */
  declare paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Remittance Location.
   */
  declare remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Batch Administration.
   * @nullable
   */
  declare batchAdministration?: NoYes | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variance Approved.
   * @nullable
   */
  declare varianceApproved?: NoYes | null;
  /**
   * Purch Agreement Header Psn.
   */
  declare purchAgreementHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Disc.
   */
  declare endDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: VendInvoiceInfoTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceInfoTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tableRefId: DeserializedType<T, 'Edm.String'>;
  parmId: DeserializedType<T, 'Edm.String'>;
  storno?: NoYes | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentOrigin?: DocumentOrigin | null;
  purchName?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  plafondDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  matchStatus?: VendInvoiceMatchStatus | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  automationStatus?: VendInvoiceAutomationStatus | null;
  varianceApprovedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendInvoiceSaveStatus?: VendInvoiceSaveStatus | null;
  includeInAutomatedProcessing?: NoYes | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  reCalculate: DeserializedType<T, 'Edm.Boolean'>;
  lastMatchVariance?: LastMatchVarianceOptions | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  logisticsElectronicAddress: DeserializedType<T, 'Edm.Int64'>;
  varianceApprover: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  performFullInvoiceMatching?: NoYes | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  processingAdvanced?: NoYes | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  listCode?: Listcode | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  creditCorrection?: UnknownNoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  num?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  approved?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  hold?: NoYes | null;
  vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  inclTax?: NoYes | null;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchRate?: NoYes | null;
  poolRecId: DeserializedType<T, 'Edm.Int64'>;
  importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  vatNumTableType?: TaxExemptNumberSourceType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  invoiceType?: PurchInvoiceType | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  importedAmount: DeserializedType<T, 'Edm.Decimal'>;
  ordering?: DocumentStatus | null;
  cashDisc: DeserializedType<T, 'Edm.Decimal'>;
  vendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ignoreCalculatedSalesTax?: NoYes | null;
  overrideSalesTax?: NoYes | null;
  parmJobStatus?: ParmJobStatus | null;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceGroup?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  requestStatus?: VendInvoiceRequestStatus | null;
  varianceComment?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  euroTriangulation?: NoYes | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  subcontractInvoice?: NoYes | null;
  approver: DeserializedType<T, 'Edm.Int64'>;
  paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  batchAdministration?: NoYes | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  varianceApproved?: NoYes | null;
  purchAgreementHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  endDisc: DeserializedType<T, 'Edm.Decimal'>;
  settleVoucher?: SettlementType | null;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
}
