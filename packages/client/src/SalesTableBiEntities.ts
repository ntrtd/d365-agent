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
import type { SalesTableBiEntitiesApi } from './SalesTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { WhsReleaseStatus } from './WhsReleaseStatus';
import { Listcode } from './Listcode';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { CommissionTypeIt } from './CommissionTypeIt';
import { PaymentStub } from './PaymentStub';
import { ShipCarrierDlvType } from './ShipCarrierDlvType';
import { DocumentStatus } from './DocumentStatus';
import { InvoiceTypeW } from './InvoiceTypeW';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { ModuleCustSales } from './ModuleCustSales';
import { SalesType } from './SalesType';
import { FreightSlipType } from './FreightSlipType';
import { BankDocumentType } from './BankDocumentType';
import { ReturnStatusHeader } from './ReturnStatusHeader';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PlFiscalDocType } from './PlFiscalDocType';
import { DomExceptionType } from './DomExceptionType';
import { DomProcessStatus } from './DomProcessStatus';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { SettlementType } from './SettlementType';
import { ItemReservation } from './ItemReservation';
import { SalesStatus } from './SalesStatus';

/**
 * This class represents the entity "SalesTableBiEntities" of service "d365_metadata".
 */
export class SalesTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTableBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesTableBiEntities.
   */
  static override _entityName = 'SalesTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SalesId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * United Vat Invoice Lt.
   * @nullable
   */
  declare unitedVatInvoiceLt?: NoYes | null;
  /**
   * Exim Ports In.
   */
  declare eximPortsIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Order Stopped.
   * @nullable
   */
  declare mcrOrderStopped?: NoYes | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Invoice Cfdi Confirm Number Mx.
   * @nullable
   */
  declare eInvoiceCfdiConfirmNumberMx?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Matching Agreement.
   */
  declare matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Release Status.
   * @nullable
   */
  declare releaseStatus?: WhsReleaseStatus | null;
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
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Follow Original Pricing Method.
   * @nullable
   */
  declare revRecFollowOriginalPricingMethod?: NoYes | null;
  /**
   * Smm Sales Amount Total.
   */
  declare smmSalesAmountTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Print Dynamic Qr Code In.
   * @nullable
   */
  declare printDynamicQrCodeIn?: NoYes | null;
  /**
   * Commission Group.
   * @nullable
   */
  declare commissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Group In.
   * @nullable
   */
  declare tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Num Reg Id Trib Mx.
   * @nullable
   */
  declare numRegIdTribMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Register Lt.
   * @nullable
   */
  declare packingSlipRegisterLt?: NoYes | null;
  /**
   * Rev Rec Contract End Date.
   */
  declare revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mps Exclude Sales Order.
   * @nullable
   */
  declare mpsExcludeSalesOrder?: NoYes | null;
  /**
   * Ship Carrier Account.
   * @nullable
   */
  declare shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Rev Rec Multiple So Reallocation.
   * @nullable
   */
  declare revRecMultipleSoReallocation?: NoYes | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Deadline.
   */
  declare returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cfdi Temporary Export Mx.
   * @nullable
   */
  declare cfdiTemporaryExportMx?: NoYes | null;
  /**
   * Rev Rec Reallocation Id.
   * @nullable
   */
  declare revRecReallocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Origin.
   * @nullable
   */
  declare interCompanyOrigin?: InterCompanyOrigin | null;
  /**
   * Mps Full Run Ctp Status.
   * @nullable
   */
  declare mpsFullRunCtpStatus?: MpsFullRunCtpStatus | null;
  /**
   * Source Certificate Mx.
   * @nullable
   */
  declare sourceCertificateMx?: NoYes | null;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cred Man In Credit Control.
   * @nullable
   */
  declare credManInCreditControl?: NoYes | null;
  /**
   * Cred Man Exclude Sales Order.
   * @nullable
   */
  declare credManExcludeSalesOrder?: NoYes | null;
  /**
   * Dlv Reason.
   * @nullable
   */
  declare dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Type It.
   * @nullable
   */
  declare commissionTypeIt?: CommissionTypeIt | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dom Ignore.
   * @nullable
   */
  declare domIgnore?: NoYes | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
  /**
   * Return Replacement Created.
   * @nullable
   */
  declare returnReplacementCreated?: NoYes | null;
  /**
   * Sat Paym Method Mx.
   * @nullable
   */
  declare satPaymMethodMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Entry Change Policy.
   */
  declare systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ship Carrier Dlv Type.
   * @nullable
   */
  declare shipCarrierDlvType?: ShipCarrierDlvType | null;
  /**
   * Certificate Number Mx.
   * @nullable
   */
  declare certificateNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Case Tagging.
   * @nullable
   */
  declare caseTagging?: NoYes | null;
  /**
   * Electronic Invoice Framework Type Fr.
   */
  declare electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: DocumentStatus | null;
  /**
   * Invoice Type W.
   * @nullable
   */
  declare invoiceTypeW?: InvoiceTypeW | null;
  /**
   * Delivery Date Control Type.
   * @nullable
   */
  declare deliveryDateControlType?: SalesDeliveryDateControlType | null;
  /**
   * E Invoice Line Spec.
   * @nullable
   */
  declare eInvoiceLineSpec?: NoYes | null;
  /**
   * Smm Campaign Id.
   * @nullable
   */
  declare smmCampaignId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Id.
   * @nullable
   */
  declare quotationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Authorization.
   * @nullable
   */
  declare creditCardAuthorization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Contract Start Date.
   */
  declare revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sat Shipping Reason Mx.
   * @nullable
   */
  declare satShippingReasonMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Regime Mx.
   * @nullable
   */
  declare customsRegimeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Auto Summary Module Type.
   * @nullable
   */
  declare autoSummaryModuleType?: ModuleCustSales | null;
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
   * Cred Man Rejected.
   * @nullable
   */
  declare credManRejected?: NoYes | null;
  /**
   * Item Tagging.
   * @nullable
   */
  declare itemTagging?: NoYes | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Invoice Id.
   * @nullable
   */
  declare custInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Pool Id.
   * @nullable
   */
  declare salesPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Type.
   * @nullable
   */
  declare salesType?: SalesType | null;
  /**
   * Pds Rebate Program Tma Group.
   * @nullable
   */
  declare pdsRebateProgramTmaGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Date Confirmed.
   */
  declare shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inter Company Auto Create Orders.
   * @nullable
   */
  declare interCompanyAutoCreateOrders?: NoYes | null;
  /**
   * Multi Line Disc.
   * @nullable
   */
  declare multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Latest Reverse Journal.
   */
  declare revRecLatestReverseJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ship Carrier Residential.
   * @nullable
   */
  declare shipCarrierResidential?: NoYes | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Entry Changepolicy.
   */
  declare manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Worker Sales Taker.
   */
  declare workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cred Man Released From Credit Control.
   * @nullable
   */
  declare credManReleasedFromCreditControl?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Slip Type.
   * @nullable
   */
  declare freightSlipType?: FreightSlipType | null;
  /**
   * Return Replacement Id.
   * @nullable
   */
  declare returnReplacementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankDocumentType | null;
  /**
   * Credit Card Cust Ref Id.
   */
  declare creditCardCustRefId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ship Carrier Name.
   * @nullable
   */
  declare shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One Time Customer.
   * @nullable
   */
  declare oneTimeCustomer?: NoYes | null;
  /**
   * Inter Company Original Cust Account.
   * @nullable
   */
  declare interCompanyOriginalCustAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Ref.
   * @nullable
   */
  declare customerRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Channel Table.
   */
  declare retailChannelTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Order.
   * @nullable
   */
  declare interCompanyOrder?: NoYes | null;
  /**
   * Direct Debit Mandate.
   */
  declare directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc Base Days.
   */
  declare cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Credit Note Reason Code.
   */
  declare creditNoteReasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Export Order In.
   * @nullable
   */
  declare customsExportOrderIn?: NoYes | null;
  /**
   * Project Manager Fr.
   * @nullable
   */
  declare projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Batch Attrib Auto Res.
   * @nullable
   */
  declare pdsBatchAttribAutoRes?: NoYes | null;
  /**
   * Reporting Currency Fixed Exch Rate.
   */
  declare reportingCurrencyFixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Register Lt.
   * @nullable
   */
  declare invoiceRegisterLt?: NoYes | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num Rec Id.
   */
  declare vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Direct Delivery.
   * @nullable
   */
  declare interCompanyDirectDelivery?: NoYes | null;
  /**
   * Return Status.
   * @nullable
   */
  declare returnStatus?: ReturnStatusHeader | null;
  /**
   * Sub Bill Created From Sb.
   * @nullable
   */
  declare subBillCreatedFromSb?: NoYes | null;
  /**
   * Export Reason.
   * @nullable
   */
  declare exportReason?: DeserializedType<T, 'Edm.String'> | null;
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
   * County Orig Dest.
   * @nullable
   */
  declare countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exch Rate.
   */
  declare fixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Disc.
   * @nullable
   */
  declare lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Allow Indirect Creation.
   * @nullable
   */
  declare interCompanyAllowIndirectCreation?: NoYes | null;
  /**
   * Sub Bill Suppress Child Items.
   * @nullable
   */
  declare subBillSuppressChildItems?: NoYes | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
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
   * Pallet Tagging.
   * @nullable
   */
  declare palletTagging?: NoYes | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Account Code.
   * @nullable
   */
  declare shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Sales Responsible.
   */
  declare workerSalesResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Auto Numbering Lt.
   * @nullable
   */
  declare invoiceAutoNumberingLt?: NoYes | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Funding Source.
   */
  declare fundingSource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Group Id.
   * @nullable
   */
  declare priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc.
   * @nullable
   */
  declare cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Add Value Lv.
   */
  declare intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inter Company Direct Delivery Orig.
   * @nullable
   */
  declare interCompanyDirectDeliveryOrig?: NoYes | null;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cov Status.
   */
  declare covStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Percent.
   */
  declare cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Card Authorization Error.
   * @nullable
   */
  declare creditCardAuthorizationError?: NoYes | null;
  /**
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tam Deduction Id.
   * @nullable
   */
  declare tamDeductionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dom Iterations.
   */
  declare domIterations: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Approval Amount.
   */
  declare creditCardApprovalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tds Group In.
   * @nullable
   */
  declare tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cur Bank Account Lv.
   * @nullable
   */
  declare curBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Carrier Delivery Contact.
   * @nullable
   */
  declare shipCarrierDeliveryContact?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Doc Type Pl.
   * @nullable
   */
  declare fiscalDocTypePl?: PlFiscalDocType | null;
  /**
   * Dom Exception Type.
   * @nullable
   */
  declare domExceptionType?: DomExceptionType | null;
  /**
   * Cred Man Id.
   * @nullable
   */
  declare credManId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Purpose Mx.
   * @nullable
   */
  declare satPurposeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Lv.
   * @nullable
   */
  declare bankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Foreign Trade Mx.
   * @nullable
   */
  declare foreignTradeMx?: NoYes | null;
  /**
   * Purch Order Form Num.
   * @nullable
   */
  declare purchOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customs Shipping Bill In.
   * @nullable
   */
  declare customsShippingBillIn?: NoYes | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sub Bill Bill To Postal Address.
   */
  declare subBillBillToPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dom Processed.
   * @nullable
   */
  declare domProcessed?: DomProcessStatus | null;
  /**
   * Inter Company Original Sales Id.
   * @nullable
   */
  declare interCompanyOriginalSalesId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receipt Date Confirmed.
   */
  declare receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asoh Order Class.
   * @nullable
   */
  declare asohOrderClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gup Skip Pricing Calculation.
   * @nullable
   */
  declare gupSkipPricingCalculation?: NoYes | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Gup Delay Pricing Calculation.
   * @nullable
   */
  declare gupDelayPricingCalculation?: NoYes | null;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Cust Rebate Group Id.
   * @nullable
   */
  declare pdsCustRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Bank Account Lv.
   * @nullable
   */
  declare custBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Sched.
   * @nullable
   */
  declare paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tam Rebate Reference.
   * @nullable
   */
  declare tamRebateReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Id It.
   * @nullable
   */
  declare intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Postal Address.
   */
  declare shipCarrierPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ship Carrier Expedited Shipment.
   * @nullable
   */
  declare shipCarrierExpeditedShipment?: NoYes | null;
  /**
   * Inter Company Purch Id.
   * @nullable
   */
  declare interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fiscal Address Mx.
   * @nullable
   */
  declare fiscalAddressMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Zone.
   * @nullable
   */
  declare freightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Auto Numbering Lt.
   * @nullable
   */
  declare packingSlipAutoNumberingLt?: NoYes | null;
  /**
   * Inter Company Allow Indirect Creation Orig.
   * @nullable
   */
  declare interCompanyAllowIndirectCreationOrig?: NoYes | null;
  /**
   * Ship Carrier Id.
   * @nullable
   */
  declare shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Name.
   * @nullable
   */
  declare salesName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deadline.
   */
  declare deadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Carrier Blind Shipment.
   * @nullable
   */
  declare shipCarrierBlindShipment?: NoYes | null;
  /**
   * Sales Origin Id.
   * @nullable
   */
  declare salesOriginId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * System Entry Source.
   * @nullable
   */
  declare systemEntrySource?: PriceDiscSystemSource | null;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sat Incoterm Code Mx.
   * @nullable
   */
  declare satIncotermCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Disc.
   * @nullable
   */
  declare endDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nature Of Assessee In.
   * @nullable
   */
  declare natureOfAssesseeIn?: NatureOfAssesseeIn | null;
  /**
   * Sub Bill Bill To Name.
   * @nullable
   */
  declare subBillBillToName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Estimate.
   */
  declare estimate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reservation.
   * @nullable
   */
  declare reservation?: ItemReservation | null;
  /**
   * Dom Processed Date Time.
   */
  declare domProcessedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cons Target Jp.
   * @nullable
   */
  declare consTargetJp?: NoYes | null;
  /**
   * Sales Unit Id.
   * @nullable
   */
  declare salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Fuel Surcharge.
   * @nullable
   */
  declare shipCarrierFuelSurcharge?: NoYes | null;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Status.
   * @nullable
   */
  declare salesStatus?: SalesStatus | null;

  constructor(_entityApi: SalesTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  unitedVatInvoiceLt?: NoYes | null;
  eximPortsIn: DeserializedType<T, 'Edm.Int64'>;
  mcrOrderStopped?: NoYes | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  eInvoiceCfdiConfirmNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  releaseStatus?: WhsReleaseStatus | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  revRecFollowOriginalPricingMethod?: NoYes | null;
  smmSalesAmountTotal: DeserializedType<T, 'Edm.Decimal'>;
  printDynamicQrCodeIn?: NoYes | null;
  commissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  numRegIdTribMx?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipRegisterLt?: NoYes | null;
  revRecContractEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mpsExcludeSalesOrder?: NoYes | null;
  shipCarrierAccount?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  revRecMultipleSoReallocation?: NoYes | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  returnDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  cfdiTemporaryExportMx?: NoYes | null;
  revRecReallocationId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyOrigin?: InterCompanyOrigin | null;
  mpsFullRunCtpStatus?: MpsFullRunCtpStatus | null;
  sourceCertificateMx?: NoYes | null;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  credManInCreditControl?: NoYes | null;
  credManExcludeSalesOrder?: NoYes | null;
  dlvReason?: DeserializedType<T, 'Edm.String'> | null;
  commissionTypeIt?: CommissionTypeIt | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  domIgnore?: NoYes | null;
  giroType?: PaymentStub | null;
  returnReplacementCreated?: NoYes | null;
  satPaymMethodMx?: DeserializedType<T, 'Edm.String'> | null;
  systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  shipCarrierDlvType?: ShipCarrierDlvType | null;
  certificateNumberMx?: DeserializedType<T, 'Edm.String'> | null;
  caseTagging?: NoYes | null;
  electronicInvoiceFrameworkTypeFr: DeserializedType<T, 'Edm.Int64'>;
  documentStatus?: DocumentStatus | null;
  invoiceTypeW?: InvoiceTypeW | null;
  deliveryDateControlType?: SalesDeliveryDateControlType | null;
  eInvoiceLineSpec?: NoYes | null;
  smmCampaignId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  quotationId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardAuthorization?: DeserializedType<T, 'Edm.String'> | null;
  revRecContractStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  satShippingReasonMx?: DeserializedType<T, 'Edm.String'> | null;
  customsRegimeMx?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  autoSummaryModuleType?: ModuleCustSales | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  credManRejected?: NoYes | null;
  itemTagging?: NoYes | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  salesPoolId?: DeserializedType<T, 'Edm.String'> | null;
  salesType?: SalesType | null;
  pdsRebateProgramTmaGroup?: DeserializedType<T, 'Edm.String'> | null;
  shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  interCompanyAutoCreateOrders?: NoYes | null;
  multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  revRecLatestReverseJournal: DeserializedType<T, 'Edm.Int64'>;
  shipCarrierResidential?: NoYes | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  workerSalesTaker: DeserializedType<T, 'Edm.Int64'>;
  credManReleasedFromCreditControl?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  freightSlipType?: FreightSlipType | null;
  returnReplacementId?: DeserializedType<T, 'Edm.String'> | null;
  bankDocumentType?: BankDocumentType | null;
  creditCardCustRefId: DeserializedType<T, 'Edm.Int64'>;
  shipCarrierName?: DeserializedType<T, 'Edm.String'> | null;
  oneTimeCustomer?: NoYes | null;
  interCompanyOriginalCustAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerRef?: DeserializedType<T, 'Edm.String'> | null;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelTable: DeserializedType<T, 'Edm.Int64'>;
  interCompanyOrder?: NoYes | null;
  directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  creditNoteReasonCode: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  customsExportOrderIn?: NoYes | null;
  projectManagerFr?: DeserializedType<T, 'Edm.String'> | null;
  pdsBatchAttribAutoRes?: NoYes | null;
  reportingCurrencyFixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  invoiceRegisterLt?: NoYes | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  interCompanyDirectDelivery?: NoYes | null;
  returnStatus?: ReturnStatusHeader | null;
  subBillCreatedFromSb?: NoYes | null;
  exportReason?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  serviceCodeRefRecId: DeserializedType<T, 'Edm.Int64'>;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyAllowIndirectCreation?: NoYes | null;
  subBillSuppressChildItems?: NoYes | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  vatNumTableType?: TaxExemptNumberSourceType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  palletTagging?: NoYes | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  workerSalesResponsible: DeserializedType<T, 'Edm.Int64'>;
  invoiceAutoNumberingLt?: NoYes | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  fundingSource: DeserializedType<T, 'Edm.Int64'>;
  priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  interCompanyDirectDeliveryOrig?: NoYes | null;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  covStatus: DeserializedType<T, 'Edm.Int32'>;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  creditCardAuthorizationError?: NoYes | null;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  tamDeductionId?: DeserializedType<T, 'Edm.String'> | null;
  domIterations: DeserializedType<T, 'Edm.Int32'>;
  creditCardApprovalAmount: DeserializedType<T, 'Edm.Decimal'>;
  tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  curBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCarrierDeliveryContact?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocTypePl?: PlFiscalDocType | null;
  domExceptionType?: DomExceptionType | null;
  credManId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  satPurposeMx?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  foreignTradeMx?: NoYes | null;
  purchOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  customsShippingBillIn?: NoYes | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeFr?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  subBillBillToPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  domProcessed?: DomProcessStatus | null;
  interCompanyOriginalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  asohOrderClass?: DeserializedType<T, 'Edm.String'> | null;
  gupSkipPricingCalculation?: NoYes | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  gupDelayPricingCalculation?: NoYes | null;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  pdsCustRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  custBankAccountLv?: DeserializedType<T, 'Edm.String'> | null;
  paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  tamRebateReference?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  shipCarrierExpeditedShipment?: NoYes | null;
  interCompanyPurchId?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  fiscalAddressMx?: DeserializedType<T, 'Edm.String'> | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipAutoNumberingLt?: NoYes | null;
  interCompanyAllowIndirectCreationOrig?: NoYes | null;
  shipCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  salesName?: DeserializedType<T, 'Edm.String'> | null;
  deadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCarrierBlindShipment?: NoYes | null;
  salesOriginId?: DeserializedType<T, 'Edm.String'> | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  systemEntrySource?: PriceDiscSystemSource | null;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  satIncotermCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  endDisc?: DeserializedType<T, 'Edm.String'> | null;
  natureOfAssesseeIn?: NatureOfAssesseeIn | null;
  subBillBillToName?: DeserializedType<T, 'Edm.String'> | null;
  settleVoucher?: SettlementType | null;
  estimate: DeserializedType<T, 'Edm.Decimal'>;
  reservation?: ItemReservation | null;
  domProcessedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consTargetJp?: NoYes | null;
  salesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierFuelSurcharge?: NoYes | null;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  salesStatus?: SalesStatus | null;
}
