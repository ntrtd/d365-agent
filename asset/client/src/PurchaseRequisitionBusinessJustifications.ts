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
import type { PurchaseRequisitionBusinessJustificationsApi } from './PurchaseRequisitionBusinessJustificationsApi';

/**
 * This class represents the entity "PurchaseRequisitionBusinessJustifications" of service "d365_metadata".
 */
export class PurchaseRequisitionBusinessJustifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionBusinessJustificationsType<T>
{
  /**
   * Technical entity name for PurchaseRequisitionBusinessJustifications.
   */
  static override _entityName = 'PurchaseRequisitionBusinessJustifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionBusinessJustifications entity.
   */
  static _keys = ['PurchaseRequisitionBusinessJustificationCode'];
  /**
   * Purchase Requisition Business Justification Code.
   */
  declare purchaseRequisitionBusinessJustificationCode: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Justification Description.
   * @nullable
   */
  declare justificationDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PurchaseRequisitionBusinessJustificationsApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionBusinessJustificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseRequisitionBusinessJustificationCode: DeserializedType<
    T,
    'Edm.String'
  >;
  justificationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
