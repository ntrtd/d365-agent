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
import type { PrintLayoutsApi } from './PrintLayoutsApi';
import { LedgerPreprintVoucherCn } from './LedgerPreprintVoucherCn';

/**
 * This class represents the entity "PrintLayouts" of service "d365_metadata".
 */
export class PrintLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PrintLayoutsType<T>
{
  /**
   * Technical entity name for PrintLayouts.
   */
  static override _entityName = 'PrintLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PrintLayouts entity.
   */
  static _keys = ['dataAreaId', 'PrintLayoutGroup', 'PrintLayoutCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Print Layout Group.
   */
  declare printLayoutGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Print Layout Code.
   * @nullable
   */
  declare printLayoutCode?: LedgerPreprintVoucherCn | null;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code Description.
   * @nullable
   */
  declare codeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PrintLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface PrintLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  printLayoutGroup: DeserializedType<T, 'Edm.String'>;
  printLayoutCode?: LedgerPreprintVoucherCn | null;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  codeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
