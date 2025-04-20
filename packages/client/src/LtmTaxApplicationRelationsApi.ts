/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmTaxApplicationRelations } from './LtmTaxApplicationRelations';
import { LtmTaxApplicationRelationsRequestBuilder } from './LtmTaxApplicationRelationsRequestBuilder';
import { LtmTaxEntityType } from './LtmTaxEntityType';
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
export class LtmTaxApplicationRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmTaxApplicationRelations<DeSerializersT>, DeSerializersT>
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
  ): LtmTaxApplicationRelationsApi<DeSerializersT> {
    return new LtmTaxApplicationRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmTaxApplicationRelations;

  requestBuilder(): LtmTaxApplicationRelationsRequestBuilder<DeSerializersT> {
    return new LtmTaxApplicationRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmTaxApplicationRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmTaxApplicationRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmTaxApplicationRelations<DeSerializersT>,
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
    typeof LtmTaxApplicationRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmTaxApplicationRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_APPLICATION_ID: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_ENTITY_TYPE: EnumField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      LtmTaxEntityType,
      true,
      true
    >;
    TAX_ENTITY_ID: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_DEF_USER_1: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DEF_USER_2: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DEF_USER_3: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_APPLICATION_CODE: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DEF_USER_4: OrderableEdmTypeField<
      LtmTaxApplicationRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmTaxApplicationRelations<DeSerializers>>;
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
         * Static representation of the {@link taxApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxApplicationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ENTITY_TYPE: fieldBuilder.buildEnumField(
          'TaxEntityType',
          LtmTaxEntityType,
          true
        ),
        /**
         * Static representation of the {@link taxEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'TaxEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxDefUser1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEF_USER_1: fieldBuilder.buildEdmTypeField(
          'TaxDefUser1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDefUser2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEF_USER_2: fieldBuilder.buildEdmTypeField(
          'TaxDefUser2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDefUser3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEF_USER_3: fieldBuilder.buildEdmTypeField(
          'TaxDefUser3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxApplicationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_APPLICATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxApplicationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDefUser4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEF_USER_4: fieldBuilder.buildEdmTypeField(
          'TaxDefUser4',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmTaxApplicationRelations)
      };
    }

    return this._schema;
  }
}
