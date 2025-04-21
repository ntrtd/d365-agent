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
import type { CdsSalesQuotationHeadersApi } from './CdsSalesQuotationHeadersApi';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesQuotationStatus } from './SalesQuotationStatus';
import { Timezone } from './Timezone';
import { SalesQuotationCreationMethod } from './SalesQuotationCreationMethod';
import {
  CdsSalesQuotationLines,
  CdsSalesQuotationLinesType
} from './CdsSalesQuotationLines';
import {
  CdsSalesOrderHeaders,
  CdsSalesOrderHeadersType
} from './CdsSalesOrderHeaders';

/**
 * This class represents the entity "CDSSalesQuotationHeaders" of service "d365_metadata".
 */
export class CdsSalesQuotationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsSalesQuotationHeadersType<T>
{
  /**
   * Technical entity name for CdsSalesQuotationHeaders.
   */
  static override _entityName = 'CDSSalesQuotationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsSalesQuotationHeaders entity.
   */
  static _keys = ['dataAreaId', 'SalesQuotationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Quotation Number.
   */
  declare salesQuotationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Name.
   * @nullable
   */
  declare salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quotation Responsible Personnel Number.
   * @nullable
   */
  declare quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Generated Sales Order Number.
   * @nullable
   */
  declare generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Origin Code.
   * @nullable
   */
  declare salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address Latitude.
   */
  declare invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount Percentage.
   */
  declare cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting Customer Account Number.
   * @nullable
   */
  declare requestingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Expiry Date.
   */
  declare salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Invoice Address State Id.
   * @nullable
   */
  declare invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Follow Up Date.
   */
  declare salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Tax Amount.
   */
  declare quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Invoice Address.
   * @nullable
   */
  declare formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quotation Total Discount Amount.
   */
  declare quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Prospect Id.
   * @nullable
   */
  declare prospectId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Status.
   * @nullable
   */
  declare salesQuotationStatus?: SalesQuotationStatus | null;
  /**
   * Quotation Total Amount.
   */
  declare quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quotation Header Tax Amount.
   */
  declare quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Default Shipping Warehouse Id.
   * @nullable
   */
  declare defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Taker Personnel Number.
   * @nullable
   */
  declare quotationTakerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Header Creation Method.
   * @nullable
   */
  declare salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Reference.
   * @nullable
   */
  declare customersReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Opportunity Id.
   * @nullable
   */
  declare opportunityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Address County Id.
   * @nullable
   */
  declare invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Charges Amount.
   */
  declare quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quotation Confirmation Date.
   */
  declare salesQuotationConfirmationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
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
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Global Unified Pricing Calculation.
   * @nullable
   */
  declare skipGlobalUnifiedPricingCalculation?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CdsSalesQuotationLines} entity.
   */
  declare cdsSalesQuotationLines: CdsSalesQuotationLines<T>[];
  /**
   * One-to-one navigation property to the {@link CdsSalesOrderHeaders} entity.
   */
  declare cdsSalesOrderHeader?: CdsSalesOrderHeaders<T> | null;

  constructor(_entityApi: CdsSalesQuotationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface CdsSalesQuotationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesQuotationNumber: DeserializedType<T, 'Edm.String'>;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAddressPrivate?: NoYes | null;
  quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  requestingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  areTotalsCalculated?: NoYes | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  arePricesIncludingSalesTax?: NoYes | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  prospectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationStatus?: SalesQuotationStatus | null;
  quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  customersReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  opportunityId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesQuotationConfirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  skipGlobalUnifiedPricingCalculation?: NoYes | null;
  cdsSalesQuotationLines: CdsSalesQuotationLinesType<T>[];
  cdsSalesOrderHeader?: CdsSalesOrderHeadersType<T> | null;
}
