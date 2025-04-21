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
import type { OperationStatusesApi } from './OperationStatusesApi';
import { FiasOperationTypeRu } from './FiasOperationTypeRu';

/**
 * This class represents the entity "OperationStatuses" of service "d365_metadata".
 */
export class OperationStatuses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationStatusesType<T>
{
  /**
   * Technical entity name for OperationStatuses.
   */
  static override _entityName = 'OperationStatuses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationStatuses entity.
   */
  static _keys = ['dataAreaId', 'OperationStatus'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Status.
   */
  declare operationStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Fias Operation Type Ru.
   * @nullable
   */
  declare fiasOperationTypeRu?: FiasOperationTypeRu | null;
  /**
   * Operation Description.
   * @nullable
   */
  declare operationDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OperationStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface OperationStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationStatus: DeserializedType<T, 'Edm.String'>;
  fiasOperationTypeRu?: FiasOperationTypeRu | null;
  operationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
