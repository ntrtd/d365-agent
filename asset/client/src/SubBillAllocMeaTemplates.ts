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
import type { SubBillAllocMeaTemplatesApi } from './SubBillAllocMeaTemplatesApi';

/**
 * This class represents the entity "SubBillAllocMEATemplatesCollection" of service "d365_metadata".
 */
export class SubBillAllocMeaTemplates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillAllocMeaTemplatesType<T>
{
  /**
   * Technical entity name for SubBillAllocMeaTemplates.
   */
  static override _entityName = 'SubBillAllocMEATemplatesCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillAllocMeaTemplates entity.
   */
  static _keys = ['dataAreaId', 'MEANumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mea Number.
   */
  declare meaNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deferred Contract Revenue Account.
   * @nullable
   */
  declare deferredContractRevenueAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: SubBillAllocMeaTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillAllocMeaTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  meaNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  deferredContractRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
}
