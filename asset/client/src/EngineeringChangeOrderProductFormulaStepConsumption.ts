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
import type { EngineeringChangeOrderProductFormulaStepConsumptionApi } from './EngineeringChangeOrderProductFormulaStepConsumptionApi';
import {
  EngineeringChangeOrderProductFormulaLines,
  EngineeringChangeOrderProductFormulaLinesType
} from './EngineeringChangeOrderProductFormulaLines';

/**
 * This class represents the entity "EngineeringChangeOrderProductFormulaStepConsumption" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductFormulaStepConsumption<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductFormulaStepConsumptionType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductFormulaStepConsumption.
   */
  static override _entityName =
    'EngineeringChangeOrderProductFormulaStepConsumption';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductFormulaStepConsumption entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber',
    'EngineeringChangeOrderProductBOMCreationSequenceNumber',
    'FromQty'
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
   * Engineering Change Order Product Bom Creation Sequence Number.
   */
  declare engineeringChangeOrderProductBomCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * From Qty.
   */
  declare fromQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bom Qty.
   */
  declare bomQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductFormulaLines} entity.
   */
  declare engineeringChangeOrderProductFormulaLine?: EngineeringChangeOrderProductFormulaLines<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductFormulaStepConsumptionApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductFormulaStepConsumptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  engineeringChangeOrderProductBomCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  fromQty: DeserializedType<T, 'Edm.Decimal'>;
  bomQty: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductFormulaLine?: EngineeringChangeOrderProductFormulaLinesType<T> | null;
}
