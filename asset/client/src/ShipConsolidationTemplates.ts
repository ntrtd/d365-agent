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
import type { ShipConsolidationTemplatesApi } from './ShipConsolidationTemplatesApi';
import { NoYes } from './NoYes';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';

/**
 * This class represents the entity "ShipConsolidationTemplates" of service "d365_metadata".
 */
export class ShipConsolidationTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipConsolidationTemplatesType<T>
{
  /**
   * Technical entity name for ShipConsolidationTemplates.
   */
  static override _entityName = 'ShipConsolidationTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipConsolidationTemplates entity.
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
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Warehouse Id.
   * @nullable
   */
  declare originWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Consolidation Update Scheduled Ship Date Time.
   * @nullable
   */
  declare willConsolidationUpdateScheduledShipDateTime?: NoYes | null;
  /**
   * Will Consolidation Split Shipment By Load Capacity.
   * @nullable
   */
  declare willConsolidationSplitShipmentByLoadCapacity?: NoYes | null;
  /**
   * Destination Operational Site Id.
   * @nullable
   */
  declare destinationOperationalSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fourth Product Filter Code.
   * @nullable
   */
  declare fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Product Filter Code.
   * @nullable
   */
  declare thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Product Filter Code.
   * @nullable
   */
  declare secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Warehouse Id.
   * @nullable
   */
  declare destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Query.
   * @nullable
   */
  declare filterQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Destination From Zip Code.
   * @nullable
   */
  declare destinationFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Consolidation Policy Type.
   * @nullable
   */
  declare shipmentConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  /**
   * Origin Operational Site Id.
   * @nullable
   */
  declare originOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
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
   * First Product Filter Code.
   * @nullable
   */
  declare firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination To Zip Code.
   * @nullable
   */
  declare destinationToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin To Zip Code.
   * @nullable
   */
  declare originToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin From Zip Code.
   * @nullable
   */
  declare originFromZipCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipConsolidationTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipConsolidationTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipConsolidationTemplateName: DeserializedType<T, 'Edm.String'>;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  originWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  willConsolidationUpdateScheduledShipDateTime?: NoYes | null;
  willConsolidationSplitShipmentByLoadCapacity?: NoYes | null;
  destinationOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  filterQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  destinationFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
  shipmentConsolidationPolicyType?: WhsShipConsolidationPolicyType | null;
  originOperationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  orderingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  templateDescription?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  destinationToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  originToZipCode?: DeserializedType<T, 'Edm.String'> | null;
  originFromZipCode?: DeserializedType<T, 'Edm.String'> | null;
}
