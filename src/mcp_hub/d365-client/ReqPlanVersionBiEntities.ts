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
import type { ReqPlanVersionBiEntitiesApi } from './ReqPlanVersionBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReqPlanVersionBiEntities" of service "d365_metadata".
 */
export class ReqPlanVersionBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReqPlanVersionBiEntitiesType<T>
{
  /**
   * Technical entity name for ReqPlanVersionBiEntities.
   */
  static override _entityName = 'ReqPlanVersionBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReqPlanVersionBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Req Plan Id.
   * @nullable
   */
  declare reqPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Last Cost Calculation Date Time.
   */
  declare lastCostCalculationDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Req Plan Data Area Id.
   * @nullable
   */
  declare reqPlanDataAreaId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReqPlanVersionBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReqPlanVersionBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reqPlanId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  lastCostCalculationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reqPlanDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
}
