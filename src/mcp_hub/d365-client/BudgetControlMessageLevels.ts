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
import type { BudgetControlMessageLevelsApi } from './BudgetControlMessageLevelsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { NoYes } from './NoYes';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import { UserGroups, UserGroupsType } from './UserGroups';

/**
 * This class represents the entity "BudgetControlMessageLevels" of service "d365_metadata".
 */
export class BudgetControlMessageLevels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlMessageLevelsType<T>
{
  /**
   * Technical entity name for BudgetControlMessageLevels.
   */
  static override _entityName = 'BudgetControlMessageLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlMessageLevels entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status', 'UserGroupId'];
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
   * User Group Id.
   */
  declare userGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Selected.
   * @nullable
   */
  declare selected?: NoYes | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Group Name.
   * @nullable
   */
  declare userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurations?: BudgetControlConfigurations<T> | null;
  /**
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare budgetControlMessageLevelEntityRelatedRoleSystemUserGroupEntity?: UserGroups<T> | null;

  constructor(_entityApi: BudgetControlMessageLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlMessageLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  userGroupId: DeserializedType<T, 'Edm.String'>;
  selected?: NoYes | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurations?: BudgetControlConfigurationsType<T> | null;
  budgetControlMessageLevelEntityRelatedRoleSystemUserGroupEntity?: UserGroupsType<T> | null;
}
