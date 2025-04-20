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
import type { RetailMediaAndMaterRelationsApi } from './RetailMediaAndMaterRelationsApi';
import { RetailMediaMasterEntity } from './RetailMediaMasterEntity';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailMediaAndMaterRelations" of service "d365_metadata".
 */
export class RetailMediaAndMaterRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailMediaAndMaterRelationsType<T>
{
  /**
   * Technical entity name for RetailMediaAndMaterRelations.
   */
  static override _entityName = 'RetailMediaAndMaterRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailMediaAndMaterRelations entity.
   */
  static _keys = ['ResourceId'];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Master Type.
   * @nullable
   */
  declare masterType?: RetailMediaMasterEntity | null;
  /**
   * Is Additional Media.
   * @nullable
   */
  declare isAdditionalMedia?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Image.
   * @nullable
   */
  declare isDefaultImage?: NoYes | null;

  constructor(_entityApi: RetailMediaAndMaterRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailMediaAndMaterRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.Int32'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  masterType?: RetailMediaMasterEntity | null;
  isAdditionalMedia?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultImage?: NoYes | null;
}
