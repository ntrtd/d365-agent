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
import type { VendPaymModeBankAccountsApi } from './VendPaymModeBankAccountsApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "VendPaymModeBankAccounts" of service "d365_metadata".
 */
export class VendPaymModeBankAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendPaymModeBankAccountsType<T>
{
  /**
   * Technical entity name for VendPaymModeBankAccounts.
   */
  static override _entityName = 'VendPaymModeBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendPaymModeBankAccounts entity.
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

  constructor(_entityApi: VendPaymModeBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface VendPaymModeBankAccountsType<
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
