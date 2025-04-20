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
import type { CustBoeProtestSetttlesApi } from './CustBoeProtestSetttlesApi';

/**
 * This class represents the entity "CustBOEProtestSetttles" of service "d365_metadata".
 */
export class CustBoeProtestSetttles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustBoeProtestSetttlesType<T>
{
  /**
   * Technical entity name for CustBoeProtestSetttles.
   */
  static override _entityName = 'CustBOEProtestSetttles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustBoeProtestSetttles entity.
   */
  static _keys = ['SpecTableId', 'SpecRecId', 'SpecCompany'];
  /**
   * Spec Table Id.
   */
  declare specTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Spec Rec Id.
   */
  declare specRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Spec Company.
   */
  declare specCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Boe.
   * @nullable
   */
  declare boe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Company.
   * @nullable
   */
  declare refCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: CustBoeProtestSetttlesApi<T>) {
    super(_entityApi);
  }
}

export interface CustBoeProtestSetttlesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  specTableId: DeserializedType<T, 'Edm.Int32'>;
  specRecId: DeserializedType<T, 'Edm.Int64'>;
  specCompany: DeserializedType<T, 'Edm.String'>;
  boe?: DeserializedType<T, 'Edm.String'> | null;
  refCompany?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
}
