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
import type { RetailLoyaltyEarnSchemeLinesApi } from './RetailLoyaltyEarnSchemeLinesApi';
import { RetailLoyaltyActivityType } from './RetailLoyaltyActivityType';

/**
 * This class represents the entity "RetailLoyaltyEarnSchemeLines" of service "d365_metadata".
 */
export class RetailLoyaltyEarnSchemeLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyEarnSchemeLinesType<T>
{
  /**
   * Technical entity name for RetailLoyaltyEarnSchemeLines.
   */
  static override _entityName = 'RetailLoyaltyEarnSchemeLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyEarnSchemeLines entity.
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
   * To Reward Point Id.
   * @nullable
   */
  declare toRewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Activity Type.
   * @nullable
   */
  declare fromActivityType?: RetailLoyaltyActivityType | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Activity Amount Qty.
   */
  declare fromActivityAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail From Other Activity Type.
   * @nullable
   */
  declare retailFromOtherActivityType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Affiliation Name.
   * @nullable
   */
  declare affiliationName?: DeserializedType<T, 'Edm.String'> | null;
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
   * From Activity Amount Currency.
   * @nullable
   */
  declare fromActivityAmountCurrency?: DeserializedType<T, 'Edm.String'> | null;
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
   * To Reward Point Amount Qty.
   */
  declare toRewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: RetailLoyaltyEarnSchemeLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyEarnSchemeLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  toRewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  fromActivityType?: RetailLoyaltyActivityType | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  fromActivityAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  retailFromOtherActivityType?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  affiliationName?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  fromActivityAmountCurrency?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  size?: DeserializedType<T, 'Edm.String'> | null;
  toRewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
}
