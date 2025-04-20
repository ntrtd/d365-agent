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
import type { CfpsTableApi } from './CfpsTableApi';
import { SalesPurchBothBr } from './SalesPurchBothBr';

/**
 * This class represents the entity "CFPSTable" of service "d365_metadata".
 */
export class CfpsTable<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CfpsTableType<T>
{
  /**
   * Technical entity name for CfpsTable.
   */
  static override _entityName = 'CFPSTable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CfpsTable entity.
   */
  static _keys = ['dataAreaId', 'TransactionType', 'CFPSCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SalesPurchBothBr | null;
  /**
   * Cfps Code.
   */
  declare cfpsCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CfpsTableApi<T>) {
    super(_entityApi);
  }
}

export interface CfpsTableType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionType?: SalesPurchBothBr | null;
  cfpsCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
}
