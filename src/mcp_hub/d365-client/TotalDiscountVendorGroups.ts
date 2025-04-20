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
import type { TotalDiscountVendorGroupsApi } from './TotalDiscountVendorGroupsApi';
import {
  OpenPurchaseTotalDiscountJournalLines,
  OpenPurchaseTotalDiscountJournalLinesType
} from './OpenPurchaseTotalDiscountJournalLines';

/**
 * This class represents the entity "TotalDiscountVendorGroups" of service "d365_metadata".
 */
export class TotalDiscountVendorGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalDiscountVendorGroupsType<T>
{
  /**
   * Technical entity name for TotalDiscountVendorGroups.
   */
  static override _entityName = 'TotalDiscountVendorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalDiscountVendorGroups entity.
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
   * One-to-many navigation property to the {@link OpenPurchaseTotalDiscountJournalLines} entity.
   */
  declare openPurchaseTotalDiscountJournalLine: OpenPurchaseTotalDiscountJournalLines<T>[];

  constructor(_entityApi: TotalDiscountVendorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface TotalDiscountVendorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openPurchaseTotalDiscountJournalLine: OpenPurchaseTotalDiscountJournalLinesType<T>[];
}
