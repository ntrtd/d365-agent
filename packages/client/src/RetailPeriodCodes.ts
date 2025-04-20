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
import type { RetailPeriodCodesApi } from './RetailPeriodCodesApi';
import { LedgerPeriodType } from './LedgerPeriodType';
import { StartEnd } from './StartEnd';
import { PeriodUnitCalc } from './PeriodUnitCalc';

/**
 * This class represents the entity "RetailPeriodCodes" of service "d365_metadata".
 */
export class RetailPeriodCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPeriodCodesType<T>
{
  /**
   * Technical entity name for RetailPeriodCodes.
   */
  static override _entityName = 'RetailPeriodCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPeriodCodes entity.
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Period 2.
   * @nullable
   */
  declare startPeriod2?: LedgerPeriodType | null;
  /**
   * Start Period 1.
   * @nullable
   */
  declare startPeriod1?: LedgerPeriodType | null;
  /**
   * End Function 2.
   * @nullable
   */
  declare endFunction2?: StartEnd | null;
  /**
   * End Unit.
   * @nullable
   */
  declare endUnit?: PeriodUnitCalc | null;
  /**
   * Start Fixed Date.
   */
  declare startFixedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Change.
   */
  declare startChange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Function 2.
   * @nullable
   */
  declare startFunction2?: StartEnd | null;
  /**
   * End Fixed Date.
   */
  declare endFixedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Period 2.
   * @nullable
   */
  declare endPeriod2?: LedgerPeriodType | null;
  /**
   * End Period 1.
   * @nullable
   */
  declare endPeriod1?: LedgerPeriodType | null;
  /**
   * Start Unit.
   * @nullable
   */
  declare startUnit?: PeriodUnitCalc | null;
  /**
   * End Function 1.
   * @nullable
   */
  declare endFunction1?: StartEnd | null;
  /**
   * End Change.
   */
  declare endChange: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Function 1.
   * @nullable
   */
  declare startFunction1?: StartEnd | null;

  constructor(_entityApi: RetailPeriodCodesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPeriodCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  startPeriod2?: LedgerPeriodType | null;
  startPeriod1?: LedgerPeriodType | null;
  endFunction2?: StartEnd | null;
  endUnit?: PeriodUnitCalc | null;
  startFixedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startChange: DeserializedType<T, 'Edm.Int32'>;
  startFunction2?: StartEnd | null;
  endFixedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endPeriod2?: LedgerPeriodType | null;
  endPeriod1?: LedgerPeriodType | null;
  startUnit?: PeriodUnitCalc | null;
  endFunction1?: StartEnd | null;
  endChange: DeserializedType<T, 'Edm.Int32'>;
  startFunction1?: StartEnd | null;
}
