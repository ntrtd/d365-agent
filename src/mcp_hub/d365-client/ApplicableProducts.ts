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
import type { ApplicableProductsApi } from './ApplicableProductsApi';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';
import { WarrantyApplicabilityYesNo } from './WarrantyApplicabilityYesNo';

/**
 * This class represents the entity "ApplicableProducts" of service "d365_metadata".
 */
export class ApplicableProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicableProductsType<T>
{
  /**
   * Technical entity name for ApplicableProducts.
   */
  static override _entityName = 'ApplicableProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicableProducts entity.
   */
  static _keys = ['WarrantyGroupName', 'Status', 'LineIdentifier'];
  /**
   * Warranty Group Name.
   */
  declare warrantyGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: WarrantyGroupStatusType | null;
  /**
   * Line Identifier.
   */
  declare lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Applicability.
   * @nullable
   */
  declare applicability?: WarrantyApplicabilityYesNo | null;
  /**
   * Category Hierarchy.
   * @nullable
   */
  declare categoryHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variant Product Number.
   * @nullable
   */
  declare variantProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicableProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicableProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  warrantyGroupName: DeserializedType<T, 'Edm.String'>;
  status?: WarrantyGroupStatusType | null;
  lineIdentifier: DeserializedType<T, 'Edm.Decimal'>;
  applicability?: WarrantyApplicabilityYesNo | null;
  categoryHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  variantProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
}
