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
import type { MultilineDiscountCustomerGroupsApi } from './MultilineDiscountCustomerGroupsApi';
import {
  OpenSalesMultiLineDiscountJournalLines,
  OpenSalesMultiLineDiscountJournalLinesType
} from './OpenSalesMultiLineDiscountJournalLines';

/**
 * This class represents the entity "MultilineDiscountCustomerGroups" of service "d365_metadata".
 */
export class MultilineDiscountCustomerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultilineDiscountCustomerGroupsType<T>
{
  /**
   * Technical entity name for MultilineDiscountCustomerGroups.
   */
  static override _entityName = 'MultilineDiscountCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultilineDiscountCustomerGroups entity.
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

  constructor(_entityApi: MultilineDiscountCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MultilineDiscountCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openSalesMultiLineDiscountJournalLine: OpenSalesMultiLineDiscountJournalLinesType<T>[];
}
