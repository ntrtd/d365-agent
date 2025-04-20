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
import type { SubBillAllocItemStandaloneSellingPricesV2Api } from './SubBillAllocItemStandaloneSellingPricesV2Api';
import { InventPostingItemCode } from './InventPostingItemCode';
import { NoYes } from './NoYes';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';

/**
 * This class represents the entity "SubBillAllocItemStandaloneSellingPricesV2" of service "d365_metadata".
 */
export class SubBillAllocItemStandaloneSellingPricesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillAllocItemStandaloneSellingPricesV2Type<T>
{
  /**
   * Technical entity name for SubBillAllocItemStandaloneSellingPricesV2.
   */
  static override _entityName = 'SubBillAllocItemStandaloneSellingPricesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillAllocItemStandaloneSellingPricesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'LineNum',
    'ItemCode',
    'ItemRelation',
    'RevenueSplit',
    'ParentItem',
    'RetailVariantId',
    'ParentVariant'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: InventPostingItemCode | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Revenue Split.
   * @nullable
   */
  declare revenueSplit?: NoYes | null;
  /**
   * Parent Item.
   */
  declare parentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Variant Id.
   */
  declare retailVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Variant.
   */
  declare parentVariant: DeserializedType<T, 'Edm.String'>;
  /**
   * Standalone Selling Price.
   */
  declare standaloneSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standalone Selling Price Origin.
   * @nullable
   */
  declare standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;

  constructor(_entityApi: SubBillAllocItemStandaloneSellingPricesV2Api<T>) {
    super(_entityApi);
  }
}

export interface SubBillAllocItemStandaloneSellingPricesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  itemCode?: InventPostingItemCode | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  revenueSplit?: NoYes | null;
  parentItem: DeserializedType<T, 'Edm.String'>;
  retailVariantId: DeserializedType<T, 'Edm.String'>;
  parentVariant: DeserializedType<T, 'Edm.String'>;
  standaloneSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;
}
