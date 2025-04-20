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
import type { TaxTablesApi } from './TaxTablesApi';
import { RTax25TaxModule } from './RTax25TaxModule';
import { TaxTypeW } from './TaxTypeW';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "TaxTables" of service "d365_metadata".
 */
export class TaxTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxTablesType<T>
{
  /**
   * Technical entity name for TaxTables.
   */
  static override _entityName = 'TaxTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTables entity.
   */
  static _keys = ['dataAreaId', 'Module', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: RTax25TaxModule | null;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Of Tax.
   * @nullable
   */
  declare typeOfTax?: TaxTypeW | null;
  /**
   * Expense Code.
   * @nullable
   */
  declare expenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: TaxTablesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTablesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  module?: RTax25TaxModule | null;
  code: DeserializedType<T, 'Edm.String'>;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  typeOfTax?: TaxTypeW | null;
  expenseCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
