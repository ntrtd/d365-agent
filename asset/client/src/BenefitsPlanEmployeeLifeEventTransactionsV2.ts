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
import type { BenefitsPlanEmployeeLifeEventTransactionsV2Api } from './BenefitsPlanEmployeeLifeEventTransactionsV2Api';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';

/**
 * This class represents the entity "BenefitsPlanEmployeeLifeEventTransactionsV2" of service "d365_metadata".
 */
export class BenefitsPlanEmployeeLifeEventTransactionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanEmployeeLifeEventTransactionsV2Type<T>
{
  /**
   * Technical entity name for BenefitsPlanEmployeeLifeEventTransactionsV2.
   */
  static override _entityName = 'BenefitsPlanEmployeeLifeEventTransactionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanEmployeeLifeEventTransactionsV2 entity.
   */
  static _keys = [
    'PersonnelNumber',
    'PlanPeriodId',
    'PlanEmployeeBeforeLifeEventPlanId',
    'PlanEmployeeBeforeLifeEventCoverageOptionId',
    'PlanEmployeeBeforeLifeEventValidFrom',
    'LegalEntityId',
    'LineNum',
    'LifeEventTypeId',
    'LifeEventDate',
    'PlanEmployeeAfterLifeEventPlanId',
    'PlanEmployeeAfterLiveEventCoverageOptionId',
    'PlanEmployeeAfterLifeEventValidFrom'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Period Id.
   */
  declare planPeriodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Employee Before Life Event Plan Id.
   */
  declare planEmployeeBeforeLifeEventPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Employee Before Life Event Coverage Option Id.
   */
  declare planEmployeeBeforeLifeEventCoverageOptionId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Plan Employee Before Life Event Valid From.
   */
  declare planEmployeeBeforeLifeEventValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Life Event Type Id.
   */
  declare lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Plan Employee After Life Event Plan Id.
   */
  declare planEmployeeAfterLifeEventPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Employee After Live Event Coverage Option Id.
   */
  declare planEmployeeAfterLiveEventCoverageOptionId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Plan Employee After Life Event Valid From.
   */
  declare planEmployeeAfterLifeEventValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Plan Employee Before Life Event Valid To.
   */
  declare planEmployeeBeforeLifeEventValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Plan Employee After Life Event Valid To.
   */
  declare planEmployeeAfterLifeEventValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Plan Employee Before Life Event Status.
   * @nullable
   */
  declare planEmployeeBeforeLifeEventStatus?: BenefitEmployeePlanStatus | null;

  constructor(_entityApi: BenefitsPlanEmployeeLifeEventTransactionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanEmployeeLifeEventTransactionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  planPeriodId: DeserializedType<T, 'Edm.String'>;
  planEmployeeBeforeLifeEventPlanId: DeserializedType<T, 'Edm.String'>;
  planEmployeeBeforeLifeEventCoverageOptionId: DeserializedType<
    T,
    'Edm.String'
  >;
  planEmployeeBeforeLifeEventValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Int32'>;
  lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planEmployeeAfterLifeEventPlanId: DeserializedType<T, 'Edm.String'>;
  planEmployeeAfterLiveEventCoverageOptionId: DeserializedType<T, 'Edm.String'>;
  planEmployeeAfterLifeEventValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  planEmployeeBeforeLifeEventValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planEmployeeAfterLifeEventValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planEmployeeBeforeLifeEventStatus?: BenefitEmployeePlanStatus | null;
}
