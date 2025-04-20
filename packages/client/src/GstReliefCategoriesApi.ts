/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GstReliefCategories } from './GstReliefCategories';
import { GstReliefCategoriesRequestBuilder } from './GstReliefCategoriesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class GstReliefCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GstReliefCategories<DeSerializersT>, DeSerializersT>
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
  ): GstReliefCategoriesApi<DeSerializersT> {
    return new GstReliefCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      GstReliefCategories<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GstReliefCategories;

  requestBuilder(): GstReliefCategoriesRequestBuilder<DeSerializersT> {
    return new GstReliefCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GstReliefCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GstReliefCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GstReliefCategories<DeSerializersT>,
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
    typeof GstReliefCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GstReliefCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GstReliefCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELIEF_CATEGORY_ENTITY_KEY: OrderableEdmTypeField<
      GstReliefCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    RELIEF_SCHEDULE: OrderableEdmTypeField<
      GstReliefCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEF_CATEGORY_ID: OrderableEdmTypeField<
      GstReliefCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELIEF_ITEM_NUMBER: OrderableEdmTypeField<
      GstReliefCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      GstReliefCategories<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GstReliefCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reliefCategoryEntityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_CATEGORY_ENTITY_KEY: fieldBuilder.buildEdmTypeField(
          'ReliefCategoryEntityKey',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link reliefSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'ReliefSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reliefCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ReliefCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reliefItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELIEF_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReliefItemNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GstReliefCategories)
      };
    }

    return this._schema;
  }
}
