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
import type { AddressFiasGuidCodesApi } from './AddressFiasGuidCodesApi';

/**
 * This class represents the entity "AddressFiasGuidCodes" of service "d365_metadata".
 */
export class AddressFiasGuidCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressFiasGuidCodesType<T>
{
  /**
   * Technical entity name for AddressFiasGuidCodes.
   */
  static override _entityName = 'AddressFiasGuidCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressFiasGuidCodes entity.
   */
  static _keys = ['dataAreaId', 'FiasGuidId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fias Guid Id.
   */
  declare fiasGuidId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fias Parent Guid Id.
   * @nullable
   */
  declare fiasParentGuidId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AddressFiasGuidCodesApi<T>) {
    super(_entityApi);
  }
}

export interface AddressFiasGuidCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiasGuidId: DeserializedType<T, 'Edm.String'>;
  fiasParentGuidId?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
}
