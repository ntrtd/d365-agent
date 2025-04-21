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
import type { DimAttributeRTax25ProfitTables_RuApi } from './DimAttributeRTax25ProfitTables_RuApi';

/**
 * This class represents the entity "DimAttributeRTax25ProfitTables_RU" of service "d365_metadata".
 */
export class DimAttributeRTax25ProfitTables_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRTax25ProfitTables_RuType<T>
{
  /**
   * Technical entity name for DimAttributeRTax25ProfitTables_Ru.
   */
  static override _entityName = 'DimAttributeRTax25ProfitTables_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRTax25ProfitTables_Ru entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeRTax25ProfitTables_RuApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRTax25ProfitTables_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
