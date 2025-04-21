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
import type { BudgetPlanLayoutsApi } from './BudgetPlanLayoutsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanLayouts" of service "d365_metadata".
 */
export class BudgetPlanLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanLayoutsType<T>
{
  /**
   * Technical entity name for BudgetPlanLayouts.
   */
  static override _entityName = 'BudgetPlanLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanLayouts entity.
   */
  static _keys = ['LayoutName', 'ElementDefinitionName'];
  /**
   * Layout Name.
   */
  declare layoutName: DeserializedType<T, 'Edm.String'>;
  /**
   * Element Definition Name.
   */
  declare elementDefinitionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Description.
   * @nullable
   */
  declare layoutDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Worksheet.
   * @nullable
   */
  declare inWorksheet?: NoYes | null;
  /**
   * Dimension Focus Name.
   * @nullable
   */
  declare dimensionFocusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordinal.
   */
  declare ordinal: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Editable.
   * @nullable
   */
  declare isEditable?: NoYes | null;

  constructor(_entityApi: BudgetPlanLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  layoutName: DeserializedType<T, 'Edm.String'>;
  elementDefinitionName: DeserializedType<T, 'Edm.String'>;
  layoutDescription?: DeserializedType<T, 'Edm.String'> | null;
  inWorksheet?: NoYes | null;
  dimensionFocusName?: DeserializedType<T, 'Edm.String'> | null;
  ordinal: DeserializedType<T, 'Edm.Int32'>;
  isEditable?: NoYes | null;
}
