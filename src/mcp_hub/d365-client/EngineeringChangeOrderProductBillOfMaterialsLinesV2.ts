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
import type { EngineeringChangeOrderProductBillOfMaterialsLinesV2Api } from './EngineeringChangeOrderProductBillOfMaterialsLinesV2Api';
import { BomFormula } from './BomFormula';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2,
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type
} from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2';

/**
 * This class represents the entity "EngineeringChangeOrderProductBillOfMaterialsLinesV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductBillOfMaterialsLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductBillOfMaterialsLinesV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductBillOfMaterialsLinesV2.
   */
  static override _entityName =
    'EngineeringChangeOrderProductBillOfMaterialsLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductBillOfMaterialsLinesV2 entity.
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Physical Product Depth.
   */
  declare physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
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
   * Warehouse Bom Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Flushing Principle.
   * @nullable
   */
  declare flushingPrinciple?: ProdFlushingPrincipBom | null;
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
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeaderV2?: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductBillOfMaterialsLinesV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductBillOfMaterialsLinesV2Type<
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
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationMethod?: BomFormula | null;
  isConsumedAtOperationComplete?: NoYes | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeLine?: NoYes | null;
  subBomId?: DeserializedType<T, 'Edm.String'> | null;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  willManufacturedItemInheritBatchAttributes?: NoYes | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: BomType | null;
  quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMethod?: BomRoundUp | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consumptionType?: BomConsumpType | null;
  willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  flushingPrinciple?: ProdFlushingPrincipBom | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  configurationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  willSetSubproductionToConsumed?: NoYes | null;
  engineeringChangeOrderProductBillOfMaterialsHeaderV2?: EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<T> | null;
}
