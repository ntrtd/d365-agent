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
import type { EngineeringChangeOrderProductRouteOperationPropertiesApi } from './EngineeringChangeOrderProductRouteOperationPropertiesApi';
import { RouteOprPriority } from './RouteOprPriority';
import { RouteOprType } from './RouteOprType';
import { RouteFormula } from './RouteFormula';
import {
  EngineeringChangeOrderProductRouteOperations,
  EngineeringChangeOrderProductRouteOperationsType
} from './EngineeringChangeOrderProductRouteOperations';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesDocuments,
  EngineeringChangeOrderProductRouteOperationPropertiesDocumentsType
} from './EngineeringChangeOrderProductRouteOperationPropertiesDocuments';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements,
  EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsType
} from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationProperties" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteOperationPropertiesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationProperties.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationProperties entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductRouteProductionSiteId',
    'EngineeringChangeOrderProductRouteOperationId',
    'EngineeringChangeOrderProductRouteOperationNumber',
    'RouteId',
    'ProductConfigurationId',
    'ProductGroupId',
    'ItemNumber'
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
   * Engineering Change Order Product Route Production Site Id.
   */
  declare engineeringChangeOrderProductRouteProductionSiteId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Id.
   */
  declare engineeringChangeOrderProductRouteOperationId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Number.
   */
  declare engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
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
   * Operations Time To Hour Conversion Factor.
   */
  declare operationsTimeToHourConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Process Cost Category Id.
   * @nullable
   */
  declare processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Quantity.
   */
  declare processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Group Id.
   * @nullable
   */
  declare routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Change Order Product Route Operation Priority.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  /**
   * Transfer Batch Quantity.
   */
  declare transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Queue Time Before.
   */
  declare queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transit Time.
   */
  declare transitTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Time.
   */
  declare processTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Factor.
   */
  declare consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Cost Category Id.
   * @nullable
   */
  declare quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Queue Time After.
   */
  declare queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Costing Operation Resource Id.
   * @nullable
   */
  declare costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Type.
   * @nullable
   */
  declare routeType?: RouteOprType | null;
  /**
   * Consumption Calculation Formula.
   * @nullable
   */
  declare consumptionCalculationFormula?: RouteFormula | null;
  /**
   * Setup Category Id.
   * @nullable
   */
  declare setupCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Setup Time.
   */
  declare setupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteOperations} entity.
   */
  declare engineeringChangeOrderProductRouteOperation?: EngineeringChangeOrderProductRouteOperations<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesDocuments} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesDocuments: EngineeringChangeOrderProductRouteOperationPropertiesDocuments<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesResourceRequirements: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<T>[];

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationPropertiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteProductionSiteId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  routeId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productGroupId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  operationsTimeToHourConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  transitTime: DeserializedType<T, 'Edm.Decimal'>;
  processTime: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  routeType?: RouteOprType | null;
  consumptionCalculationFormula?: RouteFormula | null;
  setupCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  setupTime: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteOperation?: EngineeringChangeOrderProductRouteOperationsType<T> | null;
  engineeringChangeOrderProductRouteOperationPropertiesDocuments: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsType<T>[];
  engineeringChangeOrderProductRouteOperationPropertiesResourceRequirements: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsType<T>[];
}
