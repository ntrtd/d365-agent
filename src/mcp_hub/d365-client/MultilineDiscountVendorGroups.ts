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
import type { MultilineDiscountVendorGroupsApi } from './MultilineDiscountVendorGroupsApi';
import {
  OpenPurchaseMultiLineDiscountJournalLines,
  OpenPurchaseMultiLineDiscountJournalLinesType
} from './OpenPurchaseMultiLineDiscountJournalLines';

/**
 * This class represents the entity "MultilineDiscountVendorGroups" of service "d365_metadata".
 */
export class MultilineDiscountVendorGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultilineDiscountVendorGroupsType<T>
{
  /**
   * Technical entity name for MultilineDiscountVendorGroups.
   */
  static override _entityName = 'MultilineDiscountVendorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultilineDiscountVendorGroups entity.
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
   * One-to-many navigation property to the {@link OpenPurchaseMultiLineDiscountJournalLines} entity.
   */
  declare openPurchaseMultiLineDiscountJournalLine: OpenPurchaseMultiLineDiscountJournalLines<T>[];

  constructor(_entityApi: MultilineDiscountVendorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MultilineDiscountVendorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openPurchaseMultiLineDiscountJournalLine: OpenPurchaseMultiLineDiscountJournalLinesType<T>[];
}
