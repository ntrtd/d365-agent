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
import type { BudgetControlGroupsApi } from './BudgetControlGroupsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetInterval } from './BudgetInterval';
import {
  BudgetControlGroupCriteria,
  BudgetControlGroupCriteriaType
} from './BudgetControlGroupCriteria';
import {
  BudgetControlGroupOverBudgetPermissions,
  BudgetControlGroupOverBudgetPermissionsType
} from './BudgetControlGroupOverBudgetPermissions';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  BudgetCycleTimeSpans,
  BudgetCycleTimeSpansType
} from './BudgetCycleTimeSpans';

/**
 * This class represents the entity "BudgetControlGroups" of service "d365_metadata".
 */
export class BudgetControlGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetControlGroupsType<T>
{
  /**
   * Technical entity name for BudgetControlGroups.
   */
  static override _entityName = 'BudgetControlGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlGroups entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status', 'MemberName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetControlConfigurationStatus | null;
  /**
   * Member Name.
   */
  declare memberName: DeserializedType<T, 'Edm.String'>;
  /**
   * Member Description.
   * @nullable
   */
  declare memberDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Time Span Name.
   * @nullable
   */
  declare budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Threshold Percent.
   */
  declare budgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Member Name.
   * @nullable
   */
  declare parentMemberName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Control Interval.
   * @nullable
   */
  declare budgetControlInterval?: BudgetInterval | null;
  /**
   * Budget Manager.
   * @nullable
   */
  declare budgetManager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Time Span Fiscal Calendar Id.
   * @nullable
   */
  declare budgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlGroupCriteria} entity.
   */
  declare budgetControlGroupCriterionGroup: BudgetControlGroupCriteria<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlGroupOverBudgetPermissions} entity.
   */
  declare budgetControlGroupOverBudgetPermissionsBudgetControlGroup: BudgetControlGroupOverBudgetPermissions<T>[];
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare budgetManagers?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurations?: BudgetControlConfigurations<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCycleTimeSpans} entity.
   */
  declare budgetCycleTimeSpans?: BudgetCycleTimeSpans<T> | null;

  constructor(_entityApi: BudgetControlGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  memberName: DeserializedType<T, 'Edm.String'>;
  memberDescription?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  budgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  parentMemberName?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlInterval?: BudgetInterval | null;
  budgetManager?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  budgetControlGroupCriterionGroup: BudgetControlGroupCriteriaType<T>[];
  budgetControlGroupOverBudgetPermissionsBudgetControlGroup: BudgetControlGroupOverBudgetPermissionsType<T>[];
  budgetManagers?: SystemUsersType<T> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
  budgetCycleTimeSpans?: BudgetCycleTimeSpansType<T> | null;
}
