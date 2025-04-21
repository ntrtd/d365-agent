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
import type { InboundLoadPackingStructureCasesApi } from './InboundLoadPackingStructureCasesApi';
import { WhsModule } from './WhsModule';
import {
  InboundLoadPackingStructureCaseLinesV3,
  InboundLoadPackingStructureCaseLinesV3Type
} from './InboundLoadPackingStructureCaseLinesV3';
import {
  InboundLoadPackingStructureCaseLines,
  InboundLoadPackingStructureCaseLinesType
} from './InboundLoadPackingStructureCaseLines';
import {
  InboundLoadPackingStructureCaseLinesV2,
  InboundLoadPackingStructureCaseLinesV2Type
} from './InboundLoadPackingStructureCaseLinesV2';
import {
  InboundLoadPackingStructures,
  InboundLoadPackingStructuresType
} from './InboundLoadPackingStructures';

/**
 * This class represents the entity "InboundLoadPackingStructureCases" of service "d365_metadata".
 */
export class InboundLoadPackingStructureCases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundLoadPackingStructureCasesType<T>
{
  /**
   * Technical entity name for InboundLoadPackingStructureCases.
   */
  static override _entityName = 'InboundLoadPackingStructureCases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundLoadPackingStructureCases entity.
   */
  static _keys = ['dataAreaId', 'LicensePlateNumber', 'InboundShipmentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Id.
   */
  declare inboundShipmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module.
   * @nullable
   */
  declare module?: WhsModule | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packed Total Quantity.
   */
  declare packedTotalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contained Item Number.
   * @nullable
   */
  declare containedItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Unit Symbol.
   * @nullable
   */
  declare receivingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Packing Structure License Plate Number.
   * @nullable
   */
  declare parentPackingStructureLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureCaseLinesV3} entity.
   */
  declare loadPackingStructureCaseLinesV3: InboundLoadPackingStructureCaseLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureCaseLines} entity.
   */
  declare loadPackingStructureCaseLines: InboundLoadPackingStructureCaseLines<T>[];
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureCaseLinesV2} entity.
   */
  declare loadPackingStructureCaseLinesV2: InboundLoadPackingStructureCaseLinesV2<T>[];
  /**
   * One-to-one navigation property to the {@link InboundLoadPackingStructures} entity.
   */
  declare parentLoadPackingStructure?: InboundLoadPackingStructures<T> | null;

  constructor(_entityApi: InboundLoadPackingStructureCasesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundLoadPackingStructureCasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  inboundShipmentId: DeserializedType<T, 'Edm.String'>;
  module?: WhsModule | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  packedTotalQuantity: DeserializedType<T, 'Edm.Decimal'>;
  containedItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  parentPackingStructureLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  loadPackingStructureCaseLinesV3: InboundLoadPackingStructureCaseLinesV3Type<T>[];
  loadPackingStructureCaseLines: InboundLoadPackingStructureCaseLinesType<T>[];
  loadPackingStructureCaseLinesV2: InboundLoadPackingStructureCaseLinesV2Type<T>[];
  parentLoadPackingStructure?: InboundLoadPackingStructuresType<T> | null;
}
