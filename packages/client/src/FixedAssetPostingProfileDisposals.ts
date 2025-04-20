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
import type { FixedAssetPostingProfileDisposalsApi } from './FixedAssetPostingProfileDisposalsApi';
import { AssetSoldScrap } from './AssetSoldScrap';
import { TableGroupAll } from './TableGroupAll';
import { AssetPostValue } from './AssetPostValue';
import { AssetPostType } from './AssetPostType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';

/**
 * This class represents the entity "FixedAssetPostingProfileDisposals" of service "d365_metadata".
 */
export class FixedAssetPostingProfileDisposals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetPostingProfileDisposalsType<T>
{
  /**
   * Technical entity name for FixedAssetPostingProfileDisposals.
   */
  static override _entityName = 'FixedAssetPostingProfileDisposals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetPostingProfileDisposals entity.
   */
  static _keys = [
    'dataAreaId',
    'PostingProfileId',
    'SaleOrScrap',
    'ValueModelId',
    'AccountGroupings',
    'AccountRelation',
    'PostValue',
    'SalesValueType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile Id.
   */
  declare postingProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Or Scrap.
   * @nullable
   */
  declare saleOrScrap?: AssetSoldScrap | null;
  /**
   * Value Model Id.
   */
  declare valueModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Groupings.
   * @nullable
   */
  declare accountGroupings?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Post Value.
   * @nullable
   */
  declare postValue?: AssetPostValue | null;
  /**
   * Sales Value Type.
   * @nullable
   */
  declare salesValueType?: AssetPostType | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Main Account Id Display Value.
   * @nullable
   */
  declare offsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetPostingProfileDisposalAssetGroup?: FixedAssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetPostingProfileDisposalValueModel?: ValueModelSetups<T> | null;

  constructor(_entityApi: FixedAssetPostingProfileDisposalsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetPostingProfileDisposalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfileId: DeserializedType<T, 'Edm.String'>;
  saleOrScrap?: AssetSoldScrap | null;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  accountGroupings?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  postValue?: AssetPostValue | null;
  salesValueType?: AssetPostType | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  assetPostingProfileDisposalAssetGroup?: FixedAssetGroupsType<T> | null;
  assetPostingProfileDisposalValueModel?: ValueModelSetupsType<T> | null;
}
