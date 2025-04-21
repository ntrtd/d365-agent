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
import type { SadItemCodesApi } from './SadItemCodesApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SADItemCodes" of service "d365_metadata".
 */
export class SadItemCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SadItemCodesType<T>
{
  /**
   * Technical entity name for SadItemCodes.
   */
  static override _entityName = 'SADItemCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadItemCodes entity.
   */
  static _keys = ['dataAreaId', 'ItemCommodityCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Commodity Code.
   */
  declare itemCommodityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SadItemCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SadItemCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCommodityCode: DeserializedType<T, 'Edm.String'>;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
