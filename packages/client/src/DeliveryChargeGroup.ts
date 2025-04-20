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
import type { DeliveryChargeGroupApi } from './DeliveryChargeGroupApi';
import {
  SalesAutomaticSalesDocumentHeaderTaxCharges,
  SalesAutomaticSalesDocumentHeaderTaxChargesType
} from './SalesAutomaticSalesDocumentHeaderTaxCharges';

/**
 * This class represents the entity "DeliveryChargeGroup" of service "d365_metadata".
 */
export class DeliveryChargeGroup<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeliveryChargeGroupType<T>
{
  /**
   * Technical entity name for DeliveryChargeGroup.
   */
  static override _entityName = 'DeliveryChargeGroup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryChargeGroup entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesAutomaticSalesDocumentHeaderTaxCharges} entity.
   */
  declare salesChargeDeliveryGroups: SalesAutomaticSalesDocumentHeaderTaxCharges<T>[];

  constructor(_entityApi: DeliveryChargeGroupApi<T>) {
    super(_entityApi);
  }
}

export interface DeliveryChargeGroupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
  salesChargeDeliveryGroups: SalesAutomaticSalesDocumentHeaderTaxChargesType<T>[];
}
