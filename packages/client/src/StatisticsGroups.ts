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
import type { StatisticsGroupsApi } from './StatisticsGroupsApi';

/**
 * This class represents the entity "StatisticsGroups" of service "d365_metadata".
 */
export class StatisticsGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StatisticsGroupsType<T>
{
  /**
   * Technical entity name for StatisticsGroups.
   */
  static override _entityName = 'StatisticsGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StatisticsGroups entity.
   */
  static _keys = ['dataAreaId', 'StatisticsGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statistics Group.
   */
  declare statisticsGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StatisticsGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface StatisticsGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statisticsGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
