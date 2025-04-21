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
import type { LedgerMatrixAccountReportsApi } from './LedgerMatrixAccountReportsApi';
import { AmountDisplaySignCn } from './AmountDisplaySignCn';

/**
 * This class represents the entity "LedgerMatrixAccountReports" of service "d365_metadata".
 */
export class LedgerMatrixAccountReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerMatrixAccountReportsType<T>
{
  /**
   * Technical entity name for LedgerMatrixAccountReports.
   */
  static override _entityName = 'LedgerMatrixAccountReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerMatrixAccountReports entity.
   */
  static _keys = ['dataAreaId', 'AccountMatrix', 'SubLevelMainAccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Matrix.
   */
  declare accountMatrix: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Level Main Account Id.
   */
  declare subLevelMainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id.
   * @nullable
   */
  declare mainAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: AmountDisplaySignCn | null;

  constructor(_entityApi: LedgerMatrixAccountReportsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerMatrixAccountReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountMatrix: DeserializedType<T, 'Edm.String'>;
  subLevelMainAccountId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountId?: DeserializedType<T, 'Edm.String'> | null;
  format?: AmountDisplaySignCn | null;
}
