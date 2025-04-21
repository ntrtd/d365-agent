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
import type { SalesOrderConfirmationHeadersApi } from './SalesOrderConfirmationHeadersApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import {
  SalesOrderConfirmationLines,
  SalesOrderConfirmationLinesType
} from './SalesOrderConfirmationLines';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';

/**
 * This class represents the entity "SalesOrderConfirmationHeaders" of service "d365_metadata".
 */
export class SalesOrderConfirmationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderConfirmationHeadersType<T>
{
  /**
   * Technical entity name for SalesOrderConfirmationHeaders.
   */
  static override _entityName = 'SalesOrderConfirmationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderConfirmationHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'ConfirmationDate',
    'ConfirmationNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirmation Date.
   */
  declare confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmation Number.
   */
  declare confirmationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Inventory Site Mandatory.
   * @nullable
   */
  declare isInventorySiteMandatory?: NoYes | null;
  /**
   * Fixed Secondary Exchange Rate.
   */
  declare fixedSecondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
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
   * Total Net Volume.
   */
  declare totalNetVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Net Weight.
   */
  declare totalNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmation Document Reference.
   * @nullable
   */
  declare confirmationDocumentReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Round Off Amount.
   */
  declare totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Total Confirmed Amount.
   */
  declare totalConfirmedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Due Date.
   */
  declare fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Charge Amount.
   */
  declare totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sub Total Amount.
   */
  declare subTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Quantity.
   */
  declare totalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Cost Amount.
   */
  declare totalCostAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Sales Tax Amount.
   */
  declare totalSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Line Discount Amount.
   */
  declare totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link SalesOrderConfirmationLines} entity.
   */
  declare salesOrderConfirmationLines: SalesOrderConfirmationLines<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];

  constructor(_entityApi: SalesOrderConfirmationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderConfirmationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  confirmationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmationNumber: DeserializedType<T, 'Edm.String'>;
  isInventorySiteMandatory?: NoYes | null;
  fixedSecondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  totalNetVolume: DeserializedType<T, 'Edm.Decimal'>;
  totalNetWeight: DeserializedType<T, 'Edm.Decimal'>;
  confirmationDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  totalRoundOffAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  orderTakerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalConfirmedAmount: DeserializedType<T, 'Edm.Decimal'>;
  fixedDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalChargeAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  subTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  arePricesIncludingSalesTax?: NoYes | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  totalCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  totalSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderConfirmationLines: SalesOrderConfirmationLinesType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
}
