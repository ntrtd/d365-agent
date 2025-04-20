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
import type { RegistrationLegislationTypesApi } from './RegistrationLegislationTypesApi';
import { TaxRegistrationTypesList } from './TaxRegistrationTypesList';

/**
 * This class represents the entity "RegistrationLegislationTypes" of service "d365_metadata".
 */
export class RegistrationLegislationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegistrationLegislationTypesType<T>
{
  /**
   * Technical entity name for RegistrationLegislationTypes.
   */
  static override _entityName = 'RegistrationLegislationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegistrationLegislationTypes entity.
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
   * Registration Types List.
   * @nullable
   */
  declare registrationTypesList?: TaxRegistrationTypesList | null;

  constructor(_entityApi: RegistrationLegislationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RegistrationLegislationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationType: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  registrationTypesList?: TaxRegistrationTypesList | null;
}
