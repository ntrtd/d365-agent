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
import type { McrReqPlanContinuitiesApi } from './McrReqPlanContinuitiesApi';
import { NoYes } from './NoYes';
import { OmOperatingUnitType } from './OmOperatingUnitType';

/**
 * This class represents the entity "McrReqPlanContinuities" of service "d365_metadata".
 */
export class McrReqPlanContinuities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrReqPlanContinuitiesType<T>
{
  /**
   * Technical entity name for McrReqPlanContinuities.
   */
  static override _entityName = 'McrReqPlanContinuities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrReqPlanContinuities entity.
   */
  static _keys = ['dataAreaId', 'RequiredPlanIdContinuity'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Required Plan Id Continuity.
   */
  declare requiredPlanIdContinuity: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Probabalistic Continuity.
   * @nullable
   */
  declare useProbabalisticContinuity?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Fence Capacity.
   */
  declare timeFenceCapacity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Scope Data Area.
   * @nullable
   */
  declare plannedOrderScopeDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Company Info Data Area.
   * @nullable
   */
  declare plannedOrderCompanyInfoDataArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Required Log Year Name.
   * @nullable
   */
  declare requiredLogYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Fence Coverage.
   */
  declare timeFenceCoverage: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Margin.
   */
  declare receiptMargin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Calendar Id.
   * @nullable
   */
  declare plannedOrderCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Number Sequence.
   * @nullable
   */
  declare plannedOrderNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Log Om Operating Unit Party Number.
   * @nullable
   */
  declare requiredLogOmOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Issue Margin.
   */
  declare issueMargin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Fence Explosion.
   */
  declare timeFenceExplosion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Required Log Operating Unit Type.
   * @nullable
   */
  declare requiredLogOperatingUnitType?: OmOperatingUnitType | null;
  /**
   * Required Log Number Sequence.
   * @nullable
   */
  declare requiredLogNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Margin.
   */
  declare orderingMargin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Om Operating Unit Party Number.
   * @nullable
   */
  declare plannedOrderOmOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Required Log Period Name.
   * @nullable
   */
  declare requiredLogPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Scope Operating Unit Type.
   * @nullable
   */
  declare plannedOrderScopeOperatingUnitType?: OmOperatingUnitType | null;
  /**
   * Required Log Company Info Data Area.
   * @nullable
   */
  declare requiredLogCompanyInfoDataArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Required Log Company Info Party Number.
   * @nullable
   */
  declare requiredLogCompanyInfoPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planned Order Company Info Party Number.
   * @nullable
   */
  declare plannedOrderCompanyInfoPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Required Log Data Area.
   * @nullable
   */
  declare requiredLogDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Period Name.
   * @nullable
   */
  declare plannedOrderPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Year Name.
   * @nullable
   */
  declare plannedOrderYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Coverage Calculations.
   * @nullable
   */
  declare skipCoverageCalculations?: NoYes | null;
  /**
   * Required Log Calendar Id.
   * @nullable
   */
  declare requiredLogCalendarId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: McrReqPlanContinuitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrReqPlanContinuitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requiredPlanIdContinuity: DeserializedType<T, 'Edm.String'>;
  useProbabalisticContinuity?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  timeFenceCapacity: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderScopeDataArea?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderCompanyInfoDataArea?: DeserializedType<T, 'Edm.String'> | null;
  requiredLogYearName?: DeserializedType<T, 'Edm.String'> | null;
  timeFenceCoverage: DeserializedType<T, 'Edm.Int32'>;
  receiptMargin: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  requiredLogOmOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  issueMargin: DeserializedType<T, 'Edm.Int32'>;
  timeFenceExplosion: DeserializedType<T, 'Edm.Int32'>;
  requiredLogOperatingUnitType?: OmOperatingUnitType | null;
  requiredLogNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  orderingMargin: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderOmOperatingUnitPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  requiredLogPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderScopeOperatingUnitType?: OmOperatingUnitType | null;
  requiredLogCompanyInfoDataArea?: DeserializedType<T, 'Edm.String'> | null;
  requiredLogCompanyInfoPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderCompanyInfoPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  requiredLogDataArea?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderYearName?: DeserializedType<T, 'Edm.String'> | null;
  skipCoverageCalculations?: NoYes | null;
  requiredLogCalendarId?: DeserializedType<T, 'Edm.String'> | null;
}
