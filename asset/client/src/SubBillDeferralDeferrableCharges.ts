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
import type { SubBillDeferralDeferrableChargesApi } from './SubBillDeferralDeferrableChargesApi';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { SubBillDeferralChargePostingCode } from './SubBillDeferralChargePostingCode';

/**
 * This class represents the entity "SubBillDeferralDeferrableChargesCollection" of service "d365_metadata".
 */
export class SubBillDeferralDeferrableCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralDeferrableChargesType<T>
{
  /**
   * Technical entity name for SubBillDeferralDeferrableCharges.
   */
  static override _entityName = 'SubBillDeferralDeferrableChargesCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralDeferrableCharges entity.
   */
  static _keys = [
    'dataAreaId',
    'SubBillDeferralTransactionType',
    'SubBillDeferralChargeCode',
    'SubBillDeferralMarkupCodeRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Bill Deferral Transaction Type.
   * @nullable
   */
  declare subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  /**
   * Sub Bill Deferral Charge Code.
   * @nullable
   */
  declare subBillDeferralChargeCode?: SubBillDeferralChargePostingCode | null;
  /**
   * Sub Bill Deferral Markup Code Relation.
   */
  declare subBillDeferralMarkupCodeRelation: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SubBillDeferralDeferrableChargesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralDeferrableChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  subBillDeferralTransactionType?: SubBillDeferralTransactionType | null;
  subBillDeferralChargeCode?: SubBillDeferralChargePostingCode | null;
  subBillDeferralMarkupCodeRelation: DeserializedType<T, 'Edm.String'>;
}
