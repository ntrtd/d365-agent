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
import type { DocumentTaxGroupHeadingsApi } from './DocumentTaxGroupHeadingsApi';

/**
 * This class represents the entity "DocumentTaxGroupHeadings" of service "d365_metadata".
 */
export class DocumentTaxGroupHeadings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentTaxGroupHeadingsType<T>
{
  /**
   * Technical entity name for DocumentTaxGroupHeadings.
   */
  static override _entityName = 'DocumentTaxGroupHeadings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentTaxGroupHeadings entity.
   */
  static _keys = ['dataAreaId', 'TaxGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group.
   */
  declare taxGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Name.
   * @nullable
   */
  declare taxGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocumentTaxGroupHeadingsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentTaxGroupHeadingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxGroup: DeserializedType<T, 'Edm.String'>;
  taxGroupName?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
}
