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
import type { SmbAccountExportResultLinesApi } from './SmbAccountExportResultLinesApi';

/**
 * This class represents the entity "SmbAccountExportResultLines" of service "d365_metadata".
 */
export class SmbAccountExportResultLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SmbAccountExportResultLinesType<T>
{
  /**
   * Technical entity name for SmbAccountExportResultLines.
   */
  static override _entityName = 'SmbAccountExportResultLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SmbAccountExportResultLines entity.
   */
  static _keys = ['dataAreaId', 'AccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Id.
   */
  declare accountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount Credit.
   */
  declare amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Account Id.
   * @nullable
   */
  declare externalAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Debit.
   */
  declare amountDebit: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SmbAccountExportResultLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SmbAccountExportResultLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountId: DeserializedType<T, 'Edm.String'>;
  amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  externalAccountId?: DeserializedType<T, 'Edm.String'> | null;
  amountDebit: DeserializedType<T, 'Edm.Decimal'>;
}
