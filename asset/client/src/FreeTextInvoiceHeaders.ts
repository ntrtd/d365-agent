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
import type { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { NoYes } from './NoYes';
import { PaymentStub } from './PaymentStub';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { InvoiceComplementaryTypeBr } from './InvoiceComplementaryTypeBr';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { PaymentSchedules, PaymentSchedulesType } from './PaymentSchedules';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';

/**
 * This class represents the entity "FreeTextInvoiceHeaders" of service "d365_metadata".
 */
export class FreeTextInvoiceHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FreeTextInvoiceHeadersType<T>
{
  /**
   * Technical entity name for FreeTextInvoiceHeaders.
   */
  static override _entityName = 'FreeTextInvoiceHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreeTextInvoiceHeaders entity.
   */
  static _keys = ['dataAreaId', 'InvoiceIdentifier'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Identifier.
   */
  declare invoiceIdentifier: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * E Invoice Account Code.
   * @nullable
   */
  declare eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Account.
   * @nullable
   */
  declare consigneeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Fine Code.
   * @nullable
   */
  declare customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Final User.
   * @nullable
   */
  declare isFinalUser?: NoYes | null;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
  /**
   * Corrected Period.
   */
  declare correctedPeriod: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Is Lump Sum Recovery Text Printed.
   * @nullable
   */
  declare isLumpSumRecoveryTextPrinted?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Financial Interest Code.
   * @nullable
   */
  declare customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Corrected Facture External Id.
   * @nullable
   */
  declare correctedFactureExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjusting Invoice Date.
   */
  declare adjustingInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Invoice Id.
   * @nullable
   */
  declare externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is One Time Customer.
   * @nullable
   */
  declare isOneTimeCustomer?: NoYes | null;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cfps Code.
   * @nullable
   */
  declare cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * E Invoice Is Line Specific.
   * @nullable
   */
  declare eInvoiceIsLineSpecific?: NoYes | null;
  /**
   * Invoice Origin Code.
   * @nullable
   */
  declare invoiceOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Text.
   * @nullable
   */
  declare centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Code.
   * @nullable
   */
  declare cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat On Payment.
   * @nullable
   */
  declare vatOnPayment?: NoYes | null;
  /**
   * Cash Flow Forecast.
   */
  declare cashFlowForecast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Tax Group Id.
   * @nullable
   */
  declare salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Number.
   * @nullable
   */
  declare freeTextNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Correction.
   * @nullable
   */
  declare isCorrection?: NoYes | null;
  /**
   * Postponed Vat.
   * @nullable
   */
  declare postponedVat?: NoYes | null;
  /**
   * Complimented Invoice Id.
   * @nullable
   */
  declare complimentedInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Payment Terms Base Days.
   */
  declare paymentTermsBaseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Id.
   * @nullable
   */
  declare salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Operation Type Id.
   * @nullable
   */
  declare fiscalDocumentOperationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Document Line Id.
   */
  declare transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sales Date.
   */
  declare salesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Corrected Invoice Date.
   */
  declare correctedInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Name.
   * @nullable
   */
  declare invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correction Type.
   * @nullable
   */
  declare correctionType?: FactureCorrectionTypeRu | null;
  /**
   * Vat Due Date.
   */
  declare vatDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Classification.
   * @nullable
   */
  declare billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit Mandate Reference.
   * @nullable
   */
  declare directDebitMandateReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Consignor Account.
   * @nullable
   */
  declare consignorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Operation Presence Type.
   * @nullable
   */
  declare fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Corrected Facture Date.
   */
  declare correctedFactureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Service Delivery Address Based.
   * @nullable
   */
  declare isServiceDeliveryAddressBased?: NoYes | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Requisition.
   * @nullable
   */
  declare customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complementary Fiscal Document Type.
   * @nullable
   */
  declare complementaryFiscalDocumentType?: InvoiceComplementaryTypeBr | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Non Real Revenue.
   * @nullable
   */
  declare nonRealRevenue?: NoYes | null;
  /**
   * Is Posted Via Intercompany.
   * @nullable
   */
  declare isPostedViaIntercompany?: NoYes | null;
  /**
   * Corrected Invoice Id.
   * @nullable
   */
  declare correctedInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare custFreeTextInvoiceHeader: FreeTextInvoiceLines<T>[];
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare freeTextInvoiceHeaderEntityCustAccount?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare freeTextInvoiceHeaderEntityInvoiceAccount?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare freeTextInvoiceHeaderEntityMethodOfPayment?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentSchedules} entity.
   */
  declare freeTextInvoiceHeaderEntityPaymentSchedule?: PaymentSchedules<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare freeTextInvoiceHeaderEntityCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare freeTextInvoiceHeaderEntityDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare freeTextInvoiceHeaderEntityPaymentTerm?: PaymentTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link CashDiscounts} entity.
   */
  declare freeTextInvoiceHeaderEntityCashDiscount?: CashDiscounts<T> | null;

  constructor(_entityApi: FreeTextInvoiceHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface FreeTextInvoiceHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceIdentifier: DeserializedType<T, 'Edm.Int64'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  eInvoiceAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFineCode?: DeserializedType<T, 'Edm.String'> | null;
  isFinalUser?: NoYes | null;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  giroType?: PaymentStub | null;
  correctedPeriod: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  isPosted?: NoYes | null;
  isLumpSumRecoveryTextPrinted?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFinancialInterestCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctedFactureExternalId?: DeserializedType<T, 'Edm.String'> | null;
  adjustingInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  externalInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomer?: NoYes | null;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cfpsCode?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  eInvoiceIsLineSpecific?: NoYes | null;
  invoiceOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  cfopCode?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  vatOnPayment?: NoYes | null;
  cashFlowForecast: DeserializedType<T, 'Edm.Int32'>;
  salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  freeTextNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCorrection?: NoYes | null;
  postponedVat?: NoYes | null;
  complimentedInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  paymentTermsBaseDays: DeserializedType<T, 'Edm.Int32'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentOperationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  transportationDocumentLineId: DeserializedType<T, 'Edm.Guid'>;
  salesDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctedInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  correctionType?: FactureCorrectionTypeRu | null;
  vatDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingClassification?: DeserializedType<T, 'Edm.String'> | null;
  directDebitMandateReference?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  consignorAccount?: DeserializedType<T, 'Edm.String'> | null;
  fiscalOperationPresenceType?: EfDocPresenceTypeBr | null;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  correctedFactureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isServiceDeliveryAddressBased?: NoYes | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  complementaryFiscalDocumentType?: InvoiceComplementaryTypeBr | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  nonRealRevenue?: NoYes | null;
  isPostedViaIntercompany?: NoYes | null;
  correctedInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  custFreeTextInvoiceHeader: FreeTextInvoiceLinesType<T>[];
  freeTextInvoiceHeaderEntityCustAccount?: CustomersV3Type<T> | null;
  freeTextInvoiceHeaderEntityInvoiceAccount?: CustomersV3Type<T> | null;
  freeTextInvoiceHeaderEntityMethodOfPayment?: CustomerPaymentMethodsType<T> | null;
  freeTextInvoiceHeaderEntityPaymentSchedule?: PaymentSchedulesType<T> | null;
  freeTextInvoiceHeaderEntityCurrency?: CurrenciesType<T> | null;
  freeTextInvoiceHeaderEntityDefaultDimension?: DimensionSetsType<T> | null;
  freeTextInvoiceHeaderEntityPaymentTerm?: PaymentTermsType<T> | null;
  freeTextInvoiceHeaderEntityCashDiscount?: CashDiscountsType<T> | null;
}
