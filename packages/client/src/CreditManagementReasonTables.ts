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
import type { CreditManagementReasonTablesApi } from './CreditManagementReasonTablesApi';
import { CredManReasonTableType } from './CredManReasonTableType';

/**
 * This class represents the entity "CreditManagementReasonTables" of service "d365_metadata".
 */
export class CreditManagementReasonTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementReasonTablesType<T>
{
  /**
   * Technical entity name for CreditManagementReasonTables.
   */
  static override _entityName = 'CreditManagementReasonTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementReasonTables entity.
   */
  static _keys = ['dataAreaId', 'ReasonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Id.
   */
  declare reasonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: CredManReasonTableType | null;

  constructor(_entityApi: CreditManagementReasonTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementReasonTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: CredManReasonTableType | null;
}
