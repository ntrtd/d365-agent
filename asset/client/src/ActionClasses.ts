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
import type { ActionClassesApi } from './ActionClassesApi';
import { EmActionType } from './EmActionType';

/**
 * This class represents the entity "ActionClasses" of service "d365_metadata".
 */
export class ActionClasses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActionClassesType<T>
{
  /**
   * Technical entity name for ActionClasses.
   */
  static override _entityName = 'ActionClasses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ActionClasses entity.
   */
  static _keys = ['dataAreaId', 'ExecutableClass'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Executable Class.
   */
  declare executableClass: DeserializedType<T, 'Edm.String'>;
  /**
   * Class Name.
   * @nullable
   */
  declare className?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Type.
   * @nullable
   */
  declare actionType?: EmActionType | null;

  constructor(_entityApi: ActionClassesApi<T>) {
    super(_entityApi);
  }
}

export interface ActionClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  executableClass: DeserializedType<T, 'Edm.String'>;
  className?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  actionType?: EmActionType | null;
}
