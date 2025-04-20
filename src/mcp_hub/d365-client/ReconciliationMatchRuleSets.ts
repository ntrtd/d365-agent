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
import type { ReconciliationMatchRuleSetsApi } from './ReconciliationMatchRuleSetsApi';
import { BankAccounts, BankAccountsType } from './BankAccounts';

/**
 * This class represents the entity "ReconciliationMatchRuleSets" of service "d365_metadata".
 */
export class ReconciliationMatchRuleSets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReconciliationMatchRuleSetsType<T>
{
  /**
   * Technical entity name for ReconciliationMatchRuleSets.
   */
  static override _entityName = 'ReconciliationMatchRuleSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReconciliationMatchRuleSets entity.
   */
  static _keys = ['MatchingRuleSet', 'LineNumber'];
  /**
   * Matching Rule Set.
   */
  declare matchingRuleSet: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Rule.
   * @nullable
   */
  declare matchingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];

  constructor(_entityApi: ReconciliationMatchRuleSetsApi<T>) {
    super(_entityApi);
  }
}

export interface ReconciliationMatchRuleSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  matchingRuleSet: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  matchingRule?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount: BankAccountsType<T>[];
}
