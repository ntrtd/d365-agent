/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogs } from './RetailCatalogs';
import { RetailCatalogsRequestBuilder } from './RetailCatalogsRequestBuilder';
import { RetailCatalogProductAttributeValuesApi } from './RetailCatalogProductAttributeValuesApi';
import { RetailCatalogInternalOrganizationsApi } from './RetailCatalogInternalOrganizationsApi';
import { RetailCatalogProductsApi } from './RetailCatalogProductsApi';
import { RetailCatalogPriceGroupsApi } from './RetailCatalogPriceGroupsApi';
import { RetailCatalogTranslationsApi } from './RetailCatalogTranslationsApi';
import { RetailCatalogInternalOrganizationProductAttributeValuesApi } from './RetailCatalogInternalOrganizationProductAttributeValuesApi';
import { PeopleApi } from './PeopleApi';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
import { CallCenterCatalogCouponsApi } from './CallCenterCatalogCouponsApi';
import { CatalogState } from './CatalogState';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailCatalogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailCatalogs<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RetailCatalogsApi<DeSerializersT> {
    return new RetailCatalogsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRICE_GROUP: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_TRANSLATION: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link callCenterCatalogCoupon} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALL_CENTER_CATALOG_COUPON: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      CallCenterCatalogCouponsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogProductAttributeValuesApi<DeSerializersT>,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>,
      RetailCatalogProductsApi<DeSerializersT>,
      RetailCatalogPriceGroupsApi<DeSerializersT>,
      RetailCatalogTranslationsApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      CallCenterCatalogCouponsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: new OneToManyLink(
        'RetailCatalogProductAttributeValue',
        this,
        linkedApis[0]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION: new OneToManyLink(
        'RetailCatalogInternalOrganization',
        this,
        linkedApis[1]
      ),
      RETAIL_CATALOG_PRODUCT: new OneToManyLink(
        'RetailCatalogProduct',
        this,
        linkedApis[2]
      ),
      RETAIL_CATALOG_PRICE_GROUP: new OneToManyLink(
        'RetailCatalogPriceGroup',
        this,
        linkedApis[3]
      ),
      RETAIL_CATALOG_TRANSLATION: new OneToManyLink(
        'RetailCatalogTranslation',
        this,
        linkedApis[4]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue',
          this,
          linkedApis[5]
        ),
      PERSON: new OneToOneLink('Person', this, linkedApis[6]),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[7]
        ),
      CALL_CENTER_CATALOG_COUPON: new OneToManyLink(
        'CallCenterCatalogCoupon',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = RetailCatalogs;

  requestBuilder(): RetailCatalogsRequestBuilder<DeSerializersT> {
    return new RetailCatalogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailCatalogs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailCatalogs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailCatalogs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailCatalogs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FRIENDLY_NAME: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM_DATE_TIME: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PUBLISHED_EXPIRATION_DATE: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_PUBLISHED_DATE_TIME: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PUBLISHED_EFFECTIVE_DATE: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      CatalogState,
      true,
      true
    >;
    IS_SNAPSHOT_ENABLED: EnumField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OWNER_PARTY_NUMBER: OrderableEdmTypeField<
      RetailCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRICE_GROUP: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_TRANSLATION: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link callCenterCatalogCoupon} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALL_CENTER_CATALOG_COUPON: OneToManyLink<
      RetailCatalogs<DeSerializersT>,
      DeSerializersT,
      CallCenterCatalogCouponsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCatalogs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link friendlyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validFromDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ValidFromDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link publishedExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'PublishedExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lastPublishedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PUBLISHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastPublishedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link publishedEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'PublishedEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', CatalogState, true),
        /**
         * Static representation of the {@link isSnapshotEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SNAPSHOT_ENABLED: fieldBuilder.buildEnumField(
          'IsSnapshotEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ownerPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwnerPartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCatalogs)
      };
    }

    return this._schema;
  }
}
