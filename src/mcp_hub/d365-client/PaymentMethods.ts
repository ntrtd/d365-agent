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
import type { PaymentMethodsApi } from './PaymentMethodsApi';
import { TrvCostOwner } from './TrvCostOwner';
import { NoYes } from './NoYes';
import { TrvPostMethod } from './TrvPostMethod';

/**
 * This class represents the entity "PaymentMethods" of service "d365_metadata".
 */
export class PaymentMethods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentMethodsType<T>
{
  /**
   * Technical entity name for PaymentMethods.
   */
  static override _entityName = 'PaymentMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentMethods entity.
   */
  static _keys = ['dataAreaId', 'PayMethod'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Method.
   */
  declare payMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Payed By Txt.
   * @nullable
   */
  declare payedByTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Owner.
   * @nullable
   */
  declare costOwner?: TrvCostOwner | null;
  /**
   * Automatic Payment.
   * @nullable
   */
  declare automaticPayment?: NoYes | null;
  /**
   * Post Method.
   * @nullable
   */
  declare postMethod?: TrvPostMethod | null;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: PaymentMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payMethod: DeserializedType<T, 'Edm.String'>;
  payedByTxt?: DeserializedType<T, 'Edm.String'> | null;
  costOwner?: TrvCostOwner | null;
  automaticPayment?: NoYes | null;
  postMethod?: TrvPostMethod | null;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
