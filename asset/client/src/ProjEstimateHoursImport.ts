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
import type { ProjEstimateHoursImportApi } from './ProjEstimateHoursImportApi';

/**
 * This class represents the entity "ProjEstimateHoursImport" of service "d365_metadata".
 */
export class ProjEstimateHoursImport<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjEstimateHoursImportType<T>
{
  /**
   * Technical entity name for ProjEstimateHoursImport.
   */
  static override _entityName = 'ProjEstimateHoursImport';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjEstimateHoursImport entity.
   */
  static _keys = ['dataAreaId', 'EstimateHoursImportId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Estimate Hours Import Id.
   */
  declare estimateHoursImportId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration.
   */
  declare duration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Cds Resource Id.
   */
  declare projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Sales Amount.
   */
  declare plannedSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Cost Amount.
   */
  declare plannedCostAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjEstimateHoursImportApi<T>) {
    super(_entityApi);
  }
}

export interface ProjEstimateHoursImportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  estimateHoursImportId: DeserializedType<T, 'Edm.Guid'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  duration: DeserializedType<T, 'Edm.Decimal'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  plannedSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  plannedCostAmount: DeserializedType<T, 'Edm.Decimal'>;
}
