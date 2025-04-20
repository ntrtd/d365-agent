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
import type { ActionPopulateRecordTasksApi } from './ActionPopulateRecordTasksApi';
import { EmAccountType } from './EmAccountType';

/**
 * This class represents the entity "ActionPopulateRecordTasks" of service "d365_metadata".
 */
export class ActionPopulateRecordTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ActionPopulateRecordTasksType<T>
{
  /**
   * Technical entity name for ActionPopulateRecordTasks.
   */
  static override _entityName = 'ActionPopulateRecordTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ActionPopulateRecordTasks entity.
   */
  static _keys = ['dataAreaId', 'ActionName', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Name.
   */
  declare actionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Query Data Area Id.
   * @nullable
   */
  declare queryDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Query.
   * @nullable
   */
  declare packQuery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Item Type.
   * @nullable
   */
  declare messageItemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Date Field Name.
   * @nullable
   */
  declare itemDateFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Master Table Name.
   * @nullable
   */
  declare masterTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number Field Name.
   * @nullable
   */
  declare itemNumberFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packed Query.
   * @nullable
   */
  declare packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: EmAccountType | null;
  /**
   * Item Account Field Name.
   * @nullable
   */
  declare itemAccountFieldName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ActionPopulateRecordTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ActionPopulateRecordTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  actionName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  queryDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  packQuery?: DeserializedType<T, 'Edm.String'> | null;
  messageItemType?: DeserializedType<T, 'Edm.String'> | null;
  itemDateFieldName?: DeserializedType<T, 'Edm.String'> | null;
  masterTableName?: DeserializedType<T, 'Edm.String'> | null;
  itemNumberFieldName?: DeserializedType<T, 'Edm.String'> | null;
  packedQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  accountType?: EmAccountType | null;
  itemAccountFieldName?: DeserializedType<T, 'Edm.String'> | null;
}
