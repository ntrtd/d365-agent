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
import type { BankConstantSymbolsApi } from './BankConstantSymbolsApi';

/**
 * This class represents the entity "BankConstantSymbols" of service "d365_metadata".
 */
export class BankConstantSymbols<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankConstantSymbolsType<T>
{
  /**
   * Technical entity name for BankConstantSymbols.
   */
  static override _entityName = 'BankConstantSymbols';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankConstantSymbols entity.
   */
  static _keys = ['dataAreaId', 'ConstantSymbol'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Constant Symbol.
   */
  declare constantSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankConstantSymbolsApi<T>) {
    super(_entityApi);
  }
}

export interface BankConstantSymbolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  constantSymbol: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
