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
import type { AssetRetirementObligationsApi } from './AssetRetirementObligationsApi';
import { AssetRetirementPostingFrequencyJp } from './AssetRetirementPostingFrequencyJp';

/**
 * This class represents the entity "AssetRetirementObligations" of service "d365_metadata".
 */
export class AssetRetirementObligations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetRetirementObligationsType<T>
{
  /**
   * Technical entity name for AssetRetirementObligations.
   */
  static override _entityName = 'AssetRetirementObligations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetRetirementObligations entity.
   */
  static _keys = ['dataAreaId', 'AssetNumber', 'Book', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Number.
   */
  declare assetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Book.
   */
  declare book: DeserializedType<T, 'Edm.String'>;
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
   * Service Life.
   */
  declare serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Frequency.
   * @nullable
   */
  declare postingFrequency?: AssetRetirementPostingFrequencyJp | null;

  constructor(_entityApi: AssetRetirementObligationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetRetirementObligationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetNumber: DeserializedType<T, 'Edm.String'>;
  book: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  postingFrequency?: AssetRetirementPostingFrequencyJp | null;
}
