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
import type { BudgetControlRulesApi } from './BudgetControlRulesApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetInterval } from './BudgetInterval';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  BudgetCycleTimeSpans,
  BudgetCycleTimeSpansType
} from './BudgetCycleTimeSpans';
import {
  BudgetControlRuleCriteria,
  BudgetControlRuleCriteriaType
} from './BudgetControlRuleCriteria';
import {
  BudgetControlRuleOverBudgetPermissions,
  BudgetControlRuleOverBudgetPermissionsType
} from './BudgetControlRuleOverBudgetPermissions';

/**
 * This class represents the entity "BudgetControlRules" of service "d365_metadata".
 */
export class BudgetControlRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetControlRulesType<T>
{
  /**
   * Technical entity name for BudgetControlRules.
   */
  static override _entityName = 'BudgetControlRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlRules entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status', 'Name'];
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
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
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
   * Budget Cycle Time Span Name.
   * @nullable
   */
  declare budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Time Span Fiscal Calendar Id.
   * @nullable
   */
  declare budgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Budget Threshold Percent.
   */
  declare budgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * One-to-many navigation property to the {@link BudgetControlRuleCriteria} entity.
   */
  declare budgetControlRuleCriterionRule: BudgetControlRuleCriteria<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlRuleOverBudgetPermissions} entity.
   */
  declare budgetControlRuleOverBudgetPermissionsBudgetControlRule: BudgetControlRuleOverBudgetPermissions<T>[];

  constructor(_entityApi: BudgetControlRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  name: DeserializedType<T, 'Edm.String'>;
  budgetControlInterval?: BudgetInterval | null;
  budgetManager?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  budgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetManagers?: SystemUsersType<T> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
  budgetCycleTimeSpans?: BudgetCycleTimeSpansType<T> | null;
  budgetControlRuleCriterionRule: BudgetControlRuleCriteriaType<T>[];
  budgetControlRuleOverBudgetPermissionsBudgetControlRule: BudgetControlRuleOverBudgetPermissionsType<T>[];
}
