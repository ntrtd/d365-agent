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
import type { MyPayStatementDetailsApi } from './MyPayStatementDetailsApi';
import { MyPayStatements, MyPayStatementsType } from './MyPayStatements';

/**
 * This class represents the entity "MyPayStatementDetails" of service "d365_metadata".
 */
export class MyPayStatementDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MyPayStatementDetailsType<T>
{
  /**
   * Technical entity name for MyPayStatementDetails.
   */
  static override _entityName = 'MyPayStatementDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MyPayStatementDetails entity.
   */
  static _keys = ['dataAreaId', 'PayStatementNumber', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link MyPayStatements} entity.
   */
  declare payStatement?: MyPayStatements<T> | null;

  constructor(_entityApi: MyPayStatementDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface MyPayStatementDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStatement?: MyPayStatementsType<T> | null;
}
