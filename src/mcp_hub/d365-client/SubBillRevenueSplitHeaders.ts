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
import type { SubBillRevenueSplitHeadersApi } from './SubBillRevenueSplitHeadersApi';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
import {
  SubBillRevenueSplitLines,
  SubBillRevenueSplitLinesType
} from './SubBillRevenueSplitLines';

/**
 * This class represents the entity "SubBillRevenueSplitHeaders" of service "d365_metadata".
 */
export class SubBillRevenueSplitHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillRevenueSplitHeadersType<T>
{
  /**
   * Technical entity name for SubBillRevenueSplitHeaders.
   */
  static override _entityName = 'SubBillRevenueSplitHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillRevenueSplitHeaders entity.
   */
  static _keys = ['dataAreaId', 'ParentItem'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Item.
   */
  declare parentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  /**
   * Parent Variant.
   * @nullable
   */
  declare parentVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SubBillRevenueSplitLines} entity.
   */
  declare relatedToSubBillRevenueSplitHeaderEntity: SubBillRevenueSplitLines<T>[];

  constructor(_entityApi: SubBillRevenueSplitHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillRevenueSplitHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  parentItem: DeserializedType<T, 'Edm.String'>;
  allocationMethod?: SubBillRevenueSplitAllocationMethod | null;
  parentVariant?: DeserializedType<T, 'Edm.String'> | null;
  relatedToSubBillRevenueSplitHeaderEntity: SubBillRevenueSplitLinesType<T>[];
}
