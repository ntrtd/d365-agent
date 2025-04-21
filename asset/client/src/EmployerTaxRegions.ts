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
import type { EmployerTaxRegionsApi } from './EmployerTaxRegionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EmployerTaxRegions" of service "d365_metadata".
 */
export class EmployerTaxRegions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployerTaxRegionsType<T>
{
  /**
   * Technical entity name for EmployerTaxRegions.
   */
  static override _entityName = 'EmployerTaxRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmployerTaxRegions entity.
   */
  static _keys = ['CountryRegionId', 'StateId', 'LegalEntityId'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;

  constructor(_entityApi: EmployerTaxRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface EmployerTaxRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
}
