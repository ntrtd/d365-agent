/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiotDeclarationConcepts } from './DiotDeclarationConcepts';
import { DiotDeclarationConceptsRequestBuilder } from './DiotDeclarationConceptsRequestBuilder';
import { DiotColumnTypeMx } from './DiotColumnTypeMx';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DiotDeclarationConceptsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DiotDeclarationConcepts<DeSerializersT>, DeSerializersT>
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
  ): DiotDeclarationConceptsApi<DeSerializersT> {
    return new DiotDeclarationConceptsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiotDeclarationConcepts;

  requestBuilder(): DiotDeclarationConceptsRequestBuilder<DeSerializersT> {
    return new DiotDeclarationConceptsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiotDeclarationConcepts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiotDeclarationConcepts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiotDeclarationConcepts<DeSerializersT>,
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
    typeof DiotDeclarationConcepts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiotDeclarationConcepts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCEPT_ID: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_NAME: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NONDEDUCTIBLEAMOUNT: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_TYPE: EnumField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      DiotColumnTypeMx,
      true,
      true
    >;
    NONDEDUCTIBLE: EnumField<
      DiotDeclarationConcepts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DiotDeclarationConcepts<DeSerializers>>;
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
         * Static representation of the {@link conceptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_ID: fieldBuilder.buildEdmTypeField(
          'ConceptId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_NAME: fieldBuilder.buildEdmTypeField('TaxName', 'Edm.String', true),
        /**
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nondeductibleamount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONDEDUCTIBLEAMOUNT: fieldBuilder.buildEdmTypeField(
          'Nondeductibleamount',
          'Edm.Decimal',
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
         * Static representation of the {@link columnType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_TYPE: fieldBuilder.buildEnumField(
          'ColumnType',
          DiotColumnTypeMx,
          true
        ),
        /**
         * Static representation of the {@link nondeductible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONDEDUCTIBLE: fieldBuilder.buildEnumField(
          'Nondeductible',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiotDeclarationConcepts)
      };
    }

    return this._schema;
  }
}
