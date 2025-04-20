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
import type { BudgetPlanAssetsApi } from './BudgetPlanAssetsApi';

/**
 * This class represents the entity "BudgetPlanAssets" of service "d365_metadata".
 */
export class BudgetPlanAssets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanAssetsType<T>
{
  /**
   * Technical entity name for BudgetPlanAssets.
   */
  static override _entityName = 'BudgetPlanAssets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanAssets entity.
   */
  static _keys = ['dataAreaId', 'AssetId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Id.
   */
  declare assetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanAssetsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanAssetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
