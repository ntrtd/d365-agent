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
import type { ProcessGenericTemplateHeadersApi } from './ProcessGenericTemplateHeadersApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';

/**
 * This class represents the entity "ProcessGenericTemplateHeaders" of service "d365_metadata".
 */
export class ProcessGenericTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessGenericTemplateHeadersType<T>
{
  /**
   * Technical entity name for ProcessGenericTemplateHeaders.
   */
  static override _entityName = 'ProcessGenericTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessGenericTemplateHeaders entity.
   */
  static _keys = [
    'TemplateHeader_ProcessType',
    'TemplateHeader_GenericSubtype',
    'TemplateHeader_Name'
  ];
  /**
   * Template Header Process Type.
   * @nullable
   */
  declare templateHeaderProcessType?: BusinessProcessType | null;
  /**
   * Template Header Generic Subtype.
   * @nullable
   */
  declare templateHeaderGenericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * Template Header Name.
   */
  declare templateHeaderName: DeserializedType<T, 'Edm.String'>;
  /**
   * Generic Subtype.
   * @nullable
   */
  declare genericSubtype?: BusinessProcessGenericSubtype | null;

  constructor(_entityApi: ProcessGenericTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessGenericTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateHeaderProcessType?: BusinessProcessType | null;
  templateHeaderGenericSubtype?: BusinessProcessGenericSubtype | null;
  templateHeaderName: DeserializedType<T, 'Edm.String'>;
  genericSubtype?: BusinessProcessGenericSubtype | null;
}
