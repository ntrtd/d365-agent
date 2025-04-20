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
import type { ComponentsApi } from './ComponentsApi';
import { TaxTypeIn } from './TaxTypeIn';

/**
 * This class represents the entity "Components" of service "d365_metadata".
 */
export class Components<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ComponentsType<T>
{
  /**
   * Technical entity name for Components.
   */
  static override _entityName = 'Components';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Components entity.
   */
  static _keys = ['dataAreaId', 'TaxComponent', 'TaxType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Component.
   */
  declare taxComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxTypeIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface ComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxComponent: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxTypeIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
