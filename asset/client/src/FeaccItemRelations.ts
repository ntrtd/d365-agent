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
import type { FeaccItemRelationsApi } from './FeaccItemRelationsApi';

/**
 * This class represents the entity "FEACCItemRelations" of service "d365_metadata".
 */
export class FeaccItemRelations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FeaccItemRelationsType<T>
{
  /**
   * Technical entity name for FeaccItemRelations.
   */
  static override _entityName = 'FEACCItemRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FeaccItemRelations entity.
   */
  static _keys = ['dataAreaId', 'CustomsCode', 'ActionDate', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customs Code.
   */
  declare customsCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Date.
   */
  declare actionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tnved Code.
   * @nullable
   */
  declare tnvedCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FeaccItemRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface FeaccItemRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customsCode: DeserializedType<T, 'Edm.String'>;
  actionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  tnvedCode?: DeserializedType<T, 'Edm.String'> | null;
}
