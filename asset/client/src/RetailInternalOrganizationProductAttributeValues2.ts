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
import type { RetailInternalOrganizationProductAttributeValues2Api } from './RetailInternalOrganizationProductAttributeValues2Api';
import { NoYes } from './NoYes';
import { Currencies, CurrenciesType } from './Currencies';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  RetailInternalOrganizationProducts,
  RetailInternalOrganizationProductsType
} from './RetailInternalOrganizationProducts';
import {
  RetailInternalOrganizations,
  RetailInternalOrganizationsType
} from './RetailInternalOrganizations';

/**
 * This class represents the entity "RetailInternalOrganizationProductAttributeValues2" of service "d365_metadata".
 */
export class RetailInternalOrganizationProductAttributeValues2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInternalOrganizationProductAttributeValues2Type<T>
{
  /**
   * Technical entity name for RetailInternalOrganizationProductAttributeValues2.
   */
  static override _entityName =
    'RetailInternalOrganizationProductAttributeValues2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInternalOrganizationProductAttributeValues2 entity.
   */
  static _keys = [
    'InternalOrganizationPartyNumber',
    'DisplayProductNumber',
    'AttributeTypeName',
    'AttributeName'
  ];
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
   * Decimal Unit Of Measure Symbol.
   * @nullable
   */
  declare decimalUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
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
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Integer Unit Of Measure Symbol.
   * @nullable
   */
  declare integerUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare integerUnitOfMeasureEntity?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailInternalOrganizationProducts} entity.
   */
  declare retailInternalOrganizationProduct?: RetailInternalOrganizationProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailInternalOrganizations} entity.
   */
  declare retailInternalOrganization?: RetailInternalOrganizations<T> | null;

  constructor(
    _entityApi: RetailInternalOrganizationProductAttributeValues2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailInternalOrganizationProductAttributeValues2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  displayProductNumber: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  decimalUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  booleanValue?: NoYes | null;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  integerUnitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  currency?: CurrenciesType<T> | null;
  integerUnitOfMeasureEntity?: UnitsOfMeasureType<T> | null;
  retailInternalOrganizationProduct?: RetailInternalOrganizationProductsType<T> | null;
  retailInternalOrganization?: RetailInternalOrganizationsType<T> | null;
}
