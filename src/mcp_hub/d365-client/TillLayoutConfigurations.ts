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
import type { TillLayoutConfigurationsApi } from './TillLayoutConfigurationsApi';
import { TillLayoutSizes, TillLayoutSizesType } from './TillLayoutSizes';
import { RetailTillLayouts, RetailTillLayoutsType } from './RetailTillLayouts';

/**
 * This class represents the entity "TillLayoutConfigurations" of service "d365_metadata".
 */
export class TillLayoutConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TillLayoutConfigurationsType<T>
{
  /**
   * Technical entity name for TillLayoutConfigurations.
   */
  static override _entityName = 'TillLayoutConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TillLayoutConfigurations entity.
   */
  static _keys = ['LayoutId', 'LayoutSizeId'];
  /**
   * Layout Id.
   */
  declare layoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Size Id.
   */
  declare layoutSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Id.
   * @nullable
   */
  declare totalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Payment Layout.
   * @nullable
   */
  declare receiptPaymentLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Items Layout.
   * @nullable
   */
  declare receiptItemsLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Layout.
   * @nullable
   */
  declare customerLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Landscape.
   * @nullable
   */
  declare layoutLandscape?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Totals Layout.
   * @nullable
   */
  declare totalsLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Layout Id.
   * @nullable
   */
  declare customerLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Img Cash Changer Layout.
   * @nullable
   */
  declare imgCashChangerLayout?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Layout Portrait.
   * @nullable
   */
  declare layoutPortrait?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Changer Layout.
   * @nullable
   */
  declare cashChangerLayout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TillLayoutSizes} entity.
   */
  declare tillLayoutSize?: TillLayoutSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTillLayouts} entity.
   */
  declare retailTillLayout?: RetailTillLayouts<T> | null;

  constructor(_entityApi: TillLayoutConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface TillLayoutConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutId: DeserializedType<T, 'Edm.String'>;
  layoutSizeId: DeserializedType<T, 'Edm.String'>;
  totalId?: DeserializedType<T, 'Edm.String'> | null;
  receiptPaymentLayout?: DeserializedType<T, 'Edm.String'> | null;
  receiptItemsLayout?: DeserializedType<T, 'Edm.String'> | null;
  customerLayout?: DeserializedType<T, 'Edm.String'> | null;
  layoutLandscape?: DeserializedType<T, 'Edm.String'> | null;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  totalsLayout?: DeserializedType<T, 'Edm.String'> | null;
  customerLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  imgCashChangerLayout?: DeserializedType<T, 'Edm.Binary'> | null;
  layoutPortrait?: DeserializedType<T, 'Edm.String'> | null;
  cashChangerLayout?: DeserializedType<T, 'Edm.String'> | null;
  tillLayoutSize?: TillLayoutSizesType<T> | null;
  retailTillLayout?: RetailTillLayoutsType<T> | null;
}
