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
import type { InvoiceLegalEntitiesApi } from './InvoiceLegalEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InvoiceLegalEntities" of service "d365_metadata".
 */
export class InvoiceLegalEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InvoiceLegalEntitiesType<T>
{
  /**
   * Technical entity name for InvoiceLegalEntities.
   */
  static override _entityName = 'InvoiceLegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InvoiceLegalEntities entity.
   */
  static _keys = ['Selected'];
  /**
   * Selected.
   */
  declare selected: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Num.
   * @nullable
   */
  declare vatNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sync All Vendors.
   * @nullable
   */
  declare syncAllVendors?: NoYes | null;

  constructor(_entityApi: InvoiceLegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InvoiceLegalEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  selected: DeserializedType<T, 'Edm.Int64'>;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  vatNum?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  syncAllVendors?: NoYes | null;
}
