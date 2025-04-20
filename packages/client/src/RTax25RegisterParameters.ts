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
import type { RTax25RegisterParametersApi } from './RTax25RegisterParametersApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RTax25RegisterParameters" of service "d365_metadata".
 */
export class RTax25RegisterParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RTax25RegisterParametersType<T>
{
  /**
   * Technical entity name for RTax25RegisterParameters.
   */
  static override _entityName = 'RTax25RegisterParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25RegisterParameters entity.
   */
  static _keys = ['dataAreaId', 'RegisterCode', 'ParameterCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Code.
   */
  declare registerCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Parameter Code.
   */
  declare parameterCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parameter Name.
   * @nullable
   */
  declare parameterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RTax25RegisterParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25RegisterParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  registerCode: DeserializedType<T, 'Edm.String'>;
  parameterCode: DeserializedType<T, 'Edm.Int32'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  parameterName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
