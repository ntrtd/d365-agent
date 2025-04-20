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
import type { PriceGroupApplicabilityRulesApi } from './PriceGroupApplicabilityRulesApi';

/**
 * This class represents the entity "PriceGroupApplicabilityRules" of service "d365_metadata".
 */
export class PriceGroupApplicabilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceGroupApplicabilityRulesType<T>
{
  /**
   * Technical entity name for PriceGroupApplicabilityRules.
   */
  static override _entityName = 'PriceGroupApplicabilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceGroupApplicabilityRules entity.
   */
  static _keys = ['dataAreaId', 'GuidId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Guid Id.
   */
  declare guidId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Prop Value 2.
   * @nullable
   */
  declare propValue2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 7.
   * @nullable
   */
  declare propValue7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Channel Id.
   * @nullable
   */
  declare retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Group.
   * @nullable
   */
  declare custGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 4.
   * @nullable
   */
  declare propValue4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Tier Id.
   * @nullable
   */
  declare loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 9.
   * @nullable
   */
  declare propValue9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 1.
   * @nullable
   */
  declare propValue1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Group Id.
   * @nullable
   */
  declare priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Affiliation Name.
   * @nullable
   */
  declare loyaltyAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 6.
   * @nullable
   */
  declare propValue6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 8.
   * @nullable
   */
  declare propValue8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 3.
   * @nullable
   */
  declare propValue3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 0.
   * @nullable
   */
  declare propValue0?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 5.
   * @nullable
   */
  declare propValue5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Affiliation Name.
   * @nullable
   */
  declare affiliationName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceGroupApplicabilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceGroupApplicabilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  guidId: DeserializedType<T, 'Edm.Guid'>;
  propValue2?: DeserializedType<T, 'Edm.String'> | null;
  propValue7?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  custGroup?: DeserializedType<T, 'Edm.String'> | null;
  propValue4?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  propValue9?: DeserializedType<T, 'Edm.String'> | null;
  propValue1?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  priceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  propValue6?: DeserializedType<T, 'Edm.String'> | null;
  propValue8?: DeserializedType<T, 'Edm.String'> | null;
  propValue3?: DeserializedType<T, 'Edm.String'> | null;
  propValue0?: DeserializedType<T, 'Edm.String'> | null;
  propValue5?: DeserializedType<T, 'Edm.String'> | null;
  affiliationName?: DeserializedType<T, 'Edm.String'> | null;
}
