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
import type { PersonAddressesApi } from './PersonAddressesApi';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "PersonAddresses" of service "d365_metadata".
 */
export class PersonAddresses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonAddressesType<T>
{
  /**
   * Technical entity name for PersonAddresses.
   */
  static override _entityName = 'PersonAddresses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonAddresses entity.
   */
  static _keys = ['PartyNumber', 'LocationId'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Roles.
   * @nullable
   */
  declare roles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare addressCountryRegion?: AddressCountryRegions<T> | null;

  constructor(_entityApi: PersonAddressesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonAddressesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  roles?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  addressCountryRegion?: AddressCountryRegionsType<T> | null;
}
