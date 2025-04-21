/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmTaxPayerDocTypes } from './LtmTaxPayerDocTypes';
import { LtmTaxPayerDocTypesRequestBuilder } from './LtmTaxPayerDocTypesRequestBuilder';
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
export class LtmTaxPayerDocTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmTaxPayerDocTypes<DeSerializersT>, DeSerializersT>
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
  ): LtmTaxPayerDocTypesApi<DeSerializersT> {
    return new LtmTaxPayerDocTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmTaxPayerDocTypes;

  requestBuilder(): LtmTaxPayerDocTypesRequestBuilder<DeSerializersT> {
    return new LtmTaxPayerDocTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmTaxPayerDocTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmTaxPayerDocTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmTaxPayerDocTypes<DeSerializersT>,
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
    typeof LtmTaxPayerDocTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmTaxPayerDocTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmTaxPayerDocTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmTaxPayerDocTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_TYPE_ID: OrderableEdmTypeField<
      LtmTaxPayerDocTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LtmTaxPayerDocTypes<DeSerializers>>;
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
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link docTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DocTypeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmTaxPayerDocTypes)
      };
    }

    return this._schema;
  }
}
