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
import type { ApplicationEmailTemplatesApi } from './ApplicationEmailTemplatesApi';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';

/**
 * This class represents the entity "ApplicationEmailTemplates" of service "d365_metadata".
 */
export class ApplicationEmailTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicationEmailTemplatesType<T>
{
  /**
   * Technical entity name for ApplicationEmailTemplates.
   */
  static override _entityName = 'ApplicationEmailTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicationEmailTemplates entity.
   */
  static _keys = ['dataAreaId', 'ApplicationEmailTemplate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Email Template.
   */
  declare applicationEmailTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Subject.
   * @nullable
   */
  declare subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Action.
   * @nullable
   */
  declare correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicationEmailTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationEmailTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  applicationEmailTemplate: DeserializedType<T, 'Edm.String'>;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
