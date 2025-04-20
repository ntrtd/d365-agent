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
import type { LedgerEliminationRulesApi } from './LedgerEliminationRulesApi';
import { NoYes } from './NoYes';
import {
  LedgerEliminationRuleLines,
  LedgerEliminationRuleLinesType
} from './LedgerEliminationRuleLines';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "LedgerEliminationRules" of service "d365_metadata".
 */
export class LedgerEliminationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerEliminationRulesType<T>
{
  /**
   * Technical entity name for LedgerEliminationRules.
   */
  static override _entityName = 'LedgerEliminationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerEliminationRules entity.
   */
  static _keys = ['dataAreaId', 'RuleId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Date Last Run.
   */
  declare dateLastRun: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Destination Company.
   * @nullable
   */
  declare destinationCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Start Date.
   */
  declare effectiveStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Effective End Date.
   */
  declare effectiveEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link LedgerEliminationRuleLines} entity.
   */
  declare ledgerEliminationRuleLine: LedgerEliminationRuleLines<T>[];
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(_entityApi: LedgerEliminationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerEliminationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  dateLastRun: DeserializedType<T, 'Edm.DateTimeOffset'>;
  destinationCompany?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  effectiveEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerEliminationRuleLine: LedgerEliminationRuleLinesType<T>[];
  legalEntity?: LegalEntitiesType<T> | null;
}
