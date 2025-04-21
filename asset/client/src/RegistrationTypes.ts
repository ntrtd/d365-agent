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
import type { RegistrationTypesApi } from './RegistrationTypesApi';
import { NoYes } from './NoYes';
import { PartyTypeRestriction } from './PartyTypeRestriction';

/**
 * This class represents the entity "RegistrationTypes" of service "d365_metadata".
 */
export class RegistrationTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegistrationTypesType<T>
{
  /**
   * Technical entity name for RegistrationTypes.
   */
  static override _entityName = 'RegistrationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegistrationTypes entity.
   */
  static _keys = ['RegistrationType', 'CountryRegionId'];
  /**
   * Registration Type.
   */
  declare registrationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Authority.
   * @nullable
   */
  declare registrationAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Address Restricted.
   * @nullable
   */
  declare isPrimaryAddressRestricted?: NoYes | null;
  /**
   * Is Registration Number Updateable.
   * @nullable
   */
  declare isRegistrationNumberUpdateable?: NoYes | null;
  /**
   * Party Type Restriction.
   * @nullable
   */
  declare partyTypeRestriction?: PartyTypeRestriction | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Registration Number Unique.
   * @nullable
   */
  declare isRegistrationNumberUnique?: NoYes | null;

  constructor(_entityApi: RegistrationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RegistrationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationType: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  registrationAuthority?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryAddressRestricted?: NoYes | null;
  isRegistrationNumberUpdateable?: NoYes | null;
  partyTypeRestriction?: PartyTypeRestriction | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  isRegistrationNumberUnique?: NoYes | null;
}
