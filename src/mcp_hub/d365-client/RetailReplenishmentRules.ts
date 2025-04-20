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
import type { RetailReplenishmentRulesApi } from './RetailReplenishmentRulesApi';
import {
  RetailServiceCategories,
  RetailServiceCategoriesType
} from './RetailServiceCategories';
import {
  ReplenishmentRuleLinesV2,
  ReplenishmentRuleLinesV2Type
} from './ReplenishmentRuleLinesV2';

/**
 * This class represents the entity "RetailReplenishmentRules" of service "d365_metadata".
 */
export class RetailReplenishmentRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailReplenishmentRulesType<T>
{
  /**
   * Technical entity name for RetailReplenishmentRules.
   */
  static override _entityName = 'RetailReplenishmentRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReplenishmentRules entity.
   */
  static _keys = ['dataAreaId', 'ReplenishmentRule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Replenishment Rule.
   */
  declare replenishmentRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailServiceCategories} entity.
   */
  declare retailServiceCategory: RetailServiceCategories<T>[];
  /**
   * One-to-one navigation property to the {@link ReplenishmentRuleLinesV2} entity.
   */
  declare replenishmentRuleLinesV2?: ReplenishmentRuleLinesV2<T> | null;

  constructor(_entityApi: RetailReplenishmentRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReplenishmentRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  replenishmentRule: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  retailServiceCategory: RetailServiceCategoriesType<T>[];
  replenishmentRuleLinesV2?: ReplenishmentRuleLinesV2Type<T> | null;
}
