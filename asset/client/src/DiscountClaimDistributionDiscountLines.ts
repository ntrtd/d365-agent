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
import type { DiscountClaimDistributionDiscountLinesApi } from './DiscountClaimDistributionDiscountLinesApi';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { GupDiscountClaimPostingProfileType } from './GupDiscountClaimPostingProfileType';

/**
 * This class represents the entity "DiscountClaimDistributionDiscountLines" of service "d365_metadata".
 */
export class DiscountClaimDistributionDiscountLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountClaimDistributionDiscountLinesType<T>
{
  /**
   * Technical entity name for DiscountClaimDistributionDiscountLines.
   */
  static override _entityName = 'DiscountClaimDistributionDiscountLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountClaimDistributionDiscountLines entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'LineNum', 'PostingProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
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
   * Posting Profile Type.
   * @nullable
   */
  declare postingProfileType?: GupDiscountClaimPostingProfileType | null;

  constructor(_entityApi: DiscountClaimDistributionDiscountLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountClaimDistributionDiscountLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  calcType?: GupDiscountClaimCalcType | null;
  postingProfileType?: GupDiscountClaimPostingProfileType | null;
}
