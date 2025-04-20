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
import type { TrvExpMobileActivitiesApi } from './TrvExpMobileActivitiesApi';

/**
 * This class represents the entity "TrvExpMobileActivities" of service "d365_metadata".
 */
export class TrvExpMobileActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileActivitiesType<T>
{
  /**
   * Technical entity name for TrvExpMobileActivities.
   */
  static override _entityName = 'TrvExpMobileActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileActivities entity.
   */
  static _keys = ['dataAreaId', 'ActivityNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   */
  declare activityNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Id.
   * @nullable
   */
  declare hierarchyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpMobileActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityNumber: DeserializedType<T, 'Edm.String'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyId?: DeserializedType<T, 'Edm.String'> | null;
}
