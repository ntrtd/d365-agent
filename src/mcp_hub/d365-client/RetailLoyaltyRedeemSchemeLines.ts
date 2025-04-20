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
import type { RetailLoyaltyRedeemSchemeLinesApi } from './RetailLoyaltyRedeemSchemeLinesApi';
import { RetailLoyaltyRewardType } from './RetailLoyaltyRewardType';

/**
 * This class represents the entity "RetailLoyaltyRedeemSchemeLines" of service "d365_metadata".
 */
export class RetailLoyaltyRedeemSchemeLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyRedeemSchemeLinesType<T>
{
  /**
   * Technical entity name for RetailLoyaltyRedeemSchemeLines.
   */
  static override _entityName = 'RetailLoyaltyRedeemSchemeLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyRedeemSchemeLines entity.
   */
  static _keys = ['LoyaltySchemeId', 'LineNumber'];
  /**
   * Loyalty Scheme Id.
   */
  declare loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Reward Amount Qty.
   */
  declare toRewardAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Reward Point Id.
   * @nullable
   */
  declare fromRewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Program Name.
   * @nullable
   */
  declare loyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Reward Type.
   * @nullable
   */
  declare toRewardType?: RetailLoyaltyRewardType | null;
  /**
   * Affiliation Name.
   * @nullable
   */
  declare affiliationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Reward Point Amount Qty.
   */
  declare fromRewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Data Area Id.
   * @nullable
   */
  declare sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Tier Id.
   * @nullable
   */
  declare loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Reward Amount Currency.
   * @nullable
   */
  declare toRewardAmountCurrency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyRedeemSchemeLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyRedeemSchemeLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toRewardAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  style?: DeserializedType<T, 'Edm.String'> | null;
  fromRewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  toRewardType?: RetailLoyaltyRewardType | null;
  affiliationName?: DeserializedType<T, 'Edm.String'> | null;
  fromRewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  size?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  toRewardAmountCurrency?: DeserializedType<T, 'Edm.String'> | null;
}
