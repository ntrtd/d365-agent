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
import type { LineDiscountVendorGroupsApi } from './LineDiscountVendorGroupsApi';
import {
  OpenPurchaseLineDiscountJournalLines,
  OpenPurchaseLineDiscountJournalLinesType
} from './OpenPurchaseLineDiscountJournalLines';

/**
 * This class represents the entity "LineDiscountVendorGroups" of service "d365_metadata".
 */
export class LineDiscountVendorGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LineDiscountVendorGroupsType<T>
{
  /**
   * Technical entity name for LineDiscountVendorGroups.
   */
  static override _entityName = 'LineDiscountVendorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LineDiscountVendorGroups entity.
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
   * One-to-many navigation property to the {@link OpenPurchaseLineDiscountJournalLines} entity.
   */
  declare openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLines<T>[];

  constructor(_entityApi: LineDiscountVendorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LineDiscountVendorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLinesType<T>[];
}
