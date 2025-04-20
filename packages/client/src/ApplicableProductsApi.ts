/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicableProducts } from './ApplicableProducts';
import { ApplicableProductsRequestBuilder } from './ApplicableProductsRequestBuilder';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';
import { WarrantyApplicabilityYesNo } from './WarrantyApplicabilityYesNo';
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
export class ApplicableProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicableProducts<DeSerializersT>, DeSerializersT>
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
  ): ApplicableProductsApi<DeSerializersT> {
    return new ApplicableProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicableProducts;

  requestBuilder(): ApplicableProductsRequestBuilder<DeSerializersT> {
    return new ApplicableProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicableProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicableProducts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApplicableProducts<DeSerializersT>,
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
    typeof ApplicableProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicableProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WARRANTY_GROUP_NAME: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      WarrantyGroupStatusType,
      true,
      true
    >;
    LINE_IDENTIFIER: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPLICABILITY: EnumField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      WarrantyApplicabilityYesNo,
      true,
      true
    >;
    CATEGORY_HIERARCHY: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_PRODUCT_NUMBER: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ApplicableProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicableProducts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link warrantyGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'WarrantyGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          WarrantyGroupStatusType,
          true
        ),
        /**
         * Static representation of the {@link lineIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'LineIdentifier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link applicability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICABILITY: fieldBuilder.buildEnumField(
          'Applicability',
          WarrantyApplicabilityYesNo,
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VariantProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApplicableProducts)
      };
    }

    return this._schema;
  }
}
