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
import type { ReqPlanBiEntitiesApi } from './ReqPlanBiEntitiesApi';
import { NoYes } from './NoYes';
import { ReqPlanType } from './ReqPlanType';
import { ReqReduceType } from './ReqReduceType';

/**
 * This class represents the entity "ReqPlanBiEntities" of service "d365_metadata".
 */
export class ReqPlanBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReqPlanBiEntitiesType<T>
{
  /**
   * Technical entity name for ReqPlanBiEntities.
   */
  static override _entityName = 'ReqPlanBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReqPlanBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ReqPlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Req Plan Id.
   */
  declare reqPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mcr Req Plan Id Continuity.
   * @nullable
   */
  declare mcrReqPlanIdContinuity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Forecast Demand.
   * @nullable
   */
  declare useForecastDemand?: NoYes | null;
  /**
   * Use Forecast Supply.
   * @nullable
   */
  declare useForecastSupply?: NoYes | null;
  /**
   * Plan Type.
   * @nullable
   */
  declare planType?: ReqPlanType | null;
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
   * Forecast Reduce Type.
   * @nullable
   */
  declare forecastReduceType?: ReqReduceType | null;

  constructor(_entityApi: ReqPlanBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ReqPlanBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reqPlanId: DeserializedType<T, 'Edm.String'>;
  mcrReqPlanIdContinuity?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  useForecastDemand?: NoYes | null;
  useForecastSupply?: NoYes | null;
  planType?: ReqPlanType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  forecastReduceType?: ReqReduceType | null;
}
