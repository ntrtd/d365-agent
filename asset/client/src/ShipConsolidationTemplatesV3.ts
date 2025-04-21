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
import type { ShipConsolidationTemplatesV3Api } from './ShipConsolidationTemplatesV3Api';
import { NoYes } from './NoYes';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * This class represents the entity "ShipConsolidationTemplatesV3" of service "d365_metadata".
 */
export class ShipConsolidationTemplatesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipConsolidationTemplatesV3Type<T>
{
  /**
   * Technical entity name for ShipConsolidationTemplatesV3.
   */
  static override _entityName = 'ShipConsolidationTemplatesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipConsolidationTemplatesV3 entity.
   */
  static _keys = ['dataAreaId', 'ShipConsolidationTemplateName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Consolidation Template Name.
   */
  declare shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>;
  /**
   * Will Consolidation Update Scheduled Ship Date Time.
   * @nullable
   */
  declare willConsolidationUpdateScheduledShipDateTime?: NoYes | null;
  /**
   * Destination From Zip Code.
   * @nullable
   */
  declare destinationFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fourth Product Filter Code.
   * @nullable
   */
  declare fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Consolidation Split Shipment By Load Capacity.
   * @nullable
   */
  declare willConsolidationSplitShipmentByLoadCapacity?: NoYes | null;
  /**
   * Filter Query.
   * @nullable
   */
  declare filterQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Origin Warehouse Id.
   * @nullable
   */
  declare originWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Product Filter Code.
   * @nullable
   */
  declare thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Country Region Id.
   * @nullable
   */
  declare destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordering Customer Account Number.
   * @nullable
   */
  declare orderingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Template Description.
   * @nullable
   */
  declare templateDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin To Zip Code.
   * @nullable
   */
  declare originToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Product Filter Code.
   * @nullable
   */
  declare firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Warehouse Id.
   * @nullable
   */
  declare destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Operational Site Id.
   * @nullable
   */
  declare destinationOperationalSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Query Json.
   * @nullable
   */
  declare filterQueryJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin From Zip Code.
   * @nullable
   */
  declare originFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Consolidation Policy Type.
   * @nullable
   */
  declare shipmentConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  /**
   * Second Product Filter Code.
   * @nullable
   */
  declare secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination To Zip Code.
   * @nullable
   */
  declare destinationToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Operational Site Id.
   * @nullable
   */
  declare originOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipConsolidationTemplatesV3Api<T>) {
    super(_entityApi);
  }
}

export interface ShipConsolidationTemplatesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>;
  willConsolidationUpdateScheduledShipDateTime?: NoYes | null;
  destinationFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  willConsolidationSplitShipmentByLoadCapacity?: NoYes | null;
  filterQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  originWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  templateDescription?: DeserializedType<T, 'Edm.String'> | null;
  originToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  destinationOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  filterQueryJson?: DeserializedType<T, 'Edm.String'> | null;
  originFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  shipmentConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  originOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
}
