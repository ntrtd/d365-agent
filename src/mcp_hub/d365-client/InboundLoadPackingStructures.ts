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
import type { InboundLoadPackingStructuresApi } from './InboundLoadPackingStructuresApi';
import { WhsModule } from './WhsModule';
import {
  InboundLoadPackingStructureLinesV3,
  InboundLoadPackingStructureLinesV3Type
} from './InboundLoadPackingStructureLinesV3';
import {
  InboundShipmentHeaders,
  InboundShipmentHeadersType
} from './InboundShipmentHeaders';
import {
  InboundLoadPackingStructureCases,
  InboundLoadPackingStructureCasesType
} from './InboundLoadPackingStructureCases';
import {
  InboundLoadPackingStructureLinesV2,
  InboundLoadPackingStructureLinesV2Type
} from './InboundLoadPackingStructureLinesV2';
import {
  InboundLoadPackingStructureLines,
  InboundLoadPackingStructureLinesType
} from './InboundLoadPackingStructureLines';

/**
 * This class represents the entity "InboundLoadPackingStructures" of service "d365_metadata".
 */
export class InboundLoadPackingStructures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundLoadPackingStructuresType<T>
{
  /**
   * Technical entity name for InboundLoadPackingStructures.
   */
  static override _entityName = 'InboundLoadPackingStructures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundLoadPackingStructures entity.
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
   * One-to-many navigation property to the {@link InboundLoadPackingStructureLinesV3} entity.
   */
  declare loadPackingStructureLinesV3: InboundLoadPackingStructureLinesV3<T>[];
  /**
   * One-to-one navigation property to the {@link InboundShipmentHeaders} entity.
   */
  declare shipmentHeader?: InboundShipmentHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureCases} entity.
   */
  declare innerLoadPackingStructures: InboundLoadPackingStructureCases<T>[];
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureLinesV2} entity.
   */
  declare loadPackingStructureLinesV2: InboundLoadPackingStructureLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructureLines} entity.
   */
  declare loadPackingStructureLines: InboundLoadPackingStructureLines<T>[];

  constructor(_entityApi: InboundLoadPackingStructuresApi<T>) {
    super(_entityApi);
  }
}

export interface InboundLoadPackingStructuresType<
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
  loadPackingStructureLinesV3: InboundLoadPackingStructureLinesV3Type<T>[];
  shipmentHeader?: InboundShipmentHeadersType<T> | null;
  innerLoadPackingStructures: InboundLoadPackingStructureCasesType<T>[];
  loadPackingStructureLinesV2: InboundLoadPackingStructureLinesV2Type<T>[];
  loadPackingStructureLines: InboundLoadPackingStructureLinesType<T>[];
}
