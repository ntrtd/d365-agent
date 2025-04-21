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
import type { PaymentScheduleLinesApi } from './PaymentScheduleLinesApi';
import { PercentAmount } from './PercentAmount';
import { NoYes } from './NoYes';
import { PaymentSchedules, PaymentSchedulesType } from './PaymentSchedules';

/**
 * This class represents the entity "PaymentScheduleLines" of service "d365_metadata".
 */
export class PaymentScheduleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymentScheduleLinesType<T>
{
  /**
   * Technical entity name for PaymentScheduleLines.
   */
  static override _entityName = 'PaymentScheduleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentScheduleLines entity.
   */
  static _keys = ['dataAreaId', 'PaymentScheduleName', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Schedule Name.
   */
  declare paymentScheduleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Periods After Due Date.
   */
  declare periodsAfterDueDate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Percent Or Amount Value.
   */
  declare percentOrAmountValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent Or Amount.
   * @nullable
   */
  declare percentOrAmount?: PercentAmount | null;
  /**
   * Is Shipping Line.
   * @nullable
   */
  declare isShippingLine?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link PaymentSchedules} entity.
   */
  declare paymentSchedule?: PaymentSchedules<T> | null;

  constructor(_entityApi: PaymentScheduleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentScheduleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentScheduleName: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  periodsAfterDueDate: DeserializedType<T, 'Edm.Int32'>;
  percentOrAmountValue: DeserializedType<T, 'Edm.Decimal'>;
  percentOrAmount?: PercentAmount | null;
  isShippingLine?: NoYes | null;
  paymentSchedule?: PaymentSchedulesType<T> | null;
}
