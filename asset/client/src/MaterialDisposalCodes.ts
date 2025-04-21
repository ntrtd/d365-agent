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
import type { MaterialDisposalCodesApi } from './MaterialDisposalCodesApi';

/**
 * This class represents the entity "MaterialDisposalCodes" of service "d365_metadata".
 */
export class MaterialDisposalCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaterialDisposalCodesType<T>
{
  /**
   * Technical entity name for MaterialDisposalCodes.
   */
  static override _entityName = 'MaterialDisposalCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaterialDisposalCodes entity.
   */
  static _keys = ['MaterialDisposalCode'];
  /**
   * Material Disposal Code.
   */
  declare materialDisposalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Disposal Description.
   * @nullable
   */
  declare materialDisposalDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: MaterialDisposalCodesApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialDisposalCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  materialDisposalCode: DeserializedType<T, 'Edm.String'>;
  materialDisposalDescription?: DeserializedType<T, 'Edm.String'> | null;
}
