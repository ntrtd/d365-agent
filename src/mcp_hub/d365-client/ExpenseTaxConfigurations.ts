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
import type { ExpenseTaxConfigurationsApi } from './ExpenseTaxConfigurationsApi';

/**
 * This class represents the entity "ExpenseTaxConfigurations" of service "d365_metadata".
 */
export class ExpenseTaxConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseTaxConfigurationsType<T>
{
  /**
   * Technical entity name for ExpenseTaxConfigurations.
   */
  static override _entityName = 'ExpenseTaxConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseTaxConfigurations entity.
   */
  static _keys = ['dataAreaId', 'CountryRegionId', 'TaxGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group.
   */
  declare taxGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpenseTaxConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseTaxConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  taxGroup: DeserializedType<T, 'Edm.String'>;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
}
