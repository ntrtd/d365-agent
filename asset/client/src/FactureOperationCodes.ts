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
import type { FactureOperationCodesApi } from './FactureOperationCodesApi';
import { FactureOperationTypeDefaultRu } from './FactureOperationTypeDefaultRu';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FactureOperationCodes" of service "d365_metadata".
 */
export class FactureOperationCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FactureOperationCodesType<T>
{
  /**
   * Technical entity name for FactureOperationCodes.
   */
  static override _entityName = 'FactureOperationCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FactureOperationCodes entity.
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
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Type Default.
   * @nullable
   */
  declare operationTypeDefault?: FactureOperationTypeDefaultRu | null;
  /**
   * Derive.
   * @nullable
   */
  declare derive?: NoYes | null;

  constructor(_entityApi: FactureOperationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface FactureOperationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  operationTypeDefault?: FactureOperationTypeDefaultRu | null;
  derive?: NoYes | null;
}
