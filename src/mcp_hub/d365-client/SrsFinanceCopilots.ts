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
import type { SrsFinanceCopilotsApi } from './SrsFinanceCopilotsApi';
import { MenuItemType } from './MenuItemType';

/**
 * This class represents the entity "SrsFinanceCopilots" of service "d365_metadata".
 */
export class SrsFinanceCopilots<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SrsFinanceCopilotsType<T>
{
  /**
   * Technical entity name for SrsFinanceCopilots.
   */
  static override _entityName = 'SrsFinanceCopilots';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SrsFinanceCopilots entity.
   */
  static _keys = ['dataAreaId', 'ReportMenuItemName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Menu Item Name.
   */
  declare reportMenuItemName: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Design Name.
   * @nullable
   */
  declare reportDesignName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Menu Item Type.
   * @nullable
   */
  declare reportMenuItemType?: MenuItemType | null;

  constructor(_entityApi: SrsFinanceCopilotsApi<T>) {
    super(_entityApi);
  }
}

export interface SrsFinanceCopilotsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportMenuItemName: DeserializedType<T, 'Edm.String'>;
  reportDesignName?: DeserializedType<T, 'Edm.String'> | null;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  reportMenuItemType?: MenuItemType | null;
}
