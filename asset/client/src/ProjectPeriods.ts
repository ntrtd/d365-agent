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
import type { ProjectPeriodsApi } from './ProjectPeriodsApi';
import { NoYes } from './NoYes';
import { WeekDays } from './WeekDays';
import { TsPerWeekMth } from './TsPerWeekMth';
import {
  RebateAndDeductionsAgreementDateSetups,
  RebateAndDeductionsAgreementDateSetupsType
} from './RebateAndDeductionsAgreementDateSetups';

/**
 * This class represents the entity "ProjectPeriods" of service "d365_metadata".
 */
export class ProjectPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectPeriodsType<T>
{
  /**
   * Technical entity name for ProjectPeriods.
   */
  static override _entityName = 'ProjectPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectPeriods entity.
   */
  static _keys = ['dataAreaId', 'PeriodId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Week Auto Split.
   * @nullable
   */
  declare isWeekAutoSplit?: NoYes | null;
  /**
   * Week Day Period Start.
   * @nullable
   */
  declare weekDayPeriodStart?: WeekDays | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: TsPerWeekMth | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetups} entity.
   */
  declare rebateClaimAssignedRebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetups<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDateSetups} entity.
   */
  declare rebateProvisionAssignedRebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetups<T>[];

  constructor(_entityApi: ProjectPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  isWeekAutoSplit?: NoYes | null;
  weekDayPeriodStart?: WeekDays | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  frequency?: TsPerWeekMth | null;
  rebateClaimAssignedRebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetupsType<T>[];
  rebateProvisionAssignedRebateAndDeductionsDateSetups: RebateAndDeductionsAgreementDateSetupsType<T>[];
}
