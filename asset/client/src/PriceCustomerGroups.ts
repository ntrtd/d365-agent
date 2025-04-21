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
import type { PriceCustomerGroupsApi } from './PriceCustomerGroupsApi';
import {
  OpenSalesPriceJournalLines,
  OpenSalesPriceJournalLinesType
} from './OpenSalesPriceJournalLines';
import {
  OpenSalesPriceJournalLinesV2,
  OpenSalesPriceJournalLinesV2Type
} from './OpenSalesPriceJournalLinesV2';
import {
  RetailAffiliationPriceGroups,
  RetailAffiliationPriceGroupsType
} from './RetailAffiliationPriceGroups';
import {
  RetailLoyaltyPriceGroups,
  RetailLoyaltyPriceGroupsType
} from './RetailLoyaltyPriceGroups';

/**
 * This class represents the entity "PriceCustomerGroups" of service "d365_metadata".
 */
export class PriceCustomerGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PriceCustomerGroupsType<T>
{
  /**
   * Technical entity name for PriceCustomerGroups.
   */
  static override _entityName = 'PriceCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceCustomerGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Code.
   */
  declare groupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Priority.
   */
  declare pricingPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLines} entity.
   */
  declare openSalesPriceJournalLine: OpenSalesPriceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLinesV2} entity.
   */
  declare openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailAffiliationPriceGroups} entity.
   */
  declare retailAffiliationPriceGroup: RetailAffiliationPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailLoyaltyPriceGroups} entity.
   */
  declare retailLoyaltyPriceGroup: RetailLoyaltyPriceGroups<T>[];

  constructor(_entityApi: PriceCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  pricingPriority: DeserializedType<T, 'Edm.Int32'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  openSalesPriceJournalLine: OpenSalesPriceJournalLinesType<T>[];
  openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2Type<T>[];
  retailAffiliationPriceGroup: RetailAffiliationPriceGroupsType<T>[];
  retailLoyaltyPriceGroup: RetailLoyaltyPriceGroupsType<T>[];
}
