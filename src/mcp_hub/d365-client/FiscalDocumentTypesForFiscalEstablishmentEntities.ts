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
import type { FiscalDocumentTypesForFiscalEstablishmentEntitiesApi } from './FiscalDocumentTypesForFiscalEstablishmentEntitiesApi';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "FiscalDocumentTypesForFiscalEstablishmentEntities" of service "d365_metadata".
 */
export class FiscalDocumentTypesForFiscalEstablishmentEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalDocumentTypesForFiscalEstablishmentEntitiesType<T>
{
  /**
   * Technical entity name for FiscalDocumentTypesForFiscalEstablishmentEntities.
   */
  static override _entityName =
    'FiscalDocumentTypesForFiscalEstablishmentEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalDocumentTypesForFiscalEstablishmentEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountCode',
    'AccountRelation',
    'FiscalEstablishmentId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Establishment Id.
   */
  declare fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: FiscalDocumentTypesForFiscalEstablishmentEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface FiscalDocumentTypesForFiscalEstablishmentEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
}
