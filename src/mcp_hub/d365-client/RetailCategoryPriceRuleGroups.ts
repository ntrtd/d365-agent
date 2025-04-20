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
import type { RetailCategoryPriceRuleGroupsApi } from './RetailCategoryPriceRuleGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailCategoryPriceRuleGroups" of service "d365_metadata".
 */
export class RetailCategoryPriceRuleGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCategoryPriceRuleGroupsType<T>
{
  /**
   * Technical entity name for RetailCategoryPriceRuleGroups.
   */
  static override _entityName = 'RetailCategoryPriceRuleGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCategoryPriceRuleGroups entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Save Other Group Price.
   * @nullable
   */
  declare saveOtherGroupPrice?: NoYes | null;
  /**
   * Save Inventory Cost.
   * @nullable
   */
  declare saveInventoryCost?: NoYes | null;
  /**
   * Price Group Id.
   * @nullable
   */
  declare priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Save Add Data.
   * @nullable
   */
  declare saveAddData?: NoYes | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Save Base Price.
   * @nullable
   */
  declare saveBasePrice?: NoYes | null;
  /**
   * Save Sales Price.
   * @nullable
   */
  declare saveSalesPrice?: NoYes | null;

  constructor(_entityApi: RetailCategoryPriceRuleGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCategoryPriceRuleGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  saveOtherGroupPrice?: NoYes | null;
  saveInventoryCost?: NoYes | null;
  priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  saveAddData?: NoYes | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  saveBasePrice?: NoYes | null;
  saveSalesPrice?: NoYes | null;
}
