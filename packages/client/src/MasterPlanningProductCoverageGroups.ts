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
import type { MasterPlanningProductCoverageGroupsApi } from './MasterPlanningProductCoverageGroupsApi';
import { NoYes } from './NoYes';
import { ReqCovType } from './ReqCovType';
import { ActionBasicDateType } from './ActionBasicDateType';
import { ReqOnHandConsumptionStrategy } from './ReqOnHandConsumptionStrategy';
import { ReqForecastReducedBy } from './ReqForecastReducedBy';
import { ProdStatus } from './ProdStatus';
import { ReqDecouplingPointPeriodLength } from './ReqDecouplingPointPeriodLength';
import { ReqAverageDailyUsageBasedOn } from './ReqAverageDailyUsageBasedOn';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "MasterPlanningProductCoverageGroups" of service "d365_metadata".
 */
export class MasterPlanningProductCoverageGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MasterPlanningProductCoverageGroupsType<T>
{
  /**
   * Technical entity name for MasterPlanningProductCoverageGroups.
   */
  static override _entityName = 'MasterPlanningProductCoverageGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MasterPlanningProductCoverageGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Will Demand Forecast Include Intercompany Orders.
   * @nullable
   */
  declare willDemandForecastIncludeIntercompanyOrders?: NoYes | null;
  /**
   * Negative Days.
   */
  declare negativeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Coverage Method.
   * @nullable
   */
  declare coverageMethod?: ReqCovType | null;
  /**
   * Coverage Time Fence Days.
   */
  declare coverageTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Calendar Id.
   * @nullable
   */
  declare workCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Action Message Enabled.
   * @nullable
   */
  declare isActionMessageEnabled?: NoYes | null;
  /**
   * Maximum Advance Margin Days.
   */
  declare maximumAdvanceMarginDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Action Basis Date Type.
   * @nullable
   */
  declare actionBasisDateType?: ActionBasicDateType | null;
  /**
   * On Hand Inventory Consumption Strategy.
   * @nullable
   */
  declare onHandInventoryConsumptionStrategy?: ReqOnHandConsumptionStrategy | null;
  /**
   * Must Use Latest Possible Supply First.
   * @nullable
   */
  declare mustUseLatestPossibleSupplyFirst?: NoYes | null;
  /**
   * Use Specified Bom Or Formula Version.
   * @nullable
   */
  declare useSpecifiedBomOrFormulaVersion?: NoYes | null;
  /**
   * Is Delay Calculation Enabled.
   * @nullable
   */
  declare isDelayCalculationEnabled?: NoYes | null;
  /**
   * Approved Requisition Time Fence Days.
   */
  declare approvedRequisitionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Postpone Margin Days.
   */
  declare maximumPostponeMarginDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Action Decrease Enabled.
   * @nullable
   */
  declare isActionDecreaseEnabled?: NoYes | null;
  /**
   * Forecast Demand Plan Time Fence Days.
   */
  declare forecastDemandPlanTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Advance Action Enabled.
   * @nullable
   */
  declare isAdvanceActionEnabled?: NoYes | null;
  /**
   * Is Action Increase Enabled.
   * @nullable
   */
  declare isActionIncreaseEnabled?: NoYes | null;
  /**
   * Forecast Reduction Method.
   * @nullable
   */
  declare forecastReductionMethod?: ReqForecastReducedBy | null;
  /**
   * Coverage Period Days.
   */
  declare coveragePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Positive Days.
   */
  declare positiveDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Safety Margin Days.
   */
  declare receiptSafetyMarginDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Specified Route Version.
   * @nullable
   */
  declare useSpecifiedRouteVersion?: NoYes | null;
  /**
   * Capacity Scheduling Time Fence Days.
   */
  declare capacitySchedulingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Action Time Fence Days.
   */
  declare actionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Forecast Reduction Key Id.
   * @nullable
   */
  declare forecastReductionKeyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Production Status.
   * @nullable
   */
  declare requestedProductionStatus?: ProdStatus | null;
  /**
   * Automatic Firming Time Fence Days.
   */
  declare automaticFirmingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Postpone Action Enabled.
   * @nullable
   */
  declare isPostponeActionEnabled?: NoYes | null;
  /**
   * Calculate Delay Time Fence Days.
   */
  declare calculateDelayTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bom Or Formula Explosion Time Fence Days.
   */
  declare bomOrFormulaExplosionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Are Derived Actions Enabled.
   * @nullable
   */
  declare areDerivedActionsEnabled?: NoYes | null;
  /**
   * Reorder Safety Margin Day.
   */
  declare reorderSafetyMarginDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Freeze Time Fence Days.
   */
  declare freezeTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period Template Id.
   * @nullable
   */
  declare periodTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Safety Margin Days.
   */
  declare issueSafetyMarginDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Will Demand Forecast Include Customer Forecast.
   * @nullable
   */
  declare willDemandForecastIncludeCustomerForecast?: NoYes | null;
  /**
   * Average Daily Usage Forecast Model Id.
   * @nullable
   */
  declare averageDailyUsageForecastModelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Average Daily Usage Past Period.
   */
  declare averageDailyUsagePastPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Relative Weight Of Forward Period For Blended Adu.
   */
  declare relativeWeightOfForwardPeriodForBlendedAdu: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Lead Time Factor.
   */
  declare leadTimeFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variability Factor.
   */
  declare variabilityFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Relative Weight Of Past Period For Blended Adu.
   */
  declare relativeWeightOfPastPeriodForBlendedAdu: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Decoupling Point Period Length.
   * @nullable
   */
  declare decouplingPointPeriodLength?: ReqDecouplingPointPeriodLength | null;
  /**
   * Average Daily Usage Based On.
   * @nullable
   */
  declare averageDailyUsageBasedOn?: ReqAverageDailyUsageBasedOn | null;
  /**
   * Average Daily Usage Forward Period.
   */
  declare averageDailyUsageForwardPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: MasterPlanningProductCoverageGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MasterPlanningProductCoverageGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  willDemandForecastIncludeIntercompanyOrders?: NoYes | null;
  negativeDays: DeserializedType<T, 'Edm.Int32'>;
  coverageMethod?: ReqCovType | null;
  coverageTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  workCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  isActionMessageEnabled?: NoYes | null;
  maximumAdvanceMarginDays: DeserializedType<T, 'Edm.Int32'>;
  actionBasisDateType?: ActionBasicDateType | null;
  onHandInventoryConsumptionStrategy?: ReqOnHandConsumptionStrategy | null;
  mustUseLatestPossibleSupplyFirst?: NoYes | null;
  useSpecifiedBomOrFormulaVersion?: NoYes | null;
  isDelayCalculationEnabled?: NoYes | null;
  approvedRequisitionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  maximumPostponeMarginDays: DeserializedType<T, 'Edm.Int32'>;
  isActionDecreaseEnabled?: NoYes | null;
  forecastDemandPlanTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isAdvanceActionEnabled?: NoYes | null;
  isActionIncreaseEnabled?: NoYes | null;
  forecastReductionMethod?: ReqForecastReducedBy | null;
  coveragePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  positiveDays: DeserializedType<T, 'Edm.Int32'>;
  receiptSafetyMarginDays: DeserializedType<T, 'Edm.Int32'>;
  useSpecifiedRouteVersion?: NoYes | null;
  capacitySchedulingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  actionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  forecastReductionKeyId?: DeserializedType<T, 'Edm.String'> | null;
  requestedProductionStatus?: ProdStatus | null;
  automaticFirmingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isPostponeActionEnabled?: NoYes | null;
  calculateDelayTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  bomOrFormulaExplosionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  areDerivedActionsEnabled?: NoYes | null;
  reorderSafetyMarginDay: DeserializedType<T, 'Edm.Int32'>;
  freezeTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  periodTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  issueSafetyMarginDays: DeserializedType<T, 'Edm.Int32'>;
  willDemandForecastIncludeCustomerForecast?: NoYes | null;
  averageDailyUsageForecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  averageDailyUsagePastPeriod: DeserializedType<T, 'Edm.Int32'>;
  relativeWeightOfForwardPeriodForBlendedAdu: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  leadTimeFactor: DeserializedType<T, 'Edm.Decimal'>;
  variabilityFactor: DeserializedType<T, 'Edm.Decimal'>;
  relativeWeightOfPastPeriodForBlendedAdu: DeserializedType<T, 'Edm.Decimal'>;
  decouplingPointPeriodLength?: ReqDecouplingPointPeriodLength | null;
  averageDailyUsageBasedOn?: ReqAverageDailyUsageBasedOn | null;
  averageDailyUsageForwardPeriod: DeserializedType<T, 'Edm.Int32'>;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
