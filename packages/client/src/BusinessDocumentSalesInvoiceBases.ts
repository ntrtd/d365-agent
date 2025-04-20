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
import type { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { NoYes } from './NoYes';
import { SoleShareholderIt } from './SoleShareholderIt';
import { LiquidationIt } from './LiquidationIt';
import {
  BusinessDocumentEInvoiceProperties,
  BusinessDocumentEInvoicePropertiesType
} from './BusinessDocumentEInvoiceProperties';
import {
  BusinessDocumentSalesInvoiceLineItems,
  BusinessDocumentSalesInvoiceLineItemsType
} from './BusinessDocumentSalesInvoiceLineItems';
import {
  BusinessDocumentNonStockedPackingSlipLines,
  BusinessDocumentNonStockedPackingSlipLinesType
} from './BusinessDocumentNonStockedPackingSlipLines';
import {
  BusinessDocumentDocuRefs,
  BusinessDocumentDocuRefsType
} from './BusinessDocumentDocuRefs';
import {
  BusinessDocumentStockedPackingSlipLinesV3,
  BusinessDocumentStockedPackingSlipLinesV3Type
} from './BusinessDocumentStockedPackingSlipLinesV3';
import {
  BusinessDocumentInvoicedPackingSlipLinesV3,
  BusinessDocumentInvoicedPackingSlipLinesV3Type
} from './BusinessDocumentInvoicedPackingSlipLinesV3';
import { DocumentCustTrans, DocumentCustTransType } from './DocumentCustTrans';
import {
  DocumentBatchSubmissionItems,
  DocumentBatchSubmissionItemsType
} from './DocumentBatchSubmissionItems';
import {
  BusinessDocumentInvoicedPackingSlipLinesV2,
  BusinessDocumentInvoicedPackingSlipLinesV2Type
} from './BusinessDocumentInvoicedPackingSlipLinesV2';
import {
  BusinessDocumentNonStockedPackingSlipLinesV2,
  BusinessDocumentNonStockedPackingSlipLinesV2Type
} from './BusinessDocumentNonStockedPackingSlipLinesV2';
import {
  BusinessDocumentNonStockedPackingSlipLinesV3,
  BusinessDocumentNonStockedPackingSlipLinesV3Type
} from './BusinessDocumentNonStockedPackingSlipLinesV3';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';
import {
  BusinessDocumentCustPaymSchedules,
  BusinessDocumentCustPaymSchedulesType
} from './BusinessDocumentCustPaymSchedules';
import {
  BusinessDocumentStockedPackingSlipLinesV2,
  BusinessDocumentStockedPackingSlipLinesV2Type
} from './BusinessDocumentStockedPackingSlipLinesV2';
import {
  BusinessDocumentBaseDocuments,
  BusinessDocumentBaseDocumentsType
} from './BusinessDocumentBaseDocuments';
import {
  DocumentCustVendCreditInvoicingJours,
  DocumentCustVendCreditInvoicingJoursType
} from './DocumentCustVendCreditInvoicingJours';
import {
  BusinessDocumentInvoicedPackingSlipLines,
  BusinessDocumentInvoicedPackingSlipLinesType
} from './BusinessDocumentInvoicedPackingSlipLines';
import {
  BusinessDocumentMarkupTransactions,
  BusinessDocumentMarkupTransactionsType
} from './BusinessDocumentMarkupTransactions';
import {
  BusinessDocumentStockedPackingSlipLines,
  BusinessDocumentStockedPackingSlipLinesType
} from './BusinessDocumentStockedPackingSlipLines';

/**
 * This class represents the entity "BusinessDocumentSalesInvoiceBases" of service "d365_metadata".
 */
export class BusinessDocumentSalesInvoiceBases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentSalesInvoiceBasesType<T>
{
  /**
   * Technical entity name for BusinessDocumentSalesInvoiceBases.
   */
  static override _entityName = 'BusinessDocumentSalesInvoiceBases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentSalesInvoiceBases entity.
   */
  static _keys = ['dataAreaId', 'InvoiceId', 'InvoiceDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Id.
   */
  declare invoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Organization.
   * @nullable
   */
  declare isOrganization?: NoYes | null;
  /**
   * Company County.
   * @nullable
   */
  declare companyCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Prof Reg Date.
   */
  declare parametersItCompanyProfRegDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Parameters It Company Tele Fax.
   * @nullable
   */
  declare parametersItCompanyTeleFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Id.
   * @nullable
   */
  declare intentLetterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account State Additional.
   * @nullable
   */
  declare invoiceAccountStateAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Amount Mst.
   */
  declare invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account Num.
   * @nullable
   */
  declare customerAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Prof Reg Number.
   * @nullable
   */
  declare parametersItCompanyProfRegNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Goods For Free.
   * @nullable
   */
  declare goodsForFree?: NoYes | null;
  /**
   * Parameters It Tax Rep Country Region Is Ocode.
   * @nullable
   */
  declare parametersItTaxRepCountryRegionIsOcode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Company Prof Reg Name.
   * @nullable
   */
  declare parametersItCompanyProfRegName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Tax Rep Company Designation.
   * @nullable
   */
  declare parametersItTaxRepCompanyDesignation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Address Additional.
   * @nullable
   */
  declare invoiceAccountAddressAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Vat Registration Number.
   * @nullable
   */
  declare invoiceAccountVatRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Address.
   * @nullable
   */
  declare invoiceAccountAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Name.
   * @nullable
   */
  declare invoiceAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Vat Num.
   * @nullable
   */
  declare invoiceAccountVatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Self Invoice.
   * @nullable
   */
  declare isSelfInvoice?: NoYes | null;
  /**
   * Invoice Account State.
   * @nullable
   */
  declare invoiceAccountState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Table Party.
   */
  declare custTableParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parameters It Tax Rep First Name.
   * @nullable
   */
  declare parametersItTaxRepFirstName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Third Party Bank Swift.
   * @nullable
   */
  declare thirdPartyBankSwift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Customer Authority Office.
   * @nullable
   */
  declare parametersItCustomerAuthorityOffice?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Company Code Eori.
   * @nullable
   */
  declare parametersItCompanyCodeEori?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Account Type.
   * @nullable
   */
  declare paymentAccountType?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invoice Account County Additional.
   * @nullable
   */
  declare invoiceAccountCountyAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Invoice Jour Rec Id.
   */
  declare custInvoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Self Invoice Account Id.
   * @nullable
   */
  declare selfInvoiceAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Email.
   * @nullable
   */
  declare customerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Designation.
   * @nullable
   */
  declare parametersItCompanyDesignation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Third Party Bank Iban.
   * @nullable
   */
  declare thirdPartyBankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Address.
   * @nullable
   */
  declare companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Trn Is Filing For Same Legal Entity.
   * @nullable
   */
  declare parametersItTrnIsFilingForSameLegalEntity?: NoYes | null;
  /**
   * Company State.
   * @nullable
   */
  declare companyState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Country Iso Code Additional.
   * @nullable
   */
  declare companyCountryIsoCodeAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Country Iso Code Additional.
   * @nullable
   */
  declare invoiceAccountCountryIsoCodeAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Art Share Capital.
   * @nullable
   */
  declare parametersItArtShareCapital?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Table Table Id.
   */
  declare custTableTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Tax Reg Number.
   * @nullable
   */
  declare companyTaxRegNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company County Additional.
   * @nullable
   */
  declare companyCountyAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Tax Exemp Number.
   * @nullable
   */
  declare parametersItTaxRepTaxExempNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Zip Code.
   * @nullable
   */
  declare invoiceAccountZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Identificatioin Code.
   * @nullable
   */
  declare parametersItCompanyIdentificatioinCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * End Disc Percent.
   */
  declare endDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parameters It Trn Country Region Is Ocode.
   * @nullable
   */
  declare parametersItTrnCountryRegionIsOcode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount.
   */
  declare cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Invoice Sales Id.
   * @nullable
   */
  declare taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Zip Code Additional.
   * @nullable
   */
  declare companyZipCodeAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Invoice Jour Table Id.
   */
  declare custInvoiceJourTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code Iso.
   * @nullable
   */
  declare currencyCodeIso?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Trn E Invoice Transmission Name.
   * @nullable
   */
  declare parametersItTrnEInvoiceTransmissionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Tax Rep Code Eori.
   * @nullable
   */
  declare parametersItTaxRepCodeEori?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co Reg Num.
   * @nullable
   */
  declare coRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfc Mx.
   * @nullable
   */
  declare rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Swift.
   * @nullable
   */
  declare bankSwift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Last Name.
   * @nullable
   */
  declare parametersItTaxRepLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Address Additional.
   * @nullable
   */
  declare companyAddressAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Is Company.
   * @nullable
   */
  declare parametersItTaxRepIsCompany?: NoYes | null;
  /**
   * Company Bank Iban.
   * @nullable
   */
  declare companyBankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Country Iso Code.
   * @nullable
   */
  declare companyCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Street Additional.
   * @nullable
   */
  declare companyStreetAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Art Sole Shareholder.
   * @nullable
   */
  declare parametersItArtSoleShareholder?: SoleShareholderIt | null;
  /**
   * Parameters It Art Sole Shareholder Str.
   * @nullable
   */
  declare parametersItArtSoleShareholderStr?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Art 2250 Registration.
   * @nullable
   */
  declare parametersItArt2250Registration?: NoYes | null;
  /**
   * Invoice Account Zip Code Additional.
   * @nullable
   */
  declare invoiceAccountZipCodeAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Trn Tax Exemp Number.
   * @nullable
   */
  declare parametersItTrnTaxExempNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Table Rec Id.
   */
  declare custTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company Bank Name.
   * @nullable
   */
  declare companyBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Art Liquidation Str.
   * @nullable
   */
  declare parametersItArtLiquidationStr?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Order Account Num.
   * @nullable
   */
  declare customerOrderAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Info Rec Id.
   */
  declare companyInfoRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company City Additional.
   * @nullable
   */
  declare companyCityAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Fiscal Code.
   * @nullable
   */
  declare parametersItTaxRepFiscalCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company City.
   * @nullable
   */
  declare companyCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Art Province.
   * @nullable
   */
  declare parametersItArtProvince?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Tax System.
   * @nullable
   */
  declare parametersItCompanyTaxSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Street.
   * @nullable
   */
  declare companyStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account First Name.
   * @nullable
   */
  declare invoiceAccountFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account County.
   * @nullable
   */
  declare invoiceAccountCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sum Line Discount.
   */
  declare sumLineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Trans Paym Mode.
   * @nullable
   */
  declare custTransPaymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Title.
   * @nullable
   */
  declare parametersItTaxRepTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bill Of Exchange.
   * @nullable
   */
  declare isBillOfExchange?: NoYes | null;
  /**
   * Parameters It Trn Email.
   * @nullable
   */
  declare parametersItTrnEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Country Is Ocode.
   * @nullable
   */
  declare parametersItCompanyCountryIsOcode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Country Region Iso Code.
   * @nullable
   */
  declare countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Art Registration Num.
   * @nullable
   */
  declare parametersItArtRegistrationNum?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account City.
   * @nullable
   */
  declare invoiceAccountCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Trn Phone.
   * @nullable
   */
  declare parametersItTrnPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Phone.
   * @nullable
   */
  declare parametersItCompanyPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Trans Amount Cur.
   */
  declare custTransAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Account Fiscal Code.
   * @nullable
   */
  declare invoiceAccountFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Fiscal Code.
   * @nullable
   */
  declare parametersItCompanyFiscalCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Last Name.
   * @nullable
   */
  declare invoiceAccountLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Zip Code.
   * @nullable
   */
  declare companyZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Bank Swift.
   * @nullable
   */
  declare companyBankSwift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Street Additional.
   * @nullable
   */
  declare invoiceAccountStreetAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Devilery Reason.
   * @nullable
   */
  declare devileryReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Info Table Id.
   */
  declare companyInfoTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Iban.
   * @nullable
   */
  declare bankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account City Additional.
   * @nullable
   */
  declare invoiceAccountCityAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Country Iso Code.
   * @nullable
   */
  declare invoiceAccountCountryIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Tax Rep Country Code.
   * @nullable
   */
  declare parametersItTaxRepCountryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parameters It Art Liquidation.
   * @nullable
   */
  declare parametersItArtLiquidation?: LiquidationIt | null;
  /**
   * Parameters It Tax Rep Is Tax Rep.
   * @nullable
   */
  declare parametersItTaxRepIsTaxRep?: NoYes | null;
  /**
   * Third Party Bank Name.
   * @nullable
   */
  declare thirdPartyBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Prof Reg Province.
   * @nullable
   */
  declare parametersItCompanyProfRegProvince?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Account Street.
   * @nullable
   */
  declare invoiceAccountStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameters It Company Email.
   * @nullable
   */
  declare parametersItCompanyEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Middle Name.
   * @nullable
   */
  declare invoiceAccountMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company State Additional.
   * @nullable
   */
  declare companyStateAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date Time.
   */
  declare invoiceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sum Tax.
   */
  declare sumTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentEInvoiceProperties} entity.
   */
  declare businessDocumentEInvoiceProperty: BusinessDocumentEInvoiceProperties<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentSalesInvoiceLineItems} entity.
   */
  declare businessDocumentSalesInvoiceLineItem: BusinessDocumentSalesInvoiceLineItems<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLines} entity.
   */
  declare businessDocumentNonStockedPackingSlipLine: BusinessDocumentNonStockedPackingSlipLines<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentDocuRefs} entity.
   */
  declare businessDocumentDocuRef: BusinessDocumentDocuRefs<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLinesV3} entity.
   */
  declare businessDocumentStockedPackingSlipLineV3: BusinessDocumentStockedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLinesV3} entity.
   */
  declare businessDocumentInvoicedPackingSlipLineV3: BusinessDocumentInvoicedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentCustTrans} entity.
   */
  declare documentCustTrans: DocumentCustTrans<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentBatchSubmissionItems} entity.
   */
  declare documentBatchSubmissionItem: DocumentBatchSubmissionItems<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLinesV2} entity.
   */
  declare businessDocumentInvoicedPackingSlipLineV2: BusinessDocumentInvoicedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLinesV2} entity.
   */
  declare businessDocumentNonStockedPackingSlipLineV2: BusinessDocumentNonStockedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentNonStockedPackingSlipLinesV3} entity.
   */
  declare businessDocumentNonStockedPackingSlipLineV3: BusinessDocumentNonStockedPackingSlipLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentCustPaymSchedules} entity.
   */
  declare businessDocumentCustPaymSchedule: BusinessDocumentCustPaymSchedules<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLinesV2} entity.
   */
  declare businessDocumentStockedPackingSlipLineV2: BusinessDocumentStockedPackingSlipLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentBaseDocuments} entity.
   */
  declare businessDocumentBaseDocument: BusinessDocumentBaseDocuments<T>[];
  /**
   * One-to-one navigation property to the {@link DocumentCustVendCreditInvoicingJours} entity.
   */
  declare custVendCreditInvoicingJour?: DocumentCustVendCreditInvoicingJours<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentInvoicedPackingSlipLines} entity.
   */
  declare businessDocumentInvoicedPackingSlipLine: BusinessDocumentInvoicedPackingSlipLines<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentMarkupTransactions} entity.
   */
  declare businessDocumentMarkupTransaction: BusinessDocumentMarkupTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentStockedPackingSlipLines} entity.
   */
  declare businessDocumentStockedPackingSlipLine: BusinessDocumentStockedPackingSlipLines<T>[];

  constructor(_entityApi: BusinessDocumentSalesInvoiceBasesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentSalesInvoiceBasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceId: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOrganization?: NoYes | null;
  companyCounty?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyProfRegDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parametersItCompanyTeleFax?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterId?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountStateAdditional?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyProfRegNumber?: DeserializedType<T, 'Edm.String'> | null;
  goodsForFree?: NoYes | null;
  parametersItTaxRepCountryRegionIsOcode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  parametersItCompanyProfRegName?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepCompanyDesignation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAccountAddressAdditional?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountVatRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAccountAddress?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountVatNum?: DeserializedType<T, 'Edm.String'> | null;
  isSelfInvoice?: NoYes | null;
  invoiceAccountState?: DeserializedType<T, 'Edm.String'> | null;
  custTableParty: DeserializedType<T, 'Edm.Int64'>;
  parametersItTaxRepFirstName?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankSwift?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCustomerAuthorityOffice?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  parametersItCompanyCodeEori?: DeserializedType<T, 'Edm.String'> | null;
  paymentAccountType?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  prepayment?: NoYes | null;
  invoiceAccountCountyAdditional?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  selfInvoiceAccountId?: DeserializedType<T, 'Edm.String'> | null;
  customerEmail?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyDesignation?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankIban?: DeserializedType<T, 'Edm.String'> | null;
  companyAddress?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTrnIsFilingForSameLegalEntity?: NoYes | null;
  companyState?: DeserializedType<T, 'Edm.String'> | null;
  companyCountryIsoCodeAdditional?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountCountryIsoCodeAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  parametersItArtShareCapital?: DeserializedType<T, 'Edm.String'> | null;
  custTableTableId: DeserializedType<T, 'Edm.Int32'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  companyTaxRegNumber?: DeserializedType<T, 'Edm.String'> | null;
  companyCountyAdditional?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepTaxExempNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountZipCode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyIdentificatioinCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  endDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  parametersItTrnCountryRegionIsOcode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  companyZipCodeAdditional?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceJourTableId: DeserializedType<T, 'Edm.Int32'>;
  currencyCodeIso?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTrnEInvoiceTransmissionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  parametersItTaxRepCodeEori?: DeserializedType<T, 'Edm.String'> | null;
  coRegNum?: DeserializedType<T, 'Edm.String'> | null;
  rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  bankSwift?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepLastName?: DeserializedType<T, 'Edm.String'> | null;
  companyAddressAdditional?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepIsCompany?: NoYes | null;
  companyBankIban?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  companyCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  companyStreetAdditional?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArtSoleShareholder?: SoleShareholderIt | null;
  parametersItArtSoleShareholderStr?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArt2250Registration?: NoYes | null;
  invoiceAccountZipCodeAdditional?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTrnTaxExempNumber?: DeserializedType<T, 'Edm.String'> | null;
  custTableRecId: DeserializedType<T, 'Edm.Int64'>;
  companyBankName?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArtLiquidationStr?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerOrderAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  companyInfoRecId: DeserializedType<T, 'Edm.Int64'>;
  companyCityAdditional?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  companyCity?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArtProvince?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyTaxSystem?: DeserializedType<T, 'Edm.String'> | null;
  companyStreet?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountFirstName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountCounty?: DeserializedType<T, 'Edm.String'> | null;
  sumLineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  custTransPaymMode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepTitle?: DeserializedType<T, 'Edm.String'> | null;
  isBillOfExchange?: NoYes | null;
  parametersItTrnEmail?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyCountryIsOcode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArtRegistrationNum?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountCity?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTrnPhone?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyPhone?: DeserializedType<T, 'Edm.String'> | null;
  custTransAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAccountFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyFiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountLastName?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  companyZipCode?: DeserializedType<T, 'Edm.String'> | null;
  companyBankSwift?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountStreetAdditional?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  devileryReason?: DeserializedType<T, 'Edm.String'> | null;
  companyInfoTableId: DeserializedType<T, 'Edm.Int32'>;
  bankIban?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountCityAdditional?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  parametersItTaxRepCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  parametersItArtLiquidation?: LiquidationIt | null;
  parametersItTaxRepIsTaxRep?: NoYes | null;
  thirdPartyBankName?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyProfRegProvince?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountStreet?: DeserializedType<T, 'Edm.String'> | null;
  parametersItCompanyEmail?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  companyStateAdditional?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDisc: DeserializedType<T, 'Edm.Decimal'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  sumTax: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentEInvoiceProperty: BusinessDocumentEInvoicePropertiesType<T>[];
  businessDocumentSalesInvoiceLineItem: BusinessDocumentSalesInvoiceLineItemsType<T>[];
  businessDocumentNonStockedPackingSlipLine: BusinessDocumentNonStockedPackingSlipLinesType<T>[];
  businessDocumentDocuRef: BusinessDocumentDocuRefsType<T>[];
  businessDocumentStockedPackingSlipLineV3: BusinessDocumentStockedPackingSlipLinesV3Type<T>[];
  businessDocumentInvoicedPackingSlipLineV3: BusinessDocumentInvoicedPackingSlipLinesV3Type<T>[];
  documentCustTrans: DocumentCustTransType<T>[];
  documentBatchSubmissionItem: DocumentBatchSubmissionItemsType<T>[];
  businessDocumentInvoicedPackingSlipLineV2: BusinessDocumentInvoicedPackingSlipLinesV2Type<T>[];
  businessDocumentNonStockedPackingSlipLineV2: BusinessDocumentNonStockedPackingSlipLinesV2Type<T>[];
  businessDocumentNonStockedPackingSlipLineV3: BusinessDocumentNonStockedPackingSlipLinesV3Type<T>[];
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
  businessDocumentCustPaymSchedule: BusinessDocumentCustPaymSchedulesType<T>[];
  businessDocumentStockedPackingSlipLineV2: BusinessDocumentStockedPackingSlipLinesV2Type<T>[];
  businessDocumentBaseDocument: BusinessDocumentBaseDocumentsType<T>[];
  custVendCreditInvoicingJour?: DocumentCustVendCreditInvoicingJoursType<T> | null;
  businessDocumentInvoicedPackingSlipLine: BusinessDocumentInvoicedPackingSlipLinesType<T>[];
  businessDocumentMarkupTransaction: BusinessDocumentMarkupTransactionsType<T>[];
  businessDocumentStockedPackingSlipLine: BusinessDocumentStockedPackingSlipLinesType<T>[];
}
