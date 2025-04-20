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
import type { BudgetTransactionCodeBiEntitiesApi } from './BudgetTransactionCodeBiEntitiesApi';
import { BudgetTransactionType } from './BudgetTransactionType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetTransactionCodeBiEntities" of service "d365_metadata".
 */
export class BudgetTransactionCodeBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetTransactionCodeBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetTransactionCodeBiEntities.
   */
  static override _entityName = 'BudgetTransactionCodeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetTransactionCodeBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Transaction Type.
   * @nullable
   */
  declare budgetTransactionType?: BudgetTransactionType | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Workflow Table Sequence Number.
   * @nullable
   */
  declare workflowTableSequenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetTransactionCodeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetTransactionCodeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetTransactionType?: BudgetTransactionType | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isDefault?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workflowTableSequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reason?: DeserializedType<T, 'Edm.String'> | null;
}
