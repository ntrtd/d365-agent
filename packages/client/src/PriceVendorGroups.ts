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
import type { PriceVendorGroupsApi } from './PriceVendorGroupsApi';
import {
  OpenPurchasePriceJournalLines,
  OpenPurchasePriceJournalLinesType
} from './OpenPurchasePriceJournalLines';
import {
  OpenPurchasePriceJournalLinesV2,
  OpenPurchasePriceJournalLinesV2Type
} from './OpenPurchasePriceJournalLinesV2';

/**
 * This class represents the entity "PriceVendorGroups" of service "d365_metadata".
 */
export class PriceVendorGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceVendorGroupsType<T>
{
  /**
   * Technical entity name for PriceVendorGroups.
   */
  static override _entityName = 'PriceVendorGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceVendorGroups entity.
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
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLines} entity.
   */
  declare openPurchasePriceJournalLine: OpenPurchasePriceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLinesV2} entity.
   */
  declare openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2<T>[];

  constructor(_entityApi: PriceVendorGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceVendorGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openPurchasePriceJournalLine: OpenPurchasePriceJournalLinesType<T>[];
  openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2Type<T>[];
}
