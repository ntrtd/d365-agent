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
import type { DataManagementEntitiesApi } from './DataManagementEntitiesApi';
import { NoYes } from './NoYes';
import { DmfChangeTrackingType } from './DmfChangeTrackingType';
import { EntityCategory } from './EntityCategory';

/**
 * This class represents the entity "DataManagementEntities" of service "d365_metadata".
 */
export class DataManagementEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementEntitiesType<T>
{
  /**
   * Technical entity name for DataManagementEntities.
   */
  static override _entityName = 'DataManagementEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementEntities entity.
   */
  static _keys = ['EntityName'];
  /**
   * Entity Name.
   */
  declare entityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Is Enabled.
   * @nullable
   */
  declare entityIsEnabled?: NoYes | null;
  /**
   * Target Name.
   * @nullable
   */
  declare targetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Codes.
   * @nullable
   */
  declare countryRegionCodes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Shared.
   * @nullable
   */
  declare isShared?: NoYes | null;
  /**
   * Change Tracking Type.
   * @nullable
   */
  declare changeTrackingType?: DmfChangeTrackingType | null;
  /**
   * Rec Version Value.
   */
  declare recVersionValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Entity Key.
   * @nullable
   */
  declare entityKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: EntityCategory | null;
  /**
   * Staging Table Name.
   * @nullable
   */
  declare stagingTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tags.
   * @nullable
   */
  declare tags?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modules.
   * @nullable
   */
  declare modules?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration Key Name.
   * @nullable
   */
  declare configurationKeyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DataManagementEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityName: DeserializedType<T, 'Edm.String'>;
  entityIsEnabled?: NoYes | null;
  targetName?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCodes?: DeserializedType<T, 'Edm.String'> | null;
  isShared?: NoYes | null;
  changeTrackingType?: DmfChangeTrackingType | null;
  recVersionValue: DeserializedType<T, 'Edm.Int32'>;
  entityKey?: DeserializedType<T, 'Edm.String'> | null;
  category?: EntityCategory | null;
  stagingTableName?: DeserializedType<T, 'Edm.String'> | null;
  tags?: DeserializedType<T, 'Edm.String'> | null;
  modules?: DeserializedType<T, 'Edm.String'> | null;
  configurationKeyName?: DeserializedType<T, 'Edm.String'> | null;
}
