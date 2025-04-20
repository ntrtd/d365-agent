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
import type { TransportationRoutePlansApi } from './TransportationRoutePlansApi';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "TransportationRoutePlans" of service "d365_metadata".
 */
export class TransportationRoutePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationRoutePlansType<T>
{
  /**
   * Technical entity name for TransportationRoutePlans.
   */
  static override _entityName = 'TransportationRoutePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationRoutePlans entity.
   */
  static _keys = ['dataAreaId', 'PlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Name.
   * @nullable
   */
  declare planName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: TransportationRoutePlansApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationRoutePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  planName?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
