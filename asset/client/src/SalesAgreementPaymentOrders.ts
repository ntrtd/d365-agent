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
import type { SalesAgreementPaymentOrdersApi } from './SalesAgreementPaymentOrdersApi';
import { NoYes } from './NoYes';
import { PaymentOrderPeriodCodeRu } from './PaymentOrderPeriodCodeRu';

/**
 * This class represents the entity "SalesAgreementPaymentOrders" of service "d365_metadata".
 */
export class SalesAgreementPaymentOrders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAgreementPaymentOrdersType<T>
{
  /**
   * Technical entity name for SalesAgreementPaymentOrders.
   */
  static override _entityName = 'SalesAgreementPaymentOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementPaymentOrders entity.
   */
  static _keys = ['LegalEntity', 'SalesAgreement'];
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement.
   */
  declare salesAgreement: DeserializedType<T, 'Edm.String'>;
  /**
   * Rcoad.
   * @nullable
   */
  declare rcoad?: NoYes | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Of Payment.
   * @nullable
   */
  declare orderOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Payment.
   * @nullable
   */
  declare originPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Code.
   * @nullable
   */
  declare periodCode?: PaymentOrderPeriodCodeRu | null;
  /**
   * Purpose Text.
   * @nullable
   */
  declare purposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Status.
   * @nullable
   */
  declare numberStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rrc Printing.
   * @nullable
   */
  declare rrcPrinting?: NoYes | null;
  /**
   * Budget Revenue Code.
   * @nullable
   */
  declare budgetRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Date.
   */
  declare periodDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Uci.
   * @nullable
   */
  declare uci?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Number.
   */
  declare periodNumber: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SalesAgreementPaymentOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementPaymentOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntity: DeserializedType<T, 'Edm.String'>;
  salesAgreement: DeserializedType<T, 'Edm.String'>;
  rcoad?: NoYes | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  originPayment?: DeserializedType<T, 'Edm.String'> | null;
  periodCode?: PaymentOrderPeriodCodeRu | null;
  purposeText?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  numberStatus?: DeserializedType<T, 'Edm.String'> | null;
  paymentType?: DeserializedType<T, 'Edm.String'> | null;
  rrcPrinting?: NoYes | null;
  budgetRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  periodDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  uci?: DeserializedType<T, 'Edm.String'> | null;
  periodNumber: DeserializedType<T, 'Edm.Int32'>;
}
