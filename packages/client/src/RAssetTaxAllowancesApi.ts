/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetTaxAllowances } from './RAssetTaxAllowances';
import { RAssetTaxAllowancesRequestBuilder } from './RAssetTaxAllowancesRequestBuilder';
import { RAssetTaxAllowanceType } from './RAssetTaxAllowanceType';
import { RAssetTaxType } from './RAssetTaxType';
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
export class RAssetTaxAllowancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetTaxAllowances<DeSerializersT>, DeSerializersT>
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
  ): RAssetTaxAllowancesApi<DeSerializersT> {
    return new RAssetTaxAllowancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetTaxAllowances;

  requestBuilder(): RAssetTaxAllowancesRequestBuilder<DeSerializersT> {
    return new RAssetTaxAllowancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetTaxAllowances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetTaxAllowances<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RAssetTaxAllowances<DeSerializersT>,
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
    typeof RAssetTaxAllowances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetTaxAllowances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIVILEGE: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWANCE_VALUE: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLAUSE: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_TYPE: EnumField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      RAssetTaxAllowanceType,
      true,
      true
    >;
    TYPE_OF_TAX: EnumField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      RAssetTaxType,
      true,
      true
    >;
    ARTICLE_NUMBER: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTICLE_SUB_CLAUSE: OrderableEdmTypeField<
      RAssetTaxAllowances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RAssetTaxAllowances<DeSerializers>>;
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
         * Static representation of the {@link privilege} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVILEGE: fieldBuilder.buildEdmTypeField(
          'Privilege',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowanceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWANCE_VALUE: fieldBuilder.buildEdmTypeField(
          'AllowanceValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link clause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAUSE: fieldBuilder.buildEdmTypeField('Clause', 'Edm.String', true),
        /**
         * Static representation of the {@link benefitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_TYPE: fieldBuilder.buildEnumField(
          'BenefitType',
          RAssetTaxAllowanceType,
          true
        ),
        /**
         * Static representation of the {@link typeOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_TAX: fieldBuilder.buildEnumField(
          'TypeOfTax',
          RAssetTaxType,
          true
        ),
        /**
         * Static representation of the {@link articleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ArticleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link articleSubClause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_SUB_CLAUSE: fieldBuilder.buildEdmTypeField(
          'ArticleSubClause',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetTaxAllowances)
      };
    }

    return this._schema;
  }
}
