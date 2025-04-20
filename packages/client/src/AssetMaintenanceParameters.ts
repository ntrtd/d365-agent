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
import type { AssetMaintenanceParametersApi } from './AssetMaintenanceParametersApi';
import { EntAssetProductReportLanguage } from './EntAssetProductReportLanguage';
import { NoYes } from './NoYes';
import { EntAssetObjectViewType } from './EntAssetObjectViewType';

/**
 * This class represents the entity "AssetMaintenanceParameters" of service "d365_metadata".
 */
export class AssetMaintenanceParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceParametersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceParameters.
   */
  static override _entityName = 'AssetMaintenanceParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id Forecast.
   * @nullable
   */
  declare projIdForecast?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Report Language.
   * @nullable
   */
  declare workOrderReportLanguage?: EntAssetProductReportLanguage | null;
  /**
   * Preventive Work Order Type Id.
   * @nullable
   */
  declare preventiveWorkOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Request Type Id.
   * @nullable
   */
  declare defaultRequestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Category.
   * @nullable
   */
  declare itemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Calendar Id.
   * @nullable
   */
  declare standardCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Expense.
   * @nullable
   */
  declare journalExpense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Item.
   * @nullable
   */
  declare journalItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Category.
   * @nullable
   */
  declare costCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Related Format.
   * @nullable
   */
  declare workOrderRelatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Level.
   */
  declare functionalLocationLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bing Key.
   * @nullable
   */
  declare bingKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Copy Description.
   * @nullable
   */
  declare workOrderCopyDescription?: NoYes | null;
  /**
   * Empl Category.
   * @nullable
   */
  declare emplCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Copy Fault 2 Request.
   * @nullable
   */
  declare workOrderCopyFault2Request?: NoYes | null;
  /**
   * Default Work Order Type Id.
   * @nullable
   */
  declare defaultWorkOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Maintenance Asset View Type.
   * @nullable
   */
  declare standardMaintenanceAssetViewType?: EntAssetObjectViewType | null;
  /**
   * Journal Hour.
   * @nullable
   */
  declare journalHour?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  projIdForecast?: DeserializedType<T, 'Edm.String'> | null;
  workOrderReportLanguage?: EntAssetProductReportLanguage | null;
  preventiveWorkOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultRequestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  itemCategory?: DeserializedType<T, 'Edm.String'> | null;
  standardCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  journalExpense?: DeserializedType<T, 'Edm.String'> | null;
  journalItem?: DeserializedType<T, 'Edm.String'> | null;
  costCategory?: DeserializedType<T, 'Edm.String'> | null;
  workOrderRelatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationLevel: DeserializedType<T, 'Edm.Int32'>;
  bingKey?: DeserializedType<T, 'Edm.String'> | null;
  workOrderCopyDescription?: NoYes | null;
  emplCategory?: DeserializedType<T, 'Edm.String'> | null;
  workOrderCopyFault2Request?: NoYes | null;
  defaultWorkOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  standardMaintenanceAssetViewType?: EntAssetObjectViewType | null;
  journalHour?: DeserializedType<T, 'Edm.String'> | null;
}
