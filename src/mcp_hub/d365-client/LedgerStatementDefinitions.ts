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
import type { LedgerStatementDefinitionsApi } from './LedgerStatementDefinitionsApi';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';

/**
 * This class represents the entity "LedgerStatementDefinitions" of service "d365_metadata".
 */
export class LedgerStatementDefinitions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerStatementDefinitionsType<T>
{
  /**
   * Technical entity name for LedgerStatementDefinitions.
   */
  static override _entityName = 'LedgerStatementDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerStatementDefinitions entity.
   */
  static _keys = ['dataAreaId', 'Line', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Descritption.
   * @nullable
   */
  declare descritption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invert Sign.
   * @nullable
   */
  declare invertSign?: NoYes | null;
  /**
   * Rounding Form.
   * @nullable
   */
  declare roundingForm?: RoundOffType | null;
  /**
   * Total.
   */
  declare total: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mark.
   * @nullable
   */
  declare mark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Of Accounts.
   * @nullable
   */
  declare groupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerStatementDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerStatementDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  descritption?: DeserializedType<T, 'Edm.String'> | null;
  invertSign?: NoYes | null;
  roundingForm?: RoundOffType | null;
  total: DeserializedType<T, 'Edm.Int32'>;
  mark?: DeserializedType<T, 'Edm.String'> | null;
  groupOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
}
