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
import type { JourneyTemplateHeadersApi } from './JourneyTemplateHeadersApi';

/**
 * This class represents the entity "JourneyTemplateHeaders" of service "d365_metadata".
 */
export class JourneyTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JourneyTemplateHeadersType<T>
{
  /**
   * Technical entity name for JourneyTemplateHeaders.
   */
  static override _entityName = 'JourneyTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JourneyTemplateHeaders entity.
   */
  static _keys = ['dataAreaId', 'TemplateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Description.
   * @nullable
   */
  declare templateDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: JourneyTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface JourneyTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  templateId: DeserializedType<T, 'Edm.String'>;
  templateDescription?: DeserializedType<T, 'Edm.String'> | null;
}
