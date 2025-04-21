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
import type { FixedAssetPostingProfilesApi } from './FixedAssetPostingProfilesApi';
import { AssetTransType } from './AssetTransType';
import { TableGroupAll } from './TableGroupAll';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import { FixedAssets, FixedAssetsType } from './FixedAssets';
import { AssetParameters, AssetParametersType } from './AssetParameters';

/**
 * This class represents the entity "FixedAssetPostingProfiles" of service "d365_metadata".
 */
export class FixedAssetPostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetPostingProfilesType<T>
{
  /**
   * Technical entity name for FixedAssetPostingProfiles.
   */
  static override _entityName = 'FixedAssetPostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetPostingProfiles entity.
   */
  static _keys = [
    'dataAreaId',
    'PostingProfileId',
    'TransactionType',
    'ValueModelId',
    'AccountGroupings',
    'AccountRelation'
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
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: AssetTransType | null;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Main Account Id Display Value.
   * @nullable
   */
  declare offsetMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Rule Id.
   * @nullable
   */
  declare allocationRuleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetPostingProfileAssetGroup?: FixedAssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetPostingProfileValueModel?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssets} entity.
   */
  declare assetPostingProfileAssetNumber?: FixedAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetParameters} entity.
   */
  declare assetParameter?: AssetParameters<T> | null;

  constructor(_entityApi: FixedAssetPostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetPostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfileId: DeserializedType<T, 'Edm.String'>;
  transactionType?: AssetTransType | null;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  accountGroupings?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  offsetMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allocationRuleId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  assetPostingProfileAssetGroup?: FixedAssetGroupsType<T> | null;
  assetPostingProfileValueModel?: ValueModelSetupsType<T> | null;
  assetPostingProfileAssetNumber?: FixedAssetsType<T> | null;
  assetParameter?: AssetParametersType<T> | null;
}
