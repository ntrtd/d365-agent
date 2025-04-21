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
import type { DataManagementDefinitionGroupsApi } from './DataManagementDefinitionGroupsApi';
import { DmfProjectCategory } from './DmfProjectCategory';
import { DmfOperationType } from './DmfOperationType';
import { NoYes } from './NoYes';
import {
  DataManagementDefinitionGroupDetails,
  DataManagementDefinitionGroupDetailsType
} from './DataManagementDefinitionGroupDetails';

/**
 * This class represents the entity "DataManagementDefinitionGroups" of service "d365_metadata".
 */
export class DataManagementDefinitionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementDefinitionGroupsType<T>
{
  /**
   * Technical entity name for DataManagementDefinitionGroups.
   */
  static override _entityName = 'DataManagementDefinitionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementDefinitionGroups entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Category.
   * @nullable
   */
  declare projectCategory?: DmfProjectCategory | null;
  /**
   * Operation Type.
   * @nullable
   */
  declare operationType?: DmfOperationType | null;
  /**
   * Generate Data Package.
   * @nullable
   */
  declare generateDataPackage?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Truncate Entity Data.
   * @nullable
   */
  declare truncateEntityData?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link DataManagementDefinitionGroupDetails} entity.
   */
  declare details: DataManagementDefinitionGroupDetails<T>[];

  constructor(_entityApi: DataManagementDefinitionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementDefinitionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  projectCategory?: DmfProjectCategory | null;
  operationType?: DmfOperationType | null;
  generateDataPackage?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  truncateEntityData?: NoYes | null;
  details: DataManagementDefinitionGroupDetailsType<T>[];
}
