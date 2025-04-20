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
import type { DiscountClaimDistributionFreeItemLinesApi } from './DiscountClaimDistributionFreeItemLinesApi';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { GupDiscountClaimPostingProfileType } from './GupDiscountClaimPostingProfileType';

/**
 * This class represents the entity "DiscountClaimDistributionFreeItemLines" of service "d365_metadata".
 */
export class DiscountClaimDistributionFreeItemLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountClaimDistributionFreeItemLinesType<T>
{
  /**
   * Technical entity name for DiscountClaimDistributionFreeItemLines.
   */
  static override _entityName = 'DiscountClaimDistributionFreeItemLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountClaimDistributionFreeItemLines entity.
   */
  static _keys = [
    'dataAreaId',
    'FreeItemId',
    'FreeItemGroup',
    'Product',
    'UnitOfMeasure',
    'InventSiteId',
    'InventLocationId',
    'Variant',
    'PostingProfile'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Id.
   */
  declare freeItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Group.
   */
  declare freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure.
   */
  declare unitOfMeasure: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Site Id.
   */
  declare inventSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Variant.
   */
  declare variant: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calc Type.
   * @nullable
   */
  declare calcType?: GupDiscountClaimCalcType | null;
  /**
   * Posting Profile Type.
   * @nullable
   */
  declare postingProfileType?: GupDiscountClaimPostingProfileType | null;

  constructor(_entityApi: DiscountClaimDistributionFreeItemLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountClaimDistributionFreeItemLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  freeItemId: DeserializedType<T, 'Edm.String'>;
  freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  product: DeserializedType<T, 'Edm.String'>;
  unitOfMeasure: DeserializedType<T, 'Edm.String'>;
  inventSiteId: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  variant: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  calcType?: GupDiscountClaimCalcType | null;
  postingProfileType?: GupDiscountClaimPostingProfileType | null;
}
