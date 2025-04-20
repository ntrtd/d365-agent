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
import type { ReplenishmentRuleLinesV2Api } from './ReplenishmentRuleLinesV2Api';
import { RetailReplenishmentRuleType } from './RetailReplenishmentRuleType';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import {
  RetailReplenishmentRules,
  RetailReplenishmentRulesType
} from './RetailReplenishmentRules';
import {
  OrganizationHierarchyTypes,
  OrganizationHierarchyTypesType
} from './OrganizationHierarchyTypes';

/**
 * This class represents the entity "ReplenishmentRuleLinesV2" of service "d365_metadata".
 */
export class ReplenishmentRuleLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReplenishmentRuleLinesV2Type<T>
{
  /**
   * Technical entity name for ReplenishmentRuleLinesV2.
   */
  static override _entityName = 'ReplenishmentRuleLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReplenishmentRuleLinesV2 entity.
   */
  static _keys = ['dataAreaId', 'ReplenishmentRule', 'Type', 'RelationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Replenishment Rule.
   */
  declare replenishmentRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailReplenishmentRuleType | null;
  /**
   * Relation Id.
   */
  declare relationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replenishment Hierarchy Valid From.
   */
  declare replenishmentHierarchyValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Default Weight.
   */
  declare defaultWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Hierarchy Valid To.
   */
  declare replenishmentHierarchyValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Channel Id.
   * @nullable
   */
  declare retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replenishment Organization Party Number.
   * @nullable
   */
  declare replenishmentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Percent.
   */
  declare defaultPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Hierarchy Type Name.
   * @nullable
   */
  declare replenishmentHierarchyTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel?: RetailChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailReplenishmentRules} entity.
   */
  declare retailReplenishmentRule?: RetailReplenishmentRules<T> | null;
  /**
   * One-to-one navigation property to the {@link OrganizationHierarchyTypes} entity.
   */
  declare organizationHierarchyType?: OrganizationHierarchyTypes<T> | null;

  constructor(_entityApi: ReplenishmentRuleLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReplenishmentRuleLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  replenishmentRule: DeserializedType<T, 'Edm.String'>;
  type?: RetailReplenishmentRuleType | null;
  relationId: DeserializedType<T, 'Edm.Int64'>;
  replenishmentHierarchyValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultWeight: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentHierarchyValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  replenishmentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultPercent: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentHierarchyTypeName?: DeserializedType<T, 'Edm.String'> | null;
  retailChannel?: RetailChannelsType<T> | null;
  retailReplenishmentRule?: RetailReplenishmentRulesType<T> | null;
  organizationHierarchyType?: OrganizationHierarchyTypesType<T> | null;
}
