/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetInventIssueQuotas } from './RAssetInventIssueQuotas';
import { RAssetInventIssueQuotasRequestBuilder } from './RAssetInventIssueQuotasRequestBuilder';
import { RAssetTableAll } from './RAssetTableAll';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RAssetInventIssueQuotasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetInventIssueQuotas<DeSerializersT>, DeSerializersT>
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
  ): RAssetInventIssueQuotasApi<DeSerializersT> {
    return new RAssetInventIssueQuotasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetInventIssueQuotas;

  requestBuilder(): RAssetInventIssueQuotasRequestBuilder<DeSerializersT> {
    return new RAssetInventIssueQuotasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetInventIssueQuotas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RAssetInventIssueQuotas<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RAssetInventIssueQuotas<DeSerializersT>,
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
    typeof RAssetInventIssueQuotas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetInventIssueQuotas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_OF_RATE: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_GROUP: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE_RELATION_TYPE: EnumField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      RAssetTableAll,
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_OF_WORKS_RELATION_TYPE: EnumField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      RAssetTableAll,
      true,
      true
    >;
    TYPE_OF_WORKS: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPARTMENT_RELATION_TYPE: EnumField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      RAssetTableAll,
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFETIME: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      RAssetInventIssueQuotas<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RAssetInventIssueQuotas<DeSerializers>>;
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
         * Static representation of the {@link typeOfRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_RATE: fieldBuilder.buildEdmTypeField(
          'TypeOfRate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link item} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM: fieldBuilder.buildEdmTypeField('Item', 'Edm.String', false),
        /**
         * Static representation of the {@link titleRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_RELATION_TYPE: fieldBuilder.buildEnumField(
          'TitleRelationType',
          RAssetTableAll,
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', false),
        /**
         * Static representation of the {@link typeOfWorksRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_WORKS_RELATION_TYPE: fieldBuilder.buildEnumField(
          'TypeOfWorksRelationType',
          RAssetTableAll,
          true
        ),
        /**
         * Static representation of the {@link typeOfWorks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_WORKS: fieldBuilder.buildEdmTypeField(
          'TypeOfWorks',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link departmentRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_RELATION_TYPE: fieldBuilder.buildEnumField(
          'DepartmentRelationType',
          RAssetTableAll,
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lifetime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFETIME: fieldBuilder.buildEdmTypeField(
          'Lifetime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetInventIssueQuotas)
      };
    }

    return this._schema;
  }
}
