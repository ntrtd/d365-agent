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
import type { RetailReplenishmentRuleLinesApi } from './RetailReplenishmentRuleLinesApi';
import { RetailReplenishmentRuleType } from './RetailReplenishmentRuleType';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import {
  OrganizationHierarchyTypes,
  OrganizationHierarchyTypesType
} from './OrganizationHierarchyTypes';

/**
 * This class represents the entity "RetailReplenishmentRuleLines" of service "d365_metadata".
 */
export class RetailReplenishmentRuleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailReplenishmentRuleLinesType<T>
{
  /**
   * Technical entity name for RetailReplenishmentRuleLines.
   */
  static override _entityName = 'RetailReplenishmentRuleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReplenishmentRuleLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ReplenishmentRule',
    'Type',
    'ReplenishmentHierarchyTypeName',
    'ReplenishmentOrganizationPartyNumber',
    'ReplenishmentHierarchyValidFrom',
    'ReplenishmentHierarchyValidTo',
    'RetailChannelId'
  ];
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
   * Replenishment Hierarchy Type Name.
   */
  declare replenishmentHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Replenishment Organization Party Number.
   */
  declare replenishmentOrganizationPartyNumber: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Replenishment Hierarchy Valid From.
   */
  declare replenishmentHierarchyValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Replenishment Hierarchy Valid To.
   */
  declare replenishmentHierarchyValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Weight.
   */
  declare defaultWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
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
   * Default Percent.
   */
  declare defaultPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel?: RetailChannels<T> | null;
  /**
   * One-to-one navigation property to the {@link OrganizationHierarchyTypes} entity.
   */
  declare organizationHierarchyType?: OrganizationHierarchyTypes<T> | null;

  constructor(_entityApi: RetailReplenishmentRuleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReplenishmentRuleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  replenishmentRule: DeserializedType<T, 'Edm.String'>;
  type?: RetailReplenishmentRuleType | null;
  replenishmentHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
  replenishmentOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  replenishmentHierarchyValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replenishmentHierarchyValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  defaultWeight: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultPercent: DeserializedType<T, 'Edm.Decimal'>;
  retailChannel?: RetailChannelsType<T> | null;
  organizationHierarchyType?: OrganizationHierarchyTypesType<T> | null;
}
