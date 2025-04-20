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
import type { EngineeringChangeCustomerApprovalTypesApi } from './EngineeringChangeCustomerApprovalTypesApi';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "EngineeringChangeCustomerApprovalTypes" of service "d365_metadata".
 */
export class EngineeringChangeCustomerApprovalTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeCustomerApprovalTypesType<T>
{
  /**
   * Technical entity name for EngineeringChangeCustomerApprovalTypes.
   */
  static override _entityName = 'EngineeringChangeCustomerApprovalTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeCustomerApprovalTypes entity.
   */
  static _keys = ['TypeName'];
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: EngineeringChangeCustomerApprovalTypesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeCustomerApprovalTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  typeName: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
