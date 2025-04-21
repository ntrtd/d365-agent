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
import type { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';
import { AssetAcquisitionOnFirstDayCheckTypeJp } from './AssetAcquisitionOnFirstDayCheckTypeJp';
import {
  FixedAssetPostingProfiles,
  FixedAssetPostingProfilesType
} from './FixedAssetPostingProfiles';
import {
  FixedAssetGroupValueModelSetups,
  FixedAssetGroupValueModelSetupsType
} from './FixedAssetGroupValueModelSetups';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { AssetParameters, AssetParametersType } from './AssetParameters';
import {
  FixedAssetPostingProfileDisposals,
  FixedAssetPostingProfileDisposalsType
} from './FixedAssetPostingProfileDisposals';
import {
  DepreciationProfiles,
  DepreciationProfilesType
} from './DepreciationProfiles';
import { AssetJournalV2, AssetJournalV2Type } from './AssetJournalV2';
import {
  FixedAssetGroupBookSpecialDepreciationAllowances,
  FixedAssetGroupBookSpecialDepreciationAllowancesType
} from './FixedAssetGroupBookSpecialDepreciationAllowances';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';
import {
  FixedAssetValueModelSetupDerivedValueModels,
  FixedAssetValueModelSetupDerivedValueModelsType
} from './FixedAssetValueModelSetupDerivedValueModels';

/**
 * This class represents the entity "ValueModelSetups" of service "d365_metadata".
 */
export class ValueModelSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValueModelSetupsType<T>
{
  /**
   * Technical entity name for ValueModelSetups.
   */
  static override _entityName = 'ValueModelSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValueModelSetups entity.
   */
  static _keys = ['dataAreaId', 'ValueModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model Id.
   */
  declare valueModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Round Off Depreciation.
   */
  declare roundOffDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Is Allow Depreciation Adj Same Date.
   * @nullable
   */
  declare isAllowDepreciationAdjSameDate?: NoYes | null;
  /**
   * Depreciation Profile Id.
   * @nullable
   */
  declare depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Override Fixed Asset Calendar Days.
   * @nullable
   */
  declare isOverrideFixedAssetCalendarDays?: NoYes | null;
  /**
   * Alternative Depreciation Profile Id.
   * @nullable
   */
  declare alternativeDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Derogatory Calculation.
   * @nullable
   */
  declare derogatoryCalculation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Method.
   * @nullable
   */
  declare roundingMethod?: RoundOffType | null;
  /**
   * Expected Scrap Percentage.
   */
  declare expectedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Round Off Depreciation Reporting Currency.
   */
  declare roundOffDepreciationReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Net Book Value Higher Than Acquisition Costs.
   * @nullable
   */
  declare allowNetBookValueHigherThanAcquisitionCosts?: NoYes | null;
  /**
   * Referenced Value Model Id.
   * @nullable
   */
  declare referencedValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leave Net Book Value At.
   */
  declare leaveNetBookValueAt: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Depreciation Required In Disposal.
   * @nullable
   */
  declare isDepreciationRequiredInDisposal?: NoYes | null;
  /**
   * Extraordinary Depreciation Profile Id.
   * @nullable
   */
  declare extraordinaryDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accelerated Depreciation Profile Id.
   * @nullable
   */
  declare acceleratedDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Positive Depreciation.
   * @nullable
   */
  declare isPositiveDepreciation?: NoYes | null;
  /**
   * Action For Acquisition On January 1 St.
   * @nullable
   */
  declare actionForAcquisitionOnJanuary1St?: AssetAcquisitionOnFirstDayCheckTypeJp | null;
  /**
   * Asset Working Days.
   */
  declare assetWorkingDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Create Depreciation Adjustments With Basis Adjustments.
   * @nullable
   */
  declare createDepreciationAdjustmentsWithBasisAdjustments?: NoYes | null;
  /**
   * Derogatory Tax Model.
   * @nullable
   */
  declare derogatoryTaxModel?: NoYes | null;
  /**
   * Calculate Depreciation.
   * @nullable
   */
  declare calculateDepreciation?: NoYes | null;
  /**
   * Allow Negative Net Book Value.
   * @nullable
   */
  declare allowNegativeNetBookValue?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfiles} entity.
   */
  declare valueModelAssetPostingProfile: FixedAssetPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupValueModelSetups} entity.
   */
  declare valueModelAssetGroupValueModel: FixedAssetGroupValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2SetupId: FixedAssetBooksV2<T>[];
  /**
   * One-to-one navigation property to the {@link AssetParameters} entity.
   */
  declare valueModels?: AssetParameters<T> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfileDisposals} entity.
   */
  declare valueModelAssetPostingProfileDisposal: FixedAssetPostingProfileDisposals<T>[];
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetExtraordinaryDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetAlternativeDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetAcceleratedDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalBook: AssetJournalV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupBookSpecialDepreciationAllowances} entity.
   */
  declare valueModelAssetGroupSetupBonus: FixedAssetGroupBookSpecialDepreciationAllowances<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare valueModelSetupId: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare valueModelAssetJournalLine: AssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModelSetupDerivedValueModels} entity.
   */
  declare derivedValueModelDerivedValueModelSetup: FixedAssetValueModelSetupDerivedValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModelSetupDerivedValueModels} entity.
   */
  declare valueModelDerivedValueModelSetup: FixedAssetValueModelSetupDerivedValueModels<T>[];

  constructor(_entityApi: ValueModelSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ValueModelSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  roundOffDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  postingLayer?: CurrentOperationsTax | null;
  isAllowDepreciationAdjSameDate?: NoYes | null;
  depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isOverrideFixedAssetCalendarDays?: NoYes | null;
  alternativeDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  derogatoryCalculation?: DeserializedType<T, 'Edm.String'> | null;
  roundingMethod?: RoundOffType | null;
  expectedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  roundOffDepreciationReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowNetBookValueHigherThanAcquisitionCosts?: NoYes | null;
  referencedValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  leaveNetBookValueAt: DeserializedType<T, 'Edm.Decimal'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  isDepreciationRequiredInDisposal?: NoYes | null;
  extraordinaryDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  acceleratedDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isPositiveDepreciation?: NoYes | null;
  actionForAcquisitionOnJanuary1St?: AssetAcquisitionOnFirstDayCheckTypeJp | null;
  assetWorkingDays: DeserializedType<T, 'Edm.Int32'>;
  createDepreciationAdjustmentsWithBasisAdjustments?: NoYes | null;
  derogatoryTaxModel?: NoYes | null;
  calculateDepreciation?: NoYes | null;
  allowNegativeNetBookValue?: NoYes | null;
  valueModelAssetPostingProfile: FixedAssetPostingProfilesType<T>[];
  valueModelAssetGroupValueModel: FixedAssetGroupValueModelSetupsType<T>[];
  assetBookV2SetupId: FixedAssetBooksV2Type<T>[];
  valueModels?: AssetParametersType<T> | null;
  valueModelAssetPostingProfileDisposal: FixedAssetPostingProfileDisposalsType<T>[];
  assetExtraordinaryDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetAlternativeDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetAcceleratedDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetJournalBook: AssetJournalV2Type<T>[];
  valueModelAssetGroupSetupBonus: FixedAssetGroupBookSpecialDepreciationAllowancesType<T>[];
  valueModelSetupId: FixedAssetValueModelsType<T>[];
  valueModelAssetJournalLine: AssetJournalLinesType<T>[];
  derivedValueModelDerivedValueModelSetup: FixedAssetValueModelSetupDerivedValueModelsType<T>[];
  valueModelDerivedValueModelSetup: FixedAssetValueModelSetupDerivedValueModelsType<T>[];
}
