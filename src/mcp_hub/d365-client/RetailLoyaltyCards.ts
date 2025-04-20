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
import type { RetailLoyaltyCardsApi } from './RetailLoyaltyCardsApi';
import { RetailLoyaltyTenderTypeBase } from './RetailLoyaltyTenderTypeBase';

/**
 * This class represents the entity "RetailLoyaltyCards" of service "d365_metadata".
 */
export class RetailLoyaltyCards<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailLoyaltyCardsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyCards.
   */
  static override _entityName = 'RetailLoyaltyCards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyCards entity.
   */
  static _keys = ['CardNumber'];
  /**
   * Card Number.
   */
  declare cardNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Tender Type.
   * @nullable
   */
  declare cardTenderType?: RetailLoyaltyTenderTypeBase | null;
  /**
   * Loyalty Enrollment Date Local.
   */
  declare loyaltyEnrollmentDateLocal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replacement Card Number.
   * @nullable
   */
  declare replacementCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Enrollment Time.
   */
  declare loyaltyEnrollmentTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loyalty Enrollment Time Local.
   */
  declare loyaltyEnrollmentTimeLocal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Enrollment Date.
   */
  declare loyaltyEnrollmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Om Operating Unit Number.
   * @nullable
   */
  declare omOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyCardsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cardNumber: DeserializedType<T, 'Edm.String'>;
  cardTenderType?: RetailLoyaltyTenderTypeBase | null;
  loyaltyEnrollmentDateLocal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replacementCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyEnrollmentTime: DeserializedType<T, 'Edm.Int32'>;
  loyaltyEnrollmentTimeLocal: DeserializedType<T, 'Edm.Int32'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyEnrollmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  omOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
}
