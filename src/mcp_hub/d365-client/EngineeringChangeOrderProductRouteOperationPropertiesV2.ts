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
import type { EngineeringChangeOrderProductRouteOperationPropertiesV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesV2Api';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { RouteFormula } from './RouteFormula';
import { RouteOprType } from './RouteOprType';
import {
  EngineeringChangeOrderProductRouteOperationsV2,
  EngineeringChangeOrderProductRouteOperationsV2Type
} from './EngineeringChangeOrderProductRouteOperationsV2';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2,
  EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Type
} from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2,
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Type
} from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationPropertiesV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteOperationPropertiesV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationPropertiesV2.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationPropertiesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationPropertiesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber',
    'EngineeringChangeOrderProductRouteOperationNumber',
    'EngineeringChangeOrderProductRouteOperationPriority',
    'EngineeringChangeOrderProductRouteOperationChangeType',
    'OperationId',
    'RouteId',
    'ProductConfigurationId',
    'ProductGroupId',
    'ItemNumber',
    'RouteOperationPropertiesChangeType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Engineering Change Order Product Route Header Creation Sequence Number.
   */
  declare engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Engineering Change Order Product Route Operation Number.
   */
  declare engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Engineering Change Order Product Route Operation Priority.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  /**
   * Engineering Change Order Product Route Operation Change Type.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes | null;
  /**
   * Operation Id.
   */
  declare operationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Id.
   */
  declare routeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group Id.
   */
  declare productGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Operation Properties Change Type.
   * @nullable
   */
  declare routeOperationPropertiesChangeType?: EngChgEcmChangeTypes | null;
  /**
   * Process Quantity.
   */
  declare processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Cost Category Id.
   * @nullable
   */
  declare quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Group Id.
   * @nullable
   */
  declare routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operations Time To Hour Conversion Factor.
   */
  declare operationsTimeToHourConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Setup Time.
   */
  declare setupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Queue Time Before.
   */
  declare queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Costing Operation Resource Id.
   * @nullable
   */
  declare costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Calculation Factor.
   */
  declare consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Formula.
   * @nullable
   */
  declare consumptionCalculationFormula?: RouteFormula | null;
  /**
   * Queue Time After.
   */
  declare queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Time.
   */
  declare processTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transfer Batch Quantity.
   */
  declare transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Type.
   * @nullable
   */
  declare routeType?: RouteOprType | null;
  /**
   * Transit Time.
   */
  declare transitTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Setup Category Id.
   * @nullable
   */
  declare setupCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Cost Category Id.
   * @nullable
   */
  declare processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteOperationsV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationV2?: EngineeringChangeOrderProductRouteOperationsV2<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesDocumentsV2: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2<T>[];

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationPropertiesV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationPropertiesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes | null;
  operationId: DeserializedType<T, 'Edm.String'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productGroupId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  routeOperationPropertiesChangeType?: EngChgEcmChangeTypes | null;
  processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  operationsTimeToHourConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  setupTime: DeserializedType<T, 'Edm.Decimal'>;
  queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationFormula?: RouteFormula | null;
  queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  processTime: DeserializedType<T, 'Edm.Decimal'>;
  transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeType?: RouteOprType | null;
  transitTime: DeserializedType<T, 'Edm.Decimal'>;
  setupCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductRouteOperationV2?: EngineeringChangeOrderProductRouteOperationsV2Type<T> | null;
  engineeringChangeOrderProductRouteOperationPropertiesDocumentsV2: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Type<T>[];
  engineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Type<T>[];
}
