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
import type { EssLeaveBalancesApi } from './EssLeaveBalancesApi';
import { EssLeaveTypes, EssLeaveTypesType } from './EssLeaveTypes';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';

/**
 * This class represents the entity "EssLeaveBalances" of service "d365_metadata".
 */
export class EssLeaveBalances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EssLeaveBalancesType<T>
{
  /**
   * Technical entity name for EssLeaveBalances.
   */
  static override _entityName = 'EssLeaveBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveBalances entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'LeaveTypeId'];
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
   * Last Carry Forward Amount.
   */
  declare lastCarryForwardAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taken This Year.
   */
  declare takenThisYear: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total This Year.
   */
  declare totalThisYear: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrual Rate Description.
   * @nullable
   */
  declare accrualRateDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance Available.
   */
  declare balanceAvailable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EssLeaveTypes} entity.
   */
  declare leaveType?: EssLeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare nonEssLeaveType?: LeaveTypes<T> | null;

  constructor(_entityApi: EssLeaveBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  lastCarryForwardAmount: DeserializedType<T, 'Edm.Decimal'>;
  takenThisYear: DeserializedType<T, 'Edm.Decimal'>;
  totalThisYear: DeserializedType<T, 'Edm.Decimal'>;
  accrualRateDescription?: DeserializedType<T, 'Edm.String'> | null;
  balanceAvailable: DeserializedType<T, 'Edm.Decimal'>;
  leaveType?: EssLeaveTypesType<T> | null;
  nonEssLeaveType?: LeaveTypesType<T> | null;
}
