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
import type { AssetStatementRowsApi } from './AssetStatementRowsApi';
import { AssetIntervalRelation } from './AssetIntervalRelation';
import { RowType } from './RowType';
import { FixedAssets, FixedAssetsType } from './FixedAssets';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';

/**
 * This class represents the entity "AssetStatementRows" of service "d365_metadata".
 */
export class AssetStatementRows<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetStatementRowsType<T>
{
  /**
   * Technical entity name for AssetStatementRows.
   */
  static override _entityName = 'AssetStatementRows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetStatementRows entity.
   */
  static _keys = [
    'dataAreaId',
    'LineNumber',
    'FromFixedAssetNumber',
    'ToFixedAssetNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Fixed Asset Number.
   */
  declare fromFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * To Fixed Asset Number.
   */
  declare toFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Row Name.
   * @nullable
   */
  declare rowName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Interval Relation.
   * @nullable
   */
  declare assetIntervalRelation?: AssetIntervalRelation | null;
  /**
   * Row Type.
   * @nullable
   */
  declare rowType?: RowType | null;
  /**
   * One-to-one navigation property to the {@link FixedAssets} entity.
   */
  declare fixedAsset?: FixedAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare fixedAssetGroup?: FixedAssetGroups<T> | null;

  constructor(_entityApi: AssetStatementRowsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetStatementRowsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  fromFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  toFixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  rowName?: DeserializedType<T, 'Edm.String'> | null;
  assetIntervalRelation?: AssetIntervalRelation | null;
  rowType?: RowType | null;
  fixedAsset?: FixedAssetsType<T> | null;
  fixedAssetGroup?: FixedAssetGroupsType<T> | null;
}
