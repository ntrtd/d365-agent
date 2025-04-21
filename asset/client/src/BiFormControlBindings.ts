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
import type { BiFormControlBindingsApi } from './BiFormControlBindingsApi';
import { PowerBiControlSize } from './PowerBiControlSize';

/**
 * This class represents the entity "BIFormControlBindings" of service "d365_metadata".
 */
export class BiFormControlBindings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BiFormControlBindingsType<T>
{
  /**
   * Technical entity name for BiFormControlBindings.
   */
  static override _entityName = 'BIFormControlBindings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BiFormControlBindings entity.
   */
  static _keys = ['formName', 'userId', 'dashboardId', 'controlId'];
  /**
   * Form Name.
   */
  declare formName: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dashboard Id.
   */
  declare dashboardId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Control Id.
   */
  declare controlId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Size.
   * @nullable
   */
  declare size?: PowerBiControlSize | null;
  /**
   * Embed Url.
   * @nullable
   */
  declare embedUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BiFormControlBindingsApi<T>) {
    super(_entityApi);
  }
}

export interface BiFormControlBindingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formName: DeserializedType<T, 'Edm.String'>;
  userId: DeserializedType<T, 'Edm.String'>;
  dashboardId: DeserializedType<T, 'Edm.Guid'>;
  controlId: DeserializedType<T, 'Edm.Guid'>;
  size?: PowerBiControlSize | null;
  embedUrl?: DeserializedType<T, 'Edm.String'> | null;
}
