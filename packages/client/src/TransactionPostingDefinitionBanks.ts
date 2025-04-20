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
import type { TransactionPostingDefinitionBanksApi } from './TransactionPostingDefinitionBanksApi';
import { BankTransactionTypes } from './BankTransactionTypes';
import { TableGroupAll } from './TableGroupAll';
import { TableAll } from './TableAll';

/**
 * This class represents the entity "TransactionPostingDefinitionBanks" of service "d365_metadata".
 */
export class TransactionPostingDefinitionBanks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionBanksType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionBanks.
   */
  static override _entityName = 'TransactionPostingDefinitionBanks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionBanks entity.
   */
  static _keys = [
    'dataAreaId',
    'BankTransactionType',
    'BankCodeTableGroupAll',
    'MethodOfPaymentTableAll',
    'MethodOfPayment',
    'BankRelationGroup',
    'BankRelationTable'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: BankTransactionTypes | null;
  /**
   * Bank Code Table Group All.
   * @nullable
   */
  declare bankCodeTableGroupAll?: TableGroupAll | null;
  /**
   * Method Of Payment Table All.
   * @nullable
   */
  declare methodOfPaymentTableAll?: TableAll | null;
  /**
   * Method Of Payment.
   */
  declare methodOfPayment: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Relation Group.
   */
  declare bankRelationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Relation Table.
   */
  declare bankRelationTable: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Definition Id.
   * @nullable
   */
  declare postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionPostingDefinitionBanksApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionBanksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankTransactionType?: BankTransactionTypes | null;
  bankCodeTableGroupAll?: TableGroupAll | null;
  methodOfPaymentTableAll?: TableAll | null;
  methodOfPayment: DeserializedType<T, 'Edm.String'>;
  bankRelationGroup: DeserializedType<T, 'Edm.String'>;
  bankRelationTable: DeserializedType<T, 'Edm.String'>;
  postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
}
