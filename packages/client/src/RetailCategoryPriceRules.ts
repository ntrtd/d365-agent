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
import type { RetailCategoryPriceRulesApi } from './RetailCategoryPriceRulesApi';
import { RetailPriceBasisType } from './RetailPriceBasisType';
import { RetailCategoryPriceSetupType } from './RetailCategoryPriceSetupType';

/**
 * This class represents the entity "RetailCategoryPriceRules" of service "d365_metadata".
 */
export class RetailCategoryPriceRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCategoryPriceRulesType<T>
{
  /**
   * Technical entity name for RetailCategoryPriceRules.
   */
  static override _entityName = 'RetailCategoryPriceRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCategoryPriceRules entity.
   */
  static _keys = ['dataAreaId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Basis.
   * @nullable
   */
  declare priceBasis?: RetailPriceBasisType | null;
  /**
   * Price Setup Type.
   * @nullable
   */
  declare priceSetupType?: RetailCategoryPriceSetupType | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Smart Rounding Group.
   * @nullable
   */
  declare smartRoundingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Percent.
   */
  declare amountPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Price Group Code.
   * @nullable
   */
  declare customerPriceGroupCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailCategoryPriceRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCategoryPriceRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  priceBasis?: RetailPriceBasisType | null;
  priceSetupType?: RetailCategoryPriceSetupType | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  smartRoundingGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountPercent: DeserializedType<T, 'Edm.Decimal'>;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  customerPriceGroupCode?: DeserializedType<T, 'Edm.String'> | null;
}
