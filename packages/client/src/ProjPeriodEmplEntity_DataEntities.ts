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
import type { ProjPeriodEmplEntity_DataEntitiesApi } from './ProjPeriodEmplEntity_DataEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjPeriodEmplEntity_DataEntities" of service "d365_metadata".
 */
export class ProjPeriodEmplEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjPeriodEmplEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjPeriodEmplEntity_DataEntities.
   */
  static override _entityName = 'ProjPeriodEmplEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjPeriodEmplEntity_DataEntities entity.
   */
  static _keys = ['dataAreaId', 'PeriodId', 'PeriodFrom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period From.
   */
  declare periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Norm Billable.
   */
  declare normBillable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Norm Efficiency.
   */
  declare normEfficiency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ProjPeriodEmplEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjPeriodEmplEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPosted?: NoYes | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  normBillable: DeserializedType<T, 'Edm.Decimal'>;
  normEfficiency: DeserializedType<T, 'Edm.Decimal'>;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
