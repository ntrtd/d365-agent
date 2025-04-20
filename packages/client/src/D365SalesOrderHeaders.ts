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
import type { D365SalesOrderHeadersApi } from './D365SalesOrderHeadersApi';
import { NoYes } from './NoYes';
import { SalesOriginType } from './SalesOriginType';
import { SalesStatus } from './SalesStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesOrderIntegrationCreationType } from './SalesOrderIntegrationCreationType';
import { Timezone } from './Timezone';
import { SalesExternalWorkOrderStatus } from './SalesExternalWorkOrderStatus';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import {
  SalesInvoiceHeadersV4,
  SalesInvoiceHeadersV4Type
} from './SalesInvoiceHeadersV4';
import {
  D365SalesOrderLines,
  D365SalesOrderLinesType
} from './D365SalesOrderLines';
import {
  D365SalesQuotationHeaders,
  D365SalesQuotationHeadersType
} from './D365SalesQuotationHeaders';

/**
 * This class represents the entity "D365SalesOrderHeaders" of service "d365_metadata".
 */
export class D365SalesOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements D365SalesOrderHeadersType<T>
{
  /**
   * Technical entity name for D365SalesOrderHeaders.
   */
  static override _entityName = 'D365SalesOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the D365SalesOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'SalesOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Taker Personnel Number.
   * @nullable
   */
  declare orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Site Id.
   * @nullable
   */
  declare defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Sales Order Origin Type.
   * @nullable
   */
  declare salesOrderOriginType?: SalesOriginType | null;
  /**
   * Sales Order Status.
   * @nullable
   */
  declare salesOrderStatus?: SalesStatus | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is One Time Customer.
   * @nullable
   */
  declare isOneTimeCustomer?: NoYes | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Invoice Customer Is Externally Maintained.
   * @nullable
   */
  declare invoiceCustomerIsExternallyMaintained?: NoYes | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Number.
   * @nullable
   */
  declare quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Customer Group Code.
   * @nullable
   */
  declare multilineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Discount Amount.
   */
  declare orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Integration Creation Type.
   * @nullable
   */
  declare salesOrderIntegrationCreationType?: SalesOrderIntegrationCreationType | null;
  /**
   * Order Creation Date Time.
   */
  declare orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Postal Address Rec Id.
   */
  declare deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Post Box.
   * @nullable
   */
  declare invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Customer Is Externally Maintained.
   * @nullable
   */
  declare orderingCustomerIsExternallyMaintained?: NoYes | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Sales Order Name.
   * @nullable
   */
  declare salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Work Order Status.
   * @nullable
   */
  declare externalWorkOrderStatus?: SalesExternalWorkOrderStatus | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Totals Updated.
   * @nullable
   */
  declare areTotalsUpdated?: NoYes | null;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Order Header Tax Amount.
   */
  declare orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Order Processing Status.
   * @nullable
   */
  declare salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  /**
   * Skip Create Auto Charges.
   * @nullable
   */
  declare skipCreateAutoCharges?: NoYes | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link SalesInvoiceHeadersV4} entity.
   */
  declare salesInvoiceHeadersV2: SalesInvoiceHeadersV4<T>[];
  /**
   * One-to-many navigation property to the {@link D365SalesOrderLines} entity.
   */
  declare d365SalesOrderLines: D365SalesOrderLines<T>[];
  /**
   * One-to-one navigation property to the {@link D365SalesQuotationHeaders} entity.
   */
  declare d365SalesQuotationHeader?: D365SalesQuotationHeaders<T> | null;

  constructor(_entityApi: D365SalesOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface D365SalesOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAddressPrivate?: NoYes | null;
  isSalesProcessingStopped?: NoYes | null;
  salesOrderOriginType?: SalesOriginType | null;
  salesOrderStatus?: SalesStatus | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  isOneTimeCustomer?: NoYes | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  invoiceCustomerIsExternallyMaintained?: NoYes | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderIntegrationCreationType?: SalesOrderIntegrationCreationType | null;
  orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arePricesIncludingSalesTax?: NoYes | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerIsExternallyMaintained?: NoYes | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalWorkOrderStatus?: SalesExternalWorkOrderStatus | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  areTotalsUpdated?: NoYes | null;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  skipCreateAutoCharges?: NoYes | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  salesInvoiceHeadersV2: SalesInvoiceHeadersV4Type<T>[];
  d365SalesOrderLines: D365SalesOrderLinesType<T>[];
  d365SalesQuotationHeader?: D365SalesQuotationHeadersType<T> | null;
}
