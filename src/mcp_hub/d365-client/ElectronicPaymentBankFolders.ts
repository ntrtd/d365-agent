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
import type { ElectronicPaymentBankFoldersApi } from './ElectronicPaymentBankFoldersApi';

/**
 * This class represents the entity "ElectronicPaymentBankFolders" of service "d365_metadata".
 */
export class ElectronicPaymentBankFolders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentBankFoldersType<T>
{
  /**
   * Technical entity name for ElectronicPaymentBankFolders.
   */
  static override _entityName = 'ElectronicPaymentBankFolders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentBankFolders entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'BankFolder'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Folder.
   */
  declare bankFolder: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Folder Code.
   * @nullable
   */
  declare bankFolderCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentBankFoldersApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentBankFoldersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  bankFolder: DeserializedType<T, 'Edm.String'>;
  bankFolderCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
