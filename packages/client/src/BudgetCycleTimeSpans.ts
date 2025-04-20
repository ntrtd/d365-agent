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
import type { BudgetCycleTimeSpansApi } from './BudgetCycleTimeSpansApi';
import { BudgetCycleLengthOption } from './BudgetCycleLengthOption';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  BudgetControlRules,
  BudgetControlRulesType
} from './BudgetControlRules';
import {
  BudgetControlGroups,
  BudgetControlGroupsType
} from './BudgetControlGroups';

/**
 * This class represents the entity "BudgetCycleTimeSpans" of service "d365_metadata".
 */
export class BudgetCycleTimeSpans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetCycleTimeSpansType<T>
{
  /**
   * Technical entity name for BudgetCycleTimeSpans.
   */
  static override _entityName = 'BudgetCycleTimeSpans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetCycleTimeSpans entity.
   */
  static _keys = ['Name', 'FiscalCalendarId'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Id.
   */
  declare fiscalCalendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Number Of Accounting Periods.
   */
  declare defaultNumberOfAccountingPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Budget Cycle Length Option.
   * @nullable
   */
  declare budgetCycleLengthOption?: BudgetCycleLengthOption | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetCycleTimeSpan: BudgetControlConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlRules} entity.
   */
  declare budgetControlRuleBudgetCycleTimeSpan: BudgetControlRules<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlGroups} entity.
   */
  declare budgetControlGroupBudgetCycleTimeSpan: BudgetControlGroups<T>[];

  constructor(_entityApi: BudgetCycleTimeSpansApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetCycleTimeSpansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarId: DeserializedType<T, 'Edm.String'>;
  defaultNumberOfAccountingPeriods: DeserializedType<T, 'Edm.Int32'>;
  budgetCycleLengthOption?: BudgetCycleLengthOption | null;
  budgetCycleTimeSpan: BudgetControlConfigurationsType<T>[];
  budgetControlRuleBudgetCycleTimeSpan: BudgetControlRulesType<T>[];
  budgetControlGroupBudgetCycleTimeSpan: BudgetControlGroupsType<T>[];
}
