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
import type { LeaveBankTransactionsV2Api } from './LeaveBankTransactionsV2Api';
import { LeaveTransactionType } from './LeaveTransactionType';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import { LeavePlansV2, LeavePlansV2Type } from './LeavePlansV2';
import { Workers, WorkersType } from './Workers';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "LeaveBankTransactionsV2" of service "d365_metadata".
 */
export class LeaveBankTransactionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveBankTransactionsV2Type<T>
{
  /**
   * Technical entity name for LeaveBankTransactionsV2.
   */
  static override _entityName = 'LeaveBankTransactionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBankTransactionsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'LeaveTypeId',
    'TransactionType',
    'TransactionDate',
    'TransactionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LeaveTransactionType | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;
  /**
   * Leave Plan Id.
   * @nullable
   */
  declare leavePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeavePlansV2} entity.
   */
  declare leavePlan?: LeavePlansV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: LeaveBankTransactionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface LeaveBankTransactionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  transactionType?: LeaveTransactionType | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionNumber: DeserializedType<T, 'Edm.Decimal'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  leavePlanId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  leaveType?: LeaveTypesType<T> | null;
  leavePlan?: LeavePlansV2Type<T> | null;
  worker?: WorkersType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
}
