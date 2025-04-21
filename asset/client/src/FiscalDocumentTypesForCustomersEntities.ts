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
import type { FiscalDocumentTypesForCustomersEntitiesApi } from './FiscalDocumentTypesForCustomersEntitiesApi';
import { TableGroupAll } from './TableGroupAll';
import { ItemType } from './ItemType';

/**
 * This class represents the entity "FiscalDocumentTypesForCustomersEntities" of service "d365_metadata".
 */
export class FiscalDocumentTypesForCustomersEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalDocumentTypesForCustomersEntitiesType<T>
{
  /**
   * Technical entity name for FiscalDocumentTypesForCustomersEntities.
   */
  static override _entityName = 'FiscalDocumentTypesForCustomersEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalDocumentTypesForCustomersEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountCode',
    'AccountRelation',
    'ItemType',
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
   * Item Type.
   * @nullable
   */
  declare itemType?: ItemType | null;
  /**
   * Fiscal Establishment Id.
   */
  declare fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Type Id.
   * @nullable
   */
  declare fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalDocumentTypesForCustomersEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalDocumentTypesForCustomersEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  itemType?: ItemType | null;
  fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentTypeId?: DeserializedType<T, 'Edm.String'> | null;
}
