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
import type { DataManagementDefinitionGroupDetailsApi } from './DataManagementDefinitionGroupDetailsApi';
import { NoYes } from './NoYes';
import { EntityCategory } from './EntityCategory';
import { DmfModule } from './DmfModule';
import { DmfRefreshType } from './DmfRefreshType';
import { NoYesError } from './NoYesError';
import {
  DataManagementDefinitionGroups,
  DataManagementDefinitionGroupsType
} from './DataManagementDefinitionGroups';

/**
 * This class represents the entity "DataManagementDefinitionGroupDetails" of service "d365_metadata".
 */
export class DataManagementDefinitionGroupDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementDefinitionGroupDetailsType<T>
{
  /**
   * Technical entity name for DataManagementDefinitionGroupDetails.
   */
  static override _entityName = 'DataManagementDefinitionGroupDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementDefinitionGroupDetails entity.
   */
  static _keys = ['DefinitionGroupId', 'EntityName'];
  /**
   * Definition Group Id.
   */
  declare definitionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Name.
   */
  declare entityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Run Validate Field.
   * @nullable
   */
  declare runValidateField?: NoYes | null;
  /**
   * Level In Execution Unit.
   */
  declare levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Input File Path.
   * @nullable
   */
  declare inputFilePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Run Business Validation.
   * @nullable
   */
  declare runBusinessValidation?: NoYes | null;
  /**
   * Entity Category.
   * @nullable
   */
  declare entityCategory?: EntityCategory | null;
  /**
   * Fail Execution Unit On Error.
   * @nullable
   */
  declare failExecutionUnitOnError?: NoYes | null;
  /**
   * Skip Staging.
   * @nullable
   */
  declare skipStaging?: NoYes | null;
  /**
   * Query For Odbc.
   * @nullable
   */
  declare queryForOdbc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Run Business Logic.
   * @nullable
   */
  declare runBusinessLogic?: NoYes | null;
  /**
   * Auto Generate Mapping.
   * @nullable
   */
  declare autoGenerateMapping?: NoYes | null;
  /**
   * Query Data.
   * @nullable
   */
  declare queryData?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Is Transformed.
   * @nullable
   */
  declare isTransformed?: NoYes | null;
  /**
   * Parent Entity Name.
   * @nullable
   */
  declare parentEntityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Module.
   * @nullable
   */
  declare sysModule?: DmfModule | null;
  /**
   * Entity Xml Name.
   * @nullable
   */
  declare entityXmlName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tags.
   * @nullable
   */
  declare tags?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence In Level.
   */
  declare sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Refresh Type.
   * @nullable
   */
  declare defaultRefreshType?: DmfRefreshType | null;
  /**
   * Disable.
   * @nullable
   */
  declare disable?: NoYes | null;
  /**
   * Excel Sheet Name.
   * @nullable
   */
  declare excelSheetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sample File Path Original.
   * @nullable
   */
  declare sampleFilePathOriginal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sample File Path.
   * @nullable
   */
  declare sampleFilePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Execution Unit.
   */
  declare executionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Format.
   * @nullable
   */
  declare sourceFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package File Path.
   * @nullable
   */
  declare packageFilePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Status.
   * @nullable
   */
  declare validationStatus?: NoYesError | null;
  /**
   * Fail Level On Error.
   * @nullable
   */
  declare failLevelOnError?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DataManagementDefinitionGroups} entity.
   */
  declare definitionGroup?: DataManagementDefinitionGroups<T> | null;

  constructor(_entityApi: DataManagementDefinitionGroupDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementDefinitionGroupDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  entityName: DeserializedType<T, 'Edm.String'>;
  runValidateField?: NoYes | null;
  levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  inputFilePath?: DeserializedType<T, 'Edm.String'> | null;
  runBusinessValidation?: NoYes | null;
  entityCategory?: EntityCategory | null;
  failExecutionUnitOnError?: NoYes | null;
  skipStaging?: NoYes | null;
  queryForOdbc?: DeserializedType<T, 'Edm.String'> | null;
  runBusinessLogic?: NoYes | null;
  autoGenerateMapping?: NoYes | null;
  queryData?: DeserializedType<T, 'Edm.Binary'> | null;
  isTransformed?: NoYes | null;
  parentEntityName?: DeserializedType<T, 'Edm.String'> | null;
  sysModule?: DmfModule | null;
  entityXmlName?: DeserializedType<T, 'Edm.String'> | null;
  tags?: DeserializedType<T, 'Edm.String'> | null;
  sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  defaultRefreshType?: DmfRefreshType | null;
  disable?: NoYes | null;
  excelSheetName?: DeserializedType<T, 'Edm.String'> | null;
  sampleFilePathOriginal?: DeserializedType<T, 'Edm.String'> | null;
  sampleFilePath?: DeserializedType<T, 'Edm.String'> | null;
  executionUnit: DeserializedType<T, 'Edm.Int32'>;
  sourceFormat?: DeserializedType<T, 'Edm.String'> | null;
  packageFilePath?: DeserializedType<T, 'Edm.String'> | null;
  validationStatus?: NoYesError | null;
  failLevelOnError?: NoYes | null;
  definitionGroup?: DataManagementDefinitionGroupsType<T> | null;
}
