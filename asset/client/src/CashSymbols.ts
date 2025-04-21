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
import type { CashSymbolsApi } from './CashSymbolsApi';

/**
 * This class represents the entity "CashSymbols" of service "d365_metadata".
 */
export class CashSymbols<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashSymbolsType<T>
{
  /**
   * Technical entity name for CashSymbols.
   */
  static override _entityName = 'CashSymbols';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashSymbols entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CashSymbolsApi<T>) {
    super(_entityApi);
  }
}

export interface CashSymbolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
