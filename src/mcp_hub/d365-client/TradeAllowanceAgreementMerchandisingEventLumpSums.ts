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
import type { TradeAllowanceAgreementMerchandisingEventLumpSumsApi } from './TradeAllowanceAgreementMerchandisingEventLumpSumsApi';
import { McrLumpSumStatus } from './McrLumpSumStatus';
import { TamPaymentType } from './TamPaymentType';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  TradeAllowanceAgreementMerchandisingEvents,
  TradeAllowanceAgreementMerchandisingEventsType
} from './TradeAllowanceAgreementMerchandisingEvents';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';

/**
 * This class represents the entity "TradeAllowanceAgreementMerchandisingEventLumpSums" of service "d365_metadata".
 */
export class TradeAllowanceAgreementMerchandisingEventLumpSums<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAllowanceAgreementMerchandisingEventLumpSumsType<T>
{
  /**
   * Technical entity name for TradeAllowanceAgreementMerchandisingEventLumpSums.
   */
  static override _entityName =
    'TradeAllowanceAgreementMerchandisingEventLumpSums';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAllowanceAgreementMerchandisingEventLumpSums entity.
   */
  static _keys = [
    'dataAreaId',
    'TradeAllowanceAgreementId',
    'CustomerAccountNumber',
    'TradeAllowanceAgreementMerchandisingEventId',
    'LumpSumId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Id.
   */
  declare tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Allowance Agreement Merchandising Event Id.
   */
  declare tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Lump Sum Id.
   */
  declare lumpSumId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Suggested Lump Sum Amount.
   */
  declare suggestedLumpSumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lump Sum Approval Status.
   * @nullable
   */
  declare lumpSumApprovalStatus?: McrLumpSumStatus | null;
  /**
   * Approved Lump Sum Amount.
   */
  declare approvedLumpSumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Claim Payment Recipient Customer Account Number.
   * @nullable
   */
  declare claimPaymentRecipientCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Claim Payment Method.
   * @nullable
   */
  declare claimPaymentMethod?: TamPaymentType | null;
  /**
   * Claim Payment Recipient Vendor Account Number.
   * @nullable
   */
  declare claimPaymentRecipientVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lump Sum Details.
   * @nullable
   */
  declare lumpSumDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare claimPaymentRecipientVendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare claimPaymentRecipientCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEvents<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeaders<T> | null;

  constructor(
    _entityApi: TradeAllowanceAgreementMerchandisingEventLumpSumsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TradeAllowanceAgreementMerchandisingEventLumpSumsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
    T,
    'Edm.String'
  >;
  lumpSumId: DeserializedType<T, 'Edm.Int64'>;
  suggestedLumpSumAmount: DeserializedType<T, 'Edm.Decimal'>;
  lumpSumApprovalStatus?: McrLumpSumStatus | null;
  approvedLumpSumAmount: DeserializedType<T, 'Edm.Decimal'>;
  claimPaymentRecipientCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  claimPaymentMethod?: TamPaymentType | null;
  claimPaymentRecipientVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lumpSumDetails?: DeserializedType<T, 'Edm.String'> | null;
  claimPaymentRecipientVendor?: VendorsV2Type<T> | null;
  claimPaymentRecipientCustomer?: CustomersV3Type<T> | null;
  tradeAllowanceAgreementMerchandisingEvent?: TradeAllowanceAgreementMerchandisingEventsType<T> | null;
  tradeAllowanceAgreementHeader?: TradeAllowanceAgreementHeadersType<T> | null;
}
