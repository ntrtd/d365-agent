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
import type { MultilineDiscountProductGroupsApi } from './MultilineDiscountProductGroupsApi';
import {
  OpenSalesMultiLineDiscountJournalLines,
  OpenSalesMultiLineDiscountJournalLinesType
} from './OpenSalesMultiLineDiscountJournalLines';
import {
  OpenPurchaseMultiLineDiscountJournalLines,
  OpenPurchaseMultiLineDiscountJournalLinesType
} from './OpenPurchaseMultiLineDiscountJournalLines';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "MultilineDiscountProductGroups" of service "d365_metadata".
 */
export class MultilineDiscountProductGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultilineDiscountProductGroupsType<T>
{
  /**
   * Technical entity name for MultilineDiscountProductGroups.
   */
  static override _entityName = 'MultilineDiscountProductGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultilineDiscountProductGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Code.
   */
  declare groupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OpenSalesMultiLineDiscountJournalLines} entity.
   */
  declare openSalesMultiLineDiscountJournalLine: OpenSalesMultiLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchaseMultiLineDiscountJournalLines} entity.
   */
  declare openPurchaseMultiLineDiscountJournalLine: OpenPurchaseMultiLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: MultilineDiscountProductGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MultilineDiscountProductGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openSalesMultiLineDiscountJournalLine: OpenSalesMultiLineDiscountJournalLinesType<T>[];
  openPurchaseMultiLineDiscountJournalLine: OpenPurchaseMultiLineDiscountJournalLinesType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
