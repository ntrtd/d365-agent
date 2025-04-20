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
import type { AssetBookTableBiEntitiesApi } from './AssetBookTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetAcquisitionOnFirstDayCheckTypeJp } from './AssetAcquisitionOnFirstDayCheckTypeJp';
import { RoundOffType } from './RoundOffType';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "AssetBookTableBiEntities" of service "d365_metadata".
 */
export class AssetBookTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetBookTableBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetBookTableBiEntities.
   */
  static override _entityName = 'AssetBookTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetBookTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'BookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Ext Profile.
   * @nullable
   */
  declare depreciationExtProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Low Cost Asset Hu.
   * @nullable
   */
  declare lowCostAssetHu?: NoYes | null;
  /**
   * Acquisition On First Day Check Type Jp.
   * @nullable
   */
  declare acquisitionOnFirstDayCheckTypeJp?: AssetAcquisitionOnFirstDayCheckTypeJp | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fiscal Calendar.
   */
  declare fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Round Off Type W.
   * @nullable
   */
  declare roundOffTypeW?: RoundOffType | null;
  /**
   * Negative Net Book Value.
   * @nullable
   */
  declare negativeNetBookValue?: NoYes | null;
  /**
   * Round Off Depreciation.
   */
  declare roundOffDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Derogatory Model Fr.
   * @nullable
   */
  declare assetDerogatoryModelFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Off Depreciation Reporting Currency.
   */
  declare roundOffDepreciationReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Over Ride Calendar Days In.
   * @nullable
   */
  declare overRideCalendarDaysIn?: NoYes | null;
  /**
   * Depreciation Accelerated Profile Jp.
   * @nullable
   */
  declare depreciationAcceleratedProfileJp?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is True Up Depreciation.
   * @nullable
   */
  declare isTrueUpDepreciation?: NoYes | null;
  /**
   * Exceeding Net Book Value.
   * @nullable
   */
  declare exceedingNetBookValue?: NoYes | null;
  /**
   * Is Positive Depreciation.
   * @nullable
   */
  declare isPositiveDepreciation?: NoYes | null;
  /**
   * Is Derogatory Book Fr.
   * @nullable
   */
  declare isDerogatoryBookFr?: NoYes | null;
  /**
   * Working Days In.
   */
  declare workingDaysIn: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Depreciation Profile.
   * @nullable
   */
  declare depreciationProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Scrap Rate Cn.
   */
  declare expectedScrapRateCn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation.
   * @nullable
   */
  declare depreciation?: NoYes | null;
  /**
   * Current Operations Tax.
   * @nullable
   */
  declare currentOperationsTax?: CurrentOperationsTax | null;
  /**
   * Is Allow Depreciation Adj Same Date.
   * @nullable
   */
  declare isAllowDepreciationAdjSameDate?: NoYes | null;
  /**
   * Linked Current Layer Asset Book Table Jp.
   * @nullable
   */
  declare linkedCurrentLayerAssetBookTableJp?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Net Book Value Rest Reporting Currency.
   */
  declare netBookValueRestReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Category Together Lv.
   * @nullable
   */
  declare taxCategoryTogetherLv?: NoYes | null;
  /**
   * Depreciation Alt Profile.
   * @nullable
   */
  declare depreciationAltProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Book Value Rest.
   */
  declare netBookValueRest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Deprecate In Disposal Cn.
   * @nullable
   */
  declare isDeprecateInDisposalCn?: NoYes | null;

  constructor(_entityApi: AssetBookTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetBookTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  depreciationExtProfile?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  lowCostAssetHu?: NoYes | null;
  acquisitionOnFirstDayCheckTypeJp?: AssetAcquisitionOnFirstDayCheckTypeJp | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  roundOffTypeW?: RoundOffType | null;
  negativeNetBookValue?: NoYes | null;
  roundOffDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  assetDerogatoryModelFr?: DeserializedType<T, 'Edm.String'> | null;
  roundOffDepreciationReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  overRideCalendarDaysIn?: NoYes | null;
  depreciationAcceleratedProfileJp?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isTrueUpDepreciation?: NoYes | null;
  exceedingNetBookValue?: NoYes | null;
  isPositiveDepreciation?: NoYes | null;
  isDerogatoryBookFr?: NoYes | null;
  workingDaysIn: DeserializedType<T, 'Edm.Int32'>;
  depreciationProfile?: DeserializedType<T, 'Edm.String'> | null;
  expectedScrapRateCn: DeserializedType<T, 'Edm.Decimal'>;
  depreciation?: NoYes | null;
  currentOperationsTax?: CurrentOperationsTax | null;
  isAllowDepreciationAdjSameDate?: NoYes | null;
  linkedCurrentLayerAssetBookTableJp?: DeserializedType<T, 'Edm.String'> | null;
  netBookValueRestReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  taxCategoryTogetherLv?: NoYes | null;
  depreciationAltProfile?: DeserializedType<T, 'Edm.String'> | null;
  netBookValueRest: DeserializedType<T, 'Edm.Decimal'>;
  isDeprecateInDisposalCn?: NoYes | null;
}
