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
import type { KittingParametersApi } from './KittingParametersApi';
import { TableGroupAll } from './TableGroupAll';
import { NoYes } from './NoYes';
import { KittingCheckLoad } from './KittingCheckLoad';
import { KittingCheckPickingListRegistration } from './KittingCheckPickingListRegistration';

/**
 * This class represents the entity "KittingParameters" of service "d365_metadata".
 */
export class KittingParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KittingParametersType<T>
{
  /**
   * Technical entity name for KittingParameters.
   */
  static override _entityName = 'KittingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KittingParameters entity.
   */
  static _keys = ['dataAreaId', 'ValidFor', 'ItemRelation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid For.
   * @nullable
   */
  declare validFor?: TableGroupAll | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Kit Trade Agreement.
   * @nullable
   */
  declare useKitTradeAgreement?: NoYes | null;
  /**
   * Partial Delivery.
   * @nullable
   */
  declare partialDelivery?: NoYes | null;
  /**
   * Use Kit Financial Dimensions.
   * @nullable
   */
  declare useKitFinancialDimensions?: NoYes | null;
  /**
   * Whs Complete Kit Check.
   * @nullable
   */
  declare whsCompleteKitCheck?: KittingCheckLoad | null;
  /**
   * Show Kit Price On Kit.
   * @nullable
   */
  declare showKitPriceOnKit?: NoYes | null;
  /**
   * Reserve Items Automatically.
   * @nullable
   */
  declare reserveItemsAutomatically?: NoYes | null;
  /**
   * Part Price.
   * @nullable
   */
  declare partPrice?: NoYes | null;
  /**
   * Manual Posting.
   * @nullable
   */
  declare manualPosting?: NoYes | null;
  /**
   * Complete Kit Check.
   * @nullable
   */
  declare completeKitCheck?: KittingCheckPickingListRegistration | null;
  /**
   * Partial Return.
   * @nullable
   */
  declare partialReturn?: NoYes | null;
  /**
   * Reserve Complete Kits.
   * @nullable
   */
  declare reserveCompleteKits?: NoYes | null;
  /**
   * Set Up Product Dimensions.
   * @nullable
   */
  declare setUpProductDimensions?: NoYes | null;
  /**
   * Set Up Storage Dimensions.
   * @nullable
   */
  declare setUpStorageDimensions?: NoYes | null;

  constructor(_entityApi: KittingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface KittingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  validFor?: TableGroupAll | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  useKitTradeAgreement?: NoYes | null;
  partialDelivery?: NoYes | null;
  useKitFinancialDimensions?: NoYes | null;
  whsCompleteKitCheck?: KittingCheckLoad | null;
  showKitPriceOnKit?: NoYes | null;
  reserveItemsAutomatically?: NoYes | null;
  partPrice?: NoYes | null;
  manualPosting?: NoYes | null;
  completeKitCheck?: KittingCheckPickingListRegistration | null;
  partialReturn?: NoYes | null;
  reserveCompleteKits?: NoYes | null;
  setUpProductDimensions?: NoYes | null;
  setUpStorageDimensions?: NoYes | null;
}
