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
import type { TransportationTendersApi } from './TransportationTendersApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { TmsTenderStatus } from './TmsTenderStatus';
import {
  TransportationTenderHistories,
  TransportationTenderHistoriesType
} from './TransportationTenderHistories';

/**
 * This class represents the entity "TransportationTenders" of service "d365_metadata".
 */
export class TransportationTenders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationTendersType<T>
{
  /**
   * Technical entity name for TransportationTenders.
   */
  static override _entityName = 'TransportationTenders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationTenders entity.
   */
  static _keys = ['dataAreaId', 'TenderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tender Id.
   */
  declare tenderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pickup Address State Id.
   * @nullable
   */
  declare pickupAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Longitude.
   */
  declare dropOffAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Rate.
   */
  declare requestedRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Drop Off Address Latitude.
   */
  declare dropOffAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Rate.
   */
  declare confirmedRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pickup Address Building Compliment.
   * @nullable
   */
  declare pickupAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Drop Off Address City In Kana.
   * @nullable
   */
  declare dropOffAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Time Zone.
   * @nullable
   */
  declare dropOffAddressTimeZone?: Timezone | null;
  /**
   * Drop Off Address Building Compliment.
   * @nullable
   */
  declare dropOffAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formatted Drop Off Address.
   * @nullable
   */
  declare formattedDropOffAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Distance Miles.
   */
  declare transportationDistanceMiles: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Drop Off Address Street In Kana.
   * @nullable
   */
  declare dropOffAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Post Box.
   * @nullable
   */
  declare dropOffAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Pickup Date Time.
   */
  declare confirmedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Country Region Iso Code.
   * @nullable
   */
  declare dropOffAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Drop Off Address County Id.
   * @nullable
   */
  declare dropOffAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Zip Code.
   * @nullable
   */
  declare pickupAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Country Region Id.
   * @nullable
   */
  declare pickupAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Description.
   * @nullable
   */
  declare pickupAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Gross Weight.
   */
  declare calculatedGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pickup Address City.
   * @nullable
   */
  declare pickupAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Drop Off Address Private.
   * @nullable
   */
  declare isDropOffAddressPrivate?: NoYes | null;
  /**
   * Drop Off Address Duns Number.
   * @nullable
   */
  declare dropOffAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Country Region Id.
   * @nullable
   */
  declare dropOffAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reference Load Id.
   * @nullable
   */
  declare referenceLoadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Zip Code.
   * @nullable
   */
  declare dropOffAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Pickup Address.
   * @nullable
   */
  declare formattedPickupAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street Number.
   * @nullable
   */
  declare pickupAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Route Id.
   * @nullable
   */
  declare referenceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Time Zone.
   * @nullable
   */
  declare pickupAddressTimeZone?: Timezone | null;
  /**
   * Drop Off Address District Name.
   * @nullable
   */
  declare dropOffAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Route Segment Sequence Number.
   */
  declare referenceRouteSegmentSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pickup Address City In Kana.
   * @nullable
   */
  declare pickupAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Location Id.
   * @nullable
   */
  declare dropOffAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Pickup Date Time.
   */
  declare requestedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Drop Off Address Description.
   * @nullable
   */
  declare dropOffAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Equipment Code.
   * @nullable
   */
  declare transportationEquipmentCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Post Box.
   * @nullable
   */
  declare pickupAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Street.
   * @nullable
   */
  declare dropOffAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Status.
   * @nullable
   */
  declare tenderStatus?: TmsTenderStatus | null;
  /**
   * Reference Route Segment Load Id.
   * @nullable
   */
  declare referenceRouteSegmentLoadId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address District Name.
   * @nullable
   */
  declare pickupAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street In Kana.
   * @nullable
   */
  declare pickupAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Latitude.
   */
  declare pickupAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pickup Address Longitude.
   */
  declare pickupAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Drop Off Address State Id.
   * @nullable
   */
  declare dropOffAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Country Region Iso Code.
   * @nullable
   */
  declare pickupAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address County Id.
   * @nullable
   */
  declare pickupAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Location Id.
   * @nullable
   */
  declare pickupAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pickup Address Street.
   * @nullable
   */
  declare pickupAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address Street Number.
   * @nullable
   */
  declare dropOffAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Pickup Address Private.
   * @nullable
   */
  declare isPickupAddressPrivate?: NoYes | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pickup Address Duns Number.
   * @nullable
   */
  declare pickupAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Off Address City.
   * @nullable
   */
  declare dropOffAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TransportationTenderHistories} entity.
   */
  declare tmsTransportationTenderHistory: TransportationTenderHistories<T>[];

  constructor(_entityApi: TransportationTendersApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationTendersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tenderId: DeserializedType<T, 'Edm.String'>;
  pickupAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  requestedRate: DeserializedType<T, 'Edm.Decimal'>;
  dropOffAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  confirmedRate: DeserializedType<T, 'Edm.Decimal'>;
  pickupAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressTimeZone?: Timezone | null;
  dropOffAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  formattedDropOffAddress?: DeserializedType<T, 'Edm.String'> | null;
  transportationDistanceMiles: DeserializedType<T, 'Edm.Decimal'>;
  dropOffAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  confirmedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  calculatedGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  pickupAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  isDropOffAddressPrivate?: NoYes | null;
  dropOffAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  referenceLoadId?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedPickupAddress?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  referenceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressTimeZone?: Timezone | null;
  dropOffAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  referenceRouteSegmentSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  pickupAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  requestedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dropOffAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  transportationEquipmentCode?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  tenderStatus?: TmsTenderStatus | null;
  referenceRouteSegmentLoadId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  pickupAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  dropOffAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  isPickupAddressPrivate?: NoYes | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  pickupAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  dropOffAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  tmsTransportationTenderHistory: TransportationTenderHistoriesType<T>[];
}
