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
import type { AutoTaxHeadersApi } from './AutoTaxHeadersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AutoTaxHeaders" of service "d365_metadata".
 */
export class AutoTaxHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AutoTaxHeadersType<T>
{
  /**
   * Technical entity name for AutoTaxHeaders.
   */
  static override _entityName = 'AutoTaxHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AutoTaxHeaders entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warnings.
   * @nullable
   */
  declare warnings?: NoYes | null;

  constructor(_entityApi: AutoTaxHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface AutoTaxHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warnings?: NoYes | null;
}
