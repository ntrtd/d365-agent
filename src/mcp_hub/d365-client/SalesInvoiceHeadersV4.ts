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
import type { SalesInvoiceHeadersV4Api } from './SalesInvoiceHeadersV4Api';
import {
  CdsSalesOrderHeaders,
  CdsSalesOrderHeadersType
} from './CdsSalesOrderHeaders';
import {
  SalesOrderOriginCodes,
  SalesOrderOriginCodesType
} from './SalesOrderOriginCodes';
import {
  D365SalesOrderHeaders,
  D365SalesOrderHeadersType
} from './D365SalesOrderHeaders';
import {
  SalesInvoiceV4Lines,
  SalesInvoiceV4LinesType
} from './SalesInvoiceV4Lines';

/**
 * This class represents the entity "SalesInvoiceHeadersV4" of service "d365_metadata".
 */
export class SalesInvoiceHeadersV4<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesInvoiceHeadersV4Type<T>
{
  /**
   * Technical entity name for SalesInvoiceHeadersV4.
   */
  static override _entityName = 'SalesInvoiceHeadersV4';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesInvoiceHeadersV4 entity.
   */
  static _keys = [
    'dataAreaId',
    'InvoiceNumber',
    'InvoiceDate',
    'LedgerVoucher'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Number.
   */
  declare invoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Voucher.
   */
  declare ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Header Tax Amount.
   */
  declare invoiceHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Discount.
   */
  declare endDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Responsible Personnel Number.
   * @nullable
   */
  declare salesOrderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Charge Amount.
   */
  declare totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Invoice Amount.
   */
  declare totalInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Customer Group Code.
   */
  declare totalDiscountCustomerGroupCode: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Line Discount.
   */
  declare totalLineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount.
   */
  declare cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address State.
   * @nullable
   */
  declare invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CdsSalesOrderHeaders} entity.
   */
  declare salesOrderHeaderCds?: CdsSalesOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderOriginCodes} entity.
   */
  declare salesOrderOrigin?: SalesOrderOriginCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link D365SalesOrderHeaders} entity.
   */
  declare salesOrderHeaderD365Sales?: D365SalesOrderHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesInvoiceV4Lines} entity.
   */
  declare salesInvoiceLinesV4: SalesInvoiceV4Lines<T>[];

  constructor(_entityApi: SalesInvoiceHeadersV4Api<T>) {
    super(_entityApi);
  }
}

export interface SalesInvoiceHeadersV4Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceNumber: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher: DeserializedType<T, 'Edm.String'>;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  endDiscount: DeserializedType<T, 'Edm.Decimal'>;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountCustomerGroupCode: DeserializedType<T, 'Edm.Decimal'>;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  totalLineDiscount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressState?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderHeaderCds?: CdsSalesOrderHeadersType<T> | null;
  salesOrderOrigin?: SalesOrderOriginCodesType<T> | null;
  salesOrderHeaderD365Sales?: D365SalesOrderHeadersType<T> | null;
  salesInvoiceLinesV4: SalesInvoiceV4LinesType<T>[];
}
