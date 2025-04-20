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
import type { ProdComSetupsApi } from './ProdComSetupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProdComSetups" of service "d365_metadata".
 */
export class ProdComSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProdComSetupsType<T>
{
  /**
   * Technical entity name for ProdComSetups.
   */
  static override _entityName = 'ProdComSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProdComSetups entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery To A Third Party.
   * @nullable
   */
  declare deliveryToAThirdParty?: NoYes | null;
  /**
   * Product Made In Company.
   * @nullable
   */
  declare productMadeInCompany?: NoYes | null;
  /**
   * Work Done For Enterprises.
   * @nullable
   */
  declare workDoneForEnterprises?: NoYes | null;

  constructor(_entityApi: ProdComSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProdComSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  deliveryToAThirdParty?: NoYes | null;
  productMadeInCompany?: NoYes | null;
  workDoneForEnterprises?: NoYes | null;
}
