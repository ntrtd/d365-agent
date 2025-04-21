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
import type { D365SalesQuotationHeadersApi } from './D365SalesQuotationHeadersApi';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesQuotationHeaderAccountType } from './SalesQuotationHeaderAccountType';
import { SalesQuotationCreationMethod } from './SalesQuotationCreationMethod';
import { Timezone } from './Timezone';
import { SalesQuotationIntegrationCreationType } from './SalesQuotationIntegrationCreationType';
import { SalesQuotationOwnershipType } from './SalesQuotationOwnershipType';
import { SalesQuotationStatus } from './SalesQuotationStatus';
import {
  D365SalesQuotationLines,
  D365SalesQuotationLinesType
} from './D365SalesQuotationLines';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  D365SalesOrderHeaders,
  D365SalesOrderHeadersType
} from './D365SalesOrderHeaders';

/**
 * This class represents the entity "D365SalesQuotationHeaders" of service "d365_metadata".
 */
export class D365SalesQuotationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements D365SalesQuotationHeadersType<T>
{
  /**
   * Technical entity name for D365SalesQuotationHeaders.
   */
  static override _entityName = 'D365SalesQuotationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the D365SalesQuotationHeaders entity.
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
   * Delivery Postal Address Rec Id.
   */
  declare deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Fixed Exchange Rate.
   */
  declare reportingCurrencyFixedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quotation Follow Up Date.
   */
  declare salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Multiline Discount Customer Group Code.
   * @nullable
   */
  declare multilineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Line Discount Customer Group Code.
   * @nullable
   */
  declare lineDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Building Compliment.
   * @nullable
   */
  declare invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Address Country Region Id.
   * @nullable
   */
  declare invoiceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Fixed Exchange Rate.
   */
  declare fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requesting Account Type.
   * @nullable
   */
  declare requestingAccountType?: SalesQuotationHeaderAccountType | null;
  /**
   * Invoice Address Street.
   * @nullable
   */
  declare invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Header Creation Method.
   * @nullable
   */
  declare salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  /**
   * Generated Sales Order Number.
   * @nullable
   */
  declare generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Sales Quotation Integration Creation Type.
   * @nullable
   */
  declare salesQuotationIntegrationCreationType?: SalesQuotationIntegrationCreationType | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quotation Total Tax Amount.
   */
  declare quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quotation Confirmation Date.
   */
  declare salesQuotationConfirmationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Invoice Address District Name.
   * @nullable
   */
  declare invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Address Private.
   * @nullable
   */
  declare isInvoiceAddressPrivate?: NoYes | null;
  /**
   * Requesting Customer Account Number.
   * @nullable
   */
  declare requestingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operating Unit Party Number.
   * @nullable
   */
  declare operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Revision Number.
   */
  declare revisionNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Quotation Header Tax Amount.
   */
  declare quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Address Country Region Iso Code.
   * @nullable
   */
  declare invoiceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Customer Group Code.
   * @nullable
   */
  declare totalDiscountCustomerGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Ownership.
   * @nullable
   */
  declare salesQuotationOwnership?: SalesQuotationOwnershipType | null;
  /**
   * Quotation Taker Personnel Number.
   * @nullable
   */
  declare quotationTakerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Status.
   * @nullable
   */
  declare salesQuotationStatus?: SalesQuotationStatus | null;
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
   * Skip Opportunity Creation Prompt.
   * @nullable
   */
  declare skipOpportunityCreationPrompt?: NoYes | null;
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
   * Customers Reference.
   * @nullable
   */
  declare customersReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quotation Total Discount Amount.
   */
  declare quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quotation Name.
   * @nullable
   */
  declare salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting Account Number.
   * @nullable
   */
  declare requestingAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Charges Amount.
   */
  declare quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
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
   * Prospect Id.
   * @nullable
   */
  declare prospectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Total Amount.
   */
  declare quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Responsible Personnel Number.
   * @nullable
   */
  declare quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Quotation Expiry Date.
   */
  declare salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link D365SalesQuotationLines} entity.
   */
  declare d365SalesQuotationLines: D365SalesQuotationLines<T>[];
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare invoiceCustomerV3Entity?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link D365SalesOrderHeaders} entity.
   */
  declare d365SalesOrderHeader?: D365SalesOrderHeaders<T> | null;

  constructor(_entityApi: D365SalesQuotationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface D365SalesQuotationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesQuotationNumber: DeserializedType<T, 'Edm.String'>;
  deliveryPostalAddressRecId: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyFixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  areTotalsCalculated?: NoYes | null;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesQuotationFollowUpDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  multilineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoiceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  lineDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  formattedInvoiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  requestingAccountType?: SalesQuotationHeaderAccountType | null;
  invoiceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationHeaderCreationMethod?: SalesQuotationCreationMethod | null;
  generatedSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressTimeZone?: Timezone | null;
  salesQuotationIntegrationCreationType?: SalesQuotationIntegrationCreationType | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  opportunityId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesQuotationConfirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAddressPrivate?: NoYes | null;
  requestingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnitPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  revisionNumber: DeserializedType<T, 'Edm.Int64'>;
  quotationHeaderTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationOwnership?: SalesQuotationOwnershipType | null;
  quotationTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationStatus?: SalesQuotationStatus | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultShippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  skipOpportunityCreationPrompt?: NoYes | null;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  customersReference?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  quotationTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesQuotationName?: DeserializedType<T, 'Edm.String'> | null;
  requestingAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderOriginCode?: DeserializedType<T, 'Edm.String'> | null;
  prospectId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  quotationTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  quotationResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultShippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  salesQuotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  d365SalesQuotationLines: D365SalesQuotationLinesType<T>[];
  invoiceCustomerV3Entity?: CustomersV3Type<T> | null;
  d365SalesOrderHeader?: D365SalesOrderHeadersType<T> | null;
}
