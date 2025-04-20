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
import type { LineDiscountCustomerGroupsApi } from './LineDiscountCustomerGroupsApi';
import {
  OpenSalesLineDiscountJournalLines,
  OpenSalesLineDiscountJournalLinesType
} from './OpenSalesLineDiscountJournalLines';

/**
 * This class represents the entity "LineDiscountCustomerGroups" of service "d365_metadata".
 */
export class LineDiscountCustomerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LineDiscountCustomerGroupsType<T>
{
  /**
   * Technical entity name for LineDiscountCustomerGroups.
   */
  static override _entityName = 'LineDiscountCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LineDiscountCustomerGroups entity.
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
   * One-to-many navigation property to the {@link OpenSalesLineDiscountJournalLines} entity.
   */
  declare openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLines<T>[];

  constructor(_entityApi: LineDiscountCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LineDiscountCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLinesType<T>[];
}
