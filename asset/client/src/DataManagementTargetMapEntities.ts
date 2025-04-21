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
import type { DataManagementTargetMapEntitiesApi } from './DataManagementTargetMapEntitiesApi';
import { NoYes } from './NoYes';
import { Types } from './Types';

/**
 * This class represents the entity "DataManagementTargetMapEntities" of service "d365_metadata".
 */
export class DataManagementTargetMapEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementTargetMapEntitiesType<T>
{
  /**
   * Technical entity name for DataManagementTargetMapEntities.
   */
  static override _entityName = 'DataManagementTargetMapEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementTargetMapEntities entity.
   */
  static _keys = ['StagingField', 'Entity'];
  /**
   * Staging Field.
   */
  declare stagingField: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity.
   */
  declare entity: DeserializedType<T, 'Edm.String'>;
  /**
   * Target Table.
   * @nullable
   */
  declare targetTable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Staging Field.
   * @nullable
   */
  declare shortStagingField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Auto Manual.
   * @nullable
   */
  declare isAutoManual?: NoYes | null;
  /**
   * Target Field.
   * @nullable
   */
  declare targetField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rec Version Value.
   */
  declare recVersionValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Target Data Source Name.
   * @nullable
   */
  declare targetDataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Label.
   * @nullable
   */
  declare entityLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Required.
   * @nullable
   */
  declare isRequired?: NoYes | null;
  /**
   * Data Source Name.
   * @nullable
   */
  declare dataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Length.
   */
  declare fieldLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Field Enabled.
   * @nullable
   */
  declare isFieldEnabled?: NoYes | null;
  /**
   * Field Aot Name.
   * @nullable
   */
  declare fieldAotName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Source Field.
   * @nullable
   */
  declare dataSourceField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Data Type Value.
   * @nullable
   */
  declare fieldDataTypeValue?: Types | null;
  /**
   * Is System.
   * @nullable
   */
  declare isSystem?: NoYes | null;
  /**
   * Array Index.
   */
  declare arrayIndex: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: DataManagementTargetMapEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementTargetMapEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  stagingField: DeserializedType<T, 'Edm.String'>;
  entity: DeserializedType<T, 'Edm.String'>;
  targetTable?: DeserializedType<T, 'Edm.String'> | null;
  shortStagingField?: DeserializedType<T, 'Edm.String'> | null;
  isAutoManual?: NoYes | null;
  targetField?: DeserializedType<T, 'Edm.String'> | null;
  recVersionValue: DeserializedType<T, 'Edm.Int32'>;
  targetDataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  entityLabel?: DeserializedType<T, 'Edm.String'> | null;
  isRequired?: NoYes | null;
  dataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  fieldLength: DeserializedType<T, 'Edm.Int32'>;
  isFieldEnabled?: NoYes | null;
  fieldAotName?: DeserializedType<T, 'Edm.String'> | null;
  dataSourceField?: DeserializedType<T, 'Edm.String'> | null;
  fieldDataTypeValue?: Types | null;
  isSystem?: NoYes | null;
  arrayIndex: DeserializedType<T, 'Edm.Int32'>;
}
