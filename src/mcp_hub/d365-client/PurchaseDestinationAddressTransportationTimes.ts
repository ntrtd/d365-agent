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
import type { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AddressStates, AddressStatesType } from './AddressStates';
import { AddressCities, AddressCitiesType } from './AddressCities';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';
import {
  AddressPostalCodesV3,
  AddressPostalCodesV3Type
} from './AddressPostalCodesV3';

/**
 * This class represents the entity "PurchaseDestinationAddressTransportationTimes" of service "d365_metadata".
 */
export class PurchaseDestinationAddressTransportationTimes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseDestinationAddressTransportationTimesType<T>
{
  /**
   * Technical entity name for PurchaseDestinationAddressTransportationTimes.
   */
  static override _entityName = 'PurchaseDestinationAddressTransportationTimes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseDestinationAddressTransportationTimes entity.
   */
  static _keys = [
    'dataAreaId',
    'ReceivingAddressCountryRegionId',
    'ReceivingAddressStateId',
    'ReceivingAddressCountyId',
    'ReceivingAddressZipCode',
    'ShippingAddressCountryRegionId',
    'ShippingAddressStateId',
    'ShippingAddressCountyId',
    'ShippingAddressZipCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiving Address Country Region Id.
   */
  declare receivingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiving Address State Id.
   */
  declare receivingAddressStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiving Address County Id.
   */
  declare receivingAddressCountyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiving Address Zip Code.
   */
  declare receivingAddressZipCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Address Country Region Id.
   */
  declare shippingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Address State Id.
   */
  declare shippingAddressStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Address County Id.
   */
  declare shippingAddressCountyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Address Zip Code.
   */
  declare shippingAddressZipCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Address Address.
   * @nullable
   */
  declare shippingAddressAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address City.
   * @nullable
   */
  declare shippingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Street.
   * @nullable
   */
  declare shippingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Address.
   * @nullable
   */
  declare receivingAddressAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Transportation Days.
   */
  declare defaultTransportationDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receiving Address Street.
   * @nullable
   */
  declare receivingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address City.
   * @nullable
   */
  declare receivingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare shippingStates?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCities} entity.
   */
  declare receivingCities?: AddressCities<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare shippingCounties?: AddressCounties<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare shippingCountryRegions?: AddressCountryRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressPostalCodesV3} entity.
   */
  declare shippingZipCodes?: AddressPostalCodesV3<T> | null;

  constructor(_entityApi: PurchaseDestinationAddressTransportationTimesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseDestinationAddressTransportationTimesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  receivingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  receivingAddressStateId: DeserializedType<T, 'Edm.String'>;
  receivingAddressCountyId: DeserializedType<T, 'Edm.String'>;
  receivingAddressZipCode: DeserializedType<T, 'Edm.String'>;
  shippingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  shippingAddressStateId: DeserializedType<T, 'Edm.String'>;
  shippingAddressCountyId: DeserializedType<T, 'Edm.String'>;
  shippingAddressZipCode: DeserializedType<T, 'Edm.String'>;
  shippingAddressAddress?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressAddress?: DeserializedType<T, 'Edm.String'> | null;
  defaultTransportationDays: DeserializedType<T, 'Edm.Int32'>;
  receivingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  shippingStates?: AddressStatesType<T> | null;
  receivingCities?: AddressCitiesType<T> | null;
  shippingCounties?: AddressCountiesType<T> | null;
  shippingCountryRegions?: AddressCountryRegionsType<T> | null;
  shippingZipCodes?: AddressPostalCodesV3Type<T> | null;
}
