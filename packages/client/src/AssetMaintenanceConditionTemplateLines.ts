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
import type { AssetMaintenanceConditionTemplateLinesApi } from './AssetMaintenanceConditionTemplateLinesApi';
import { EntAssetConditionType } from './EntAssetConditionType';

/**
 * This class represents the entity "AssetMaintenanceConditionTemplateLines" of service "d365_metadata".
 */
export class AssetMaintenanceConditionTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceConditionTemplateLinesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceConditionTemplateLines.
   */
  static override _entityName = 'AssetMaintenanceConditionTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceConditionTemplateLines entity.
   */
  static _keys = ['dataAreaId', 'ConditionTemplateId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Template Id.
   */
  declare conditionTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: EntAssetConditionType | null;

  constructor(_entityApi: AssetMaintenanceConditionTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceConditionTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  conditionTemplateId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: EntAssetConditionType | null;
}
