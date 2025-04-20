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
import type { DimAttributeFiscalEstablishments_BrApi } from './DimAttributeFiscalEstablishments_BrApi';

/**
 * This class represents the entity "DimAttributeFiscalEstablishments_BR" of service "d365_metadata".
 */
export class DimAttributeFiscalEstablishments_Br<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeFiscalEstablishments_BrType<T>
{
  /**
   * Technical entity name for DimAttributeFiscalEstablishments_Br.
   */
  static override _entityName = 'DimAttributeFiscalEstablishments_BR';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeFiscalEstablishments_Br entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeFiscalEstablishments_BrApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeFiscalEstablishments_BrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
