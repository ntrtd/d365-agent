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
import type { RetailInternalOrganizationProductAttributeValuesApi } from './RetailInternalOrganizationProductAttributeValuesApi';
import { NoYes } from './NoYes';
import { AttributeGroups, AttributeGroupsType } from './AttributeGroups';
import {
  RetailInternalOrganizations,
  RetailInternalOrganizationsType
} from './RetailInternalOrganizations';

/**
 * This class represents the entity "RetailInternalOrganizationProductAttributeValues" of service "d365_metadata".
 */
export class RetailInternalOrganizationProductAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInternalOrganizationProductAttributeValuesType<T>
{
  /**
   * Technical entity name for RetailInternalOrganizationProductAttributeValues.
   */
  static override _entityName =
    'RetailInternalOrganizationProductAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInternalOrganizationProductAttributeValues entity.
   */
  static _keys = [
    'PartyNumber',
    'DisplayProductNumber',
    'AttributeGroupName',
    'AttributeName',
    'AttributeTypeName'
  ];
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
   * One-to-one navigation property to the {@link AttributeGroups} entity.
   */
  declare attributeGroup?: AttributeGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailInternalOrganizations} entity.
   */
  declare retailInternalOrganization?: RetailInternalOrganizations<T> | null;

  constructor(
    _entityApi: RetailInternalOrganizationProductAttributeValuesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailInternalOrganizationProductAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
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
  attributeGroup?: AttributeGroupsType<T> | null;
  retailInternalOrganization?: RetailInternalOrganizationsType<T> | null;
}
