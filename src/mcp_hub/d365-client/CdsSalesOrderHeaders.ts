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
import type { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import { Timezone } from './Timezone';
import { SalesStatus } from './SalesStatus';
import { NoYes } from './NoYes';
import { SalesExternalWorkOrderStatus } from './SalesExternalWorkOrderStatus';
import { SalesOriginType } from './SalesOriginType';
import {
  CdsSalesOrderLines,
  CdsSalesOrderLinesType
} from './CdsSalesOrderLines';
import {
  SalesInvoiceHeadersV4,
  SalesInvoiceHeadersV4Type
} from './SalesInvoiceHeadersV4';
import { Projects, ProjectsType } from './Projects';
import {
  SalesOrderHeaderDocumentAttachmentsV2,
  SalesOrderHeaderDocumentAttachmentsV2Type
} from './SalesOrderHeaderDocumentAttachmentsV2';
import {
  CdsSalesQuotationHeaders,
  CdsSalesQuotationHeadersType
} from './CdsSalesQuotationHeaders';
import {
  CdsSalesOrderLinesV2,
  CdsSalesOrderLinesV2Type
} from './CdsSalesOrderLinesV2';

/**
 * This class represents the entity "CDSSalesOrderHeaders" of service "d365_metadata".
 */
export class CdsSalesOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsSalesOrderHeadersType<T>
{
  /**
   * Technical entity name for CdsSalesOrderHeaders.
   */
  static override _entityName = 'CDSSalesOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsSalesOrderHeaders entity.
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
   * Delivery Postal Address Rec Id.
   */
  declare deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Order Total Tax Amount.
   */
  declare orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Name.
   * @nullable
   */
  declare salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Sales Taker.
   */
  declare salesTaker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Processing Status.
   * @nullable
   */
  declare salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Time Zone.
   * @nullable
   */
  declare invoiceAddressTimeZone?: Timezone | null;
  /**
   * Order Total Charges Amount.
   */
  declare orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Taker Personnel Number.
   * @nullable
   */
  declare orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Status.
   * @nullable
   */
  declare salesOrderStatus?: SalesStatus | null;
  /**
   * Sales Responsible.
   */
  declare salesResponsible: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Valid From.
   */
  declare invoiceValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Order Creation Date Time.
   */
  declare orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address City.
   * @nullable
   */
  declare invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Work Order Status.
   * @nullable
   */
  declare externalWorkOrderStatus?: SalesExternalWorkOrderStatus | null;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Valid To.
   */
  declare deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Base Date.
   */
  declare paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Longitude.
   */
  declare invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Total Amount.
   */
  declare orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Valid To.
   */
  declare invoiceValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Zip Code.
   * @nullable
   */
  declare invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Prices Including Sales Tax.
   * @nullable
   */
  declare arePricesIncludingSalesTax?: NoYes | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Are Totals Updated.
   * @nullable
   */
  declare areTotalsUpdated?: NoYes | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Invoice Address Post Box.
   * @nullable
   */
  declare invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Responsible Personnel Number.
   * @nullable
   */
  declare orderResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Customer Is Externally Maintained.
   * @nullable
   */
  declare invoiceCustomerIsExternallyMaintained?: NoYes | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Origin Type.
   * @nullable
   */
  declare salesOrderOriginType?: SalesOriginType | null;
  /**
   * Order Header Tax Amount.
   */
  declare orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordering Customer Is Externally Maintained.
   * @nullable
   */
  declare orderingCustomerIsExternallyMaintained?: NoYes | null;
  /**
   * Order Total Discount Amount.
   */
  declare orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Valid From.
   */
  declare deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Shipping Site Id.
   * @nullable
   */
  declare defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quotation Number.
   * @nullable
   */
  declare quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Street Number.
   * @nullable
   */
  declare invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Global Unified Pricing Calculation.
   * @nullable
   */
  declare skipGlobalUnifiedPricingCalculation?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CdsSalesOrderLines} entity.
   */
  declare cdsSalesOrderLines: CdsSalesOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesInvoiceHeadersV4} entity.
   */
  declare salesInvoiceHeaderV2: SalesInvoiceHeadersV4<T>[];
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderHeaderDocumentAttachmentsV2} entity.
   */
  declare salesOrderHeaderDocumentAttachments: SalesOrderHeaderDocumentAttachmentsV2<T>[];
  /**
   * One-to-one navigation property to the {@link CdsSalesQuotationHeaders} entity.
   */
  declare cdsSalesQuotationHeader?: CdsSalesQuotationHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link CdsSalesOrderLinesV2} entity.
   */
  declare cdsSalesOrderLinesV2: CdsSalesOrderLinesV2<T>[];

  constructor(_entityApi: CdsSalesOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface CdsSalesOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  orderTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  salesTaker: DeserializedType<T, 'Edm.Int64'>;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderProcessingStatus?: SalesOrderProcessingStatus | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  orderTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderStatus?: SalesStatus | null;
  salesResponsible: DeserializedType<T, 'Edm.Int64'>;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInvoiceAddressPrivate?: NoYes | null;
  orderCreationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  externalWorkOrderStatus?: SalesExternalWorkOrderStatus | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  isOneTimeCustomer?: NoYes | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  orderTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  invoiceValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  areTotalsUpdated?: NoYes | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  isSalesProcessingStopped?: NoYes | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  orderResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerIsExternallyMaintained?: NoYes | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginType?: SalesOriginType | null;
  orderHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  orderingCustomerIsExternallyMaintained?: NoYes | null;
  orderTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  quotationNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  skipGlobalUnifiedPricingCalculation?: NoYes | null;
  cdsSalesOrderLines: CdsSalesOrderLinesType<T>[];
  salesInvoiceHeaderV2: SalesInvoiceHeadersV4Type<T>[];
  project?: ProjectsType<T> | null;
  salesOrderHeaderDocumentAttachments: SalesOrderHeaderDocumentAttachmentsV2Type<T>[];
  cdsSalesQuotationHeader?: CdsSalesQuotationHeadersType<T> | null;
  cdsSalesOrderLinesV2: CdsSalesOrderLinesV2Type<T>[];
}
