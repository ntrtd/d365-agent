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
import type { ConsignmentReplenishmentOrderHeadersApi } from './ConsignmentReplenishmentOrderHeadersApi';
import { ConsignmentReplenishmentOrderStatus } from './ConsignmentReplenishmentOrderStatus';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import {
  ConsignmentReplenishmentOrderLines,
  ConsignmentReplenishmentOrderLinesType
} from './ConsignmentReplenishmentOrderLines';

/**
 * This class represents the entity "ConsignmentReplenishmentOrderHeaders" of service "d365_metadata".
 */
export class ConsignmentReplenishmentOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConsignmentReplenishmentOrderHeadersType<T>
{
  /**
   * Technical entity name for ConsignmentReplenishmentOrderHeaders.
   */
  static override _entityName = 'ConsignmentReplenishmentOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsignmentReplenishmentOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'ConsignmentReplenishmentOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consignment Replenishment Order Number.
   */
  declare consignmentReplenishmentOrderNumber: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Consignment Replenishment Order Status.
   * @nullable
   */
  declare consignmentReplenishmentOrderStatus?: ConsignmentReplenishmentOrderStatus | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Receiving Warehouse Id.
   * @nullable
   */
  declare defaultReceivingWarehouseId?: DeserializedType<
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
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Receiving Site Id.
   * @nullable
   */
  declare defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address City In Kana.
   * @nullable
   */
  declare deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignment Vendor Account Number.
   * @nullable
   */
  declare consignmentVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street In Kana.
   * @nullable
   */
  declare deliveryAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ConsignmentReplenishmentOrderLines} entity.
   */
  declare consignmentReplenishmentOrderLine: ConsignmentReplenishmentOrderLines<T>[];

  constructor(_entityApi: ConsignmentReplenishmentOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ConsignmentReplenishmentOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  consignmentReplenishmentOrderNumber: DeserializedType<T, 'Edm.String'>;
  consignmentReplenishmentOrderStatus?: ConsignmentReplenishmentOrderStatus | null;
  isDeliveryAddressPrivate?: NoYes | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDeliveryAddressOrderSpecific?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignmentVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  consignmentReplenishmentOrderLine: ConsignmentReplenishmentOrderLinesType<T>[];
}
