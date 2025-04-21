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
import type { BasePriceVersionsApi } from './BasePriceVersionsApi';
import { NoYesCombo } from './NoYesCombo';
import { GupBasePriceVersionPriceBasis } from './GupBasePriceVersionPriceBasis';
import { NoYes } from './NoYes';
import { GupBasePriceVersionPriceRule } from './GupBasePriceVersionPriceRule';

/**
 * This class represents the entity "BasePriceVersions" of service "d365_metadata".
 */
export class BasePriceVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BasePriceVersionsType<T>
{
  /**
   * Technical entity name for BasePriceVersions.
   */
  static override _entityName = 'BasePriceVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BasePriceVersions entity.
   */
  static _keys = ['dataAreaId', 'VersionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Version Id.
   */
  declare versionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Block Change.
   * @nullable
   */
  declare blockChange?: NoYesCombo | null;
  /**
   * Default Date.
   */
  declare defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Basis.
   * @nullable
   */
  declare priceBasis?: GupBasePriceVersionPriceBasis | null;
  /**
   * Allow Sales.
   * @nullable
   */
  declare allowSales?: NoYes | null;
  /**
   * Price Rule.
   * @nullable
   */
  declare priceRule?: GupBasePriceVersionPriceRule | null;
  /**
   * Last Activation.
   */
  declare lastActivation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Allow Inventory Cost.
   * @nullable
   */
  declare allowInventoryCost?: NoYes | null;
  /**
   * Allow Purch.
   * @nullable
   */
  declare allowPurch?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Update.
   */
  declare lastUpdate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Activation.
   * @nullable
   */
  declare blockActivation?: NoYesCombo | null;

  constructor(_entityApi: BasePriceVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface BasePriceVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  versionId: DeserializedType<T, 'Edm.String'>;
  blockChange?: NoYesCombo | null;
  defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceBasis?: GupBasePriceVersionPriceBasis | null;
  allowSales?: NoYes | null;
  priceRule?: GupBasePriceVersionPriceRule | null;
  lastActivation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allowInventoryCost?: NoYes | null;
  allowPurch?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lastUpdate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  blockActivation?: NoYesCombo | null;
}
