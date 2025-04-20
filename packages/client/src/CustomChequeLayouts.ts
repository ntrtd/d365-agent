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
import type { CustomChequeLayoutsApi } from './CustomChequeLayoutsApi';

/**
 * This class represents the entity "CustomChequeLayouts" of service "d365_metadata".
 */
export class CustomChequeLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomChequeLayoutsType<T>
{
  /**
   * Technical entity name for CustomChequeLayouts.
   */
  static override _entityName = 'CustomChequeLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomChequeLayouts entity.
   */
  static _keys = ['dataAreaId', 'LayoutId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomChequeLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomChequeLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutId: DeserializedType<T, 'Edm.String'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
