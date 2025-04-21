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
import type { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { CustomerInvoiceOriginType } from './CustomerInvoiceOriginType';
import { PaymentStub } from './PaymentStub';
import { NoYes } from './NoYes';
import {
  CdsFreeTextInvoiceLines,
  CdsFreeTextInvoiceLinesType
} from './CdsFreeTextInvoiceLines';
import { Currencies, CurrenciesType } from './Currencies';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';

/**
 * This class represents the entity "CDSFreeTextInvoiceHeaders" of service "d365_metadata".
 */
export class CdsFreeTextInvoiceHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsFreeTextInvoiceHeadersType<T>
{
  /**
   * Technical entity name for CdsFreeTextInvoiceHeaders.
   */
  static override _entityName = 'CDSFreeTextInvoiceHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsFreeTextInvoiceHeaders entity.
   */
  static _keys = ['dataAreaId', 'ExternalInvoiceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Invoice Id.
   */
  declare externalInvoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Origin Type.
   * @nullable
   */
  declare invoiceOriginType?: CustomerInvoiceOriginType | null;
  /**
   * Giro Type.
   * @nullable
   */
  declare giroType?: PaymentStub | null;
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
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Number.
   * @nullable
   */
  declare freeTextNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Id.
   * @nullable
   */
  declare salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Tax Item Group Id.
   * @nullable
   */
  declare salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Name.
   * @nullable
   */
  declare invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Is Posted Via Intercompany.
   * @nullable
   */
  declare isPostedViaIntercompany?: NoYes | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceLines} entity.
   */
  declare cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLines<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare orderingCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link CashDiscounts} entity.
   */
  declare cashDiscount?: CashDiscounts<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare paymentMethod?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm?: PaymentTerms<T> | null;

  constructor(_entityApi: CdsFreeTextInvoiceHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface CdsFreeTextInvoiceHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  externalInvoiceId: DeserializedType<T, 'Edm.String'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceOriginType?: CustomerInvoiceOriginType | null;
  giroType?: PaymentStub | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  isPosted?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  freeTextNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  complimentedInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  inclTax?: NoYes | null;
  paymentTermsBaseDays: DeserializedType<T, 'Edm.Int32'>;
  salesTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceName?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerRequisition?: DeserializedType<T, 'Edm.String'> | null;
  isPostedViaIntercompany?: NoYes | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLinesType<T>[];
  currency?: CurrenciesType<T> | null;
  orderingCustomer?: CustomersV3Type<T> | null;
  cashDiscount?: CashDiscountsType<T> | null;
  paymentMethod?: CustomerPaymentMethodsType<T> | null;
  paymentTerm?: PaymentTermsType<T> | null;
}
