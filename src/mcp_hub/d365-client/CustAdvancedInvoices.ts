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
import type { CustAdvancedInvoicesApi } from './CustAdvancedInvoicesApi';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { CzAdvanceInvoiceStatus } from './CzAdvanceInvoiceStatus';
import { Timezone } from './Timezone';
import { PlFiscalDocState } from './PlFiscalDocState';

/**
 * This class represents the entity "CustAdvancedInvoices" of service "d365_metadata".
 */
export class CustAdvancedInvoices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustAdvancedInvoicesType<T>
{
  /**
   * Technical entity name for CustAdvancedInvoices.
   */
  static override _entityName = 'CustAdvancedInvoices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustAdvancedInvoices entity.
   */
  static _keys = ['dataAreaId', 'HeadId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Head Id.
   */
  declare headId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery County.
   * @nullable
   */
  declare deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Vat.
   * @nullable
   */
  declare postVat?: NoYes | null;
  /**
   * Delivery District Name.
   * @nullable
   */
  declare deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Location Id.
   * @nullable
   */
  declare deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * One Time Customer.
   * @nullable
   */
  declare oneTimeCustomer?: NoYes | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: CzAdvanceInvoiceStatus | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Tax Document.
   * @nullable
   */
  declare createTaxDocument?: NoYes | null;
  /**
   * Retail Terminal Id.
   * @nullable
   */
  declare retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Store Id.
   * @nullable
   */
  declare retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment Posting Profile.
   * @nullable
   */
  declare prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recipient.
   * @nullable
   */
  declare recipient?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Txt.
   * @nullable
   */
  declare invoiceTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Duns Number.
   * @nullable
   */
  declare deliveryDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Vat Until.
   */
  declare postVatUntil: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Postal Address.
   */
  declare postalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Valid To.
   */
  declare deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Order Account.
   * @nullable
   */
  declare fiscalOrderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Post Box.
   * @nullable
   */
  declare deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Country Region Iso Code.
   * @nullable
   */
  declare deliveryCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Zip Code.
   * @nullable
   */
  declare deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Country Region Id.
   * @nullable
   */
  declare deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Date.
   */
  declare fiscalDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Transaction Id.
   * @nullable
   */
  declare retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery City.
   * @nullable
   */
  declare deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Order Reference Id.
   * @nullable
   */
  declare retailOrderReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address.
   * @nullable
   */
  declare deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Longitude.
   */
  declare deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Time Zone.
   * @nullable
   */
  declare deliveryTimeZone?: Timezone | null;
  /**
   * Sales Document Status.
   * @nullable
   */
  declare salesDocumentStatus?: PlFiscalDocState | null;
  /**
   * Correction Description.
   * @nullable
   */
  declare correctionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Is Private.
   * @nullable
   */
  declare deliveryIsPrivate?: NoYes | null;
  /**
   * Delivery Latitude.
   */
  declare deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Schedule.
   * @nullable
   */
  declare paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Invoice Voucher.
   * @nullable
   */
  declare advanceInvoiceVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Invoice.
   * @nullable
   */
  declare advanceInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Street.
   * @nullable
   */
  declare deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Invoice Account.
   * @nullable
   */
  declare fiscalInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street Number.
   * @nullable
   */
  declare deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Constant Symbol.
   * @nullable
   */
  declare constantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Description.
   * @nullable
   */
  declare deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printer.
   * @nullable
   */
  declare fiscalPrinter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Valid From.
   */
  declare deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vat Register Date.
   */
  declare vatRegisterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustAdvancedInvoicesApi<T>) {
    super(_entityApi);
  }
}

export interface CustAdvancedInvoicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headId: DeserializedType<T, 'Edm.Guid'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  postVat?: NoYes | null;
  deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  oneTimeCustomer?: NoYes | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  status?: CzAdvanceInvoiceStatus | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  createTaxDocument?: NoYes | null;
  retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  recipient?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  posted?: NoYes | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceTxt?: DeserializedType<T, 'Edm.String'> | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  postVatUntil: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postalAddress: DeserializedType<T, 'Edm.Int64'>;
  deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalOrderAccount?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  retailOrderReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTimeZone?: Timezone | null;
  salesDocumentStatus?: PlFiscalDocState | null;
  correctionDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsPrivate?: NoYes | null;
  deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedule?: DeserializedType<T, 'Edm.String'> | null;
  advanceInvoiceVoucher?: DeserializedType<T, 'Edm.String'> | null;
  advanceInvoice?: DeserializedType<T, 'Edm.String'> | null;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  fiscalInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  constantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinter?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  triangulation?: NoYes | null;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  vatRegisterDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
}
