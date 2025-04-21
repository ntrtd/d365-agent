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
import type { OrganizationHierarchyTypesApi } from './OrganizationHierarchyTypesApi';
import {
  RetailReplenishmentRuleLines,
  RetailReplenishmentRuleLinesType
} from './RetailReplenishmentRuleLines';
import {
  ReplenishmentRuleLinesV2,
  ReplenishmentRuleLinesV2Type
} from './ReplenishmentRuleLinesV2';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "OrganizationHierarchyTypes" of service "d365_metadata".
 */
export class OrganizationHierarchyTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OrganizationHierarchyTypesType<T>
{
  /**
   * Technical entity name for OrganizationHierarchyTypes.
   */
  static override _entityName = 'OrganizationHierarchyTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrganizationHierarchyTypes entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Type Id.
   * @nullable
   */
  declare relationshipTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailReplenishmentRuleLines} entity.
   */
  declare retailReplenishmentRuleLine: RetailReplenishmentRuleLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReplenishmentRuleLinesV2} entity.
   */
  declare replenishmentRuleLinesV2: ReplenishmentRuleLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersOrganizationHierarchyType: BudgetTrackingWorkspaceParameters<T>[];

  constructor(_entityApi: OrganizationHierarchyTypesApi<T>) {
    super(_entityApi);
  }
}

export interface OrganizationHierarchyTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  relationshipTypeId?: DeserializedType<T, 'Edm.String'> | null;
  retailReplenishmentRuleLine: RetailReplenishmentRuleLinesType<T>[];
  replenishmentRuleLinesV2: ReplenishmentRuleLinesV2Type<T>[];
  budgetTrackingWorkspaceParametersOrganizationHierarchyType: BudgetTrackingWorkspaceParametersType<T>[];
}
