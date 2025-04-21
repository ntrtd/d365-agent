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
import type { ConsumptionFactorsApi } from './ConsumptionFactorsApi';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "ConsumptionFactors" of service "d365_metadata".
 */
export class ConsumptionFactors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ConsumptionFactorsType<T>
{
  /**
   * Technical entity name for ConsumptionFactors.
   */
  static override _entityName = 'ConsumptionFactors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConsumptionFactors entity.
   */
  static _keys = ['dataAreaId', 'ConsumptionFactorId', 'EndDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Factor Id.
   */
  declare consumptionFactorId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2ConsumptionFactorAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare consumptionFactorValueModel: FixedAssetValueModels<T>[];

  constructor(_entityApi: ConsumptionFactorsApi<T>) {
    super(_entityApi);
  }
}

export interface ConsumptionFactorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  consumptionFactorId: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetBookV2ConsumptionFactorAsset: FixedAssetBooksV2Type<T>[];
  consumptionFactorValueModel: FixedAssetValueModelsType<T>[];
}
