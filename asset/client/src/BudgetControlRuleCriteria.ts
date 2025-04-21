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
import type { BudgetControlRuleCriteriaApi } from './BudgetControlRuleCriteriaApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import {
  BudgetControlRules,
  BudgetControlRulesType
} from './BudgetControlRules';

/**
 * This class represents the entity "BudgetControlRuleCriteria" of service "d365_metadata".
 */
export class BudgetControlRuleCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlRuleCriteriaType<T>
{
  /**
   * Technical entity name for BudgetControlRuleCriteria.
   */
  static override _entityName = 'BudgetControlRuleCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlRuleCriteria entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'Name',
    'DimensionAttributeId'
  ];
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
   * Dimension Attribute Id.
   */
  declare dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Criterion.
   * @nullable
   */
  declare criterion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlRules} entity.
   */
  declare budgetControlRules?: BudgetControlRules<T> | null;

  constructor(_entityApi: BudgetControlRuleCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlRuleCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  name: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  criterion?: DeserializedType<T, 'Edm.String'> | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlRules?: BudgetControlRulesType<T> | null;
}
