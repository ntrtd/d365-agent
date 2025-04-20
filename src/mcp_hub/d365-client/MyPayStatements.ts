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
import type { MyPayStatementsApi } from './MyPayStatementsApi';
import { PayrollPaymentMethodType } from './PayrollPaymentMethodType';
import {
  MyPayStatementDetails,
  MyPayStatementDetailsType
} from './MyPayStatementDetails';

/**
 * This class represents the entity "MyPayStatements" of service "d365_metadata".
 */
export class MyPayStatements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MyPayStatementsType<T>
{
  /**
   * Technical entity name for MyPayStatements.
   */
  static override _entityName = 'MyPayStatements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MyPayStatements entity.
   */
  static _keys = ['dataAreaId', 'PayStatementNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Pay.
   */
  declare grossPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Method Type.
   * @nullable
   */
  declare paymentMethodType?: PayrollPaymentMethodType | null;
  /**
   * Net Pay.
   */
  declare netPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Cycle.
   * @nullable
   */
  declare payCycle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MyPayStatementDetails} entity.
   */
  declare details: MyPayStatementDetails<T>[];

  constructor(_entityApi: MyPayStatementsApi<T>) {
    super(_entityApi);
  }
}

export interface MyPayStatementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  grossPay: DeserializedType<T, 'Edm.Decimal'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentMethodType?: PayrollPaymentMethodType | null;
  netPay: DeserializedType<T, 'Edm.Decimal'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payCycle?: DeserializedType<T, 'Edm.String'> | null;
  details: MyPayStatementDetailsType<T>[];
}
