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
import type { AbbreviationsApi } from './AbbreviationsApi';

/**
 * This class represents the entity "Abbreviations" of service "d365_metadata".
 */
export class Abbreviations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AbbreviationsType<T>
{
  /**
   * Technical entity name for Abbreviations.
   */
  static override _entityName = 'Abbreviations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Abbreviations entity.
   */
  static _keys = ['AddrTypeCode'];
  /**
   * Addr Type Code.
   */
  declare addrTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Addr Type Level.
   */
  declare addrTypeLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Addr Type Name.
   * @nullable
   */
  declare addrTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addr Type Full Name.
   * @nullable
   */
  declare addrTypeFullName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AbbreviationsApi<T>) {
    super(_entityApi);
  }
}

export interface AbbreviationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addrTypeCode: DeserializedType<T, 'Edm.String'>;
  addrTypeLevel: DeserializedType<T, 'Edm.Int32'>;
  addrTypeName?: DeserializedType<T, 'Edm.String'> | null;
  addrTypeFullName?: DeserializedType<T, 'Edm.String'> | null;
}
