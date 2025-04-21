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
import type { CreditManagementInsuranceCoverageTypesApi } from './CreditManagementInsuranceCoverageTypesApi';

/**
 * This class represents the entity "CreditManagementInsuranceCoverageTypes" of service "d365_metadata".
 */
export class CreditManagementInsuranceCoverageTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementInsuranceCoverageTypesType<T>
{
  /**
   * Technical entity name for CreditManagementInsuranceCoverageTypes.
   */
  static override _entityName = 'CreditManagementInsuranceCoverageTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementInsuranceCoverageTypes entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditManagementInsuranceCoverageTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementInsuranceCoverageTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
