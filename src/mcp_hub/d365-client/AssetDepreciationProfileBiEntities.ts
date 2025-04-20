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
import type { AssetDepreciationProfileBiEntitiesApi } from './AssetDepreciationProfileBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetDepreciationYear } from './AssetDepreciationYear';
import { AssetDepreciationInterval } from './AssetDepreciationInterval';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';
import { AssetAccrual } from './AssetAccrual';
import { AssetDepreciationCalculationBase } from './AssetDepreciationCalculationBase';
import { AssetSpecialDepAccountingMethodJp } from './AssetSpecialDepAccountingMethodJp';

/**
 * This class represents the entity "AssetDepreciationProfileBiEntities" of service "d365_metadata".
 */
export class AssetDepreciationProfileBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetDepreciationProfileBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetDepreciationProfileBiEntities.
   */
  static override _entityName = 'AssetDepreciationProfileBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetDepreciationProfileBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Profile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile.
   */
  declare profile: DeserializedType<T, 'Edm.String'>;
  /**
   * Num Of Years Equally Divided Jp.
   */
  declare numOfYearsEquallyDividedJp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Special Dep Apply Num Of Periods Jp.
   */
  declare specialDepApplyNumOfPeriodsJp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Special Dep Rate Jp.
   */
  declare specialDepRateJp: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Dep Base Ratio Jp.
   */
  declare specialDepBaseRatioJp: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lvp Min Depreciation Amount W.
   */
  declare lvpMinDepreciationAmountW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lvp Low Value Cost Au.
   */
  declare lvpLowValueCostAu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Dep Rate Schedule Jp.
   */
  declare assetDepRateScheduleJp: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Half Year Depreciation At.
   * @nullable
   */
  declare halfYearDepreciationAt?: NoYes | null;
  /**
   * Shift Depreciation In.
   * @nullable
   */
  declare shiftDepreciationIn?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Year.
   * @nullable
   */
  declare depreciationYear?: AssetDepreciationYear | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetDepreciationInterval | null;
  /**
   * Asset End Depend On Service Life.
   * @nullable
   */
  declare assetEndDependOnServiceLife?: NoYes | null;
  /**
   * Method.
   * @nullable
   */
  declare method?: AssetDepreciationMethod | null;
  /**
   * Accrual.
   * @nullable
   */
  declare accrual?: AssetAccrual | null;
  /**
   * Smooth Dep For The Year Over 95 Jp.
   * @nullable
   */
  declare smoothDepForTheYearOver95Jp?: NoYes | null;
  /**
   * Calculation Base.
   * @nullable
   */
  declare calculationBase?: AssetDepreciationCalculationBase | null;
  /**
   * Full Year Depreciation De.
   * @nullable
   */
  declare fullYearDepreciationDe?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lvp First Year Percentage Au.
   */
  declare lvpFirstYearPercentageAu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Special Dep Accounting Method Jp.
   * @nullable
   */
  declare specialDepAccountingMethodJp?: AssetSpecialDepAccountingMethodJp | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lvp Percentage Au.
   */
  declare lvpPercentageAu: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetDepreciationProfileBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetDepreciationProfileBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profile: DeserializedType<T, 'Edm.String'>;
  numOfYearsEquallyDividedJp: DeserializedType<T, 'Edm.Int32'>;
  specialDepApplyNumOfPeriodsJp: DeserializedType<T, 'Edm.Int32'>;
  specialDepRateJp: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  specialDepBaseRatioJp: DeserializedType<T, 'Edm.Decimal'>;
  lvpMinDepreciationAmountW: DeserializedType<T, 'Edm.Decimal'>;
  lvpLowValueCostAu: DeserializedType<T, 'Edm.Decimal'>;
  assetDepRateScheduleJp: DeserializedType<T, 'Edm.Int64'>;
  halfYearDepreciationAt?: NoYes | null;
  shiftDepreciationIn?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  depreciationYear?: AssetDepreciationYear | null;
  interval?: AssetDepreciationInterval | null;
  assetEndDependOnServiceLife?: NoYes | null;
  method?: AssetDepreciationMethod | null;
  accrual?: AssetAccrual | null;
  smoothDepForTheYearOver95Jp?: NoYes | null;
  calculationBase?: AssetDepreciationCalculationBase | null;
  fullYearDepreciationDe?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  lvpFirstYearPercentageAu: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  specialDepAccountingMethodJp?: AssetSpecialDepAccountingMethodJp | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lvpPercentageAu: DeserializedType<T, 'Edm.Decimal'>;
}
