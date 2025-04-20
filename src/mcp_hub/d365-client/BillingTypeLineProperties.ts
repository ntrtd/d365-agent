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
import type { BillingTypeLinePropertiesApi } from './BillingTypeLinePropertiesApi';
import { ProjBillingType } from './ProjBillingType';

/**
 * This class represents the entity "BillingTypeLineProperties" of service "d365_metadata".
 */
export class BillingTypeLineProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillingTypeLinePropertiesType<T>
{
  /**
   * Technical entity name for BillingTypeLineProperties.
   */
  static override _entityName = 'BillingTypeLineProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingTypeLineProperties entity.
   */
  static _keys = ['dataAreaId', 'BillingType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * Proj Line Property Line Property Id.
   * @nullable
   */
  declare projLinePropertyLinePropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: BillingTypeLinePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface BillingTypeLinePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingType?: ProjBillingType | null;
  projLinePropertyLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
}
