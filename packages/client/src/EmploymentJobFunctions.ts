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
import type { EmploymentJobFunctionsApi } from './EmploymentJobFunctionsApi';

/**
 * This class represents the entity "EmploymentJobFunctions" of service "d365_metadata".
 */
export class EmploymentJobFunctions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmploymentJobFunctionsType<T>
{
  /**
   * Technical entity name for EmploymentJobFunctions.
   */
  static override _entityName = 'EmploymentJobFunctions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentJobFunctions entity.
   */
  static _keys = ['dataAreaId', 'FunctionName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Function Name.
   */
  declare functionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Function Description.
   * @nullable
   */
  declare functionDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmploymentJobFunctionsApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentJobFunctionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionName: DeserializedType<T, 'Edm.String'>;
  functionDescription?: DeserializedType<T, 'Edm.String'> | null;
}
