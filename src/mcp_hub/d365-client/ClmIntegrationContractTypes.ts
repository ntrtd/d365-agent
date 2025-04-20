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
import type { ClmIntegrationContractTypesApi } from './ClmIntegrationContractTypesApi';

/**
 * This class represents the entity "CLMIntegrationContractTypes" of service "d365_metadata".
 */
export class ClmIntegrationContractTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClmIntegrationContractTypesType<T>
{
  /**
   * Technical entity name for ClmIntegrationContractTypes.
   */
  static override _entityName = 'CLMIntegrationContractTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClmIntegrationContractTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ClmIntegrationContractTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ClmIntegrationContractTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
