/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEcoResProduct } from './RetailEcoResProduct';
import { RetailEcoResProductRequestBuilder } from './RetailEcoResProductRequestBuilder';
import { EcoResProductType } from './EcoResProductType';
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
export class RetailEcoResProductApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailEcoResProduct<DeSerializersT>, DeSerializersT>
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
  ): RetailEcoResProductApi<DeSerializersT> {
    return new RetailEcoResProductApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEcoResProduct;

  requestBuilder(): RetailEcoResProductRequestBuilder<DeSerializersT> {
    return new RetailEcoResProductRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailEcoResProduct<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailEcoResProduct<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEcoResProduct<DeSerializersT>,
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
    typeof RetailEcoResProduct,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEcoResProduct,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailEcoResProduct<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: EnumField<
      RetailEcoResProduct<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailEcoResProduct<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      RetailEcoResProduct<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_PRODUCT: EnumField<
      RetailEcoResProduct<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailEcoResProduct<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
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
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_PRODUCT: fieldBuilder.buildEnumField(
          'PdsCWProduct',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEcoResProduct)
      };
    }

    return this._schema;
  }
}
