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
import type { SubBillRevenueSplitLinesApi } from './SubBillRevenueSplitLinesApi';
import {
  SubBillRevenueSplitHeaders,
  SubBillRevenueSplitHeadersType
} from './SubBillRevenueSplitHeaders';

/**
 * This class represents the entity "SubBillRevenueSplitLines" of service "d365_metadata".
 */
export class SubBillRevenueSplitLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillRevenueSplitLinesType<T>
{
  /**
   * Technical entity name for SubBillRevenueSplitLines.
   */
  static override _entityName = 'SubBillRevenueSplitLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillRevenueSplitLines entity.
   */
  static _keys = ['dataAreaId', 'ParentItem', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Item.
   */
  declare parentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Component Item.
   * @nullable
   */
  declare componentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SubBillRevenueSplitHeaders} entity.
   */
  declare subBillRevenueSplitHeaderEntity?: SubBillRevenueSplitHeaders<T> | null;

  constructor(_entityApi: SubBillRevenueSplitLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillRevenueSplitLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  parentItem: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  componentItem?: DeserializedType<T, 'Edm.String'> | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  subBillRevenueSplitHeaderEntity?: SubBillRevenueSplitHeadersType<T> | null;
}
