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
import type { CustomerPriorityClassificationGroupApi } from './CustomerPriorityClassificationGroupApi';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "CustomerPriorityClassificationGroup" of service "d365_metadata".
 */
export class CustomerPriorityClassificationGroup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPriorityClassificationGroupType<T>
{
  /**
   * Technical entity name for CustomerPriorityClassificationGroup.
   */
  static override _entityName = 'CustomerPriorityClassificationGroup';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPriorityClassificationGroup entity.
   */
  static _keys = ['dataAreaId', 'CustomerPriorityClassificationGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Priority Classification Group Code.
   */
  declare customerPriorityClassificationGroupCode: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3: CustomersV3<T>[];

  constructor(_entityApi: CustomerPriorityClassificationGroupApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPriorityClassificationGroupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerPriorityClassificationGroupCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  customerV3: CustomersV3Type<T>[];
}
