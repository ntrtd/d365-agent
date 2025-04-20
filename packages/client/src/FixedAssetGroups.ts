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
import type { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
import { AssetPropertyType } from './AssetPropertyType';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
import { NoYes } from './NoYes';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetType } from './AssetType';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { FixedAssets, FixedAssetsType } from './FixedAssets';
import {
  FixedAssetPostingProfiles,
  FixedAssetPostingProfilesType
} from './FixedAssetPostingProfiles';
import {
  AssetStatementRows,
  AssetStatementRowsType
} from './AssetStatementRows';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { FixedAssetsV2, FixedAssetsV2Type } from './FixedAssetsV2';
import {
  FixedAssetPostingProfileDisposals,
  FixedAssetPostingProfileDisposalsType
} from './FixedAssetPostingProfileDisposals';
import { AssetLocations, AssetLocationsType } from './AssetLocations';
import { SequenceTables, SequenceTablesType } from './SequenceTables';
import { AssetMajorTypes, AssetMajorTypesType } from './AssetMajorTypes';
import {
  FixedAssetGroupBookSpecialDepreciationAllowances,
  FixedAssetGroupBookSpecialDepreciationAllowancesType
} from './FixedAssetGroupBookSpecialDepreciationAllowances';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "FixedAssetGroups" of service "d365_metadata".
 */
export class FixedAssetGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FixedAssetGroupsType<T>
{
  /**
   * Technical entity name for FixedAssetGroups.
   */
  static override _entityName = 'FixedAssetGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetGroups entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Group Id.
   */
  declare fixedAssetGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Property Type.
   * @nullable
   */
  declare propertyType?: AssetPropertyType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icms Credit Installments.
   */
  declare icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gis Layer Id.
   * @nullable
   */
  declare gisLayerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Type.
   * @nullable
   */
  declare deferredType?: AssetDeferredTypeJp | null;
  /**
   * Replacement Cost Factor.
   */
  declare replacementCostFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Autonumber Bar Codes.
   * @nullable
   */
  declare autonumberBarCodes?: NoYes | null;
  /**
   * Major Type Id.
   * @nullable
   */
  declare majorTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appropriation Method For Piscofins.
   * @nullable
   */
  declare appropriationMethodForPiscofins?: FbpiscofinsFixedAssetAppropMethodBr | null;
  /**
   * Taxation Code For Pis.
   * @nullable
   */
  declare taxationCodeForPis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Barcode Number Sequence Code.
   * @nullable
   */
  declare barcodeNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: AssetType | null;
  /**
   * Piscofins Credits Installments.
   */
  declare piscofinsCreditsInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Autonumber Fixed Assets.
   * @nullable
   */
  declare autonumberFixedAssets?: NoYes | null;
  /**
   * Asset Location Id.
   * @nullable
   */
  declare assetLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outgoing Icms.
   * @nullable
   */
  declare outgoingIcms?: NoYes | null;
  /**
   * Capitalization Threshold.
   */
  declare capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Credit Group.
   * @nullable
   */
  declare fixedAssetCreditGroup?: FbpiscofinsFixedAssetCreditGroupBr | null;
  /**
   * Long Term Receivable Piscofins.
   * @nullable
   */
  declare longTermReceivablePiscofins?: NoYes | null;
  /**
   * Asset Classification.
   * @nullable
   */
  declare assetClassification?: AssetClassificationJp | null;
  /**
   * Taxation Code For Cofins.
   * @nullable
   */
  declare taxationCodeForCofins?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Insured Value Factor.
   */
  declare insuredValueFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Credit Purpose.
   * @nullable
   */
  declare fixedAssetCreditPurpose?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  /**
   * One-to-many navigation property to the {@link FixedAssets} entity.
   */
  declare assetGroupAsset: FixedAssets<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfiles} entity.
   */
  declare assetGroupAssetPostingProfile: FixedAssetPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link AssetStatementRows} entity.
   */
  declare assetStatementRow: AssetStatementRows<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2GroupAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetsV2} entity.
   */
  declare assetFixedAssetV2GroupAsset: FixedAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfileDisposals} entity.
   */
  declare assetGroupAssetPostingProfileDisposal: FixedAssetPostingProfileDisposals<T>[];
  /**
   * One-to-one navigation property to the {@link AssetLocations} entity.
   */
  declare assetGroupAssetLocation?: AssetLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link SequenceTables} entity.
   */
  declare numberSequence?: SequenceTables<T> | null;
  /**
   * One-to-one navigation property to the {@link SequenceTables} entity.
   */
  declare barcodeNumberSequence?: SequenceTables<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMajorTypes} entity.
   */
  declare assetMajorType?: AssetMajorTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupBookSpecialDepreciationAllowances} entity.
   */
  declare assetGroupAssetGroupSetupBonus: FixedAssetGroupBookSpecialDepreciationAllowances<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare assetGroupValueModel: FixedAssetValueModels<T>[];

  constructor(_entityApi: FixedAssetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetGroupId: DeserializedType<T, 'Edm.String'>;
  propertyType?: AssetPropertyType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  gisLayerId?: DeserializedType<T, 'Edm.String'> | null;
  deferredType?: AssetDeferredTypeJp | null;
  replacementCostFactor: DeserializedType<T, 'Edm.Decimal'>;
  autonumberBarCodes?: NoYes | null;
  majorTypeId?: DeserializedType<T, 'Edm.String'> | null;
  appropriationMethodForPiscofins?: FbpiscofinsFixedAssetAppropMethodBr | null;
  taxationCodeForPis?: DeserializedType<T, 'Edm.String'> | null;
  barcodeNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  type?: AssetType | null;
  piscofinsCreditsInstallments: DeserializedType<T, 'Edm.Int32'>;
  autonumberFixedAssets?: NoYes | null;
  assetLocationId?: DeserializedType<T, 'Edm.String'> | null;
  outgoingIcms?: NoYes | null;
  capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetCreditGroup?: FbpiscofinsFixedAssetCreditGroupBr | null;
  longTermReceivablePiscofins?: NoYes | null;
  assetClassification?: AssetClassificationJp | null;
  taxationCodeForCofins?: DeserializedType<T, 'Edm.String'> | null;
  insuredValueFactor: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetCreditPurpose?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  assetGroupAsset: FixedAssetsType<T>[];
  assetGroupAssetPostingProfile: FixedAssetPostingProfilesType<T>[];
  assetStatementRow: AssetStatementRowsType<T>[];
  assetBookV2GroupAsset: FixedAssetBooksV2Type<T>[];
  assetFixedAssetV2GroupAsset: FixedAssetsV2Type<T>[];
  assetGroupAssetPostingProfileDisposal: FixedAssetPostingProfileDisposalsType<T>[];
  assetGroupAssetLocation?: AssetLocationsType<T> | null;
  numberSequence?: SequenceTablesType<T> | null;
  barcodeNumberSequence?: SequenceTablesType<T> | null;
  assetMajorType?: AssetMajorTypesType<T> | null;
  assetGroupAssetGroupSetupBonus: FixedAssetGroupBookSpecialDepreciationAllowancesType<T>[];
  assetGroupValueModel: FixedAssetValueModelsType<T>[];
}
