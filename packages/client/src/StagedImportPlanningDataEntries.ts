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
import type { StagedImportPlanningDataEntriesApi } from './StagedImportPlanningDataEntriesApi';

/**
 * This class represents the entity "StagedImportPlanningDataEntries" of service "d365_metadata".
 */
export class StagedImportPlanningDataEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements StagedImportPlanningDataEntriesType<T>
{
  /**
   * Technical entity name for StagedImportPlanningDataEntries.
   */
  static override _entityName = 'StagedImportPlanningDataEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StagedImportPlanningDataEntries entity.
   */
  static _keys = ['dataAreaId', 'ImportId', 'ForecastEntryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Forecast Entry Number.
   */
  declare forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Start Date.
   */
  declare forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivering Warehouse Id.
   * @nullable
   */
  declare deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivering Site Id.
   * @nullable
   */
  declare deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Quantity.
   */
  declare forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Variant Number.
   * @nullable
   */
  declare productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StagedImportPlanningDataEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface StagedImportPlanningDataEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importId: DeserializedType<T, 'Edm.Guid'>;
  forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
