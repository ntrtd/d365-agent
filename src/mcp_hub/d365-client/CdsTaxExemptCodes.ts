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
import type { CdsTaxExemptCodesApi } from './CdsTaxExemptCodesApi';

/**
 * This class represents the entity "CdsTaxExemptCodes" of service "d365_metadata".
 */
export class CdsTaxExemptCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CdsTaxExemptCodesType<T>
{
  /**
   * Technical entity name for CdsTaxExemptCodes.
   */
  static override _entityName = 'CdsTaxExemptCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsTaxExemptCodes entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CdsTaxExemptCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsTaxExemptCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
