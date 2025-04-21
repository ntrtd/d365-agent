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
import type { RevaluationGroupsApi } from './RevaluationGroupsApi';

/**
 * This class represents the entity "RevaluationGroups" of service "d365_metadata".
 */
export class RevaluationGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RevaluationGroupsType<T>
{
  /**
   * Technical entity name for RevaluationGroups.
   */
  static override _entityName = 'RevaluationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RevaluationGroups entity.
   */
  static _keys = ['dataAreaId', 'Id', 'TransDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RevaluationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RevaluationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
