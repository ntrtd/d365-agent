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
import type { ImportDeclarationsApi } from './ImportDeclarationsApi';
import { EfDocTransportModeBr } from './EfDocTransportModeBr';
import { PurchDiTypeBr } from './PurchDiTypeBr';

/**
 * This class represents the entity "ImportDeclarations" of service "d365_metadata".
 */
export class ImportDeclarations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ImportDeclarationsType<T>
{
  /**
   * Technical entity name for ImportDeclarations.
   */
  static override _entityName = 'ImportDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImportDeclarations entity.
   */
  static _keys = ['dataAreaId', 'ImportDeclarationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Declaration Number.
   */
  declare importDeclarationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Nationalization Date.
   */
  declare nationalizationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Draw Back Number.
   * @nullable
   */
  declare drawBackNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Mode.
   * @nullable
   */
  declare transportMode?: EfDocTransportModeBr | null;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Import Declaration Type.
   * @nullable
   */
  declare importDeclarationType?: PurchDiTypeBr | null;
  /**
   * Afrmm.
   */
  declare afrmm: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Import Declaration Date.
   */
  declare importDeclarationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ImportDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface ImportDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importDeclarationNumber: DeserializedType<T, 'Edm.String'>;
  nationalizationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  drawBackNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportMode?: EfDocTransportModeBr | null;
  port?: DeserializedType<T, 'Edm.String'> | null;
  importDeclarationType?: PurchDiTypeBr | null;
  afrmm: DeserializedType<T, 'Edm.Decimal'>;
  importDeclarationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
