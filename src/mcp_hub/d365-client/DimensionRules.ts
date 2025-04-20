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
import type { DimensionRulesApi } from './DimensionRulesApi';
import { DimensionAttributeType } from './DimensionAttributeType';
import { RtslDimensionAction } from './RtslDimensionAction';

/**
 * This class represents the entity "DimensionRules" of service "d365_metadata".
 */
export class DimensionRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionRulesType<T>
{
  /**
   * Technical entity name for DimensionRules.
   */
  static override _entityName = 'DimensionRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionRules entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Dimension Attribute Name.
   * @nullable
   */
  declare dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Dimension Code.
   * @nullable
   */
  declare toDimensionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Dimension Attribute Type.
   * @nullable
   */
  declare toDimensionAttributeType?: DimensionAttributeType | null;
  /**
   * Rule Group.
   * @nullable
   */
  declare ruleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimesion Rule Group.
   * @nullable
   */
  declare dimesionRuleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Dimension Code.
   * @nullable
   */
  declare fromDimensionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Code To.
   * @nullable
   */
  declare dimensionCodeTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Conversion Method.
   * @nullable
   */
  declare conversionMethod?: RtslDimensionAction | null;
  /**
   * To Dimension Attribute Name.
   * @nullable
   */
  declare toDimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Attribute Type.
   * @nullable
   */
  declare dimensionAttributeType?: DimensionAttributeType | null;

  constructor(_entityApi: DimensionRulesApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  toDimensionCode?: DeserializedType<T, 'Edm.String'> | null;
  toDimensionAttributeType?: DimensionAttributeType | null;
  ruleGroup?: DeserializedType<T, 'Edm.String'> | null;
  dimesionRuleGroup?: DeserializedType<T, 'Edm.String'> | null;
  fromDimensionCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCodeTo?: DeserializedType<T, 'Edm.String'> | null;
  conversionMethod?: RtslDimensionAction | null;
  toDimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionAttributeType?: DimensionAttributeType | null;
}
