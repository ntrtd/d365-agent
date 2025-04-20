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
import type { AssetLeaseLeaseAdjustmentTableBiEntitiesApi } from './AssetLeaseLeaseAdjustmentTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeaseWorkflowStatus } from './AssetLeaseWorkflowStatus';
import { AssetLeaseLeaseAdjustmentStatus } from './AssetLeaseLeaseAdjustmentStatus';

/**
 * This class represents the entity "AssetLeaseLeaseAdjustmentTableBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLeaseAdjustmentTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLeaseAdjustmentTableBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLeaseAdjustmentTableBiEntities.
   */
  static override _entityName = 'AssetLeaseLeaseAdjustmentTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLeaseAdjustmentTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseId', 'LeaseCounter'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Decreases.
   * @nullable
   */
  declare allowDecreases?: NoYes | null;
  /**
   * Months Of Useful Life.
   */
  declare monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transfer Ownership.
   * @nullable
   */
  declare transferOwnership?: NoYesCombo | null;
  /**
   * Residual Value Guarantee.
   */
  declare residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fair Value Of Asset.
   */
  declare fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Borrowing Rate.
   */
  declare borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Date.
   */
  declare postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Months Btw Revaluation.
   */
  declare monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index Rate Percent.
   */
  declare indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Rate Increase Cap.
   */
  declare rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Type.
   * @nullable
   */
  declare indexType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Description.
   * @nullable
   */
  declare leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Rate.
   */
  declare interestRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prepayments.
   */
  declare prepayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Breakdown Payment Amount.
   * @nullable
   */
  declare breakdownPaymentAmount?: NoYes | null;
  /**
   * Initial Direct Cost.
   */
  declare initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dismantling Costs.
   */
  declare dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manually Revalue.
   * @nullable
   */
  declare manuallyRevalue?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compounding Interval.
   * @nullable
   */
  declare compoundingInterval?: AssetLeaseCompoundingInterval | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Incentives.
   */
  declare leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: AssetLeaseWorkflowStatus | null;
  /**
   * Adjustment Status.
   * @nullable
   */
  declare adjustmentStatus?: AssetLeaseLeaseAdjustmentStatus | null;
  /**
   * Lease Group.
   * @nullable
   */
  declare leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Rent Carryover.
   */
  declare deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wizard Tab Index.
   */
  declare wizardTabIndex: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Asset.
   * @nullable
   */
  declare uniqueAsset?: NoYesCombo | null;

  constructor(_entityApi: AssetLeaseLeaseAdjustmentTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseLeaseAdjustmentTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  allowDecreases?: NoYes | null;
  monthsOfUsefulLife: DeserializedType<T, 'Edm.Int32'>;
  transferOwnership?: NoYesCombo | null;
  residualValueGuarantee: DeserializedType<T, 'Edm.Decimal'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  fairValueOfAsset: DeserializedType<T, 'Edm.Decimal'>;
  borrowingRate: DeserializedType<T, 'Edm.Decimal'>;
  postingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  monthsBtwRevaluation: DeserializedType<T, 'Edm.Int32'>;
  indexRatePercent: DeserializedType<T, 'Edm.Decimal'>;
  annuityType?: AssetLeaseAnnuityType | null;
  rateIncreaseCap: DeserializedType<T, 'Edm.Decimal'>;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  leaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  interestRate: DeserializedType<T, 'Edm.Decimal'>;
  prepayments: DeserializedType<T, 'Edm.Decimal'>;
  breakdownPaymentAmount?: NoYes | null;
  initialDirectCost: DeserializedType<T, 'Edm.Decimal'>;
  dismantlingCosts: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  manuallyRevalue?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compoundingInterval?: AssetLeaseCompoundingInterval | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  leaseIncentives: DeserializedType<T, 'Edm.Decimal'>;
  workflowStatus?: AssetLeaseWorkflowStatus | null;
  adjustmentStatus?: AssetLeaseLeaseAdjustmentStatus | null;
  leaseGroup?: DeserializedType<T, 'Edm.String'> | null;
  deferredRentCarryover: DeserializedType<T, 'Edm.Decimal'>;
  wizardTabIndex: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  uniqueAsset?: NoYesCombo | null;
}
