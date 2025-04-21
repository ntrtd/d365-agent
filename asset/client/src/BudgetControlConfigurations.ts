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
import type { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { NoYes } from './NoYes';
import { BudgetInterval } from './BudgetInterval';
import { AccountStructures, AccountStructuresType } from './AccountStructures';
import { Ledgers, LedgersType } from './Ledgers';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import {
  BudgetCycleTimeSpans,
  BudgetCycleTimeSpansType
} from './BudgetCycleTimeSpans';
import {
  BudgetControlRules,
  BudgetControlRulesType
} from './BudgetControlRules';
import {
  BudgetControlDocumentsAndJournals,
  BudgetControlDocumentsAndJournalsType
} from './BudgetControlDocumentsAndJournals';
import {
  BudgetControlMessageLevels,
  BudgetControlMessageLevelsType
} from './BudgetControlMessageLevels';
import {
  BudgetControlCycleModels,
  BudgetControlCycleModelsType
} from './BudgetControlCycleModels';
import {
  BudgetControlDimensionAttributes,
  BudgetControlDimensionAttributesType
} from './BudgetControlDimensionAttributes';
import {
  BudgetControlGroups,
  BudgetControlGroupsType
} from './BudgetControlGroups';
import {
  BudgetControlOverBudgetPermissions,
  BudgetControlOverBudgetPermissionsType
} from './BudgetControlOverBudgetPermissions';

/**
 * This class represents the entity "BudgetControlConfigurations" of service "d365_metadata".
 */
export class BudgetControlConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlConfigurationsType<T>
{
  /**
   * Technical entity name for BudgetControlConfigurations.
   */
  static override _entityName = 'BudgetControlConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlConfigurations entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status'];
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
   * In Use Since Date Time.
   */
  declare inUseSinceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Subtract Preencumbrances In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractPreencumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Default Budget Threshold Percent.
   */
  declare defaultBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Budget Cycle Time Span Fiscal Calendar Id.
   * @nullable
   */
  declare defaultBudgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sum Transfers In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumTransfersInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Include Carryforward Amounts In Budget Funds Available Calculation.
   * @nullable
   */
  declare includeCarryforwardAmountsInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Sum Revisions In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumRevisionsInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Subtract Unconfirmed Encumbrance Reductions In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractUnconfirmedEncumbranceReductionsInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Sum Preliminary Budget In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumPreliminaryBudgetInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Default Budget Manager.
   * @nullable
   */
  declare defaultBudgetManager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display A Message When Exceeding Budget Threshold.
   * @nullable
   */
  declare displayAMessageWhenExceedingBudgetThreshold?: NoYes | null;
  /**
   * Sum Draft Transfers Out In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumDraftTransfersOutInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Account Structure.
   * @nullable
   */
  declare accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subtract Unposted Actual Expenditures In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractUnpostedActualExpendituresInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Subtract Unconfirmed Encumbrances In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractUnconfirmedEncumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Subtract Unconfirmed Preencumbrances In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractUnconfirmedPreencumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Sum Draft Revisions In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumDraftRevisionsInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subtract Actual Expenditures In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractActualExpendituresInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Sum Draft Transfers In In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumDraftTransfersInInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Sum Original Budget In Budget Funds Available Calculation.
   * @nullable
   */
  declare sumOriginalBudgetInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Subtract Encumbrances In Budget Funds Available Calculation.
   * @nullable
   */
  declare subtractEncumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Default Budget Control Interval.
   * @nullable
   */
  declare defaultBudgetControlInterval?: BudgetInterval | null;
  /**
   * Use Only Apportioned Amount In Budget Funds Available Calculation.
   * @nullable
   */
  declare useOnlyApportionedAmountInBudgetFundsAvailableCalculation?: NoYes | null;
  /**
   * Default Budget Cycle Time Span Name.
   * @nullable
   */
  declare defaultBudgetCycleTimeSpanName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link AccountStructures} entity.
   */
  declare budgetControlConfigurationAccountStructure?: AccountStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare budgetControlConfigurationLedgerEntity?: Ledgers<T> | null;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare budgetControlConfigurationDefaultBudgetManager?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCycleTimeSpans} entity.
   */
  declare budgetControlConfigurationBudgetCycleTimeSpan?: BudgetCycleTimeSpans<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlRules} entity.
   */
  declare budgetControlRuleConfiguration: BudgetControlRules<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlDocumentsAndJournals} entity.
   */
  declare budgetControlDocumentsAndJournalsConfiguration: BudgetControlDocumentsAndJournals<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlMessageLevels} entity.
   */
  declare budgetControlMessageLevelConfiguration: BudgetControlMessageLevels<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlCycleModels} entity.
   */
  declare budgetControlCycleModelConfiguration: BudgetControlCycleModels<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlDimensionAttributes} entity.
   */
  declare budgetControlDimensionAttributeConfiguration: BudgetControlDimensionAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlGroups} entity.
   */
  declare budgetControlGroupConfiguration: BudgetControlGroups<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlOverBudgetPermissions} entity.
   */
  declare budgetOverrideUserGroupOptionConfiguration: BudgetControlOverBudgetPermissions<T>[];

  constructor(_entityApi: BudgetControlConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  inUseSinceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subtractPreencumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  defaultBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  defaultBudgetCycleTimeSpanFiscalCalendarId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sumTransfersInBudgetFundsAvailableCalculation?: NoYes | null;
  includeCarryforwardAmountsInBudgetFundsAvailableCalculation?: NoYes | null;
  sumRevisionsInBudgetFundsAvailableCalculation?: NoYes | null;
  subtractUnconfirmedEncumbranceReductionsInBudgetFundsAvailableCalculation?: NoYes | null;
  sumPreliminaryBudgetInBudgetFundsAvailableCalculation?: NoYes | null;
  defaultBudgetManager?: DeserializedType<T, 'Edm.String'> | null;
  displayAMessageWhenExceedingBudgetThreshold?: NoYes | null;
  sumDraftTransfersOutInBudgetFundsAvailableCalculation?: NoYes | null;
  accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  subtractUnpostedActualExpendituresInBudgetFundsAvailableCalculation?: NoYes | null;
  subtractUnconfirmedEncumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  subtractUnconfirmedPreencumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  sumDraftRevisionsInBudgetFundsAvailableCalculation?: NoYes | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  subtractActualExpendituresInBudgetFundsAvailableCalculation?: NoYes | null;
  sumDraftTransfersInInBudgetFundsAvailableCalculation?: NoYes | null;
  sumOriginalBudgetInBudgetFundsAvailableCalculation?: NoYes | null;
  subtractEncumbrancesInBudgetFundsAvailableCalculation?: NoYes | null;
  defaultBudgetControlInterval?: BudgetInterval | null;
  useOnlyApportionedAmountInBudgetFundsAvailableCalculation?: NoYes | null;
  defaultBudgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurationAccountStructure?: AccountStructuresType<T> | null;
  budgetControlConfigurationLedgerEntity?: LedgersType<T> | null;
  budgetControlConfigurationDefaultBudgetManager?: SystemUsersType<T> | null;
  budgetControlConfigurationBudgetCycleTimeSpan?: BudgetCycleTimeSpansType<T> | null;
  budgetControlRuleConfiguration: BudgetControlRulesType<T>[];
  budgetControlDocumentsAndJournalsConfiguration: BudgetControlDocumentsAndJournalsType<T>[];
  budgetControlMessageLevelConfiguration: BudgetControlMessageLevelsType<T>[];
  budgetControlCycleModelConfiguration: BudgetControlCycleModelsType<T>[];
  budgetControlDimensionAttributeConfiguration: BudgetControlDimensionAttributesType<T>[];
  budgetControlGroupConfiguration: BudgetControlGroupsType<T>[];
  budgetOverrideUserGroupOptionConfiguration: BudgetControlOverBudgetPermissionsType<T>[];
}
