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
import type { CallCenterCustomerCreditPaymentsApi } from './CallCenterCustomerCreditPaymentsApi';
import { NoYes } from './NoYes';
import { McrCustPaymStatus } from './McrCustPaymStatus';
import { McrCustPaymType } from './McrCustPaymType';

/**
 * This class represents the entity "CallCenterCustomerCreditPayments" of service "d365_metadata".
 */
export class CallCenterCustomerCreditPayments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterCustomerCreditPaymentsType<T>
{
  /**
   * Technical entity name for CallCenterCustomerCreditPayments.
   */
  static override _entityName = 'CallCenterCustomerCreditPayments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCustomerCreditPayments entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'CustomerCreditId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Credit Id.
   */
  declare customerCreditId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Plan Refund.
   * @nullable
   */
  declare isPlanRefund?: NoYes | null;
  /**
   * Retail Channel Id.
   * @nullable
   */
  declare retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Credit Card Id.
   * @nullable
   */
  declare uniqueCreditCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Gift Card Id.
   * @nullable
   */
  declare retailGiftCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent Amount.
   */
  declare percentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Credit Card Processed.
   * @nullable
   */
  declare isCreditCardProcessed?: NoYes | null;
  /**
   * Check Number.
   * @nullable
   */
  declare checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Check Authorized.
   * @nullable
   */
  declare isCheckAuthorized?: NoYes | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Retry Number.
   */
  declare authorizationRetryNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Prepay.
   * @nullable
   */
  declare isPrepay?: NoYes | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is On Account Authorized.
   * @nullable
   */
  declare isOnAccountAuthorized?: NoYes | null;
  /**
   * Posted Amount.
   */
  declare postedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: McrCustPaymStatus | null;
  /**
   * Retail Store Tender Type Id.
   * @nullable
   */
  declare retailStoreTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Type.
   * @nullable
   */
  declare customerPaymentType?: McrCustPaymType | null;
  /**
   * Retail Store Card Type Id.
   * @nullable
   */
  declare retailStoreCardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Sched Id.
   * @nullable
   */
  declare paymentSchedId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterCustomerCreditPaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCustomerCreditPaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  customerCreditId: DeserializedType<T, 'Edm.String'>;
  isPlanRefund?: NoYes | null;
  retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  uniqueCreditCardId?: DeserializedType<T, 'Edm.String'> | null;
  retailGiftCardId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  percentAmount: DeserializedType<T, 'Edm.Decimal'>;
  isCreditCardProcessed?: NoYes | null;
  checkNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCheckAuthorized?: NoYes | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  authorizationRetryNumber: DeserializedType<T, 'Edm.Int32'>;
  isPrepay?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  isOnAccountAuthorized?: NoYes | null;
  postedAmount: DeserializedType<T, 'Edm.Decimal'>;
  status?: McrCustPaymStatus | null;
  retailStoreTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentType?: McrCustPaymType | null;
  retailStoreCardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  paymentSchedId?: DeserializedType<T, 'Edm.String'> | null;
}
