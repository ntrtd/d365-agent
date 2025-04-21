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
import type { ImportModesApi } from './ImportModesApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ImportModes" of service "d365_metadata".
 */
export class ImportModes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ImportModesType<T>
{
  /**
   * Technical entity name for ImportModes.
   */
  static override _entityName = 'ImportModes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImportModes entity.
   */
  static _keys = ['dataAreaId', 'MethodOfImport'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Method Of Import.
   */
  declare methodOfImport: DeserializedType<T, 'Edm.String'>;
  /**
   * Class Id.
   */
  declare classId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bridging Account Display Value.
   * @nullable
   */
  declare bridgingAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Class Name.
   * @nullable
   */
  declare className?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ImportModesApi<T>) {
    super(_entityApi);
  }
}

export interface ImportModesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  methodOfImport: DeserializedType<T, 'Edm.String'>;
  classId: DeserializedType<T, 'Edm.Int32'>;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bridgingAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  className?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
