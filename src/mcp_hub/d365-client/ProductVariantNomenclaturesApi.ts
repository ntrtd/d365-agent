/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductVariantNomenclatures } from './ProductVariantNomenclatures';
import { ProductVariantNomenclaturesRequestBuilder } from './ProductVariantNomenclaturesRequestBuilder';
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
export class ProductVariantNomenclaturesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductVariantNomenclatures<DeSerializersT>, DeSerializersT>
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
  ): ProductVariantNomenclaturesApi<DeSerializersT> {
    return new ProductVariantNomenclaturesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductVariantNomenclatures;

  requestBuilder(): ProductVariantNomenclaturesRequestBuilder<DeSerializersT> {
    return new ProductVariantNomenclaturesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductVariantNomenclatures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductVariantNomenclatures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductVariantNomenclatures<DeSerializersT>,
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
    typeof ProductVariantNomenclatures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductVariantNomenclatures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NOMENCLATURE_NAME: OrderableEdmTypeField<
      ProductVariantNomenclatures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOMENCLATURE_DESCRIPTION: OrderableEdmTypeField<
      ProductVariantNomenclatures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductVariantNomenclatures<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link nomenclatureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOMENCLATURE_NAME: fieldBuilder.buildEdmTypeField(
          'NomenclatureName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nomenclatureDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOMENCLATURE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'NomenclatureDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductVariantNomenclatures)
      };
    }

    return this._schema;
  }
}
