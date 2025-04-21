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
import type { WorkerPostalAddressesDualWriteApi } from './WorkerPostalAddressesDualWriteApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerPostalAddressesDualWrite" of service "d365_metadata".
 */
export class WorkerPostalAddressesDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerPostalAddressesDualWriteType<T>
{
  /**
   * Technical entity name for WorkerPostalAddressesDualWrite.
   */
  static override _entityName = 'WorkerPostalAddressesDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerPostalAddressesDualWrite entity.
   */
  static _keys = [
    'PersonnelNumber',
    'AddressLocationId',
    'AddressLocationRoles'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Location Id.
   */
  declare addressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Location Roles.
   */
  declare addressLocationRoles: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Is Role Delivery.
   * @nullable
   */
  declare isRoleDelivery?: NoYes | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Invoice.
   * @nullable
   */
  declare isRoleInvoice?: NoYes | null;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Role Home.
   * @nullable
   */
  declare isRoleHome?: NoYes | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Tax Registration.
   * @nullable
   */
  declare isPrimaryTaxRegistration?: NoYes | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Building.
   * @nullable
   */
  declare addressBuilding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention To Address Line.
   * @nullable
   */
  declare attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Location Owner.
   * @nullable
   */
  declare isLocationOwner?: NoYes | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Private Postal Address.
   * @nullable
   */
  declare isPrivatePostalAddress?: NoYes | null;
  /**
   * Address County Id.
   * @nullable
   */
  declare addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Apartment.
   * @nullable
   */
  declare addressApartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Address.
   * @nullable
   */
  declare formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Is Role Business.
   * @nullable
   */
  declare isRoleBusiness?: NoYes | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerPostalAddressesDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerPostalAddressesDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  addressLocationId: DeserializedType<T, 'Edm.String'>;
  addressLocationRoles: DeserializedType<T, 'Edm.String'>;
  isPrimary?: NoYes | null;
  isRoleDelivery?: NoYes | null;
  isPrivate?: NoYes | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  isRoleInvoice?: NoYes | null;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  isRoleHome?: NoYes | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryTaxRegistration?: NoYes | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  addressBuilding?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isLocationOwner?: NoYes | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  isPrivatePostalAddress?: NoYes | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  addressApartment?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  isRoleBusiness?: NoYes | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
