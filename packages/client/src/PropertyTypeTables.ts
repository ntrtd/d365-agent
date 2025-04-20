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
import type { PropertyTypeTablesApi } from './PropertyTypeTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PropertyTypeTables" of service "d365_metadata".
 */
export class PropertyTypeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PropertyTypeTablesType<T>
{
  /**
   * Technical entity name for PropertyTypeTables.
   */
  static override _entityName = 'PropertyTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PropertyTypeTables entity.
   */
  static _keys = ['Type'];
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description Label.
   * @nullable
   */
  declare groupDescriptionLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom.
   * @nullable
   */
  declare custom?: NoYes | null;
  /**
   * Description Label.
   * @nullable
   */
  declare descriptionLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting.
   */
  declare sorting: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: PropertyTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface PropertyTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type: DeserializedType<T, 'Edm.String'>;
  groupDescriptionLabel?: DeserializedType<T, 'Edm.String'> | null;
  custom?: NoYes | null;
  descriptionLabel?: DeserializedType<T, 'Edm.String'> | null;
  sorting: DeserializedType<T, 'Edm.Int32'>;
}
