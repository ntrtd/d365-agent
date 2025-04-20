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
import type { BudgetControlGroupCriteriaApi } from './BudgetControlGroupCriteriaApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import {
  BudgetControlGroups,
  BudgetControlGroupsType
} from './BudgetControlGroups';

/**
 * This class represents the entity "BudgetControlGroupCriteria" of service "d365_metadata".
 */
export class BudgetControlGroupCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlGroupCriteriaType<T>
{
  /**
   * Technical entity name for BudgetControlGroupCriteria.
   */
  static override _entityName = 'BudgetControlGroupCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlGroupCriteria entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'MemberName',
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
   * Member Name.
   */
  declare memberName: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link BudgetControlGroups} entity.
   */
  declare budgetControlGroups?: BudgetControlGroups<T> | null;

  constructor(_entityApi: BudgetControlGroupCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlGroupCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  memberName: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  criterion?: DeserializedType<T, 'Edm.String'> | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlGroups?: BudgetControlGroupsType<T> | null;
}
