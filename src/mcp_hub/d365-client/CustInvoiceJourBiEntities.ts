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
import type { CustInvoiceJourBiEntitiesApi } from './CustInvoiceJourBiEntitiesApi';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { CommissionTypeIt } from './CommissionTypeIt';
import { PaymentStub } from './PaymentStub';
import { InvoiceTypeW } from './InvoiceTypeW';
import { SalesType } from './SalesType';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import { RefNum } from './RefNum';

/**
 * This class represents the entity "CustInvoiceJourBiEntities" of service "d365_metadata".
 */
export class CustInvoiceJourBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustInvoiceJourBiEntitiesType<T>
{
  /**
   * Technical entity name for CustInvoiceJourBiEntities.
   */
  static override _entityName = 'CustInvoiceJourBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustInvoiceJourBiEntities entity.
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
   * Mcr Paym Amount.
   */
  declare mcrPaymAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Day Id.
   * @nullable
   */
  declare paymDayId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invoice Amount Mst.
   */
  declare invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sum Tax Mst.
   */
  declare sumTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Dynamic Qr Code In.
   * @nullable
   */
  declare printDynamicQrCodeIn?: NoYes | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rc Sales List Uk.
   * @nullable
   */
  declare rcSalesListUk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Party Tax Id.
   */
  declare partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intent Letter From Date It.
   */
  declare intentLetterFromDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Commission Type It.
   * @nullable
   */
  declare commissionTypeIt?: CommissionTypeIt | null;
  /**
   * Backorder.
   * @nullable
   */
  declare backorder?: NoYes | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
  /**
   * Tax Print On Invoice.
   * @nullable
   */
  declare taxPrintOnInvoice?: NoYes | null;
  /**
   * E Invoice Line Specific.
   * @nullable
   */
  declare eInvoiceLineSpecific?: NoYes | null;
  /**
   * Electronic Invoice Framework Type Fr.
   */
  declare electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Type W.
   * @nullable
   */
  declare invoiceTypeW?: InvoiceTypeW | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Correction.
   * @nullable
   */
  declare isCorrection?: NoYes | null;
  /**
   * On Account Amount.
   */
  declare onAccountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Lc Export Line.
   */
  declare bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Type.
   * @nullable
   */
  declare salesType?: SalesType | null;
  /**
   * Qr Code Sa.
   * @nullable
   */
  declare qrCodeSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Internal Id It.
   * @nullable
   */
  declare intentLetterInternalIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proforma.
   * @nullable
   */
  declare proforma?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Sales Taker.
   */
  declare workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Posted.
   * @nullable
   */
  declare interCompanyPosted?: NoYes | null;
  /**
   * Sum Line Disc.
   */
  declare sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One Time Customer.
   * @nullable
   */
  declare oneTimeCustomer?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate.
   */
  declare reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Provisional Assessment In.
   * @nullable
   */
  declare provisionalAssessmentIn?: NoYes | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit Mandate.
   */
  declare directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Postal Address.
   */
  declare invoicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sent Electronically.
   * @nullable
   */
  declare sentElectronically?: NoYes | null;
  /**
   * Project Manager Fr.
   * @nullable
   */
  declare projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Specify By Line.
   * @nullable
   */
  declare taxSpecifyByLine?: NoYes | null;
  /**
   * Invoice Round Off Mst.
   */
  declare invoiceRoundOffMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Invoice Sales Id.
   * @nullable
   */
  declare taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusHeader | null;
  /**
   * Exch Rate Secondary.
   */
  declare exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversed Rec Id.
   */
  declare reversedRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Service Code Ref Rec Id.
   */
  declare serviceCodeRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bill Of Lading Id.
   * @nullable
   */
  declare billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sum Markup.
   */
  declare sumMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Email.
   * @nullable
   */
  declare mcrEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sum Markup Mst.
   */
  declare sumMarkupMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Triangulation.
   * @nullable
   */
  declare triangulation?: NoYes | null;
  /**
   * Cash Disc.
   */
  declare cashDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cov Status.
   */
  declare covStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printed Originals.
   */
  declare printedOriginals: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Cash Disc Percent.
   */
  declare cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Line Disc Mst.
   */
  declare sumLineDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Mgmt Site Id.
   * @nullable
   */
  declare printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Round Off.
   */
  declare invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Volume.
   */
  declare volume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Disc Mst.
   */
  declare endDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Code Fr.
   * @nullable
   */
  declare serviceCodeFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Num.
   * @nullable
   */
  declare refNum?: RefNum | null;
  /**
   * Reverse Charge Amount.
   */
  declare reverseChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Dispatch.
   * @nullable
   */
  declare intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Sched.
   * @nullable
   */
  declare paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Id It.
   * @nullable
   */
  declare intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Purch Id.
   * @nullable
   */
  declare interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoicing Name.
   * @nullable
   */
  declare invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parm Id.
   * @nullable
   */
  declare parmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter To Date It.
   */
  declare intentLetterToDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Carrier Blind Shipment.
   * @nullable
   */
  declare shipCarrierBlindShipment?: NoYes | null;
  /**
   * Eu Sales List.
   * @nullable
   */
  declare euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exchange Rate Secondary.
   */
  declare reportingCurrencyExchangeRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Origin Id.
   * @nullable
   */
  declare salesOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Confirmed Es.
   */
  declare receiptDateConfirmedEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Balance Mst.
   */
  declare salesBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Reason Code Id.
   * @nullable
   */
  declare returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Balance.
   */
  declare salesBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Updated.
   * @nullable
   */
  declare updated?: NoYes | null;
  /**
   * End Disc.
   */
  declare endDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Due Amount.
   */
  declare mcrDueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sum Tax.
   */
  declare sumTax: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustInvoiceJourBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustInvoiceJourBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  mcrPaymAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymDayId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  sumTaxMst: DeserializedType<T, 'Edm.Decimal'>;
  printDynamicQrCodeIn?: NoYes | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  rcSalesListUk?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  intentLetterFromDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  commissionTypeIt?: CommissionTypeIt | null;
  backorder?: NoYes | null;
  giroType?: PaymentStub | null;
  taxPrintOnInvoice?: NoYes | null;
  eInvoiceLineSpecific?: NoYes | null;
  electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  invoiceTypeW?: InvoiceTypeW | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  isCorrection?: NoYes | null;
  onAccountAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  prepayment?: NoYes | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  salesType?: SalesType | null;
  qrCodeSa?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterInternalIdIt?: DeserializedType<T, 'Edm.String'> | null;
  proforma?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  interCompanyPosted?: NoYes | null;
  sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  oneTimeCustomer?: NoYes | null;
  reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  provisionalAssessmentIn?: NoYes | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  invoicePostalAddress: DeserializedType<T, 'Edm.Int64'>;
  sentElectronically?: NoYes | null;
  projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  taxSpecifyByLine?: NoYes | null;
  invoiceRoundOffMst: DeserializedType<T, 'Edm.Decimal'>;
  taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  returnStatus?: ReturnStatusHeader | null;
  exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  reversedRecId: DeserializedType<T, 'Edm.Int64'>;
  inclTax?: NoYes | null;
  serviceCodeRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  sumMarkup: DeserializedType<T, 'Edm.Decimal'>;
  mcrEmail?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  sumMarkupMst: DeserializedType<T, 'Edm.Decimal'>;
  triangulation?: NoYes | null;
  cashDisc: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  covStatus: DeserializedType<T, 'Edm.Int32'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  printedOriginals: DeserializedType<T, 'Edm.Int32'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  sumLineDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  endDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  serviceCodeFr?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  refNum?: RefNum | null;
  reverseChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  invoicingName?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterToDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCarrierBlindShipment?: NoYes | null;
  euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOriginId?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateConfirmedEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesBalanceMst: DeserializedType<T, 'Edm.Decimal'>;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesBalance: DeserializedType<T, 'Edm.Decimal'>;
  updated?: NoYes | null;
  endDisc: DeserializedType<T, 'Edm.Decimal'>;
  mcrDueAmount: DeserializedType<T, 'Edm.Decimal'>;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  sumTax: DeserializedType<T, 'Edm.Decimal'>;
}
