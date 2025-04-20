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
import type { DiscountVendorClaimFeeSetupsApi } from './DiscountVendorClaimFeeSetupsApi';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { TableGroupAll } from './TableGroupAll';

/**
 * This class represents the entity "DiscountVendorClaimFeeSetups" of service "d365_metadata".
 */
export class DiscountVendorClaimFeeSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountVendorClaimFeeSetupsType<T>
{
  /**
   * Technical entity name for DiscountVendorClaimFeeSetups.
   */
  static override _entityName = 'DiscountVendorClaimFeeSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountVendorClaimFeeSetups entity.
   */
  static _keys = ['dataAreaId', 'ClaimFeeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Claim Fee Id.
   */
  declare claimFeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calc Type.
   * @nullable
   */
  declare calcType?: GupDiscountClaimCalcType | null;
  /**
   * Vendor Code.
   * @nullable
   */
  declare vendorCode?: TableGroupAll | null;
  /**
   * Account Selection.
   * @nullable
   */
  declare accountSelection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DiscountVendorClaimFeeSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountVendorClaimFeeSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  claimFeeId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  calcType?: GupDiscountClaimCalcType | null;
  vendorCode?: TableGroupAll | null;
  accountSelection?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
}
