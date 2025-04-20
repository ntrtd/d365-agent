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
import type { VendInvoiceJourBiEntitiesApi } from './VendInvoiceJourBiEntitiesApi';
import { NoYes } from './NoYes';
import { DocumentOrigin } from './DocumentOrigin';
import { Listcode } from './Listcode';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { PurchInvoiceType } from './PurchInvoiceType';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { LtDocOriginator } from './LtDocOriginator';
import { PurchaseType } from './PurchaseType';

/**
 * This class represents the entity "VendInvoiceJourBiEntities" of service "d365_metadata".
 */
export class VendInvoiceJourBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceJourBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceJourBiEntities.
   */
  static override _entityName = 'VendInvoiceJourBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceJourBiEntities entity.
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
   * Tax Setoff Voucher In.
   * @nullable
   */
  declare taxSetoffVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * United Vat Invoice Lt.
   * @nullable
   */
  declare unitedVatInvoiceLt?: NoYes | null;
  /**
   * Consignor Account Ru.
   * @nullable
   */
  declare consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Sales Id.
   * @nullable
   */
  declare interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Origin.
   * @nullable
   */
  declare documentOrigin?: DocumentOrigin | null;
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
   * Attorney Date Ru.
   */
  declare attorneyDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Amount Mst.
   */
  declare invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Document Type Br.
   */
  declare fiscalDocumentTypeBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Return Item Num.
   * @nullable
   */
  declare returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Party Tax Id.
   */
  declare partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Round Off.
   */
  declare taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Group.
   * @nullable
   */
  declare vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice Purch Id.
   * @nullable
   */
  declare taxInvoicePurchId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vend Cons Invoice Jp.
   */
  declare vendConsInvoiceJp: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Print On Invoice.
   * @nullable
   */
  declare taxPrintOnInvoice?: NoYes | null;
  /**
   * Inter Company Ledger Voucher.
   * @nullable
   */
  declare interCompanyLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Account Ru.
   * @nullable
   */
  declare consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Invoice Id Ru.
   * @nullable
   */
  declare correctedInvoiceIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Electronic Address.
   */
  declare logisticsElectronicAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Factured Fully Ru.
   * @nullable
   */
  declare facturedFullyRu?: NoYes | null;
  /**
   * Contract Num Sa.
   * @nullable
   */
  declare contractNumSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Delivery Address Lt.
   * @nullable
   */
  declare deliveryAddressLt?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vend Payment Group.
   * @nullable
   */
  declare vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Offsession Id Ru.
   * @nullable
   */
  declare offsessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Purch Operation Type Br.
   */
  declare salesPurchOperationTypeBr: DeserializedType<T, 'Edm.Int64'>;
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
   * Service Code On Dlv Address Br.
   * @nullable
   */
  declare serviceCodeOnDlvAddressBr?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate.
   */
  declare reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Invoice Declaration Is.
   */
  declare vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Bailee Receipt Report Id Ru.
   * @nullable
   */
  declare inventBaileeReceiptReportIdRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Lc Import Line.
   */
  declare bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Specify By Line.
   * @nullable
   */
  declare taxSpecifyByLine?: NoYes | null;
  /**
   * Vendor Vat Date.
   */
  declare vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Final User Br.
   * @nullable
   */
  declare vendFinalUserBr?: NoYes | null;
  /**
   * Imported Sales Tax.
   */
  declare importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: PurchInvoiceType | null;
  /**
   * Sum Markup.
   */
  declare sumMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Imported Amount.
   */
  declare importedAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Intrastat Add Value Lv.
   */
  declare intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Requested Worker Email.
   * @nullable
   */
  declare vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attorney Id Ru.
   * @nullable
   */
  declare attorneyIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address.
   */
  declare remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Reverse Charge Amount.
   */
  declare reverseChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Series Mx.
   * @nullable
   */
  declare invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corrected Invoice Date Ru.
   */
  declare correctedInvoiceDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Company Id.
   * @nullable
   */
  declare interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correct Ru.
   * @nullable
   */
  declare correctRu?: NoYes | null;
  /**
   * Correction Type Ru.
   * @nullable
   */
  declare correctionTypeRu?: FactureCorrectionTypeRu | null;
  /**
   * Vat Amount In.
   */
  declare vatAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Table Ref Br.
   */
  declare reasonTableRefBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Operation Type Mx.
   * @nullable
   */
  declare operationTypeMx?: VendorOperationTypeMx | null;
  /**
   * Cfdiuuid Mx.
   * @nullable
   */
  declare cfdiuuidMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat On Payment Ru.
   * @nullable
   */
  declare vatOnPaymentRu?: NoYes | null;
  /**
   * Attorney Issued Name Ru.
   * @nullable
   */
  declare attorneyIssuedNameRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Internal Invoice Id.
   * @nullable
   */
  declare internalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Id It.
   * @nullable
   */
  declare intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Invoice Printed Lv.
   * @nullable
   */
  declare stateInvoicePrintedLv?: NoYes | null;
  /**
   * Dlv Address Lv.
   * @nullable
   */
  declare dlvAddressLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code Lt.
   * @nullable
   */
  declare numberSequenceCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Ledger Voucher.
   * @nullable
   */
  declare costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Amount In.
   */
  declare taxWithholdAmountIn: DeserializedType<T, 'Edm.Decimal'>;
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
   * Non Real Revenue Ru.
   * @nullable
   */
  declare nonRealRevenueRu?: NoYes | null;
  /**
   * Eu Sales List.
   * @nullable
   */
  declare euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Who Is Author Lt.
   * @nullable
   */
  declare whoIsAuthorLt?: LtDocOriginator | null;
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
   * Purch Agreement Header Psn.
   */
  declare purchAgreementHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name Lt.
   * @nullable
   */
  declare deliveryNameLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date Es.
   */
  declare deliveryDateEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Balance.
   */
  declare salesBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Disc.
   */
  declare endDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Receipt Date W.
   */
  declare purchReceiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cons Target Jp.
   * @nullable
   */
  declare consTargetJp?: NoYes | null;
  /**
   * Transportation Document.
   */
  declare transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sum Tax.
   */
  declare sumTax: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: VendInvoiceJourBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceJourBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxSetoffVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  unitedVatInvoiceLt?: NoYes | null;
  consignorAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  interCompanySalesId?: DeserializedType<T, 'Edm.String'> | null;
  documentOrigin?: DocumentOrigin | null;
  paymDayId?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  attorneyDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  fiscalDocumentTypeBr: DeserializedType<T, 'Edm.Int64'>;
  returnItemNum?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  plafondDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  listcode?: Listcode | null;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  taxRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  vendGroup?: DeserializedType<T, 'Edm.String'> | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoicePurchId?: DeserializedType<T, 'Edm.String'> | null;
  itemBuyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  vendConsInvoiceJp: DeserializedType<T, 'Edm.Int64'>;
  taxPrintOnInvoice?: NoYes | null;
  interCompanyLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  correctedInvoiceIdRu?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  logisticsElectronicAddress: DeserializedType<T, 'Edm.Int64'>;
  facturedFullyRu?: NoYes | null;
  contractNumSa?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  deliveryAddressLt?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  prepayment?: NoYes | null;
  offsessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  salesPurchOperationTypeBr: DeserializedType<T, 'Edm.Int64'>;
  proforma?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyPosted?: NoYes | null;
  sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeOnDlvAddressBr?: NoYes | null;
  reportingCurrencyExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  inventBaileeReceiptReportIdRu?: DeserializedType<T, 'Edm.String'> | null;
  bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  taxSpecifyByLine?: NoYes | null;
  vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  inclTax?: NoYes | null;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  vendFinalUserBr?: NoYes | null;
  importedSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceType?: PurchInvoiceType | null;
  sumMarkup: DeserializedType<T, 'Edm.Decimal'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  importedAmount: DeserializedType<T, 'Edm.Decimal'>;
  sumMarkupMst: DeserializedType<T, 'Edm.Decimal'>;
  triangulation?: NoYes | null;
  cashDisc: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  intrastatAddValueLv: DeserializedType<T, 'Edm.Decimal'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  vendorRequestedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  attorneyIdRu?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceGroup?: DeserializedType<T, 'Edm.String'> | null;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceRoundOff: DeserializedType<T, 'Edm.Decimal'>;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  endDiscMst: DeserializedType<T, 'Edm.Decimal'>;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  reverseChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  correctedInvoiceDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  intrastatDispatch?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  correctRu?: NoYes | null;
  correctionTypeRu?: FactureCorrectionTypeRu | null;
  vatAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  reasonTableRefBr: DeserializedType<T, 'Edm.Int64'>;
  operationTypeMx?: VendorOperationTypeMx | null;
  cfdiuuidMx?: DeserializedType<T, 'Edm.String'> | null;
  vatOnPaymentRu?: NoYes | null;
  attorneyIssuedNameRu?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  paymentSched?: DeserializedType<T, 'Edm.String'> | null;
  internalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  stateInvoicePrintedLv?: NoYes | null;
  dlvAddressLv?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  nonRealRevenueRu?: NoYes | null;
  euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  whoIsAuthorLt?: LtDocOriginator | null;
  purchaseType?: PurchaseType | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  purchAgreementHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryNameLt?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesBalance: DeserializedType<T, 'Edm.Decimal'>;
  endDisc: DeserializedType<T, 'Edm.Decimal'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  purchReceiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consTargetJp?: NoYes | null;
  transportationDocument: DeserializedType<T, 'Edm.Int64'>;
  sumTax: DeserializedType<T, 'Edm.Decimal'>;
}
