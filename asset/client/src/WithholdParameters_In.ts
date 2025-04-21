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
import type { WithholdParameters_InApi } from './WithholdParameters_InApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WithholdParameters_IN" of service "d365_metadata".
 */
export class WithholdParameters_In<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdParameters_InType<T>
{
  /**
   * Technical entity name for WithholdParameters_In.
   */
  static override _entityName = 'WithholdParameters_IN';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdParameters_In entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tcs Payment.
   * @nullable
   */
  declare tcsPayment?: NoYes | null;
  /**
   * Tcs Invoice.
   * @nullable
   */
  declare tcsInvoice?: NoYes | null;
  /**
   * Enable Warning Msg.
   * @nullable
   */
  declare enableWarningMsg?: NoYes | null;
  /**
   * Tcs Activate.
   * @nullable
   */
  declare tcsActivate?: NoYes | null;
  /**
   * Cross Company Payment.
   * @nullable
   */
  declare crossCompanyPayment?: NoYes | null;
  /**
   * Tds Payment.
   * @nullable
   */
  declare tdsPayment?: NoYes | null;
  /**
   * Tds Activate.
   * @nullable
   */
  declare tdsActivate?: NoYes | null;
  /**
   * Tds Invoice.
   * @nullable
   */
  declare tdsInvoice?: NoYes | null;

  constructor(_entityApi: WithholdParameters_InApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdParameters_InType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tcsPayment?: NoYes | null;
  tcsInvoice?: NoYes | null;
  enableWarningMsg?: NoYes | null;
  tcsActivate?: NoYes | null;
  crossCompanyPayment?: NoYes | null;
  tdsPayment?: NoYes | null;
  tdsActivate?: NoYes | null;
  tdsInvoice?: NoYes | null;
}
