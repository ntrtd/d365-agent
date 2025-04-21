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
import type { AssetConsumptionUnitsApi } from './AssetConsumptionUnitsApi';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "AssetConsumptionUnits" of service "d365_metadata".
 */
export class AssetConsumptionUnits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetConsumptionUnitsType<T>
{
  /**
   * Technical entity name for AssetConsumptionUnits.
   */
  static override _entityName = 'AssetConsumptionUnits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetConsumptionUnits entity.
   */
  static _keys = ['dataAreaId', 'UnitId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Id.
   */
  declare unitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2ConsumptionUnitAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare valueModelConsumptionUnit: FixedAssetValueModels<T>[];

  constructor(_entityApi: AssetConsumptionUnitsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetConsumptionUnitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  unitId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetBookV2ConsumptionUnitAsset: FixedAssetBooksV2Type<T>[];
  valueModelConsumptionUnit: FixedAssetValueModelsType<T>[];
}
