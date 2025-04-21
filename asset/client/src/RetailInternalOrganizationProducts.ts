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
import type { RetailInternalOrganizationProductsApi } from './RetailInternalOrganizationProductsApi';
import {
  RetailInternalOrganizationProductAttributeValues2,
  RetailInternalOrganizationProductAttributeValues2Type
} from './RetailInternalOrganizationProductAttributeValues2';

/**
 * This class represents the entity "RetailInternalOrganizationProducts" of service "d365_metadata".
 */
export class RetailInternalOrganizationProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInternalOrganizationProductsType<T>
{
  /**
   * Technical entity name for RetailInternalOrganizationProducts.
   */
  static override _entityName = 'RetailInternalOrganizationProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInternalOrganizationProducts entity.
   */
  static _keys = ['PartyNumber', 'DisplayProductNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2<T>[];

  constructor(_entityApi: RetailInternalOrganizationProductsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInternalOrganizationProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2Type<T>[];
}
