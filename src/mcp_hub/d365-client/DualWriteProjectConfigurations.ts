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
import type { DualWriteProjectConfigurationsApi } from './DualWriteProjectConfigurationsApi';
import { DualWriteAsyncMode } from './DualWriteAsyncMode';
import { NoYes } from './NoYes';
import { DualWriteProjectStatus } from './DualWriteProjectStatus';

/**
 * This class represents the entity "DualWriteProjectConfigurations" of service "d365_metadata".
 */
export class DualWriteProjectConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteProjectConfigurationsType<T>
{
  /**
   * Technical entity name for DualWriteProjectConfigurations.
   */
  static override _entityName = 'DualWriteProjectConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteProjectConfigurations entity.
   */
  static _keys = ['ProjectName'];
  /**
   * Project Name.
   */
  declare projectName: DeserializedType<T, 'Edm.String'>;
  /**
   * Async Mode.
   * @nullable
   */
  declare asyncMode?: DualWriteAsyncMode | null;
  /**
   * Sync Execution Id.
   * @nullable
   */
  declare syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Batch Lookup.
   * @nullable
   */
  declare enableBatchLookup?: NoYes | null;
  /**
   * Service Bus Connection String.
   * @nullable
   */
  declare serviceBusConnectionString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dual Write Alert Settings.
   * @nullable
   */
  declare dualWriteAlertSettings?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Entity Name.
   * @nullable
   */
  declare externalEntityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Cache.
   * @nullable
   */
  declare enableCache?: NoYes | null;
  /**
   * Integration Key.
   * @nullable
   */
  declare integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Account Sas Connection String.
   * @nullable
   */
  declare storageAccountSasConnectionString?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Query Filter Expression.
   * @nullable
   */
  declare queryFilterExpression?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Debug Mode.
   * @nullable
   */
  declare isDebugMode?: NoYes | null;
  /**
   * Disable Perf Enhancements.
   * @nullable
   */
  declare disablePerfEnhancements?: NoYes | null;
  /**
   * Enable Failure Reconciliation.
   * @nullable
   */
  declare enableFailureReconciliation?: NoYes | null;
  /**
   * Field Map.
   * @nullable
   */
  declare fieldMap?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Lookup Urls.
   * @nullable
   */
  declare externalLookupUrls?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partition Map.
   * @nullable
   */
  declare partitionMap?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Environment Url.
   * @nullable
   */
  declare externalEnvironmentUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DualWriteProjectStatus | null;
  /**
   * Is Delete.
   * @nullable
   */
  declare isDelete?: NoYes | null;
  /**
   * Internal Entity Name.
   * @nullable
   */
  declare internalEntityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dual Write Auto Pause Threshold Setting.
   * @nullable
   */
  declare dualWriteAutoPauseThresholdSetting?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Logical Entity Name.
   * @nullable
   */
  declare externalLogicalEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DualWriteProjectConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteProjectConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  projectName: DeserializedType<T, 'Edm.String'>;
  asyncMode?: DualWriteAsyncMode | null;
  syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  enableBatchLookup?: NoYes | null;
  serviceBusConnectionString?: DeserializedType<T, 'Edm.String'> | null;
  dualWriteAlertSettings?: DeserializedType<T, 'Edm.String'> | null;
  externalEntityName?: DeserializedType<T, 'Edm.String'> | null;
  enableCache?: NoYes | null;
  integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  storageAccountSasConnectionString?: DeserializedType<T, 'Edm.String'> | null;
  queryFilterExpression?: DeserializedType<T, 'Edm.String'> | null;
  isDebugMode?: NoYes | null;
  disablePerfEnhancements?: NoYes | null;
  enableFailureReconciliation?: NoYes | null;
  fieldMap?: DeserializedType<T, 'Edm.String'> | null;
  externalLookupUrls?: DeserializedType<T, 'Edm.String'> | null;
  partitionMap?: DeserializedType<T, 'Edm.String'> | null;
  externalEnvironmentUrl?: DeserializedType<T, 'Edm.String'> | null;
  status?: DualWriteProjectStatus | null;
  isDelete?: NoYes | null;
  internalEntityName?: DeserializedType<T, 'Edm.String'> | null;
  dualWriteAutoPauseThresholdSetting?: DeserializedType<T, 'Edm.String'> | null;
  externalLogicalEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
