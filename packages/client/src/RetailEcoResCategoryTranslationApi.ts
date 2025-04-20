/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEcoResCategoryTranslation } from './RetailEcoResCategoryTranslation';
import { RetailEcoResCategoryTranslationRequestBuilder } from './RetailEcoResCategoryTranslationRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailEcoResCategoryTranslationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEcoResCategoryTranslation<DeSerializersT>, DeSerializersT>
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
  ): RetailEcoResCategoryTranslationApi<DeSerializersT> {
    return new RetailEcoResCategoryTranslationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEcoResCategoryTranslation;

  requestBuilder(): RetailEcoResCategoryTranslationRequestBuilder<DeSerializersT> {
    return new RetailEcoResCategoryTranslationRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEcoResCategoryTranslation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEcoResCategoryTranslation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEcoResCategoryTranslation<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailEcoResCategoryTranslation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEcoResCategoryTranslation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ECO_RES_CATEGORY_NAME: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ECO_RES_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEARCH_TEXT: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRIENDLY_NAME: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      RetailEcoResCategoryTranslation<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailEcoResCategoryTranslation<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ecoResCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategory_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ecoResCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategoryHierarchy_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link searchText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_TEXT: fieldBuilder.buildEdmTypeField(
          'SearchText',
          'Edm.String',
          true
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
         * Static representation of the {@link friendlyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEcoResCategoryTranslation)
      };
    }

    return this._schema;
  }
}
