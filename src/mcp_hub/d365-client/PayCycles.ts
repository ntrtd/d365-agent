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
import type { PayCyclesApi } from './PayCyclesApi';
import { PayrollTimePeriod } from './PayrollTimePeriod';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import {
  PayrollPositionDetails,
  PayrollPositionDetailsType
} from './PayrollPositionDetails';
import { PayPeriods, PayPeriodsType } from './PayPeriods';
import { Positions, PositionsType } from './Positions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "PayCycles" of service "d365_metadata".
 */
export class PayCycles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayCyclesType<T>
{
  /**
   * Technical entity name for PayCycles.
   */
  static override _entityName = 'PayCycles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayCycles entity.
   */
  static _keys = ['PayCycleId'];
  /**
   * Pay Cycle Id.
   */
  declare payCycleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle Frequency.
   * @nullable
   */
  declare payCycleFrequency?: PayrollTimePeriod | null;
  /**
   * One-to-many navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatement: PayStatementHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollPositionDetails} entity.
   */
  declare payrollPositionDetail?: PayrollPositionDetails<T> | null;
  /**
   * One-to-many navigation property to the {@link PayPeriods} entity.
   */
  declare payPeriod: PayPeriods<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];

  constructor(_entityApi: PayCyclesApi<T>) {
    super(_entityApi);
  }
}

export interface PayCyclesType<T extends DeSerializers = DefaultDeSerializers> {
  payCycleId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payCycleFrequency?: PayrollTimePeriod | null;
  payStatement: PayStatementHeadersType<T>[];
  payrollPositionDetail?: PayrollPositionDetailsType<T> | null;
  payPeriod: PayPeriodsType<T>[];
  positions: PositionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
}
