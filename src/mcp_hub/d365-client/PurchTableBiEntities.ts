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
import type { PurchTableBiEntitiesApi } from './PurchTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { PurchDlvAddr } from './PurchDlvAddr';
import { VersioningDocumentState } from './VersioningDocumentState';
import { UnknownNoYes } from './UnknownNoYes';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { DocumentStatus } from './DocumentStatus';
import { ModuleVendPurch } from './ModuleVendPurch';
import { Listcode } from './Listcode';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { FreightSlipType } from './FreightSlipType';
import { BankDocumentType } from './BankDocumentType';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';
import { TaxExemptNumberSourceType } from './TaxExemptNumberSourceType';
import { PurchStatus } from './PurchStatus';
import { PurchaseType } from './PurchaseType';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { SettlementType } from './SettlementType';

/**
 * This class represents the entity "PurchTableBiEntities" of service "d365_metadata".
 */
export class PurchTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchTableBiEntitiesType<T>
{
  /**
   * Technical entity name for PurchTableBiEntities.
   */
  static override _entityName = 'PurchTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'PurchId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purch Id.
   */
  declare purchId: DeserializedType<T, 'Edm.String'>;
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
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: PurchDlvAddr | null;
  /**
   * Inter Company Sales Id.
   * @nullable
   */
  declare interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document State.
   * @nullable
   */
  declare documentState?: VersioningDocumentState | null;
  /**
   * Matching Agreement.
   */
  declare matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disc Percent.
   */
  declare discPercent: DeserializedType<T, 'Edm.Decimal'>;
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
   * Is Encumbrance Required.
   * @nullable
   */
  declare isEncumbranceRequired?: UnknownNoYes | null;
  /**
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Req Attention.
   * @nullable
   */
  declare reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Dlv Earliest.
   */
  declare confirmedDlvEarliest: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason Table Ref.
   */
  declare reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Group.
   * @nullable
   */
  declare vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Origin.
   * @nullable
   */
  declare interCompanyOrigin?: InterCompanyOrigin | null;
  /**
   * Service Category.
   * @nullable
   */
  declare serviceCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Buyer Group Id.
   * @nullable
   */
  declare itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Replacement Created.
   * @nullable
   */
  declare returnReplacementCreated?: NoYes | null;
  /**
   * System Entry Change Policy.
   */
  declare systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fsh Auto Created.
   * @nullable
   */
  declare fshAutoCreated?: NoYes | null;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: DocumentStatus | null;
  /**
   * Retail Driver Details.
   * @nullable
   */
  declare retailDriverDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contract Num Sa.
   * @nullable
   */
  declare contractNumSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester.
   */
  declare requester: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tam Vend Rebate Group Id.
   * @nullable
   */
  declare tamVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address.
   * @nullable
   */
  declare serviceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Summary Module Type.
   * @nullable
   */
  declare autoSummaryModuleType?: ModuleVendPurch | null;
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
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Date.
   */
  declare serviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Ref.
   * @nullable
   */
  declare vendorRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Code.
   * @nullable
   */
  declare listCode?: Listcode | null;
  /**
   * Purchase Order Header Creation Method.
   * @nullable
   */
  declare purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
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
   * Multi Line Disc.
   * @nullable
   */
  declare multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
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
   * Manual Entry Changepolicy.
   */
  declare manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Finalize Closing Date.
   */
  declare finalizeClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Bank Document Type.
   * @nullable
   */
  declare bankDocumentType?: BankDocumentType | null;
  /**
   * Inter Company Original Cust Account.
   * @nullable
   */
  declare interCompanyOriginalCustAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Invoice Declaration Is.
   */
  declare vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Purch Placer.
   */
  declare workerPurchPlacer: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One Time Vendor.
   * @nullable
   */
  declare oneTimeVendor?: NoYes | null;
  /**
   * Inter Company Order.
   * @nullable
   */
  declare interCompanyOrder?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Fixed Exch Rate.
   */
  declare reportingCurrencyFixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Modified.
   * @nullable
   */
  declare isModified?: NoYes | null;
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
   * Retail Retail Status Type.
   * @nullable
   */
  declare retailRetailStatusType?: RetailRetailStatusTypeBase | null;
  /**
   * Purch Pool Id.
   * @nullable
   */
  declare purchPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross Docking Date.
   */
  declare crossDockingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Mcr Drop Shipment.
   * @nullable
   */
  declare mcrDropShipment?: NoYes | null;
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
   * Cov Status.
   */
  declare covStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Name.
   * @nullable
   */
  declare serviceName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Markup Group.
   * @nullable
   */
  declare markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cxml Order Enable.
   * @nullable
   */
  declare cxmlOrderEnable?: NoYes | null;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirming Po.
   */
  declare confirmingPo: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Local Delivery Date.
   */
  declare localDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trade End Customer Account.
   * @nullable
   */
  declare tradeEndCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Avail Sales Date.
   */
  declare availSalesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One Time Supplier.
   * @nullable
   */
  declare oneTimeSupplier?: NoYes | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Ref Table Id.
   */
  declare addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purch Order Form Num.
   * @nullable
   */
  declare purchOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Dlv.
   */
  declare confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Original Sales Id.
   * @nullable
   */
  declare interCompanyOriginalSalesId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Ref Rec Id.
   */
  declare addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Sched.
   * @nullable
   */
  declare paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Date.
   */
  declare exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Intent Letter Id It.
   * @nullable
   */
  declare intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Location.
   * @nullable
   */
  declare replenishmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Zone.
   * @nullable
   */
  declare freightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bill To Address.
   */
  declare billToAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Status.
   * @nullable
   */
  declare purchStatus?: PurchStatus | null;
  /**
   * Inter Company Cust Purch Order Form Num.
   * @nullable
   */
  declare interCompanyCustPurchOrderFormNum?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Type.
   * @nullable
   */
  declare purchaseType?: PurchaseType | null;
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
   * System Entry Source.
   * @nullable
   */
  declare systemEntrySource?: PriceDiscSystemSource | null;
  /**
   * Change Request Required.
   * @nullable
   */
  declare changeRequestRequired?: NoYes | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Disc.
   * @nullable
   */
  declare endDisc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Cons Target Jp.
   * @nullable
   */
  declare consTargetJp?: NoYes | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: PurchTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchId: DeserializedType<T, 'Edm.String'>;
  unitedVatInvoiceLt?: NoYes | null;
  eximPortsIn: DeserializedType<T, 'Edm.Int64'>;
  deliveryType?: PurchDlvAddr | null;
  interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
  documentState?: VersioningDocumentState | null;
  matchingAgreement: DeserializedType<T, 'Edm.Int64'>;
  discPercent: DeserializedType<T, 'Edm.Decimal'>;
  purchName?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  isEncumbranceRequired?: UnknownNoYes | null;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  reqAttention?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDlvEarliest: DeserializedType<T, 'Edm.DateTimeOffset'>;
  email?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reasonTableRef: DeserializedType<T, 'Edm.Int64'>;
  vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyOrigin?: InterCompanyOrigin | null;
  serviceCategory?: DeserializedType<T, 'Edm.String'> | null;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  returnReplacementCreated?: NoYes | null;
  systemEntryChangePolicy: DeserializedType<T, 'Edm.Int64'>;
  fshAutoCreated?: NoYes | null;
  documentStatus?: DocumentStatus | null;
  retailDriverDetails?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contractNumSa?: DeserializedType<T, 'Edm.String'> | null;
  requester: DeserializedType<T, 'Edm.Int64'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  tamVendRebateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddress?: DeserializedType<T, 'Edm.String'> | null;
  autoSummaryModuleType?: ModuleVendPurch | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  serviceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  vendorRef?: DeserializedType<T, 'Edm.String'> | null;
  listCode?: Listcode | null;
  purchaseOrderHeaderCreationMethod?: PurchPurchaseOrderCreationMethod | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  multiLineDisc?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  manualEntryChangepolicy: DeserializedType<T, 'Edm.Int64'>;
  finalizeClosingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  freightSlipType?: FreightSlipType | null;
  bankDocumentType?: BankDocumentType | null;
  interCompanyOriginalCustAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  workerPurchPlacer: DeserializedType<T, 'Edm.Int64'>;
  oneTimeVendor?: NoYes | null;
  interCompanyOrder?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyFixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  isModified?: NoYes | null;
  vatNumRecId: DeserializedType<T, 'Edm.Int64'>;
  interCompanyDirectDelivery?: NoYes | null;
  retailRetailStatusType?: RetailRetailStatusTypeBase | null;
  purchPoolId?: DeserializedType<T, 'Edm.String'> | null;
  crossDockingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inclTax?: NoYes | null;
  countyOrigDest?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchRate: DeserializedType<T, 'Edm.Decimal'>;
  lineDisc?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyAllowIndirectCreation?: NoYes | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  vatNumTableType?: TaxExemptNumberSourceType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAutoNumberingLt?: NoYes | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  mcrDropShipment?: NoYes | null;
  priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  cashDisc?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  covStatus: DeserializedType<T, 'Edm.Int32'>;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  serviceName?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  markupGroup?: DeserializedType<T, 'Edm.String'> | null;
  cxmlOrderEnable?: NoYes | null;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  confirmingPo: DeserializedType<T, 'Edm.Int64'>;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  localDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  tradeEndCustomerAccount?: DeserializedType<T, 'Edm.String'> | null;
  availSalesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oneTimeSupplier?: NoYes | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  addressRefTableId: DeserializedType<T, 'Edm.Int32'>;
  purchOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDlv: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyOriginalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  addressRefRecId: DeserializedType<T, 'Edm.Int64'>;
  paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentLocation?: DeserializedType<T, 'Edm.String'> | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  billToAddress: DeserializedType<T, 'Edm.Int64'>;
  purchStatus?: PurchStatus | null;
  interCompanyCustPurchOrderFormNum?: DeserializedType<T, 'Edm.String'> | null;
  purchaseType?: PurchaseType | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  systemEntrySource?: PriceDiscSystemSource | null;
  changeRequestRequired?: NoYes | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  endDisc?: DeserializedType<T, 'Edm.String'> | null;
  settleVoucher?: SettlementType | null;
  consTargetJp?: NoYes | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
}
