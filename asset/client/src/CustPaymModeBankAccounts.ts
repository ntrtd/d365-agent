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
import type { CustPaymModeBankAccountsApi } from './CustPaymModeBankAccountsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CustPaymModeBankAccounts" of service "d365_metadata".
 */
export class CustPaymModeBankAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustPaymModeBankAccountsType<T>
{
  /**
   * Technical entity name for CustPaymModeBankAccounts.
   */
  static override _entityName = 'CustPaymModeBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustPaymModeBankAccounts entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CustPaymModeBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface CustPaymModeBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
