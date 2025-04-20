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
import type { TaxReportLedgerAccountsApi } from './TaxReportLedgerAccountsApi';

/**
 * This class represents the entity "TaxReportLedgerAccounts" of service "d365_metadata".
 */
export class TaxReportLedgerAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxReportLedgerAccountsType<T>
{
  /**
   * Technical entity name for TaxReportLedgerAccounts.
   */
  static override _entityName = 'TaxReportLedgerAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxReportLedgerAccounts entity.
   */
  static _keys = ['Company'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxReportLedgerAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxReportLedgerAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
