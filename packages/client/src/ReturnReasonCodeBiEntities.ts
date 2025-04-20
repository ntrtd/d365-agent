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
import type { ReturnReasonCodeBiEntitiesApi } from './ReturnReasonCodeBiEntitiesApi';

/**
 * This class represents the entity "ReturnReasonCodeBiEntities" of service "d365_metadata".
 */
export class ReturnReasonCodeBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnReasonCodeBiEntitiesType<T>
{
  /**
   * Technical entity name for ReturnReasonCodeBiEntities.
   */
  static override _entityName = 'ReturnReasonCodeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnReasonCodeBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ReasonCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Group Id.
   * @nullable
   */
  declare reasonCodeGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnReasonCodeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnReasonCodeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCodeId: DeserializedType<T, 'Edm.String'>;
  reasonCodeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
