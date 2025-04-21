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
import type { RetailAttributesGlobalLookupsApi } from './RetailAttributesGlobalLookupsApi';
import { NoYes } from './NoYes';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';

/**
 * This class represents the entity "RetailAttributesGlobalLookups" of service "d365_metadata".
 */
export class RetailAttributesGlobalLookups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAttributesGlobalLookupsType<T>
{
  /**
   * Technical entity name for RetailAttributesGlobalLookups.
   */
  static override _entityName = 'RetailAttributesGlobalLookups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAttributesGlobalLookups entity.
   */
  static _keys = ['ProductCategoryHierarchyName', 'ProductCategoryName'];
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Name.
   */
  declare productCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Pos Allow Negative Quantity.
   * @nullable
   */
  declare posAllowNegativeQuantity?: NoYes | null;
  /**
   * Variant Size Group.
   * @nullable
   */
  declare variantSizeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Tracking Dimension.
   * @nullable
   */
  declare groupTrackingDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code Use Ean Standard.
   * @nullable
   */
  declare barCodeUseEanStandard?: NoYes | null;
  /**
   * Date To Be Blocked.
   */
  declare dateToBeBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pos Is Scale Item.
   * @nullable
   */
  declare posIsScaleItem?: NoYes | null;
  /**
   * Pos Is Zero Price Valid.
   * @nullable
   */
  declare posIsZeroPriceValid?: NoYes | null;
  /**
   * Date To Activate Item.
   */
  declare dateToActivateItem: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Variant Color Group.
   * @nullable
   */
  declare variantColorGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Storage Dimension.
   * @nullable
   */
  declare groupStorageDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Style Group.
   * @nullable
   */
  declare variantStyleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Must Key In Comment.
   * @nullable
   */
  declare posMustKeyInComment?: NoYes | null;
  /**
   * Group Product Dimension.
   * @nullable
   */
  declare groupProductDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked At Register.
   * @nullable
   */
  declare blockedAtRegister?: NoYes | null;
  /**
   * Pos Keying In Price.
   * @nullable
   */
  declare posKeyingInPrice?: RetailPriceKeyingRequirement | null;
  /**
   * Date Blocked.
   */
  declare dateBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pos Keying In Quantity.
   * @nullable
   */
  declare posKeyingInQuantity?: RetailQtyKeyingRequirement | null;
  /**
   * Pos Disallow Discount.
   * @nullable
   */
  declare posDisallowDiscount?: NoYes | null;
  /**
   * Pos Disallow Manual Discount.
   * @nullable
   */
  declare posDisallowManualDiscount?: NoYes | null;

  constructor(_entityApi: RetailAttributesGlobalLookupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAttributesGlobalLookupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  productCategoryName: DeserializedType<T, 'Edm.String'>;
  posAllowNegativeQuantity?: NoYes | null;
  variantSizeGroup?: DeserializedType<T, 'Edm.String'> | null;
  groupTrackingDimension?: DeserializedType<T, 'Edm.String'> | null;
  barCodeUseEanStandard?: NoYes | null;
  dateToBeBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  posIsScaleItem?: NoYes | null;
  posIsZeroPriceValid?: NoYes | null;
  dateToActivateItem: DeserializedType<T, 'Edm.DateTimeOffset'>;
  variantColorGroup?: DeserializedType<T, 'Edm.String'> | null;
  groupStorageDimension?: DeserializedType<T, 'Edm.String'> | null;
  variantStyleGroup?: DeserializedType<T, 'Edm.String'> | null;
  posMustKeyInComment?: NoYes | null;
  groupProductDimension?: DeserializedType<T, 'Edm.String'> | null;
  blockedAtRegister?: NoYes | null;
  posKeyingInPrice?: RetailPriceKeyingRequirement | null;
  dateBlocked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  posKeyingInQuantity?: RetailQtyKeyingRequirement | null;
  posDisallowDiscount?: NoYes | null;
  posDisallowManualDiscount?: NoYes | null;
}
