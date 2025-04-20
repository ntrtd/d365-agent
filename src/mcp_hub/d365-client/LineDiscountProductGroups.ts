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
import type { LineDiscountProductGroupsApi } from './LineDiscountProductGroupsApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  OpenSalesLineDiscountJournalLines,
  OpenSalesLineDiscountJournalLinesType
} from './OpenSalesLineDiscountJournalLines';
import {
  OpenPurchaseLineDiscountJournalLines,
  OpenPurchaseLineDiscountJournalLinesType
} from './OpenPurchaseLineDiscountJournalLines';

/**
 * This class represents the entity "LineDiscountProductGroups" of service "d365_metadata".
 */
export class LineDiscountProductGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LineDiscountProductGroupsType<T>
{
  /**
   * Technical entity name for LineDiscountProductGroups.
   */
  static override _entityName = 'LineDiscountProductGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LineDiscountProductGroups entity.
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
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesLineDiscountJournalLines} entity.
   */
  declare openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchaseLineDiscountJournalLines} entity.
   */
  declare openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLines<T>[];

  constructor(_entityApi: LineDiscountProductGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LineDiscountProductGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLinesType<T>[];
  openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLinesType<T>[];
}
