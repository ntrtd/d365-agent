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
import type { RetailCatalogInternalOrganizationProductAttributeValuesApi } from './RetailCatalogInternalOrganizationProductAttributeValuesApi';
import { NoYes } from './NoYes';
import {
  RetailCatalogInternalOrganizations,
  RetailCatalogInternalOrganizationsType
} from './RetailCatalogInternalOrganizations';
import {
  RetailCatalogProducts,
  RetailCatalogProductsType
} from './RetailCatalogProducts';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';

/**
 * This class represents the entity "RetailCatalogInternalOrganizationProductAttributeValues" of service "d365_metadata".
 */
export class RetailCatalogInternalOrganizationProductAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogInternalOrganizationProductAttributeValuesType<T>
{
  /**
   * Technical entity name for RetailCatalogInternalOrganizationProductAttributeValues.
   */
  static override _entityName =
    'RetailCatalogInternalOrganizationProductAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogInternalOrganizationProductAttributeValues entity.
   */
  static _keys = [
    'CatalogNumber',
    'PartyNumber',
    'DisplayProductNumber',
    'AttributeGroupName',
    'AttributeName',
    'AttributeTypeName'
  ];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Name.
   */
  declare attributeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
  /**
   * Currency Value.
   */
  declare currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text Value.
   * @nullable
   */
  declare textValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogInternalOrganizations} entity.
   */
  declare retailCatalogInternalOrganization?: RetailCatalogInternalOrganizations<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogProducts} entity.
   */
  declare retailCatalogProduct?: RetailCatalogProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;

  constructor(
    _entityApi: RetailCatalogInternalOrganizationProductAttributeValuesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailCatalogInternalOrganizationProductAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  attributeGroupName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  booleanValue?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  retailCatalogInternalOrganization?: RetailCatalogInternalOrganizationsType<T> | null;
  retailCatalogProduct?: RetailCatalogProductsType<T> | null;
  retailCatalog?: RetailCatalogsType<T> | null;
}
