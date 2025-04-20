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
import type { ByProductTablesApi } from './ByProductTablesApi';
import { ProdByProdCostingRu } from './ProdByProdCostingRu';

/**
 * This class represents the entity "ByProductTables" of service "d365_metadata".
 */
export class ByProductTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ByProductTablesType<T>
{
  /**
   * Technical entity name for ByProductTables.
   */
  static override _entityName = 'ByProductTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ByProductTables entity.
   */
  static _keys = [
    'dataAreaId',
    'MainProduct',
    'DimensionNumberMain',
    'ItemIdByProd',
    'DimensionNumberByProd'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Product.
   */
  declare mainProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Number Main.
   */
  declare dimensionNumberMain: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id By Prod.
   */
  declare itemIdByProd: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Number By Prod.
   */
  declare dimensionNumberByProd: DeserializedType<T, 'Edm.String'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Costing Rule.
   * @nullable
   */
  declare costingRule?: ProdByProdCostingRu | null;

  constructor(_entityApi: ByProductTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ByProductTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mainProduct: DeserializedType<T, 'Edm.String'>;
  dimensionNumberMain: DeserializedType<T, 'Edm.String'>;
  itemIdByProd: DeserializedType<T, 'Edm.String'>;
  dimensionNumberByProd: DeserializedType<T, 'Edm.String'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  costingRule?: ProdByProdCostingRu | null;
}
