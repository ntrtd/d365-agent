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
import type { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
import { NoYes } from './NoYes';
import { Currencies, CurrenciesType } from './Currencies';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';
import {
  RetailCatalogInternalOrganizations,
  RetailCatalogInternalOrganizationsType
} from './RetailCatalogInternalOrganizations';
import {
  RetailCatalogProducts,
  RetailCatalogProductsType
} from './RetailCatalogProducts';
import {
  RetailInternalOrganizations,
  RetailInternalOrganizationsType
} from './RetailInternalOrganizations';

/**
 * This class represents the entity "RetailCatalogInternalOrganizationProductAttributeValues2" of service "d365_metadata".
 */
export class RetailCatalogInternalOrganizationProductAttributeValues2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogInternalOrganizationProductAttributeValues2Type<T>
{
  /**
   * Technical entity name for RetailCatalogInternalOrganizationProductAttributeValues2.
   */
  static override _entityName =
    'RetailCatalogInternalOrganizationProductAttributeValues2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogInternalOrganizationProductAttributeValues2 entity.
   */
  static _keys = [
    'CatalogNumber',
    'InternalOrganizationPartyNumber',
    'DisplayProductNumber',
    'AttributeTypeName',
    'AttributeName'
  ];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Organization Party Number.
   */
  declare internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Product Number.
   */
  declare displayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Decimal Unit Of Measure Symbol.
   * @nullable
   */
  declare decimalUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Integer Unit Of Measure Symbol.
   * @nullable
   */
  declare integerUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare integerUnitOfMeasureEntity?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogInternalOrganizations} entity.
   */
  declare retailCatalogInternalOrganization?: RetailCatalogInternalOrganizations<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogProducts} entity.
   */
  declare retailCatalogProduct?: RetailCatalogProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailInternalOrganizations} entity.
   */
  declare retailInternalOrganization?: RetailInternalOrganizations<T> | null;

  constructor(
    _entityApi: RetailCatalogInternalOrganizationProductAttributeValues2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailCatalogInternalOrganizationProductAttributeValues2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  decimalUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  integerUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  booleanValue?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  currency?: CurrenciesType<T> | null;
  integerUnitOfMeasureEntity?: UnitsOfMeasureType<T> | null;
  retailCatalog?: RetailCatalogsType<T> | null;
  retailCatalogInternalOrganization?: RetailCatalogInternalOrganizationsType<T> | null;
  retailCatalogProduct?: RetailCatalogProductsType<T> | null;
  retailInternalOrganization?: RetailInternalOrganizationsType<T> | null;
}
