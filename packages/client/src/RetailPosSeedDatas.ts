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
import type { RetailPosSeedDatasApi } from './RetailPosSeedDatasApi';
import { RetailPosSeedDataType } from './RetailPosSeedDataType';

/**
 * This class represents the entity "RetailPosSeedDatas" of service "d365_metadata".
 */
export class RetailPosSeedDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPosSeedDatasType<T>
{
  /**
   * Technical entity name for RetailPosSeedDatas.
   */
  static override _entityName = 'RetailPosSeedDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPosSeedDatas entity.
   */
  static _keys = ['dataAreaId', 'DataType', 'StoreNumber', 'TerminalID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: RetailPosSeedDataType | null;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Value.
   */
  declare dataValue: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailPosSeedDatasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPosSeedDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dataType?: RetailPosSeedDataType | null;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  dataValue: DeserializedType<T, 'Edm.Int64'>;
}
