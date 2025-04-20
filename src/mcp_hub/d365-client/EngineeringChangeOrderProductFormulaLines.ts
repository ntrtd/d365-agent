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
import type { EngineeringChangeOrderProductFormulaLinesApi } from './EngineeringChangeOrderProductFormulaLinesApi';
import { BomFormula } from './BomFormula';
import { PdsIngredientTypeEnum } from './PdsIngredientTypeEnum';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import {
  EngineeringChangeOrderProductFormulaHeaders,
  EngineeringChangeOrderProductFormulaHeadersType
} from './EngineeringChangeOrderProductFormulaHeaders';
import {
  EngineeringChangeOrderProductFormulaStepConsumption,
  EngineeringChangeOrderProductFormulaStepConsumptionType
} from './EngineeringChangeOrderProductFormulaStepConsumption';

/**
 * This class represents the entity "EngineeringChangeOrderProductFormulaLines" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductFormulaLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductFormulaLinesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductFormulaLines.
   */
  static override _entityName = 'EngineeringChangeOrderProductFormulaLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductFormulaLines entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber',
    'LineCreationSequenceNumber'
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
   * Engineering Change Order Product Bill Of Materials Header Creation Sequence Number.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Substitution Priority.
   */
  declare substitutionPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Position Number.
   * @nullable
   */
  declare positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Calculation Method.
   * @nullable
   */
  declare consumptionCalculationMethod?: BomFormula | null;
  /**
   * Ingredient Type.
   * @nullable
   */
  declare ingredientType?: PdsIngredientTypeEnum | null;
  /**
   * Is Consumed At Operation Complete.
   * @nullable
   */
  declare isConsumedAtOperationComplete?: NoYes | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Cost Calculation Include Line.
   * @nullable
   */
  declare willCostCalculationIncludeLine?: NoYes | null;
  /**
   * Sub Bom Id.
   * @nullable
   */
  declare subBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Resource Consumption Used.
   */
  declare isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Will Manufactured Item Inherit Batch Attributes.
   * @nullable
   */
  declare willManufacturedItemInheritBatchAttributes?: NoYes | null;
  /**
   * Base Value.
   * @nullable
   */
  declare baseValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Substitution Group Id.
   * @nullable
   */
  declare substitutionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Co By Item Inherit Shelf Life Dates.
   * @nullable
   */
  declare willCoByItemInheritShelfLifeDates?: NoYes | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: BomType | null;
  /**
   * Quantity Rounding Up Multiples.
   */
  declare quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Co By Item Inherit Batch Attributes.
   * @nullable
   */
  declare willCoByItemInheritBatchAttributes?: NoYes | null;
  /**
   * Physical Product Depth.
   */
  declare physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensating Active Item Id.
   * @nullable
   */
  declare compensatingActiveItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: BomRoundUp | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Physical Product Density.
   */
  declare physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Scrap Percentage.
   */
  declare variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Type.
   * @nullable
   */
  declare consumptionType?: BomConsumpType | null;
  /**
   * Will Manufactured Item Inherit Shelf Life Dates.
   * @nullable
   */
  declare willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  /**
   * Compensating Factor.
   */
  declare compensatingFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Bom Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  /**
   * Formula Quantity Percentage.
   */
  declare formulaQuantityPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flushing Principle.
   * @nullable
   */
  declare flushingPrinciple?: ProdFlushingPrincipBom | null;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Percentage Controlled.
   * @nullable
   */
  declare isPercentageControlled?: NoYes | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Width.
   */
  declare physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Scalable.
   * @nullable
   */
  declare isScalable?: NoYes | null;
  /**
   * Configuration Group Id.
   * @nullable
   */
  declare configurationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Constant Scrap Quantity.
   */
  declare constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Route Id.
   * @nullable
   */
  declare subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Set Subproduction To Consumed.
   * @nullable
   */
  declare willSetSubproductionToConsumed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
   */
  declare engineeringChangeOrderProductFormulaHeader?: EngineeringChangeOrderProductFormulaHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductFormulaStepConsumption} entity.
   */
  declare engineeringChangeOrderProductFormulaStepConsumption?: EngineeringChangeOrderProductFormulaStepConsumption<T> | null;

  constructor(_entityApi: EngineeringChangeOrderProductFormulaLinesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductFormulaLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  substitutionPriority: DeserializedType<T, 'Edm.Int32'>;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationMethod?: BomFormula | null;
  ingredientType?: PdsIngredientTypeEnum | null;
  isConsumedAtOperationComplete?: NoYes | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeLine?: NoYes | null;
  subBomId?: DeserializedType<T, 'Edm.String'> | null;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  willManufacturedItemInheritBatchAttributes?: NoYes | null;
  baseValue?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  substitutionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  willCoByItemInheritShelfLifeDates?: NoYes | null;
  lineType?: BomType | null;
  quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  willCoByItemInheritBatchAttributes?: NoYes | null;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  compensatingActiveItemId?: DeserializedType<T, 'Edm.String'> | null;
  roundingUpMethod?: BomRoundUp | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consumptionType?: BomConsumpType | null;
  willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  compensatingFactor: DeserializedType<T, 'Edm.Decimal'>;
  warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  formulaQuantityPercentage: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  flushingPrinciple?: ProdFlushingPrincipBom | null;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  isPercentageControlled?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  isScalable?: NoYes | null;
  configurationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  willSetSubproductionToConsumed?: NoYes | null;
  engineeringChangeOrderProductFormulaHeader?: EngineeringChangeOrderProductFormulaHeadersType<T> | null;
  engineeringChangeOrderProductFormulaStepConsumption?: EngineeringChangeOrderProductFormulaStepConsumptionType<T> | null;
}
