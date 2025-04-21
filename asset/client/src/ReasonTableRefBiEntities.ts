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
import type { ReasonTableRefBiEntitiesApi } from './ReasonTableRefBiEntitiesApi';

/**
 * This class represents the entity "ReasonTableRefBiEntities" of service "d365_metadata".
 */
export class ReasonTableRefBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReasonTableRefBiEntitiesType<T>
{
  /**
   * Technical entity name for ReasonTableRefBiEntities.
   */
  static override _entityName = 'ReasonTableRefBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReasonTableRefBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReasonTableRefBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReasonTableRefBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
}
