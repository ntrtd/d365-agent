/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEcoResCategory } from './RetailEcoResCategory';
import { RetailEcoResCategoryRequestBuilder } from './RetailEcoResCategoryRequestBuilder';
import { RetailProductHierarchyCategoriesApi } from './RetailProductHierarchyCategoriesApi';
import { NoYes } from './NoYes';
import { EcoResCategoryChangeStatus } from './EcoResCategoryChangeStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailEcoResCategoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailEcoResCategory<DeSerializersT>, DeSerializersT>
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
  ): RetailEcoResCategoryApi<DeSerializersT> {
    return new RetailEcoResCategoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailProductHierarchyCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PRODUCT_HIERARCHY_CATEGORY: OneToOneLink<
      RetailEcoResCategory<DeSerializersT>,
      DeSerializersT,
      RetailProductHierarchyCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailProductHierarchyCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_PRODUCT_HIERARCHY_CATEGORY: new OneToOneLink(
        'RetailProductHierarchyCategory',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailEcoResCategory;

  requestBuilder(): RetailEcoResCategoryRequestBuilder<DeSerializersT> {
    return new RetailEcoResCategoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailEcoResCategory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailEcoResCategory<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEcoResCategory<DeSerializersT>,
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
    typeof RetailEcoResCategory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEcoResCategory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ECO_RES_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ECO_RES_CATEGORY_1_NAME: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NESTED_SET_RIGHT: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CATEGORY_HIERARCHY: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_THRESHOLD_PSN: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NESTED_SET_LEFT: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_TANGIBLE: EnumField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_CATEGORY: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CATEGORY_ATTRIBUTES_INHERITED: EnumField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHARED_CATEGORY_CATEGORY_ID: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AX_REC_ID: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANGE_STATUS: EnumField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      EcoResCategoryChangeStatus,
      true,
      true
    >;
    PK_WI_U_CODE: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECO_RES_CATEGORY_HIERARCHY_1_NAME: OrderableEdmTypeField<
      RetailEcoResCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailProductHierarchyCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PRODUCT_HIERARCHY_CATEGORY: OneToOneLink<
      RetailEcoResCategory<DeSerializersT>,
      DeSerializersT,
      RetailProductHierarchyCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailEcoResCategory<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link ecoResCategory1Name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_1_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategory1_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nestedSetRight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NESTED_SET_RIGHT: fieldBuilder.buildEdmTypeField(
          'NestedSetRight',
          'Edm.Int64',
          false
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
         * Static representation of the {@link defaultThresholdPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_THRESHOLD_PSN: fieldBuilder.buildEdmTypeField(
          'DefaultThreshold_PSN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nestedSetLeft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NESTED_SET_LEFT: fieldBuilder.buildEdmTypeField(
          'NestedSetLeft',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isTangible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TANGIBLE: fieldBuilder.buildEnumField('IsTangible', NoYes, true),
        /**
         * Static representation of the {@link parentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ParentCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link isCategoryAttributesInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_ATTRIBUTES_INHERITED: fieldBuilder.buildEnumField(
          'IsCategoryAttributesInherited',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sharedCategoryCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_CATEGORY_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SharedCategory_CategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link axRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AX_REC_ID: fieldBuilder.buildEdmTypeField(
          'AxRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.Int64', false),
        /**
         * Static representation of the {@link changeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_STATUS: fieldBuilder.buildEnumField(
          'ChangeStatus',
          EcoResCategoryChangeStatus,
          true
        ),
        /**
         * Static representation of the {@link pkWiUCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE: fieldBuilder.buildEdmTypeField(
          'PKWiUCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ecoResCategoryHierarchy1Name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECO_RES_CATEGORY_HIERARCHY_1_NAME: fieldBuilder.buildEdmTypeField(
          'EcoResCategoryHierarchy1_Name',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEcoResCategory)
      };
    }

    return this._schema;
  }
}
