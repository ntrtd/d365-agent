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
import type { HsnCodesApi } from './HsnCodesApi';

/**
 * This class represents the entity "HSNCodes" of service "d365_metadata".
 */
export class HsnCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HsnCodesType<T>
{
  /**
   * Technical entity name for HsnCodes.
   */
  static override _entityName = 'HSNCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HsnCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'Chapter',
    'Heading',
    'Subheading',
    'CountryExtension',
    'StatisticalSuffix'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chapter.
   */
  declare chapter: DeserializedType<T, 'Edm.String'>;
  /**
   * Heading.
   */
  declare heading: DeserializedType<T, 'Edm.String'>;
  /**
   * Subheading.
   */
  declare subheading: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Extension.
   */
  declare countryExtension: DeserializedType<T, 'Edm.String'>;
  /**
   * Statistical Suffix.
   */
  declare statisticalSuffix: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HsnCodesApi<T>) {
    super(_entityApi);
  }
}

export interface HsnCodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chapter: DeserializedType<T, 'Edm.String'>;
  heading: DeserializedType<T, 'Edm.String'>;
  subheading: DeserializedType<T, 'Edm.String'>;
  countryExtension: DeserializedType<T, 'Edm.String'>;
  statisticalSuffix: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
}
