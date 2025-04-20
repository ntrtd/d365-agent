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
import type { PurchaseOrderResponseHeadersApi } from './PurchaseOrderResponseHeadersApi';
import { PurchaseOrderResponseState } from './PurchaseOrderResponseState';
import { ConsumptionState } from './ConsumptionState';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import {
  PurchaseOrderResponseLines,
  PurchaseOrderResponseLinesType
} from './PurchaseOrderResponseLines';
import { VendorsV2, VendorsV2Type } from './VendorsV2';

/**
 * This class represents the entity "PurchaseOrderResponseHeaders" of service "d365_metadata".
 */
export class PurchaseOrderResponseHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderResponseHeadersType<T>
{
  /**
   * Technical entity name for PurchaseOrderResponseHeaders.
   */
  static override _entityName = 'PurchaseOrderResponseHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderResponseHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseOrderResponseLastModificationDateTime',
    'PurchaseOrderNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Response Last Modification Date Time.
   */
  declare purchaseOrderResponseLastModificationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Discount Percentage.
   */
  declare totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Responding Date Time.
   */
  declare respondingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Order Document Reference.
   * @nullable
   */
  declare purchaseOrderDocumentReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Response Note.
   * @nullable
   */
  declare responseNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Building Compliment.
   * @nullable
   */
  declare deliveryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Response Status.
   * @nullable
   */
  declare responseStatus?: PurchaseOrderResponseState | null;
  /**
   * Response Processing State.
   * @nullable
   */
  declare responseProcessingState?: ConsumptionState | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Status.
   * @nullable
   */
  declare purchaseOrderStatus?: PurchStatus | null;
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
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Sent Date.
   */
  declare purchaseOrderSentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Responding Person Party Number.
   * @nullable
   */
  declare respondingPersonPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Mode Id.
   * @nullable
   */
  declare deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Vendor Account Number.
   * @nullable
   */
  declare orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Order Reference.
   * @nullable
   */
  declare vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PurchaseOrderResponseLines} entity.
   */
  declare purchaseOrderResponseLines: PurchaseOrderResponseLines<T>[];
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare orderVendor?: VendorsV2<T> | null;

  constructor(_entityApi: PurchaseOrderResponseHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderResponseHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderResponseLastModificationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  totalDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  respondingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderDocumentReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  responseNote?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  responseStatus?: PurchaseOrderResponseState | null;
  responseProcessingState?: ConsumptionState | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderStatus?: PurchStatus | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderSentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  respondingPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  vendorOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderResponseLines: PurchaseOrderResponseLinesType<T>[];
  orderVendor?: VendorsV2Type<T> | null;
}
