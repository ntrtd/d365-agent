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
import type { DepreciationGroupsApi } from './DepreciationGroupsApi';

/**
 * This class represents the entity "DepreciationGroups" of service "d365_metadata".
 */
export class DepreciationGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DepreciationGroupsType<T>
{
  /**
   * Technical entity name for DepreciationGroups.
   */
  static override _entityName = 'DepreciationGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationGroups entity.
   */
  static _keys = ['dataAreaId', 'DepreciationGroup', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Group.
   */
  declare depreciationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Factor Alt.
   */
  declare factorAlt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Factor Ext.
   */
  declare factorExt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Limit Pl.
   */
  declare costLimitPl: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DepreciationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  depreciationGroup: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  factorAlt: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  factorExt: DeserializedType<T, 'Edm.Decimal'>;
  costLimitPl: DeserializedType<T, 'Edm.Decimal'>;
}
