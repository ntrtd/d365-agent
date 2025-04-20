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
import type { AssetRetirementObligationDocumentsApi } from './AssetRetirementObligationDocumentsApi';
import { AssetRetirementPostingFrequencyJp } from './AssetRetirementPostingFrequencyJp';

/**
 * This class represents the entity "AssetRetirementObligationDocuments" of service "d365_metadata".
 */
export class AssetRetirementObligationDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetRetirementObligationDocumentsType<T>
{
  /**
   * Technical entity name for AssetRetirementObligationDocuments.
   */
  static override _entityName = 'AssetRetirementObligationDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetRetirementObligationDocuments entity.
   */
  static _keys = ['dataAreaId', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Frequency.
   * @nullable
   */
  declare postingFrequency?: AssetRetirementPostingFrequencyJp | null;

  constructor(_entityApi: AssetRetirementObligationDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetRetirementObligationDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingFrequency?: AssetRetirementPostingFrequencyJp | null;
}
