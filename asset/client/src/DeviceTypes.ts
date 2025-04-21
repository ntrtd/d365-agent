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
import type { DeviceTypesApi } from './DeviceTypesApi';
import { RetailDesignerFormEnum } from './RetailDesignerFormEnum';
import {
  RetailTillLayoutZones,
  RetailTillLayoutZonesType
} from './RetailTillLayoutZones';

/**
 * This class represents the entity "DeviceTypes" of service "d365_metadata".
 */
export class DeviceTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeviceTypesType<T>
{
  /**
   * Technical entity name for DeviceTypes.
   */
  static override _entityName = 'DeviceTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeviceTypes entity.
   */
  static _keys = ['Type'];
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Designer Form.
   * @nullable
   */
  declare designerForm?: RetailDesignerFormEnum | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutZones} entity.
   */
  declare deviceTypes: RetailTillLayoutZones<T>[];

  constructor(_entityApi: DeviceTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DeviceTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  designerForm?: RetailDesignerFormEnum | null;
  deviceTypes: RetailTillLayoutZonesType<T>[];
}
